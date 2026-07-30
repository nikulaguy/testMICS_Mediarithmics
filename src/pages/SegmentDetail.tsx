import { useMemo, useState } from 'react';
import { App as AntApp } from 'antd';
import {
  Button,
  DropdownGroup,
  DropdownOptionItem,
  EmptyBlock,
  Icon,
  Input,
  Overlay,
  ResourceTitleHeader,
  Select,
  TabBar,
  TabPanel,
  type ResourceLabel,
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

function Card({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <section
      style={{
        background: semantic.bgContainer,
        borderRadius: scale.radiusCard,
        padding: scale.space20,
        display: 'flex',
        flexDirection: 'column',
        gap: scale.space16,
      }}
    >
      {title && <span style={{ ...typography.bodyMedium, color: semantic.textDarker }}>{title}</span>}
      {children}
    </section>
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
  const [tab, setTab] = useState('features');
  const [labels, setLabels] = useState<ResourceLabel[]>([{ key: 'vda', label: 'Volume Drop Alerts Disabled' }]);
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
          <Card>
            <span style={{ color: semantic.textLighter }}>
              L'onglet « {TABS.find((t) => t.key === tab)?.label} » n'est pas maquetté : hors périmètre de ce test.
            </span>
          </Card>
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
            <EmptyBlock
              title="Aucun segment ne correspond"
              description="Essayez un autre terme de recherche."
            />
          )}
        </div>
      </Overlay>
    </div>
  );
}
