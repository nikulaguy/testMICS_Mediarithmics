import { useEffect, useMemo, useRef, useState } from 'react';
import type { ColumnsType } from 'antd/es/table';
import {
  Button,
  DropdownCheckboxItem,
  DropdownFooter,
  Icon,
  LabelPicker,
  Link,
  ListTemplate,
  Pagination,
  PeriodFilter,
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
  CAMPAIGN_STATUS_TONE,
  CAMPAIGN_STATUSES,
  applyCampaignFilters,
  type Campaign,
} from '../data/campaigns';
import { scale, semantic } from '../theme/micsTheme';

/*
  Campaigns — Liste (Figma 797:25218 ; filtres actifs 614:97211 ; label ouvert
  612:344 — décisions de la revue client du 1er septembre 2026).

  Écran du MODÈLE EXPOSÉ : trois dimensions seulement (label, période, statut),
  donc un sélecteur par dimension dans la barre d'outils plutôt qu'un bouton
  « Filters » unique. La règle : au-delà de trois dimensions on bascule sur le
  panneau, en deçà on expose. Les multi-sélections (labels, statuts) se rappellent
  dans la barre de chips ; la période, à valeur unique et lisible dans son
  sélecteur, n'y va pas.

  Les métriques valent toutes « - » : c'est ce que rend la maquette, relevée sur
  une organisation dont les campagnes n'ont jamais diffusé.
*/

const PAGE_SIZE = 10;

/**
 * Déclencheur de filtre à l'apparence d'un champ : même hauteur, même bordure et
 * même padding qu'un Select, mais il porte le NOM de la dimension, jamais sa
 * valeur — le contenu se lit dans le panneau qu'il ouvre et dans la barre de
 * chips, pas dans le déclencheur.
 */
function FilterTrigger({
  label,
  icon,
  open,
  onClick,
  width,
}: {
  label: string;
  icon: string;
  open: boolean;
  onClick: () => void;
  width: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-haspopup="true"
      aria-expanded={open}
      style={{
        width,
        height: scale.sizeControl,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: scale.space8,
        padding: `0 ${scale.spaceInputPadH}px`,
        background: semantic.bgContainer,
        border: `${scale.borderWidth}px solid ${open ? semantic.primary : semantic.borderInput}`,
        borderRadius: scale.radiusBase,
        font: 'inherit',
        color: semantic.textNormal,
        cursor: 'pointer',
      }}
    >
      {label}
      <Icon name={icon} size={12} color={semantic.textLighter} />
    </button>
  );
}

/**
 * Filtre par label (Figma 797:25218, ouvert 612:344) : une dropdown dont le
 * déclencheur dit toujours « Label », loupe comprise — fermé, il annonce déjà
 * la recherche qu'il ouvre. Au clic il se déploie en champ, et la liste des
 * labels se filtre à la frappe. Chaque label choisi part dans la barre de
 * chips, le champ reste ouvert pour en cumuler.
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
    return <FilterTrigger label="Label" icon="magnifier" open={false} onClick={() => setOpen(true)} width={120} />;
  }

  return (
    <LabelPicker
      // Les labels déjà retenus sortent de la liste : les reproposer laisserait
      // croire qu'on peut cumuler deux fois le même filtre.
      options={CAMPAIGN_LABELS.filter((l) => !selected.includes(l))}
      onSelect={onAdd}
      onCancel={() => setOpen(false)}
      width={220}
      placeholder="Search a label"
      ariaLabel="Search a label"
      // Loupe à droite, comme sur le déclencheur : la même icône au même
      // endroit, seul le champ s'élargit.
      iconSide="right"
    />
  );
}

/**
 * Filtre par statut (Figma 797:25218) : multi-sélection à cases. Le déclencheur
 * dit toujours « Status », quel que soit l'état — les statuts cochés se lisent
 * dans le panneau et dans la barre de chips. Le pied reprend le composant
 * Dropdown / Clear de la maquette et vide la sélection.
 */
function StatusFilter({
  selected,
  onToggle,
  onClear,
}: {
  selected: string[];
  onToggle: (status: string) => void;
  onClear: () => void;
}) {
  const [open, setOpen] = useState(false);
  const zone = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (zone.current && !zone.current.contains(e.target as HTMLElement)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div ref={zone} style={{ position: 'relative' }}>
      <FilterTrigger label="Status" icon="chevron-bottom" open={open} onClick={() => setOpen((v) => !v)} width={120} />
      {open && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 4px)',
            right: 0,
            zIndex: scale.zDropdown,
            width: 220,
            ...panelSurface,
            overflow: 'hidden',
          }}
        >
          <div style={{ padding: `${scale.space8}px 0` }}>
            {CAMPAIGN_STATUSES.map((v) => (
              <DropdownCheckboxItem
                key={v}
                label={v}
                checked={selected.includes(v)}
                onToggle={() => onToggle(v)}
              />
            ))}
          </div>
          <DropdownFooter label="Clear all filters" onClick={onClear} disabled={!selected.length} />
        </div>
      )}
    </div>
  );
}

export function CampaignsList() {
  const [search, setSearch] = useState('');
  const [labels, setLabels] = useState<string[]>([]);
  const [period, setPeriod] = useState<string>('Last 30 days');
  const [statuses, setStatuses] = useState<string[]>([]);
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
    () => applyCampaignFilters(CAMPAIGNS, { search, labels, statuses }),
    [search, labels, statuses],
  );

  /*
    Chips de rappel — la règle de la revue du 1er septembre : seules les
    MULTI-SÉLECTIONS y vont, parce que leurs déclencheurs ne disent jamais leur
    contenu (« Label », « Status »). La période, à valeur unique et lisible dans
    son sélecteur (« Yesterday »), n'y est pas dupliquée. Les chips portent la
    valeur seule, comme la maquette 614:97211 : préfixer chaque chip de sa
    dimension doublerait la longueur de la barre sans lever d'ambiguïté ici.
  */
  const activeFilters: ActiveFilter[] = [
    ...labels.map((l) => ({ key: `label:${l}`, label: l })),
    ...statuses.map((v) => ({ key: `status:${v}`, label: v })),
  ];

  const toggleStatus = (v: string) => {
    setStatuses((prev) => (prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]));
    setPage(1);
  };

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
        setStatuses((prev) => prev.filter((v) => `status:${v}` !== key));
        setPage(1);
      }}
      onClearFilters={() => {
        setLabels([]);
        setStatuses([]);
        setPage(1);
      }}
      pagination={
        <Pagination current={page} total={rows.length} pageSize={PAGE_SIZE} onChange={setPage} />
      }
      actions={
        <>
            <LabelFilter selected={labels} onAdd={addLabel} />
            <PeriodFilter value={period} presets={CAMPAIGN_PERIODS} onChange={setPeriod} />
            <StatusFilter
              selected={statuses}
              onToggle={toggleStatus}
              onClear={() => {
                setStatuses([]);
                setPage(1);
              }}
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
