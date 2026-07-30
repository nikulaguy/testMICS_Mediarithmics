import { useMemo, useState } from 'react';
import {
  Button,
  Card,
  Counter,
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
import { scale, semantic, typography } from '../theme/micsTheme';

/*
  Entrée « Boards » (route /home du navigator).

  Relevé croisé : le code (DashboardPage + DashboardLayout) donne la structure —
  les onglets SONT les tableaux de bord, chacun rend une grille de cartes ; et
  l'inspection de https://navigator.mediarithmics.com/#/v2/o/1278/home donne les
  valeurs rendues — cartes en padding 15/20 radius 6, titres en casse normale (la
  maquette Figma les met en capitales : c'est la production qui fait foi).

  Un seul tableau de bord est développé, « Activities », celui de la maquette
  317:19850. Les autres onglets existent dans la barre, comme en production, mais
  n'ont pas de contenu maquetté.
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

/** Sous-titre entre deux rangées de cartes (`mcs-subtitle2` : 14 régulier, text/normal). */
function Subtitle({ children }: { children: React.ReactNode }) {
  return <h2 style={{ margin: 0, ...typography.bodyLarge, color: semantic.textNormal }}>{children}</h2>;
}

/* ─── Graphiques du board, dessinés dans la page ───────────────────────────────
   Décision produit : le DS ne porte pas de composant de graphique, ils sont
   dessinés là où ils servent, comme l'histogramme de « Features and adoption ».
*/

const CHART_H = 250;

/** Histogramme vertical à catégories. `Browsers`, `Form factors`, `Device OS`, `Events per name`. */
function ColumnChart({
  data,
  height = CHART_H,
  rotateLabels = false,
}: {
  data: Array<[string, number]>;
  height?: number;
  rotateLabels?: boolean;
}) {
  const max = Math.max(...data.map(([, v]) => v), 1);
  const nice = 10 ** Math.floor(Math.log10(max)) * Math.ceil(max / 10 ** Math.floor(Math.log10(max)));
  const ticks = [0, nice / 3, (nice * 2) / 3, nice];
  const fmt = (v: number) => (v >= 1e6 ? `${Math.round(v / 1e5) / 10}M` : v >= 1000 ? `${Math.round(v / 100) / 10}k` : `${Math.round(v)}`);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', gap: scale.space8, height }}>
        {/* Colonne des graduations, hors de la zone des barres. */}
        <div style={{ display: 'flex', flexDirection: 'column-reverse', justifyContent: 'space-between', width: 34 }}>
          {ticks.map((t) => (
            <span key={t} style={{ ...typography.caption, color: semantic.textLighter, textAlign: 'right' }}>
              {fmt(t)}
            </span>
          ))}
        </div>
        <div style={{ position: 'relative', flex: 1, minWidth: 0 }}>
          {ticks.map((t) => (
            <span
              key={t}
              aria-hidden
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: `${(t / nice) * 100}%`,
                borderTop: `1px solid ${semantic.borderDefault}`,
              }}
            />
          ))}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', gap: scale.space16 }}>
            {data.map(([label, v]) => (
              // height: 100% est indispensable : une hauteur en pourcentage contre un
              // parent de hauteur automatique se résout à zéro, et les barres restent plates.
              <div
                key={label}
                style={{
                  flex: 1,
                  minWidth: 0,
                  height: '100%',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                }}
              >
                <div
                  title={`${label} : ${v.toLocaleString('en-US')}`}
                  style={{
                    width: '70%',
                    height: `${(v / nice) * 100}%`,
                    minHeight: v ? 2 : 0,
                    background: semantic.primary,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*
        Étiquettes droites tant qu'elles tiennent. La production ne les incline que
        lorsqu'elles se chevauchent — sur « Events per name », qui en porte vingt.
      */}
      <div style={{ display: 'flex', gap: scale.space16, marginLeft: 42, height: rotateLabels ? 80 : 20 }}>
        {data.map(([label]) => (
          <div key={label} style={{ flex: 1, minWidth: 0, position: 'relative' }}>
            <span
              style={{
                position: 'absolute',
                ...(rotateLabels
                  ? { top: 4, right: '50%', transform: 'rotate(-45deg)', transformOrigin: '100% 0' }
                  : { top: 4, left: 0, right: 0, textAlign: 'center' as const }),
                ...typography.caption,
                color: semantic.textLighter,
                whiteSpace: 'nowrap',
                overflow: rotateLabels ? 'visible' : 'hidden',
                textOverflow: 'ellipsis',
              }}
              title={label}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * « Daily users by channel » : deux séries sur un axe temporel, légende à droite.
 * Les données de production sont creuses — deux points seulement — donc la
 * production n'affiche que des marqueurs, sans courbe. On rend la même chose.
 */
function ChannelChart({ series }: { series: Array<{ label: string; color: string; points: Array<[number, number]> }> }) {
  const nice = 4000;
  const ticks = [0, 1000, 2000, 3000, 4000];
  return (
    <div style={{ display: 'flex', gap: scale.space24 }}>
      <div style={{ display: 'flex', gap: scale.space8, flex: 1, minWidth: 0, height: 243 }}>
        <div style={{ display: 'flex', flexDirection: 'column-reverse', justifyContent: 'space-between', width: 30 }}>
          {ticks.map((t) => (
            <span key={t} style={{ ...typography.caption, color: semantic.textLighter, textAlign: 'right' }}>
              {t ? `${t / 1000}k` : '0'}
            </span>
          ))}
        </div>
        <div style={{ position: 'relative', flex: 1, minWidth: 0 }}>
          {ticks.map((t) => (
            <span
              key={t}
              aria-hidden
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: `${(t / nice) * 100}%`,
                borderTop: `1px dotted ${semantic.borderDefault}`,
              }}
            />
          ))}
          {series.map((s) =>
            s.points.map(([x, y]) => (
              <span
                key={`${s.label}-${x}`}
                title={`${s.label} : ${y.toLocaleString('en-US')}`}
                style={{
                  position: 'absolute',
                  left: `${x * 100}%`,
                  bottom: `${(y / nice) * 100}%`,
                  width: 8,
                  height: 8,
                  marginLeft: -4,
                  marginBottom: -4,
                  borderRadius: 4,
                  background: s.color,
                }}
              />
            )),
          )}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: scale.space4 }}>
        {series.map((s) => (
          <span key={s.label} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: semantic.textNormal }}>
            <span aria-hidden style={{ width: 8, height: 8, borderRadius: 4, background: s.color }} />
            <span style={{ ...typography.bodyMedium }}>{s.label}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Données du board « Activities », relevées en production ─────────────────── */

const BROWSERS: Array<[string, number]> = [
  ['OTHER', 120], ['CHROME', 4200], ['FIREFOX', 210], ['SAFARI', 20], ['MICROSOFT_EDGE', 260],
];
const FORM_FACTORS: Array<[string, number]> = [
  ['OTHER', 30], ['PERSONAL_COMPUTER', 4400], ['SMARTPHONE', 40],
];
const DEVICE_OS: Array<[string, number]> = [
  ['OTHER', 20], ['WINDOWS', 900], ['MAC_OS', 220], ['LINUX', 3900], ['ANDROID', 25],
];
const EVENTS_PER_NAME: Array<[string, number]> = [
  ['PageView', 2650000], ['RunQuery', 320000], ['SearchBar', 210000], ['CreateSegment', 90000],
  ['SaveChart', 60000], ['CreateExport', 40000], ['$cleaned_ref', 30000], ['$app_open', 22000],
  ['%5b%24ne%5', 18000], ['%5b%26me%5', 14000], ['confirm(1)', 11000], ['prompt(1)', 9000],
  ['console.log', 7000], ['return "a"', 5500], ['return(true)', 4200], ['alert(2997)', 3100],
  ['confirm(2)', 2400], ['console.lo', 1800], ['prompt(29)', 1300], ['onmousemo', 900],
];

const CHANNELS = [
  { label: 'navigator', color: semantic.primary, points: [[0.5, 3100]] as Array<[number, number]> },
  { label: 'computing console', color: semantic.warning, points: [[0.5, 900]] as Array<[number, number]> },
];

function ActivitiesBoard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space16 }}>
      {/* Rangée 1 : un tiers / deux tiers, relevé en production (532 et 1073 sur 1615). */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: scale.space16, alignItems: 'stretch' }}>
        <Card style={{ justifyContent: 'space-between' }}>
          {/* Trois compteurs dans UNE carte : le Counter ne porte pas de surface. */}
          <Counter title="# user points" value={20388} />
          <Counter title="Active users" value={1941} />
          <Counter title="Average number of events per session" value="6.17" />
        </Card>

        <Card title="Daily users by channel">
          <ChannelChart series={CHANNELS} />
        </Card>
      </div>

      {/* Rangée 2 : une seule carte, trois histogrammes côte à côte. */}
      <Card>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: scale.space24 }}>
          {[
            ['Browsers (last 30 days)', BROWSERS],
            ['Form factors (last 30 days)', FORM_FACTORS],
            ['Device OS (last 30 days)', DEVICE_OS],
          ].map(([title, data]) => (
            <div key={title as string} style={{ display: 'flex', flexDirection: 'column', gap: scale.space16, minWidth: 0 }}>
              <span style={{ ...typography.bodyLarge, color: semantic.textNormal }}>{title as string}</span>
              <ColumnChart data={data as Array<[string, number]>} />
            </div>
          ))}
        </div>
      </Card>

      <Subtitle>Retrieved events</Subtitle>

      <Card>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: scale.space24, alignItems: 'start' }}>
          <Counter title="Number of different event names retrieved" value={494} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space16, minWidth: 0 }}>
            <span style={{ ...typography.bodyLarge, color: semantic.textNormal }}>Events per name</span>
            <ColumnChart data={EVENTS_PER_NAME} rotateLabels />
          </div>
        </div>
      </Card>
    </div>
  );
}

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

      {/* Barre de filtres : deux actions séparées de filets, puis la portée et Apply. */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: scale.space8 }}>
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

      {appliedCompared && comparedSegment && (
        <span style={{ ...typography.body, color: semantic.textLighter, textAlign: 'right' }}>
          Comparaison appliquée : « {comparedSegment.name} ». Les chiffres ci-dessous restent ceux du
          périmètre global — le calcul comparé n'est pas branché dans ce prototype.
        </span>
      )}

      <TabPanel tabKey={board} idPrefix="board">
        {board === 'activities' ? <ActivitiesBoard /> : <BoardContent board={board} />}
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
