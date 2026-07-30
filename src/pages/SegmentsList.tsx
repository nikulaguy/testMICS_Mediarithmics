import { useEffect, useMemo, useRef, useState } from 'react';
import type { ColumnsType } from 'antd/es/table';
import { Button, CountBadge, Icon, Link, Table, panelSurface } from '../ui';
import { Toolbar, ToolbarSearch, DropdownCheckboxItem } from '../ui';
import { FilterPanel, ActiveFilterBar, type ActiveFilter } from '../ui';
import {
  SEGMENTS,
  DIMENSIONS,
  VALUE_ICONS,
  isAbsoluteRange,
  parseAbsoluteRange,
  applyFilters,
  type FilterState,
  type Segment,
} from '../data/segments';
import { scale, semantic } from '../theme/micsTheme';

/** Colonnes pilotables depuis « Edit view » (mêmes libellés que la dropdown Figma). */
const COLUMN_OPTIONS: Array<{ key: string; label: string }> = [
  { key: 'type', label: 'Type' },
  { key: 'name', label: 'Name' },
  { key: 'id', label: 'ID' },
  { key: 'technicalName', label: 'Technical Name' },
  { key: 'daysAgo', label: 'Creation Date' },
  { key: 'userPoint', label: 'User Point' },
  { key: 'userAccounts', label: 'User Accounts' },
  { key: 'userProfiles', label: 'User Profiles' },
  { key: 'userDevicePoints', label: 'User Device Points' },
  { key: 'installationIds', label: 'Installation IDs' },
  { key: 'vectorIds', label: 'Vector IDs' },
];

export function SegmentsList({ onOpenDetail }: { onOpenDetail: (s: Segment) => void }) {
  const [filters, setFilters] = useState<FilterState>({});
  const [search, setSearch] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);
  const [visible, setVisible] = useState<string[]>(COLUMN_OPTIONS.map((c) => c.key));
  const panelRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<HTMLDivElement>(null);

  // Fermeture des panneaux au clic extérieur et à Échap.
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Les surfaces flottantes d'AntD (calendrier, select, filtre de colonne) sont
      // rendues dans un portail attaché au body : un clic dedans n'est PAS un clic
      // en dehors du panneau, sinon choisir une date de début le refermerait.
      if (target.closest?.('.ant-picker-dropdown, .ant-select-dropdown, .ant-table-filter-dropdown')) return;
      if (panelRef.current && !panelRef.current.contains(target)) setPanelOpen(false);
      if (viewRef.current && !viewRef.current.contains(target)) setViewOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        // Un calendrier ouvert se ferme en premier : Échap ne doit pas faire
        // disparaître le panneau de filtres sous les doigts de l'utilisateur.
        if (document.querySelector('.ant-picker-dropdown:not(.ant-picker-dropdown-hidden)')) return;
        setPanelOpen(false);
        setViewOpen(false);
      }
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const toggleValue = (dimensionKey: string, value: string) =>
    setFilters((prev) => {
      const current = prev[dimensionKey] ?? [];
      const next = current.includes(value) ? current.filter((v) => v !== value) : [...current, value];
      const copy = { ...prev };
      if (next.length) copy[dimensionKey] = next;
      else delete copy[dimensionKey];
      return copy;
    });

  const setDimension = (dimensionKey: string, values: string[]) =>
    setFilters((prev) => {
      const copy = { ...prev };
      if (values.length) copy[dimensionKey] = values;
      else delete copy[dimensionKey];
      return copy;
    });

  const clearDimension = (dimensionKey: string) =>
    setFilters((prev) => {
      const copy = { ...prev };
      delete copy[dimensionKey];
      return copy;
    });

  const toggleColumn = (key: string) =>
    setVisible((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));

  // Une chip par filtre appliqué : la barre est un rappel exhaustif, pas un résumé.
  const chips: ActiveFilter[] = DIMENSIONS.flatMap((d) =>
    (filters[d.key] ?? []).map((value) => {
      const readable = isAbsoluteRange(value) ? parseAbsoluteRange(value).join(' → ') : value;
      return { key: `${d.key}::${value}`, label: `${d.label} : ${readable}` };
    }),
  );
  /*
    Le compteur du bouton Filters compte les FILTRES, pas les dimensions : trois types
    cochés dans « Segment type », c'est 3. Compter les dimensions annonçait 1 alors que
    trois valeurs restreignaient la liste, et le chiffre ne collait plus au nombre de
    chips affichées juste en dessous.
  */
  const activeFilterCount = chips.length;
  const removeChip = (key: string) => {
    const [dimensionKey, value] = key.split('::');
    toggleValue(dimensionKey, value);
  };

  const rows = useMemo(() => applyFilters(SEGMENTS, filters, search), [filters, search]);

  const typeDimension = DIMENSIONS.find((d) => d.key === 'type')!;
  const typeFilterActive = (filters.type ?? []).length > 0;

  const allColumns: ColumnsType<Segment> = [
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      width: 150,
      // Filtre de colonne : même clé d'état que le panneau, donc une seule chip.
      // Application immédiate, ni OK ni Reset.
      filterIcon: () => (
        <Icon name="filter" size={14} color={typeFilterActive ? semantic.primary : semantic.textLighter} />
      ),
      render: (value: string) => (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: scale.space8 }}>
          <Icon name={VALUE_ICONS[value]} size={16} color={semantic.textLighter} />
          {value}
        </span>
      ),
      filterDropdown: () => (
        <div style={{ padding: `${scale.space8}px 0`, minWidth: 200 }}>
          {typeDimension.values.map((value) => (
            <DropdownCheckboxItem
              key={value}
              label={value}
              icon={VALUE_ICONS[value]}
              checked={(filters.type ?? []).includes(value)}
              onToggle={() => toggleValue('type', value)}
            />
          ))}
        </div>
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 220,
      ellipsis: true,
      render: (value: string, row: Segment) => (
        <Link size="M" onClick={() => onOpenDetail(row)}>
          {value}
        </Link>
      ),
    },
    { title: 'ID', dataIndex: 'id', key: 'id', width: 110 },
    {
      title: 'Technical Name',
      dataIndex: 'technicalName',
      key: 'technicalName',
      width: 210,
      ellipsis: true,
      render: (value: string) => <Link size="M">{value}</Link>,
    },
    {
      title: 'Creation Date',
      dataIndex: 'daysAgo',
      key: 'daysAgo',
      width: 130,
      sorter: true,
      render: (d: number) => `${d} days ago`,
    },
    { title: 'User Point', dataIndex: 'userPoint', key: 'userPoint', width: 100, sorter: true },
    { title: 'User Accounts', dataIndex: 'userAccounts', key: 'userAccounts', width: 120, sorter: true },
    { title: 'User Profiles', dataIndex: 'userProfiles', key: 'userProfiles', width: 110, sorter: true },
    { title: 'User Device Points', dataIndex: 'userDevicePoints', key: 'userDevicePoints', width: 140, sorter: true },
    { title: 'Installation IDs', dataIndex: 'installationIds', key: 'installationIds', width: 120, sorter: true },
    { title: 'Vector IDs', dataIndex: 'vectorIds', key: 'vectorIds', width: 100, sorter: true },
  ];

  const columns: ColumnsType<Segment> = [
    ...allColumns.filter((c) => visible.includes(String(c.key))),
    {
      title: '',
      key: 'actions',
      width: 56,
      render: () => <Icon name="dots" size={14} color={semantic.textLighter} />,
    },
  ];

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
      {/* Toolbar : uniquement ce qui agit sur le tableau */}
      <Toolbar
        search={<ToolbarSearch value={search} onChange={setSearch} placeholder="Search segments" />}
        actions={
          <>
          <div ref={panelRef} style={{ position: 'relative' }}>
            <Button icon={<Icon name="filter" size={14} />} onClick={() => setPanelOpen((v) => !v)}>
              Filters
              {activeFilterCount > 0 && <CountBadge count={activeFilterCount} />}
            </Button>
            {panelOpen && (
              <div style={{ position: 'absolute', top: 'calc(100% + 4px)', right: 0, zIndex: 1050 }}>
                <FilterPanel
                  filters={filters}
                  onToggle={toggleValue}
                  onSet={setDimension}
                  onClearDimension={clearDimension}
                  onClearAll={() => setFilters({})}
                />
              </div>
            )}
          </div>

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
                  zIndex: 1050,
                  width: 220,
                  ...panelSurface,
                  padding: `${scale.space8}px 0`,
                  maxHeight: 320,
                  overflowY: 'auto',
                }}
              >
                {COLUMN_OPTIONS.map((c) => (
                  <DropdownCheckboxItem
                    key={c.key}
                    label={c.label}
                    checked={visible.includes(c.key)}
                    onToggle={() => toggleColumn(c.key)}
                  />
                ))}
              </div>
            )}
          </div>
          </>
        }
      />

      <ActiveFilterBar filters={chips} onRemove={removeChip} onClearAll={() => setFilters({})} />

      <Table<Segment>
        rowKey="id"
        columns={columns}
        dataSource={rows}
        size="small"
        rowSelection={{ type: 'checkbox' }}
        pagination={{ pageSize: 10, showSizeChanger: true }}
        scroll={{ x: 'max-content' }}
      />
    </section>
  );
}
