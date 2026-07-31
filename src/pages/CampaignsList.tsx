import { useMemo, useState } from 'react';
import type { ColumnsType } from 'antd/es/table';
import {
  ActiveFilterBar,
  Button,
  Icon,
  LabelPicker,
  Link,
  Pagination,
  Select,
  StatusBadge,
  Table,
  Toolbar,
  ToolbarSearch,
  type ActiveFilter,
} from '../ui';
import {
  CAMPAIGNS,
  CAMPAIGN_LABELS,
  CAMPAIGN_PERIODS,
  CAMPAIGN_STATUS_TONE,
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
  const [status, setStatus] = useState<string | null>(null);
  const [page, setPage] = useState(1);

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
    ...(['impressions', 'clicks', 'spent', 'cpm', 'ctr', 'cpc'] as const).map((key, i) => ({
      title: ['Imp.', 'Clicks', 'Spent', 'CPM', 'CTR', 'CPC'][i],
      dataIndex: key,
      key,
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
    <section
      style={{
        background: semantic.bgContainer,
        borderRadius: scale.radiusCard,
        padding: scale.space20,
        display: 'flex',
        flexDirection: 'column',
        gap: scale.space20,
      }}
    >
      <Toolbar
        search={
          <ToolbarSearch
            value={search}
            onChange={(v) => {
              setSearch(v);
              setPage(1);
            }}
            placeholder="Search Display Campaigns"
          />
        }
        actions={
          <>
            <LabelFilter selected={labels} onAdd={addLabel} />
            <Select
              width={160}
              value={period}
              onChange={setPeriod}
              options={CAMPAIGN_PERIODS.map((p) => ({ value: p, label: p }))}
              aria-label="Period"
            />
            <Select
              width={120}
              placeholder="Status"
              value={status ?? undefined}
              onChange={(v) => {
                setStatus(v || null);
                setPage(1);
              }}
              options={[
                { value: 'Active', label: 'Active' },
                { value: 'Pending', label: 'Pending' },
                { value: 'Paused', label: 'Paused' },
              ]}
              aria-label="Status"
            />
            <Button icon={<Icon name="view" size={14} />}>Edit view</Button>
          </>
        }
      />

      {activeFilters.length > 0 && (
        <ActiveFilterBar
          filters={activeFilters}
          onRemove={(key) => {
            setLabels((prev) => prev.filter((l) => `label:${l}` !== key));
            setPage(1);
          }}
          onClearAll={() => {
            setLabels([]);
            setPage(1);
          }}
        />
      )}

      <Table
        rowKey="id"
        columns={columns}
        dataSource={paged}
        pagination={false}
        rowSelection={{ type: 'checkbox' }}
        size="middle"
      />

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Pagination current={page} total={rows.length} pageSize={PAGE_SIZE} onChange={setPage} />
      </div>
    </section>
  );
}
