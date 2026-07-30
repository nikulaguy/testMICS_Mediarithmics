import { useMemo, useState } from 'react';
import { App as AntApp } from 'antd';
import {
  Button,
  Card,
  DropdownGroup,
  DropdownOptionItem,
  EmptyState,
  Icon,
  Input,
  Overlay,
  ResourceTitleHeader,
  Select,
  Steps,
  TabBar,
  Table,
  TabPanel,
  type ResourceLabel,
  type TableColumnsType,
} from '../ui';
import { SegmentHeader, type SegmentMetric } from '../components/SegmentHeader';
import { SEGMENTS, type Segment } from '../data/segments';
import { scale, semantic, primitives, typography } from '../theme/micsTheme';

/**
 * Les cinq métriques du Segment Header. Les infobulles reprennent les définitions de
 * developer.mediarithmics.io : chaque identifiant est un chemin différent vers le même
 * UserPoint, et c'est le UserPoint qui porte l'appartenance au segment.
 */
const METRICS: Array<Omit<SegmentMetric, 'value'> & { field: keyof Segment }> = [
  {
    key: 'accounts',
    icon: 'users',
    label: 'User Accounts',
    field: 'userAccounts',
    hint: 'Utilisateurs identifiés dans vos systèmes (CRM, fidélité, authentification). Toujours rattachés à un compartiment.',
  },
  {
    key: 'profiles',
    icon: 'user',
    label: 'User Profiles',
    field: 'userProfiles',
    hint: "Données de profil attachées à un UserPoint. Ce n'est pas un identifiant autonome : il s'accroche à un compte, un email haché ou un user agent.",
  },
  {
    key: 'devices',
    icon: 'display',
    label: 'User Device Points',
    field: 'userDevicePoints',
    hint: 'Appareils rattachés au UserPoint. Un même UserPoint peut en avoir plusieurs, chacun avec plusieurs identifiants techniques.',
  },
  {
    key: 'installations',
    icon: 'display',
    label: 'Installation IDs',
    field: 'installationIds',
    hint: 'Cookies first-party générés par mediarithmics, au format ins:<registry>:<valeur>.',
  },
  {
    key: 'vectors',
    icon: 'display',
    label: 'Vector IDs',
    field: 'vectorIds',
    hint: 'Cookies third-party mediarithmics, au format vec:<valeur> ou mum:<valeur>.',
  },
];

const TABS = [
  { key: 'stats', label: 'Stats' },
  { key: 'overlap', label: 'Overlap' },
  { key: 'exports', label: 'Exports' },
  { key: 'features', label: 'Features and adoption' },
  { key: 'targeting', label: 'Contextual Targeting' },
];

/** Portée de la comparaison. Sélecteur « User organisation » de la maquette. */
const SCOPES = [
  { value: 'organisation', label: 'User organisation' },
  { value: 'datamart', label: 'User datamart' },
  { value: 'all', label: 'All datamarts' },
];

/**
 * Labels définis au niveau de l'organisation, proposés à l'ajout. Ceux déjà posés
 * sur le segment sont retirés de la liste par le composant.
 */
const ORGANISATION_LABELS = [
  'Test 1',
  'Test 2',
  'Test 3',
  'Test 4',
  'test_max_260526',
  'test_max_261226',
];

/** Jeux de données d'usage des features. Chaque colonne a le sien, et sa propre échelle. */
const USAGE: Record<string, Array<[string, number]>> = {
  general: [
    ['audience', 7200], ['datastudio', 950], ['settings', 850], ['home', 620], ['campaigns', 300],
    ['jobs', 120], ['dashboards', 90], ['contextual', 70], ['automations', 60], ['creatives', 45],
    ['plugins', 38], ['automation-builder', 26], ['data-collaboration', 18], ['experiments', 12],
  ],
  segment: [
    ['audience', 1400], ['settings', 380], ['datastudio', 300], ['home', 240], ['campaigns', 120],
    ['jobs', 70], ['plugins', 44], ['dashboards', 30], ['creatives', 22], ['automations', 16],
    ['contextual', 12], ['experiments', 8],
  ],
  allUsers: [
    ['audience', 1560000], ['settings', 320000], ['home', 180000], ['campaigns', 170000],
    ['datastudio', 160000], ['jobs', 95000], ['plugins', 55000], ['data-collaboration', 50000],
    ['dashboards', 30000], ['creatives', 28000], ['automations', 26000], ['contextual', 25000],
    ['file_delivery_destinations', 9000], ['experiments', 7000], ['data-store', 5200],
    ['assets', 4300], ['automation-builder', 3600], ['library', 2900], ['computed_fields', 2100],
    ['data-warehouses', 1500], ['fileDeliveryDestination', 900], ['schema-builder', 600], ['Home', 300],
  ],
};

/** Nombres en anglais : le produit est en anglais, « 20,522 » et non « 20 522 ». */
const num = (v: number) => v.toLocaleString('en-US');

/**
 * Borne haute « ronde » de l'axe : 1, 2, 2.5, 5 ou 10 fois une puissance de dix.
 * 7 200 donne 10k, 1 560 000 donne 2 000k — comme en production.
 */
function niceMax(max: number) {
  if (max <= 0) return 1;
  const exp = 10 ** Math.floor(Math.log10(max));
  const f = max / exp;
  const step = f <= 1 ? 1 : f <= 2 ? 2 : f <= 2.5 ? 2.5 : f <= 5 ? 5 : 10;
  return step * exp;
}

const tick = (v: number) => (v >= 1000 ? `${num(v / 1000)}k` : num(v));

/*
  Il y avait ici une carte locale. Elle a disparu : c'est le composant Card du DS
  qui rend la surface, avec les valeurs relevées en production — padding 15/20,
  gap 15, radius 6, sans bordure.
*/

/* ─── Onglet Stats ─────────────────────────────────────────────────────────────
   Relevé en production : une carte sans titre, un sélecteur de plage de dates à
   droite, et un graphique en aires de 400 de haut portant SIX séries — les cinq
   identifiants du Segment Header, plus le UserPoint.

   Les couleurs relevées sont exactement les sémantiques du DS. Une seule exception :
   la production dessine « Vector IDs » dans le même bleu que « User Accounts », donc
   deux séries indistinguables. On prend `info` pour Vector IDs : c'est le seul écart
   de cet onglet, et il corrige un défaut plutôt qu'il n'en invente un.
*/
const STATS_SERIES = [
  { key: 'userPoint', label: 'UserPoint', color: semantic.warning, ratio: 1 },
  { key: 'accounts', label: 'User Accounts', color: semantic.primary, ratio: 0.95 },
  { key: 'profiles', label: 'User Profiles', color: semantic.success, ratio: 0.16 },
  { key: 'devicePoints', label: 'User Device Points', color: semantic.error, ratio: 1.19 },
  { key: 'installations', label: 'Installation IDs', color: primitives.brown700, ratio: 0 },
  { key: 'vectors', label: 'Vector IDs', color: semantic.info, ratio: 0.9 },
];

const STATS_DAYS = 30;

/**
 * Série quotidienne déterministe. Pas de Math.random : deux rendus successifs
 * donneraient deux graphiques, et une capture de contrôle ne vaudrait plus rien.
 */
function statsSeries(base: number, ratio: number) {
  const start = Math.round(base * ratio);
  return Array.from({ length: STATS_DAYS + 1 }, (_, i) => {
    const drift = Math.sin(i / 3.1) * 0.02 + Math.sin(i / 7.7) * 0.015;
    const slope = -0.08 * (i / STATS_DAYS);
    return Math.max(0, Math.round(start * (1 + drift + slope)));
  });
}

/** Étiquette « 30. Jun » de l'axe des abscisses, comme en production. */
function axisDate(offsetFromEnd: number) {
  const end = new Date(Date.UTC(2026, 6, 30));
  const d = new Date(end.getTime() - offsetFromEnd * 86400000);
  return `${d.getUTCDate()}. ${d.toLocaleString('en-US', { month: 'short', timeZone: 'UTC' })}`;
}

/**
 * Graphique en aires des Stats. Dessiné dans la page, comme l'histogramme de
 * « Features and adoption » : le DS ne porte pas encore de composant de graphique.
 */
function StatsChart({ userPoint }: { userPoint: number }) {
  const W = 1000;
  const H = 320;
  const padLeft = 34;
  const padBottom = 22;
  const series = STATS_SERIES.map((s) => ({ ...s, values: statsSeries(userPoint, s.ratio) }));
  const max = niceMax(Math.max(...series.flatMap((s) => s.values), 1));
  const x = (i: number) => padLeft + (i * (W - padLeft)) / STATS_DAYS;
  const y = (v: number) => (H - padBottom) * (1 - v / max);
  const ticks = Array.from({ length: 6 }, (_, i) => (max / 5) * i);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space16 }}>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" height={340} role="img"
        aria-label={`Évolution des identifiants du segment sur ${STATS_DAYS} jours`}>
        {ticks.map((t) => (
          <g key={t}>
            {/* Grille pointillée, comme en production : elle guide sans peser. */}
            <line x1={padLeft} x2={W} y1={y(t)} y2={y(t)} stroke={semantic.borderDefault}
              strokeDasharray="3 1" strokeWidth={1} />
            <text x={padLeft - 8} y={y(t) + 4} textAnchor="end"
              style={{ ...typography.caption, fill: semantic.textLighter }}>
              {tick(t)}
            </text>
          </g>
        ))}

        {series.map((s) => {
          const line = s.values.map((v, i) => `${i ? 'L' : 'M'}${x(i)} ${y(v)}`).join(' ');
          const area = `${line} L${x(STATS_DAYS)} ${y(0)} L${x(0)} ${y(0)} Z`;
          return (
            <g key={s.key}>
              <path d={area} fill={s.color} opacity={0.12} />
              <path d={line} fill="none" stroke={s.color} strokeWidth={1.5} />
              {s.values.map((v, i) => (
                <circle key={i} cx={x(i)} cy={y(v)} r={2.5} fill={s.color} />
              ))}
            </g>
          );
        })}

        {/* Une étiquette tous les deux jours : au-delà elles se chevauchent. */}
        {Array.from({ length: STATS_DAYS / 2 + 1 }, (_, k) => k * 2).map((i) => (
          <text key={i} x={x(i)} y={H - 4} textAnchor="middle"
            style={{ ...typography.caption, fill: semantic.textLighter }}>
            {axisDate(STATS_DAYS - i)}
          </text>
        ))}
      </svg>

      {/* Légende centrée sous le graphique : pastille ronde + libellé. */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: scale.space20 }}>
        {STATS_SERIES.map((s) => (
          <span key={s.key} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: semantic.textNormal }}>
            <span aria-hidden style={{ width: 8, height: 8, borderRadius: 4, background: s.color }} />
            <span style={{ ...typography.bodyMedium }}>{s.label}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function StatsTab({ userPoint }: { userPoint: number }) {
  return (
    <Card
      actions={
        // Le sélecteur de plage de dates de la production. Le calendrier lui-même
        // n'est pas câblé : c'est un DatePicker.RangePicker du DS, à brancher.
        <Button icon={<Icon name="clock" size={14} />}>
          2026-06-30 ~ 2026-07-30
          <Icon name="chevron-bottom" size={10} style={{ marginInlineStart: scale.space8 }} />
        </Button>
      }
    >
      <StatsChart userPoint={userPoint} />
    </Card>
  );
}

/* ─── Onglet Overlap ─────────────────────────────────────────────────────────── */

function OverlapTab() {
  return (
    <Card actions={<Button icon={<Icon name="chart-bar" size={14} />}>Create overlap analysis</Button>}>
      {/*
        La production affiche l'Empty d'Ant Design : une phrase grise, sans titre.
        On rend l'état vide du DS, qui met cette phrase en message. Écart assumé de
        typographie, en faveur d'un seul état vide dans tout le produit.
      */}
      <EmptyState title="There is no available analysis for segment overlap." />
    </Card>
  );
}

/* ─── Onglet Exports ─────────────────────────────────────────────────────────── */

interface ExportRow {
  key: string;
  submission: string;
  status: string;
  progress: string;
  start: string;
  end: string;
  identifier: string;
  userPointInSegment: number;
  exportedUserPoint: number;
  exportedIdentifiers: number;
}

/** Les neuf colonnes relevées en production, dans l'ordre. */
const EXPORT_COLUMNS: TableColumnsType<ExportRow> = [
  { title: 'Submission Date', dataIndex: 'submission', width: 160 },
  { title: 'Status', dataIndex: 'status', width: 110 },
  { title: 'Progress', dataIndex: 'progress', width: 110 },
  { title: 'Start Date', dataIndex: 'start', width: 130 },
  { title: 'End Date', dataIndex: 'end', width: 130 },
  { title: 'User Identifier type', dataIndex: 'identifier', width: 170 },
  { title: 'UserPoint in segment', dataIndex: 'userPointInSegment', width: 170 },
  { title: 'Exported UserPoint (with identifiers)', dataIndex: 'exportedUserPoint', width: 250 },
  { title: 'Exported Identifiers', dataIndex: 'exportedIdentifiers', width: 160 },
];

function ExportsTab() {
  return (
    <Card actions={<Button>New export</Button>}>
      {/*
        `locale.emptyText` remplace le « No data » natif du Table par l'état vide du
        DS. La production laisse celui d'Ant Design, mais deux états vides sur la
        même page — l'un ici, l'autre dans Overlap — ne s'expliquent par rien.
        Un seul, avec son propre message. Le tableau garde ses en-têtes : elles
        disent ce qu'on verra quand il se remplira.
      */}
      <Table<ExportRow>
        size="small"
        rowKey="key"
        columns={EXPORT_COLUMNS}
        dataSource={[]}
        pagination={false}
        locale={{ emptyText: <EmptyState title="There is no export for this segment." /> }}
      />
    </Card>
  );
}

/* ─── Onglet Contextual Targeting ────────────────────────────────────────────── */

const CT_STEPS = [
  { title: 'Browsed URL analysis' },
  { title: 'Select lift' },
  { title: 'Semantic analysis' },
];

function ContextualTargetingTab() {
  return (
    // Pas de carte ici : la production pose le contenu à même le fond de page.
    // Deux colonnes 19/24 et 5/24, relevées sur la grille Ant Design.
    <div style={{ display: 'grid', gridTemplateColumns: '19fr 5fr', gap: scale.space24, alignItems: 'start' }}>
      <EmptyState
        icon="users"
        title="Use this segment as a panel for contextual targeting"
        action={<Button type="primary">Start URL analysis on this segment</Button>}
      />
      {/*
        Le stepper ANNONCE le parcours : les trois étapes sont visibles avant même
        le démarrage, d'où current={-1} — aucune n'est ni en cours ni validée.
      */}
      <Steps direction="vertical" current={-1} items={CT_STEPS} />
    </div>
  );
}

/**
 * Histogramme d'usage des features. Chaque colonne calcule SON échelle : comparer deux
 * volumes d'ordres de grandeur différents sur une échelle commune écraserait le plus
 * petit à zéro. C'est la forme des distributions qu'on compare, pas les hauteurs.
 */
function FeaturesChart({ data }: { data: Array<[string, number]> }) {
  const top = niceMax(Math.max(...data.map(([, v]) => v)));
  const ticks = [1, 0.75, 0.5, 0.25, 0].map((r) => r * top);

  return (
    <div style={{ display: 'flex', gap: scale.space8 }}>
      {/* axe des ordonnées */}
      <div
        aria-hidden
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: 180,
          ...typography.caption,
          color: semantic.textLighter,
          textAlign: 'right',
          flex: '0 0 auto',
        }}
      >
        {ticks.map((t) => (
          <span key={t}>{tick(t)}</span>
        ))}
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ position: 'relative', height: 180 }}>
          {/* lignes de repère, alignées sur les graduations */}
          {ticks.map((t) => (
            <div
              key={t}
              aria-hidden
              style={{
                position: 'absolute',
                insetInline: 0,
                bottom: `${(t / top) * 100}%`,
                borderTop: `1px solid ${semantic.borderInput}`,
              }}
            />
          ))}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', gap: 4 }}>
            {data.map(([label, v]) => (
              <div
                key={label}
                title={`${label} : ${num(v)}`}
                style={{ flex: 1, height: `${(v / top) * 100}%`, background: semantic.primary, minHeight: 1 }}
              />
            ))}
          </div>
        </div>

        {/*
          Libellés inclinés à 45° : les noms de features sont trop longs pour tenir à plat.
          La rotation part du coin HAUT-DROIT de chaque libellé, ancré sous sa barre :
          le texte descend alors vers la gauche. Ancré en haut-gauche, il remonterait
          dans l'aire du graphique et la recouvrirait.
        */}
        <div style={{ display: 'flex', gap: 4, height: 104, marginTop: scale.space8 }}>
          {data.map(([label]) => (
            <div key={label} style={{ flex: 1, minWidth: 0, position: 'relative' }}>
              <span
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  transform: 'rotate(-45deg)',
                  transformOrigin: '100% 0',
                  ...typography.caption,
                  color: semantic.primary,
                  whiteSpace: 'nowrap',
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AdoptionFunnel({ factor = 1 }: { factor?: number }) {
  const steps = [
    { label: 'active users', color: primitives.blue900, h: 100 },
    { label: 'at least 20', color: primitives.blue700, h: 92 },
    { label: 'at least 100', color: primitives.blueMain, h: 80 },
    { label: 'at least 150', color: primitives.blue300, h: 70 },
  ];
  return (
    <div style={{ display: 'flex', gap: scale.space16, alignItems: 'flex-end', height: 160 }}>
      {steps.map((s) => (
        <div key={s.label} style={{ flex: 1, height: `${Math.min(100, s.h * factor)}%`, background: s.color }} />
      ))}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: 110, flex: '0 0 auto' }}>
        {steps.map((s) => (
          <span key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 6, color: semantic.textNormal }}>
            <span style={{ width: 8, height: 8, borderRadius: 4, background: s.color }} />
            {s.label}
          </span>
        ))}
      </div>
    </div>
  );
}

interface Column {
  key: string;
  title: string;
  userPoint: number;
  usage: Array<[string, number]>;
  funnelFactor: number;
}

/**
 * Détail d'un segment (Figma 239:3843 pour l'onglet « Features and adoption »).
 * En-tête de ressource, Segment Header, onglets internes, puis colonnes de comparaison.
 */
export function SegmentDetail({ segment }: { segment: Segment }) {
  // Stats à l'arrivée, comme en production : la première question devant un segment
  // est « combien, et depuis quand », pas l'adoption des features.
  const [tab, setTab] = useState('stats');
  // « Volume Drop Alerts Disabled » est posé par la plateforme : tag non fermable.
  const [labels, setLabels] = useState<ResourceLabel[]>([
    { key: 'vda', label: 'Volume Drop Alerts Disabled', system: true },
  ]);
  const [scope, setScope] = useState('organisation');
  const [appliedScope, setAppliedScope] = useState('organisation');
  /**
   * UN SEUL terme de comparaison à la fois : soit un segment, soit tous les
   * utilisateurs. Les deux boutons alimentent donc la même valeur et se remplacent.
   */
  const [compared, setCompared] = useState<string | null>(null);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [pickerSearch, setPickerSearch] = useState('');
  const { message } = AntApp.useApp();

  const metrics: SegmentMetric[] = METRICS.map((m) => ({ ...m, value: Number(segment[m.field]) }));

  /**
   * Colonnes affichées : l'usage général, le segment courant, puis chaque terme de
   * comparaison ajouté. « Compare to all users » et « Compare to segments » alimentent
   * la même liste — comparer à tous les utilisateurs, c'est comparer à un ensemble de plus.
   */
  /**
   * Deux colonnes, toujours. À gauche l'usage général, à droite le segment — ou le terme
   * de comparaison quand il y en a un. Comparer REMPLACE la colonne du segment : c'est ce
   * que fait la production, et c'est ce qui garde les deux colonnes lisibles côte à côte.
   */
  const columns: Column[] = useMemo(() => {
    const general: Column = {
      key: 'general',
      title: 'General usage',
      userPoint: 192,
      usage: USAGE.general,
      funnelFactor: 1,
    };
    if (!compared) {
      return [
        general,
        { key: segment.id, title: segment.name, userPoint: segment.userPoint, usage: USAGE.segment, funnelFactor: 0.7 },
      ];
    }
    if (compared === '__all__') {
      return [general, { key: '__all__', title: 'All users', userPoint: 20522, usage: USAGE.allUsers, funnelFactor: 1 }];
    }
    const other = SEGMENTS.find((x) => x.id === compared);
    return [
      general,
      {
        key: compared,
        title: other?.name ?? compared,
        userPoint: other?.userPoint ?? 0,
        usage: USAGE.segment,
        funnelFactor: 0.8,
      },
    ];
  }, [segment, compared]);

  /** Segments proposés dans le drawer : tous sauf celui affiché, filtrés par la recherche. */
  const pickerResults = useMemo(() => {
    const q = pickerSearch.trim().toLowerCase();
    return SEGMENTS.filter(
      (x) => x.id !== segment.id && (!q || x.name.toLowerCase().includes(q) || x.technicalName.toLowerCase().includes(q)),
    );
  }, [pickerSearch, segment.id]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space16 }}>
      <ResourceTitleHeader
        title={segment.name}
        type="User Query"
        typeIcon="user-query"
        created={`Created on ${segment.creationDate} - 11:11:49`}
        labels={labels}
        availableLabels={ORGANISATION_LABELS}
        onAddLabel={(label) => setLabels((l) => [...l, { key: label, label }])}
        onRemoveLabel={(key) => setLabels((l) => l.filter((x) => x.key !== key))}
      />

      <SegmentHeader userPoint={segment.userPoint} metrics={metrics} computedAt="22/07/2026 - 12:21:19" />

      {/* Onglets + actions de comparaison, puis les colonnes. Gap 35 entre les deux blocs. */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space35, marginTop: scale.space16 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space16 }}>
          <TabBar active={tab} onChange={setTab} idPrefix="segment" items={TABS} />

          {tab === 'features' && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: scale.space12 }}>
              {compared ? (
                // Une comparaison est en cours : une seule sortie, et elle est explicite.
                <>
                  <Button icon={<Icon name="close" size={12} />} onClick={() => setCompared(null)}>
                    Stop comparing
                  </Button>
                  <span
                    aria-hidden
                    style={{ width: 1, alignSelf: 'stretch', background: semantic.borderInput, marginInline: scale.space4 }}
                  />
                </>
              ) : (
                <>
                  <Button
                    icon={<Icon name="table" size={14} />}
                    onClick={() => {
                      setPickerSearch('');
                      setPickerOpen(true);
                    }}
                  >
                    Compare to segments
                  </Button>
                  <Button icon={<Icon name="users" size={14} />} onClick={() => setCompared('__all__')}>
                    Compare to all users
                  </Button>
                  <Button
                    icon={<Icon name="download" size={14} />}
                    onClick={() => message.success('Export lancé : un fichier NDJSON sera disponible dans Exports.')}
                  >
                    Export
                  </Button>
                </>
              )}
              <Select
                options={SCOPES}
                value={scope}
                onChange={(v) => setScope(v)}
                width={240}
                aria-label="Portée de la comparaison"
              />
              <Button
                type="primary"
                disabled={scope === appliedScope}
                onClick={() => {
                  setAppliedScope(scope);
                  message.success(`Comparaison recalculée sur « ${SCOPES.find((s) => s.value === scope)?.label} ».`);
                }}
              >
                Apply
              </Button>
            </div>
          )}
        </div>

        {tab === 'features' ? (
          <TabPanel tabKey="features" idPrefix="segment">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))`,
                gap: scale.space16,
              }}
            >
              {columns.map((col) => (
                <div key={col.key} style={{ display: 'flex', flexDirection: 'column', gap: scale.space16, minWidth: 0 }}>
                  <span
                    style={{
                      ...typography.caption,
                      letterSpacing: scale.trackingCaps,
                      textTransform: 'uppercase',
                      color: semantic.textLighter,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                    title={col.title}
                  >
                    {col.title}
                  </span>

                  <Card title="Features usage">
                    <FeaturesChart data={col.usage} />
                  </Card>

                  <Card title="Total user points">
                    <span style={{ ...typography.headline3, color: semantic.textDarker }}>{num(col.userPoint)}</span>
                    <span style={{ color: semantic.textNormal }}>
                      Adoption funnel based on page views (last 30 days)
                    </span>
                    <AdoptionFunnel factor={col.funnelFactor} />
                  </Card>
                </div>
              ))}
            </div>
          </TabPanel>
        ) : (
          <TabPanel tabKey={tab} idPrefix="segment">
            {tab === 'stats' && <StatsTab userPoint={segment.userPoint} />}
            {tab === 'overlap' && <OverlapTab />}
            {tab === 'exports' && <ExportsTab />}
            {tab === 'targeting' && <ContextualTargetingTab />}
          </TabPanel>
        )}
      </div>

      {/*
        Drawer et non modale : choisir les segments à comparer dépend de ce qui est
        déjà affiché à l'écran. Une modale masquerait précisément les colonnes qui
        servent à décider. C'est la règle « jamais de modale pour une décision qui
        dépend de ce qu'elle masque » — et c'est aussi ce que fait la production.
      */}
      <Overlay
        open={pickerOpen}
        mode="drawer"
        title="Compare to segments"
        headerTheme="light"
        onClose={() => setPickerOpen(false)}
        width={520}
      >
        <p style={{ color: semantic.textNormal, margin: `0 0 ${scale.space16}px` }}>
          Un seul segment de comparaison à la fois. Cliquer sur un segment lance la comparaison
          immédiatement : il n'y a rien à valider, et la croix ferme sans rien changer.
        </p>

        {/* Pattern de recherche : pas de label visible, loupe à droite comme dans la Toolbar. */}
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
              {/*
                Choix unique appliqué au clic : Option Item, et le drawer se ferme. Pas de
                footer — c'est la variante « sélecteur sans validation » de l'Overlay. Un
                bouton Valider pour un choix unique et réversible n'ajoute qu'un clic.
              */}
              {pickerResults.map((x) => (
                <DropdownOptionItem
                  key={x.id}
                  label={x.name}
                  selected={compared === x.id}
                  onSelect={() => {
                    setCompared(x.id);
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
