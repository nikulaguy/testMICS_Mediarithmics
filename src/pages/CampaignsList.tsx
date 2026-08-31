import { useEffect, useMemo, useRef, useState } from 'react';
import type { ColumnsType } from 'antd/es/table';
import {
  Button,
  DropdownCheckboxItem,
  Icon,
  LabelPicker,
  Link,
  ListTemplate,
  Pagination,
  PeriodFilter,
  Select,
  StatusBadge,
  Table,
  panelSurface,
  type ActiveFilter,
} from '../ui';
import {
  CAMPAIGNS,
  CAMPAIGN_LABELS,
  CAMPAIGN_METRIC_COLUMNS,
  CAMPAIGN_PERIODS,
  CAMPAIGN_STATUS_ALL,
  CAMPAIGN_STATUS_TONE,
  CAMPAIGN_STATUSES,
  applyCampaignFilters,
  type Campaign,
} from '../data/campaigns';
import { scale, semantic } from '../theme/micsTheme';

/*
  Campaigns — Liste (Figma 611:2, filtre ouvert 612:344).

  Écran du MODÈLE EXPOSÉ : trois dimensions seulement (label, période, statut),
  donc un sélecteur par dimension dans la barre d'outils plutôt qu'un bouton
  « Filters » unique. La règle est dans la doc du FilterPanel : au-delà de trois
  dimensions on bascule sur le panneau, en deçà on expose.

  Les métriques valent toutes « - » : c'est ce que rend la maquette, relevée sur
  une organisation dont les campagnes n'ont jamais diffusé.
*/

const PAGE_SIZE = 10;

/**
 * Filtre par label : un bouton qui se remplace par son champ de recherche.
 *
 * Le déclencheur disparaît au profit du champ, à la même place et à la même
 * largeur que la liste qu'il ouvre. C'est ce que fait la maquette, et c'est ce qui
 * distingue ce motif d'un menu déroulant : on ne survole pas une liste figée, on
 * cherche dans un ensemble que l'utilisateur a lui-même créé.
 */
function LabelFilter({
  selected,
  onAdd,
}: {
  selected: string[];
  onAdd: (label: string) => void;
}) {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <Button icon={<Icon name="plus" size={14} />} onClick={() => setOpen(true)} aria-haspopup="listbox">
        Filter by Label
      </Button>
    );
  }

  return (
    <LabelPicker
      // Les labels déjà retenus sortent de la liste : les reproposer laisserait
      // croire qu'on peut cumuler deux fois le même filtre.
      options={CAMPAIGN_LABELS.filter((l) => !selected.includes(l))}
      onSelect={(label) => {
        onAdd(label);
        setOpen(false);
      }}
      onCancel={() => setOpen(false)}
      width={220}
      placeholder="Search a label"
      ariaLabel="Search a label"
      // Loupe à droite : c'est ce que porte la maquette Campaigns. L'ajout de
      // label sur un segment la met à gauche — divergence à arbitrer.
      iconSide="right"
    />
  );
}

export function CampaignsList() {
  const [search, setSearch] = useState('');
  const [labels, setLabels] = useState<string[]>([]);
  const [period, setPeriod] = useState<string>('Last 30 days');
  const [status, setStatus] = useState<string>(CAMPAIGN_STATUS_ALL);
  const [page, setPage] = useState(1);
  const [viewOpen, setViewOpen] = useState(false);
  const [visibleMetrics, setVisibleMetrics] = useState<string[]>(
    CAMPAIGN_METRIC_COLUMNS.map((c) => c.key),
  );
  const viewRef = useRef<HTMLDivElement>(null);

  // Fermeture du menu des colonnes au clic extérieur et à Échap.
  useEffect(() => {
    if (!viewOpen) return;
    const onDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (viewRef.current && !viewRef.current.contains(target)) setViewOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setViewOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [viewOpen]);

  const rows = useMemo(
    () => applyCampaignFilters(CAMPAIGNS, { search, labels, status }),
    [search, labels, status],
  );

  /*
    Chips de rappel. La période et le statut se lisent dans leur sélecteur, donc
    n'en ont pas besoin. Le label, lui, redevient invisible dès que le champ
    repasse en bouton : sans chip, un filtre actif ne serait plus signalé nulle
    part. C'est exactement le cas prévu par la règle « barre de chips seulement si
    un filtre actif n'est pas lisible dans la barre ».
  */
  const activeFilters: ActiveFilter[] = labels.map((l) => ({ key: `label:${l}`, label: `Label : ${l}` }));

  const addLabel = (label: string) => {
    setLabels((prev) => (prev.includes(label) ? prev : [...prev, label]));
    setPage(1);
  };

  const columns: ColumnsType<Campaign> = [
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 96,
      render: (value: Campaign['status']) => (
        <StatusBadge tone={CAMPAIGN_STATUS_TONE[value]} label={value} />
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (value: string) => <Link href="#">{value}</Link>,
    },
    // Les six métriques partagent le même rendu : « - » quand la campagne n'a pas
    // diffusé, plutôt qu'un zéro qui se lirait comme une mesure.
    ...CAMPAIGN_METRIC_COLUMNS.filter((c) => visibleMetrics.includes(c.key)).map((c) => ({
      title: c.label,
      dataIndex: c.key,
      key: c.key,
      width: 110,
      sorter: true,
      render: (value: number | null) => (value === null ? '-' : value.toLocaleString('en-US')),
    })),
    {
      title: '',
      key: 'actions',
      width: 56,
      render: () => <Icon name="dots" size={14} color={semantic.textLighter} />,
    },
  ];

  const paged = rows.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <ListTemplate
      search={search}
      onSearchChange={(v) => {
        setSearch(v);
        setPage(1);
      }}
      searchPlaceholder="Search Display Campaigns"
      activeFilters={activeFilters}
      onRemoveFilter={(key) => {
        setLabels((prev) => prev.filter((l) => `label:${l}` !== key));
        setPage(1);
      }}
      onClearFilters={() => {
        setLabels([]);
        setPage(1);
      }}
      pagination={
        <Pagination current={page} total={rows.length} pageSize={PAGE_SIZE} onChange={setPage} />
      }
      actions={
        <>
            <LabelFilter selected={labels} onAdd={addLabel} />
            <PeriodFilter value={period} presets={CAMPAIGN_PERIODS} onChange={setPeriod} />
            <Select
              width={140}
              value={status}
              onChange={(v) => {
                setStatus(v || CAMPAIGN_STATUS_ALL);
                setPage(1);
              }}
              options={[CAMPAIGN_STATUS_ALL, ...CAMPAIGN_STATUSES].map((v) => ({
                value: v,
                label: v,
              }))}
              aria-label="Status"
            />
          <div ref={viewRef} style={{ position: 'relative' }}>
              <Button
                icon={<Icon name="view" size={14} />}
                onClick={() => setViewOpen((v) => !v)}
                aria-haspopup="true"
                aria-expanded={viewOpen}
              >
                Edit view
              </Button>
              {viewOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 4px)',
                    right: 0,
                    zIndex: scale.zDropdown,
                    width: 200,
                    ...panelSurface,
                    padding: `${scale.space8}px 0`,
                  }}
                >
                  {CAMPAIGN_METRIC_COLUMNS.map((c) => (
                    <DropdownCheckboxItem
                      key={c.key}
                      label={c.label}
                      checked={visibleMetrics.includes(c.key)}
                      onToggle={() =>
                        setVisibleMetrics((prev) =>
                          prev.includes(c.key) ? prev.filter((k) => k !== c.key) : [...prev, c.key],
                        )
                      }
                    />
                  ))}
                </div>
              )}
            </div>
        </>
      }
    >
      <Table
        rowKey="id"
        columns={columns}
        dataSource={paged}
        pagination={false}
        rowSelection={{ type: 'checkbox' }}
        size="middle"
      />
    </ListTemplate>
  );
}
