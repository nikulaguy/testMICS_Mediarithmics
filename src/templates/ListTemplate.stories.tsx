import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ListTemplate } from './ListTemplate';
import {
  Button,
  CountBadge,
  DropdownCheckboxItem,
  DropdownFooter,
  DropdownPanel,
  EmptyState,
  Icon,
  Pagination,
  Select,
  Table,
  Tag,
} from '../ui';
import { scale, semantic } from '../theme/micsTheme';

const meta = {
  title: 'Templates/Liste',
  component: ListTemplate,
  parameters: { layout: 'padded' },
  // children est obligatoire côté composant ; le déclarer ici évite d'avoir à
  // répéter un args factice dans chacune des stories, qui rendent toutes en render().
  args: { children: null },
} satisfies Meta<typeof ListTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

interface Ligne {
  id: string;
  name: string;
  type: string;
  points: number;
}

const LIGNES: Ligne[] = [
  { id: '1', name: 'Visiteurs 30 jours', type: 'Query', points: 128_400 },
  { id: '2', name: 'Acheteurs récurrents', type: 'Campaign', points: 9_120 },
  { id: '3', name: 'Lookalike premium', type: 'Cohort lookalike', points: 54_800 },
  { id: '4', name: 'Import CRM mars', type: 'File import', points: 2_310 },
];

const COLONNES = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Type', dataIndex: 'type', key: 'type', width: 180, render: (v: string) => <Tag>{v}</Tag> },
  {
    title: 'User points',
    dataIndex: 'points',
    key: 'points',
    width: 140,
    render: (v: number) => v.toLocaleString('fr-FR'),
  },
];

/** Le cas courant : recherche, deux actions, un tableau, une pagination. */
export const Complet: Story = {
  render: function Rendu() {
    const [search, setSearch] = useState('');
    const rows = LIGNES.filter((l) => l.name.toLowerCase().includes(search.trim().toLowerCase()));
    return (
      <ListTemplate
        search={search}
        onSearchChange={setSearch}
        searchPlaceholder="Search segments"
        actions={
          <>
            <Select
              width={160}
              placeholder="Type"
              options={[
                { value: 'query', label: 'Query' },
                { value: 'campaign', label: 'Campaign' },
              ]}
              aria-label="Type"
            />
            <Button icon={<Icon name="view" size={14} />}>Edit view</Button>
          </>
        }
        pagination={<Pagination current={1} total={rows.length} pageSize={10} onChange={() => {}} />}
      >
        <Table rowKey="id" columns={COLONNES} dataSource={rows} pagination={false} size="small" />
      </ListTemplate>
    );
  },
};

/**
 * Avec des filtres appliqués. La barre de rappel s'insère SOUS la barre d'outils,
 * et rien ne bouge d'autre : c'est le template qui tient la place, pas la page.
 */
export const AvecFiltresActifs: Story = {
  render: function Rendu() {
    const [filtres, setFiltres] = useState([
      { key: 'type:query', label: 'Type : Query' },
      { key: 'labels:test', label: 'Labels : test' },
    ]);
    return (
      <ListTemplate
        search=""
        onSearchChange={() => {}}
        searchPlaceholder="Search segments"
        actions={<Button icon={<Icon name="filter" size={14} />}>Filters</Button>}
        activeFilters={filtres}
        onRemoveFilter={(key) => setFiltres((f) => f.filter((x) => x.key !== key))}
        onClearFilters={() => setFiltres([])}
      >
        <Table rowKey="id" columns={COLONNES} dataSource={LIGNES} pagination={false} size="small" />
      </ListTemplate>
    );
  },
};

/**
 * Sans résultat. Le tableau cède la place à l'état vide, mais la barre d'outils et
 * les chips restent : c'est ce qui permet de comprendre POURQUOI il n'y a rien.
 */
export const SansResultat: Story = {
  render: function Rendu() {
    const [filtres, setFiltres] = useState([{ key: 'type:edge', label: 'Type : EDGE' }]);
    return (
      <ListTemplate
        search="acheteurs"
        onSearchChange={() => {}}
        searchPlaceholder="Search segments"
        actions={<Button icon={<Icon name="filter" size={14} />}>Filters</Button>}
        activeFilters={filtres}
        onRemoveFilter={(key) => setFiltres((f) => f.filter((x) => x.key !== key))}
        onClearFilters={() => setFiltres([])}
      >
        <EmptyState
          title="Aucun segment ne correspond"
          description="Retirez un filtre ou élargissez la recherche."
        />
      </ListTemplate>
    );
  },
};

/**
 * Les deux actions de barre d'outils que porte tout écran de liste, **réellement
 * ouvrables**. À gauche le bouton Filters et sa cascade, à droite Edit view et sa
 * liste de colonnes. Le template ne les fournit pas : il fournit leur place.
 */
export const FiltersEtEditView: Story = {
  render: function Rendu() {
    const [filtersOpen, setFiltersOpen] = useState(false);
    const [viewOpen, setViewOpen] = useState(false);
    const [filtres, setFiltres] = useState<{ key: string; label: string }[]>([]);
    const [colonnes, setColonnes] = useState(['name', 'type', 'points']);

    const basculerFiltre = (key: string, label: string) =>
      setFiltres((f) => (f.some((x) => x.key === key) ? f.filter((x) => x.key !== key) : [...f, { key, label }]));

    return (
      <ListTemplate
        search=""
        onSearchChange={() => {}}
        searchPlaceholder="Search segments"
        activeFilters={filtres}
        onRemoveFilter={(key) => setFiltres((f) => f.filter((x) => x.key !== key))}
        onClearFilters={() => setFiltres([])}
        actions={
          <>
            {/*
              Chaque déclencheur porte SON panneau, en position absolue dans un
              parent relatif. Le template ne connaît pas ces panneaux : il ne
              fournit que la rangée où poser les boutons.
            */}
            <div style={{ position: 'relative' }}>
              <Button
                icon={<Icon name="filter" size={14} />}
                aria-haspopup="true"
                aria-expanded={filtersOpen}
                onClick={() => {
                  setFiltersOpen((v) => !v);
                  setViewOpen(false);
                }}
              >
                Filters
                {filtres.length > 0 && <CountBadge count={filtres.length} />}
              </Button>
              {filtersOpen && (
                <div style={{ position: 'absolute', top: 'calc(100% + 4px)', right: 0, zIndex: scale.zDropdown }}>
                  <DropdownPanel width={240}>
                    <div role="menu" aria-label="Filtres" style={{ paddingBlock: scale.space8 }}>
                      {[
                        ['type:query', 'Type : Query'],
                        ['type:campaign', 'Type : Campaign'],
                        ['labels:test', 'Labels : test'],
                      ].map(([key, label]) => (
                        <DropdownCheckboxItem
                          key={key}
                          label={label}
                          checked={filtres.some((f) => f.key === key)}
                          onToggle={() => basculerFiltre(key, label)}
                        />
                      ))}
                    </div>
                    <DropdownFooter
                      label="Clear all filters"
                      disabled={!filtres.length}
                      onClick={() => setFiltres([])}
                    />
                  </DropdownPanel>
                </div>
              )}
            </div>

            <div style={{ position: 'relative' }}>
              <Button
                icon={<Icon name="view" size={14} />}
                aria-haspopup="true"
                aria-expanded={viewOpen}
                onClick={() => {
                  setViewOpen((v) => !v);
                  setFiltersOpen(false);
                }}
              >
                Edit view
              </Button>
              {viewOpen && (
                <div style={{ position: 'absolute', top: 'calc(100% + 4px)', right: 0, zIndex: scale.zDropdown }}>
                  <DropdownPanel width={220}>
                    <div role="menu" aria-label="Colonnes affichées" style={{ paddingBlock: scale.space8 }}>
                      {COLONNES.map((c) => (
                        <DropdownCheckboxItem
                          key={c.key}
                          label={c.title}
                          checked={colonnes.includes(c.key)}
                          onToggle={() =>
                            setColonnes((v) =>
                              v.includes(c.key) ? v.filter((x) => x !== c.key) : [...v, c.key],
                            )
                          }
                        />
                      ))}
                    </div>
                  </DropdownPanel>
                </div>
              )}
            </div>
          </>
        }
      >
        <Table
          rowKey="id"
          columns={COLONNES.filter((c) => colonnes.includes(c.key))}
          dataSource={LIGNES.filter(
            (l) => !filtres.length || filtres.some((f) => f.label.endsWith(l.type)),
          )}
          pagination={false}
          size="small"
        />
      </ListTemplate>
    );
  },
};

/** Liste nue : ni recherche, ni actions, ni pagination. Seule la surface reste. */
export const Minimal: Story = {
  render: () => (
    <ListTemplate>
      <Table rowKey="id" columns={COLONNES} dataSource={LIGNES} pagination={false} size="small" />
    </ListTemplate>
  ),
};

/** Repère visuel : ce que le template pose, et ce qu'il laisse à la page. */
export const Anatomie: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, color: semantic.textLighter }}>
      <span>1 · Barre d'outils — recherche à gauche, actions à droite</span>
      <span>2 · Barre de filtres actifs — seulement s'il y en a</span>
      <span>3 · Contenu — le tableau, ou l'état vide</span>
      <span>4 · Pagination — alignée à droite</span>
      <ListTemplate
        search=""
        onSearchChange={() => {}}
        actions={<Button>Action</Button>}
        activeFilters={[{ key: 'x', label: 'Un filtre' }]}
        onRemoveFilter={() => {}}
        onClearFilters={() => {}}
        pagination={<Pagination current={1} total={40} pageSize={10} onChange={() => {}} />}
      >
        <Table rowKey="id" columns={COLONNES} dataSource={LIGNES} pagination={false} size="small" />
      </ListTemplate>
    </div>
  ),
};
