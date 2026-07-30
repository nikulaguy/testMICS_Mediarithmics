import { useMemo, useState } from 'react';
import {
  Button,
  DropdownGroup,
  DropdownOptionItem,
  EmptyState,
  Icon,
  Input,
  Overlay,
  Select,
  TabBar,
  TabPanel,
  Tag,
} from '../ui';
import { BoardContent } from './BoardContents';
import { SEGMENTS } from '../data/segments';
import { scale, semantic } from '../theme/micsTheme';

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

export function Boards() {
  const [board, setBoard] = useState('activities');
  /** Segment de comparaison choisi dans le drawer. Un seul à la fois. */
  const [compared, setCompared] = useState<string | null>(null);
  const [appliedCompared, setAppliedCompared] = useState<string | null>(null);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [pickerSearch, setPickerSearch] = useState('');

  const comparedSegment = SEGMENTS.find((s) => s.id === compared);

  const pickerResults = useMemo(() => {
    const q = pickerSearch.trim().toLowerCase();
    return SEGMENTS.filter(
      (s) => !q || s.name.toLowerCase().includes(q) || s.technicalName.toLowerCase().includes(q),
    );
  }, [pickerSearch]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space16 }}>
      {/* Les onglets SONT les tableaux de bord : c'est ce que fait DashboardPage. */}
      <TabBar items={DASHBOARDS} active={board} onChange={setBoard} idPrefix="board" />

      {/*
        Barre de filtres. En comparaison elle se réduit : « Stop comparing » remplace
        Compare et Export, et c'est la seule sortie — relevé sur les écrans de prod.
      */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: scale.space8 }}>
        {appliedCompared ? (
          <Button
            icon={<Icon name="close" size={12} />}
            onClick={() => {
              setCompared(null);
              setAppliedCompared(null);
            }}
          >
            Stop comparing
          </Button>
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
          </>
        )}
        <Separator />
        {/*
          Le segment choisi s'affiche en Tag fermable, à la place du Select tant qu'il
          n'est pas retiré : la portée du board n'est pas une liste à parcourir, c'est
          une décision prise, et on doit pouvoir la défaire d'un clic.
        */}
        {comparedSegment ? (
          <Tag closable onClose={() => setCompared(null)}>
            {comparedSegment.name}
          </Tag>
        ) : (
          <Select
            width={162}
            placeholder="User segments"
            options={[
              { value: 'all', label: 'All users' },
              { value: 'active', label: 'Active users' },
            ]}
            aria-label="Portée de la comparaison"
          />
        )}
        {/* Désactivé quand il n'y a rien de nouveau à appliquer : appliquer quoi, sinon ? */}
        <Button
          type="primary"
          disabled={compared === appliedCompared}
          onClick={() => setAppliedCompared(compared)}
        >
          Apply
        </Button>
      </div>

      <TabPanel tabKey={board} idPrefix="board">
        <BoardContent board={board} compared={appliedCompared ? comparedSegment?.name : null} />
      </TabPanel>

      {/*
        Drawer et non modale, pour la même raison que sur le détail d'un segment :
        choisir un segment de comparaison dépend de ce qui est affiché derrière. Une
        modale masquerait précisément les cartes qui servent à décider.
      */}
      <Overlay
        open={pickerOpen}
        mode="drawer"
        title="Compare to segment"
        headerTheme="light"
        onClose={() => setPickerOpen(false)}
        width={520}
      >
        <p style={{ color: semantic.textNormal, margin: `0 0 ${scale.space16}px` }}>
          Un seul segment de comparaison à la fois. Le clic choisit et referme ; c'est
          « Apply » qui déclenche le recalcul.
        </p>

        <Input
          type="search"
          placeholder="Search segments"
          rightIcon="magnifier"
          value={pickerSearch}
          onChange={setPickerSearch}
        />

        <div style={{ marginTop: scale.space8 }}>
          {pickerResults.length > 0 ? (
            <DropdownGroup>
              {pickerResults.map((s) => (
                <DropdownOptionItem
                  key={s.id}
                  label={s.name}
                  selected={compared === s.id}
                  onSelect={() => {
                    setCompared(s.id);
                    setPickerOpen(false);
                  }}
                />
              ))}
            </DropdownGroup>
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
