import { useMemo, useState } from 'react';
import {
  Button,
  DropdownOptionItem,
  EmptyState,
  Icon,
  Input,
  Overlay,
  Select,
  TabBar,
  TabPanel,
} from '../ui';
import { BOARD_FILTERS, BoardContent } from './BoardContents';
import { SEGMENTS } from '../data/segments';
import { scale, semantic, typography } from '../theme/micsTheme';

/*
  Entrée « Boards » (route /home du navigator).

  Relevé croisé : le code (DashboardPage + DashboardLayout) donne la structure —
  les onglets SONT les tableaux de bord, chacun rend une grille de cartes ; et
  l'inspection de https://navigator.mediarithmics.com/#/v2/o/1278/home donne les
  valeurs rendues — cartes en padding 15/20 radius 6, titres en casse normale (la
  maquette Figma les met en capitales : c'est la production qui fait foi).

  Les neuf tableaux de bord sont décrits en données dans BoardContents. Le mode
  comparaison est relevé sur les sept écrans « Comparing » de la maquette : la barre
  d'actions se réduit à « Stop comparing », et le contenu passe en deux colonnes.
*/

const DASHBOARDS = [
  { key: 'activities', label: 'Activities' },
  { key: 'builders', label: 'Builders usage' },
  { key: 'campaigns', label: 'Campaigns' },
  { key: 'client', label: "Client's usage - WIP" },
  { key: 'dataviz', label: 'Data Visualization eXperience' },
  { key: 'demo', label: 'Demo dashboard - Datamart' },
  { key: 'features', label: 'Features and adoption' },
  { key: 'havas', label: 'Havas Analytics' },
  { key: 'orgs', label: 'Organisations' },
];

/**
 * Rangée du sélecteur de segment : nom à gauche, nombre de user points à droite.
 * C'est l'Option Item du DS, complété du volume que la production affiche — c'est lui
 * qui permet de choisir un terme de comparaison qui ait de la matière.
 */
function SegmentRow({
  name,
  userPoint,
  selected,
  onSelect,
}: {
  name: string;
  userPoint: number;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <div style={{ position: 'relative' }}>
      <DropdownOptionItem role="option" label={name} selected={selected} onSelect={onSelect} />
      <span
        aria-hidden
        style={{
          position: 'absolute',
          right: scale.space16,
          top: '50%',
          transform: 'translateY(-50%)',
          color: semantic.textLighter,
          pointerEvents: 'none',
        }}
      >
        {userPoint.toLocaleString('en-US')}
      </span>
    </div>
  );
}

/** Valeurs proposées par chaque sélecteur de board. */
const FILTER_OPTIONS: Record<string, Array<{ value: string; label: string }>> = {
  'User segments': [
    { value: 'all', label: 'All users' },
    { value: 'active', label: 'Active users' },
  ],
  'User organisation': [
    { value: 'organisation', label: 'User organisation' },
    { value: 'datamart', label: 'User datamart' },
    { value: 'all', label: 'All datamarts' },
  ],
  Account: [
    { value: 'known', label: 'Known accounts' },
    { value: 'anonymous', label: 'Anonymous' },
  ],
};

/** Séparateur vertical de la barre de filtres (`ant-divider-vertical` en production). */
function Separator() {
  return (
    <span
      aria-hidden
      style={{ width: 1, alignSelf: 'stretch', background: semantic.borderInput, marginInline: scale.space4 }}
    />
  );
}

/*
  Le board « Activities » était écrit à la main ici, avec ses propres graphiques.
  Il est passé en données dans BoardContents, comme les huit autres : sans ça, le
  mode comparaison aurait dû être codé deux fois.
*/

interface Props {
  /** Tableau de bord actif. Piloté par l'URL : un rafraîchissement doit y revenir. */
  board: string;
  onBoardChange: (board: string) => void;
}

export function Boards({ board, onBoardChange }: Props) {
  /*
    Segment de comparaison. Le CHOIX suffit : la comparaison démarre au clic dans le
    drawer, sans validation. Il n'y a rien à confirmer — le geste est réversible d'un
    clic sur « Stop comparing », et attendre un Apply ferait douter que le clic a pris.
  */
  const [compared, setCompared] = useState<string | null>(null);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [pickerSearch, setPickerSearch] = useState('');

  const comparedSegment = SEGMENTS.find((s) => s.id === compared);
  const filters = BOARD_FILTERS[board] ?? [];
  /*
    Valeurs des sélecteurs du board, et celles déjà appliquées. En production Apply est
    toujours cliquable et ne fait rien tant qu'aucun sélecteur n'est renseigné : un
    bouton qui ne fait rien apprend à ne plus lui faire confiance. Ici il est désactivé
    tant qu'il n'y a rien de nouveau à appliquer.
  */
  const [filterValues, setFilterValues] = useState<Record<string, string>>({});
  const [appliedFilters, setAppliedFilters] = useState<Record<string, string>>({});
  const hasNewFilter = filters.some((f) => (filterValues[f] ?? '') !== (appliedFilters[f] ?? ''));

  const pickerResults = useMemo(() => {
    const q = pickerSearch.trim().toLowerCase();
    return SEGMENTS.filter(
      (s) => !q || s.name.toLowerCase().includes(q) || s.technicalName.toLowerCase().includes(q),
    );
  }, [pickerSearch]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space16 }}>
      {/* Les onglets SONT les tableaux de bord : c'est ce que fait DashboardPage. */}
      <TabBar items={DASHBOARDS} active={board} onChange={onBoardChange} idPrefix="board" />

      {/*
        Barre de filtres. En comparaison elle se réduit : « Stop comparing » remplace
        Compare et Export, et c'est la seule sortie — relevé sur les écrans de prod.
      */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: scale.space8 }}>
        {comparedSegment ? (
          // Comparaison en cours : une seule sortie, et elle est explicite. Même barre
          // que l'onglet « Features and adoption » du détail d'un segment.
          <>
            <Button icon={<Icon name="close" size={12} />} onClick={() => setCompared(null)}>
              Stop comparing
            </Button>
            <Separator />
          </>
        ) : (
          <>
            <Button
              onClick={() => {
                setPickerSearch('');
                setPickerOpen(true);
              }}
            >
              Compare to segment…
            </Button>
            <Separator />
            <Button icon={<Icon name="download" size={14} />}>Export</Button>
            {filters.length > 0 && <Separator />}
          </>
        )}

        {/*
          Les sélecteurs du board RESTENT en comparaison : ils décrivent la portée des
          deux colonnes, pas seulement celle de gauche. Les retirer laisserait croire
          que la comparaison ignore le périmètre choisi.
        */}
        {filters.map((label) => (
          <Select
            key={label}
            width={162}
            placeholder={label}
            value={filterValues[label]}
            onChange={(v) => setFilterValues((prev) => ({ ...prev, [label]: v }))}
            options={FILTER_OPTIONS[label] ?? []}
            aria-label={label}
          />
        ))}
        {filters.length > 0 && (
          <Button type="primary" disabled={!hasNewFilter} onClick={() => setAppliedFilters(filterValues)}>
            Apply
          </Button>
        )}
      </div>

      {/*
        24 de plus sous la barre d'actions. Le gap de 16 de la colonne suffit entre les
        onglets et la barre, mais il colle les premières cartes aux boutons.
      */}
      <div style={{ marginTop: scale.space24 }}>
        <TabPanel tabKey={board} idPrefix="board">
          <BoardContent board={board} compared={comparedSegment?.name ?? null} />
        </TabPanel>
      </div>

      {/*
        Drawer et non modale, pour la même raison que sur le détail d'un segment :
        choisir un segment de comparaison dépend de ce qui est affiché derrière. Une
        modale masquerait précisément les cartes qui servent à décider.
      */}
      {/*
        Drawer et non modale : choisir un segment de comparaison dépend de ce qui est
        affiché derrière. Une modale masquerait précisément les cartes qui servent à
        décider. Titre, recherche et colonne relevés sur la production.
      */}
      <Overlay
        open={pickerOpen}
        mode="drawer"
        title="Select a segment"
        headerTheme="light"
        onClose={() => setPickerOpen(false)}
        width={640}
      >
        <Input
          type="search"
          placeholder="Search by name or id"
          rightIcon="magnifier"
          value={pickerSearch}
          onChange={setPickerSearch}
        />

        <div style={{ marginTop: scale.space16 }}>
          {pickerResults.length > 0 ? (
            <>
              {/*
                La production affiche le nombre de user points en face de chaque
                segment : c'est ce qui permet de choisir un terme de comparaison qui
                ait un volume, plutôt que d'en essayer un vide et de recommencer.
              */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  padding: `0 ${scale.space16}px ${scale.space8}px`,
                  ...typography.caption,
                  color: semantic.textLighter,
                }}
              >
                # User points
              </div>
              <div role="listbox" aria-label="Segments">
                {pickerResults.map((s) => (
                  <SegmentRow
                    key={s.id}
                    name={s.name}
                    userPoint={s.userPoint}
                    selected={compared === s.id}
                    onSelect={() => {
                      setCompared(s.id);
                      setPickerOpen(false);
                    }}
                  />
                ))}
              </div>
            </>
          ) : (
            <EmptyState
              title="Aucun segment ne correspond"
              description="Essayez un autre terme de recherche."
            />
          )}
        </div>
      </Overlay>
    </div>
  );
}
