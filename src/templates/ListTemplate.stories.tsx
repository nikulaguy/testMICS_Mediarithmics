import { useEffect, useMemo, useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ListTemplate } from './ListTemplate';
import {
  Button,
  CountBadge,
  DropdownCheckboxItem,
  DropdownPanel,
  EmptyState,
  FilterPanel,
  Icon,
  Pagination,
  Table,
  Tag,
  type ActiveFilter,
} from '../ui';
import { DIMENSIONS, isAbsoluteRange, parseAbsoluteRange, type FilterState } from '../data/segments';
import { scale, semantic } from '../theme/micsTheme';

const meta = {
  title: 'Templates/Liste',
  component: ListTemplate,
  parameters: { layout: 'padded' },
  // children est obligatoire côté composant ; le déclarer ici évite de répéter un
  // args factice dans chaque story, qui rendent toutes en render().
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

/**
 * Ferme au clic extérieur et à Échap.
 *
 * `fermer` est lu par référence : passé en dépendance, une lambda recréée à chaque
 * rendu du parent remonterait l'écouteur en boucle.
 */
function useFermetureExterieure(ouvert: boolean, fermer: () => void) {
  const zone = useRef<HTMLDivElement>(null);
  const fermerRef = useRef(fermer);
  fermerRef.current = fermer;

  useEffect(() => {
    if (!ouvert) return;
    const auClic = (e: PointerEvent) => {
      if (zone.current && !zone.current.contains(e.target as Node)) fermerRef.current();
    };
    const auClavier = (e: KeyboardEvent) => {
      if (e.key === 'Escape') fermerRef.current();
    };
    document.addEventListener('pointerdown', auClic);
    document.addEventListener('keydown', auClavier);
    return () => {
      document.removeEventListener('pointerdown', auClic);
      document.removeEventListener('keydown', auClavier);
    };
  }, [ouvert]);

  return zone;
}

/**
 * Barre d'actions de démonstration, partagée par toutes les stories.
 *
 * Elle est réellement fonctionnelle : Filters ouvre la vraie cascade à deux niveaux
 * du `FilterPanel`, Edit view ouvre la liste des colonnes, et les deux se ferment au
 * clic extérieur comme à Échap. Un bouton qui ne réagit pas dans une page de
 * documentation apprend à ne plus cliquer, et fait douter du composant lui-même.
 */
function ActionsDemo({
  filtres,
  setFiltres,
  colonnes,
  setColonnes,
  nbFiltres,
}: {
  filtres: FilterState;
  setFiltres: (f: FilterState) => void;
  colonnes: string[];
  setColonnes: (c: string[]) => void;
  nbFiltres: number;
}) {
  const [ouvert, setOuvert] = useState<null | 'filtres' | 'vue'>(null);
  const zone = useFermetureExterieure(ouvert !== null, () => setOuvert(null));

  const basculer = (dimensionKey: string, value: string) => {
    const actuelles = filtres[dimensionKey] ?? [];
    const suivantes = actuelles.includes(value)
      ? actuelles.filter((v) => v !== value)
      : [...actuelles, value];
    setFiltres({ ...filtres, [dimensionKey]: suivantes });
  };

  return (
    <div ref={zone} style={{ display: 'flex', alignItems: 'center', gap: scale.space12 }}>
      <div style={{ position: 'relative' }}>
        <Button
          icon={<Icon name="filter" size={14} />}
          aria-haspopup="true"
          aria-expanded={ouvert === 'filtres'}
          onClick={() => setOuvert((v) => (v === 'filtres' ? null : 'filtres'))}
        >
          Filters
          {nbFiltres > 0 && <CountBadge count={nbFiltres} />}
        </Button>
        {ouvert === 'filtres' && (
          <div style={{ position: 'absolute', top: 'calc(100% + 4px)', right: 0, zIndex: scale.zDropdown }}>
            <FilterPanel
              filters={filtres}
              onToggle={basculer}
              onSet={(dimensionKey, values) => setFiltres({ ...filtres, [dimensionKey]: values })}
              onClearDimension={(dimensionKey) => setFiltres({ ...filtres, [dimensionKey]: [] })}
              onClearAll={() => setFiltres({})}
            />
          </div>
        )}
      </div>

      <div style={{ position: 'relative' }}>
        <Button
          icon={<Icon name="view" size={14} />}
          aria-haspopup="true"
          aria-expanded={ouvert === 'vue'}
          onClick={() => setOuvert((v) => (v === 'vue' ? null : 'vue'))}
        >
          Edit view
        </Button>
        {ouvert === 'vue' && (
          <div style={{ position: 'absolute', top: 'calc(100% + 4px)', right: 0, zIndex: scale.zDropdown }}>
            <DropdownPanel width={220}>
              <div role="menu" aria-label="Colonnes affichées" style={{ paddingBlock: scale.space8 }}>
                {COLONNES.map((c) => (
                  <DropdownCheckboxItem
                    key={c.key}
                    label={c.title}
                    checked={colonnes.includes(c.key)}
                    onToggle={() =>
                      setColonnes(
                        colonnes.includes(c.key)
                          ? colonnes.filter((x) => x !== c.key)
                          : [...colonnes, c.key],
                      )
                    }
                  />
                ))}
              </div>
            </DropdownPanel>
          </div>
        )}
      </div>
    </div>
  );
}

/** État partagé par les stories : filtres, colonnes, recherche, et les chips qui en découlent. */
function useDemo(filtresInitiaux: FilterState = {}) {
  const [search, setSearch] = useState('');
  const [filtres, setFiltres] = useState<FilterState>(filtresInitiaux);
  const [colonnes, setColonnes] = useState(COLONNES.map((c) => c.key));

  // Une chip par VALEUR cochée, jamais une par dimension : le compteur du bouton
  // doit annoncer le même nombre que les chips affichées juste en dessous.
  const chips: ActiveFilter[] = useMemo(
    () =>
      DIMENSIONS.flatMap((d) =>
        (filtres[d.key] ?? []).map((value) => ({
          key: `${d.key}::${value}`,
          label: `${d.label} : ${isAbsoluteRange(value) ? parseAbsoluteRange(value).join(' → ') : value}`,
        })),
      ),
    [filtres],
  );

  const retirer = (key: string) => {
    const [dim, value] = key.split('::');
    setFiltres({ ...filtres, [dim]: (filtres[dim] ?? []).filter((v) => v !== value) });
  };

  const lignes = LIGNES.filter((l) => {
    if (search && !l.name.toLowerCase().includes(search.trim().toLowerCase())) return false;
    const types = filtres.type ?? [];
    return !types.length || types.includes(l.type);
  });

  return { search, setSearch, filtres, setFiltres, colonnes, setColonnes, chips, retirer, lignes };
}

/** Le cas courant : recherche, les deux actions, un tableau, une pagination. */
export const Complet: Story = {
  render: function Rendu() {
    const d = useDemo();
    return (
      <ListTemplate
        search={d.search}
        onSearchChange={d.setSearch}
        searchPlaceholder="Search segments"
        activeFilters={d.chips}
        onRemoveFilter={d.retirer}
        onClearFilters={() => d.setFiltres({})}
        actions={
          <ActionsDemo
            filtres={d.filtres}
            setFiltres={d.setFiltres}
            colonnes={d.colonnes}
            setColonnes={d.setColonnes}
            nbFiltres={d.chips.length}
          />
        }
        pagination={<Pagination current={1} total={d.lignes.length} pageSize={10} onChange={() => {}} />}
      >
        <Table
          rowKey="id"
          columns={COLONNES.filter((c) => d.colonnes.includes(c.key))}
          dataSource={d.lignes}
          pagination={false}
          size="small"
        />
      </ListTemplate>
    );
  },
};

/**
 * Avec des filtres déjà appliqués. La barre de rappel s'insère SOUS la barre
 * d'outils, et rien ne bouge d'autre : c'est le template qui tient la place.
 */
export const AvecFiltresActifs: Story = {
  render: function Rendu() {
    const d = useDemo({ type: ['Query', 'Campaign'] });
    return (
      <ListTemplate
        search={d.search}
        onSearchChange={d.setSearch}
        searchPlaceholder="Search segments"
        activeFilters={d.chips}
        onRemoveFilter={d.retirer}
        onClearFilters={() => d.setFiltres({})}
        actions={
          <ActionsDemo
            filtres={d.filtres}
            setFiltres={d.setFiltres}
            colonnes={d.colonnes}
            setColonnes={d.setColonnes}
            nbFiltres={d.chips.length}
          />
        }
      >
        <Table
          rowKey="id"
          columns={COLONNES.filter((c) => d.colonnes.includes(c.key))}
          dataSource={d.lignes}
          pagination={false}
          size="small"
        />
      </ListTemplate>
    );
  },
};

/**
 * Sans résultat. Le tableau cède la place à l'état vide, mais la barre d'outils et
 * les chips restent : c'est ce qui permet de comprendre POURQUOI il n'y a rien, et
 * de revenir en arrière.
 */
export const SansResultat: Story = {
  render: function Rendu() {
    const d = useDemo({ type: ['EDGE'] });
    return (
      <ListTemplate
        search={d.search}
        onSearchChange={d.setSearch}
        searchPlaceholder="Search segments"
        activeFilters={d.chips}
        onRemoveFilter={d.retirer}
        onClearFilters={() => d.setFiltres({})}
        actions={
          <ActionsDemo
            filtres={d.filtres}
            setFiltres={d.setFiltres}
            colonnes={d.colonnes}
            setColonnes={d.setColonnes}
            nbFiltres={d.chips.length}
          />
        }
      >
        <EmptyState
          title="Aucun segment ne correspond"
          description="Retirez un filtre ou élargissez la recherche."
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

/** Repère visuel : ce que le template pose, dans l'ordre. */
export const Anatomie: Story = {
  render: function Rendu() {
    const d = useDemo({ type: ['Query'] });
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space8, color: semantic.textLighter }}>
        <span>1 · Barre d'outils — recherche à gauche, actions à droite</span>
        <span>2 · Barre de filtres actifs — seulement s'il y en a</span>
        <span>3 · Contenu — le tableau, ou l'état vide</span>
        <span>4 · Pagination — alignée à droite</span>
        <ListTemplate
          search={d.search}
          onSearchChange={d.setSearch}
          activeFilters={d.chips}
          onRemoveFilter={d.retirer}
          onClearFilters={() => d.setFiltres({})}
          actions={
            <ActionsDemo
              filtres={d.filtres}
              setFiltres={d.setFiltres}
              colonnes={d.colonnes}
              setColonnes={d.setColonnes}
              nbFiltres={d.chips.length}
            />
          }
          pagination={<Pagination current={1} total={40} pageSize={10} onChange={() => {}} />}
        >
          <Table
            rowKey="id"
            columns={COLONNES.filter((c) => d.colonnes.includes(c.key))}
            dataSource={d.lignes}
            pagination={false}
            size="small"
          />
        </ListTemplate>
      </div>
    );
  },
};
