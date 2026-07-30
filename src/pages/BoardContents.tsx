import type { ReactNode } from 'react';
import { Card, Counter, Table, type TableColumnsType } from '../ui';
import { BarChart, ChannelChart, ColumnChart, Legend, PieChart, SERIES_COLORS } from './BoardCharts';
import { scale, semantic, typography } from '../theme/micsTheme';

/*
  Contenu des tableaux de bord, décrit en DONNÉES et rendu par un seul lecteur.
  Huit boards écrits à la main en JSX, c'était huit endroits à corriger le jour où
  la grille change.

  Les libellés, les types de graphique, les largeurs de carte et les sous-titres sont
  RELEVÉS sur https://navigator.mediarithmics.com/#/v2/o/1278/home, onglet par onglet.
  Les valeurs, elles, sont représentatives : les graphiques de production sont rendus
  par Highcharts, qui n'expose pas ses séries dans le DOM.
*/

type Block =
  | { kind: 'columns'; title?: string; categories: string[]; series: Array<{ label: string; values: number[] }>; rotate?: boolean }
  | { kind: 'bars'; title?: string; data: Array<[string, number]> }
  | { kind: 'pie'; title?: string; data: Array<[string, number]> }
  | { kind: 'metric'; title: string; value: number | string }
  | { kind: 'table'; title?: string; columns: string[]; rows: string[][] }
  | { kind: 'channel'; title?: string; series: Array<{ label: string; points: Array<[number, number]> }>; max?: number }
  | { kind: 'error'; title?: string; message: string };

interface CardSpec {
  /** Part de la rangée, en fractions de grille. Relevé : 532/1073/1615 sur 1615. */
  span?: number;
  /** Titre porté par l'en-tête de la Card. Absent = pas d'en-tête. */
  title?: string;
  blocks: Block[];
  /** Blocs côte à côte plutôt qu'empilés (une carte à deux ou trois graphiques). */
  side?: boolean;
}

interface Row {
  subtitle?: string;
  cards: CardSpec[];
}

const cat = (n: number, prefix: string) => Array.from({ length: n }, (_, i) => `${prefix} ${i + 1}`);

/** Série déterministe : deux rendus successifs donnent le même graphique. */
const serie = (label: string, n: number, base: number, decay = 0.72) => ({
  label,
  values: Array.from({ length: n }, (_, i) => Math.round(base * decay ** i * (1 + Math.sin(i) * 0.08))),
});

const BOARDS: Record<string, Row[]> = {
  activities: [
    {
      cards: [
        {
          span: 1,
          blocks: [
            { kind: 'metric', title: '# user points', value: 20388 },
            { kind: 'metric', title: 'Active users', value: 1941 },
            { kind: 'metric', title: 'Average number of events per session', value: '6.17' },
          ],
        },
        {
          span: 2,
          title: 'Daily users by channel',
          blocks: [
            {
              kind: 'channel',
              series: [
                { label: 'navigator', points: [[0.5, 3100]] },
                { label: 'computing console', points: [[0.5, 900]] },
              ],
            },
          ],
        },
      ],
    },
    {
      cards: [
        {
          side: true,
          blocks: [
            {
              kind: 'columns',
              title: 'Browsers (last 30 days)',
              categories: ['OTHER', 'CHROME', 'FIREFOX', 'SAFARI', 'MICROSOFT_EDGE'],
              series: [{ label: 'Sessions', values: [120, 4200, 210, 20, 260] }],
            },
            {
              kind: 'columns',
              title: 'Form factors (last 30 days)',
              categories: ['OTHER', 'PERSONAL_COMPUTER', 'SMARTPHONE'],
              series: [{ label: 'Sessions', values: [30, 4400, 40] }],
            },
            {
              kind: 'columns',
              title: 'Device OS (last 30 days)',
              categories: ['OTHER', 'WINDOWS', 'MAC_OS', 'LINUX', 'ANDROID'],
              series: [{ label: 'Sessions', values: [20, 900, 220, 3900, 25] }],
            },
          ],
        },
      ],
    },
    {
      subtitle: 'Retrieved events',
      cards: [
        {
          side: true,
          blocks: [
            { kind: 'metric', title: 'Number of different event names retrieved', value: 494 },
            {
              kind: 'columns',
              title: 'Events per name',
              rotate: true,
              categories: [
                'PageView', 'RunQuery', 'SearchBar', 'CreateSegment', 'SaveChart', 'CreateExport',
                '$cleaned_ref', '$app_open', 'confirm(1)', 'prompt(1)', 'console.log', 'return "a"',
              ],
              series: [{ label: 'Events', values: [2650000, 320000, 210000, 90000, 60000, 40000, 30000, 22000, 11000, 9000, 7000, 5500] }],
            },
          ],
        },
      ],
    },
  ],

  builders: [
    {
      subtitle: 'Section',
      cards: [
        {
          title: 'Used builder for customers in 50 days',
          blocks: [{ kind: 'error', message: 'Error' }],
        },
        {
          title: 'Used builder for customers in 50 days',
          blocks: [{ kind: 'error', message: 'Error' }],
        },
      ],
    },
  ],

  campaigns: [
    {
      subtitle: 'Last 30 days analysis',
      cards: [
        {
          span: 5,
          title: 'Users (last 30 days)',
          blocks: [
            {
              kind: 'columns',
              categories: ['Display', 'Email', 'Search', 'Social', 'Video'],
              series: [serie('Impressions', 5, 42000), serie('Clicks', 5, 3100), serie('Conversions', 5, 480)],
            },
          ],
        },
        { span: 1, title: 'Feature users', blocks: [{ kind: 'metric', title: 'Feature users', value: 312 }] },
      ],
    },
  ],

  client: [
    {
      subtitle: 'Section',
      cards: [
        {
          title: 'User Engagement Breakdown',
          blocks: [
            {
              kind: 'columns',
              categories: ['1 session', '2-3', '4-6', '7-10', '11-20', '20+'],
              series: [serie('Users', 6, 8600)],
            },
          ],
        },
      ],
    },
    {
      cards: [
        {
          title: 'Active Users Breakdown',
          blocks: [
            {
              kind: 'columns',
              categories: ['Daily', 'Weekly', 'Monthly', 'Quarterly'],
              series: [serie('Active users', 4, 2400, 0.6)],
            },
          ],
        },
      ],
    },
    {
      cards: [
        {
          title: 'Drilldown_features_journey_90D',
          blocks: [
            {
              kind: 'bars',
              data: [
                ['audience / segments / dashboard', 41000],
                ['audience / segments / list', 33000],
                ['datastudio / query-tool', 21000],
                ['settings / datamart / schema', 14000],
                ['campaigns / display / list', 9200],
                ['automations / builder', 6100],
              ],
            },
          ],
        },
      ],
    },
  ],

  dataviz: [
    {
      subtitle: 'Dashboards',
      cards: [
        {
          title: 'Adoption funnel',
          blocks: [
            {
              kind: 'columns',
              categories: ['Opened', 'Filtered', 'Compared', 'Exported'],
              series: [
                serie('All users', 4, 3200),
                serie('Analysts', 4, 1800),
                serie('Admins', 4, 900),
                serie('Guests', 4, 240),
              ],
            },
          ],
        },
      ],
    },
    {
      subtitle: 'Query tool',
      cards: [
        {
          title: 'Per organisation adoption',
          blocks: [
            {
              kind: 'columns',
              categories: cat(6, 'Org'),
              series: [serie('Queries run', 6, 5400), serie('Charts saved', 6, 1200)],
            },
          ],
        },
      ],
    },
    { subtitle: 'Charts saving/loading', cards: [] },
  ],

  demo: [
    {
      subtitle: 'User points',
      cards: [
        { span: 2, title: '# user points', blocks: [{ kind: 'metric', title: '# user points', value: 1284000 }] },
        {
          span: 3,
          side: true,
          title: 'New user points',
          blocks: [
            {
              kind: 'columns',
              title: 'New user points per month by account',
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
              series: [serie('Accounts', 6, 42000, 0.94), serie('Anonymous', 6, 96000, 0.92)],
            },
            {
              kind: 'columns',
              title: 'New user points per profile source',
              categories: ['Web', 'App', 'CRM'],
              series: [serie('Web', 3, 78000), serie('App', 3, 41000), serie('CRM', 3, 12000)],
            },
          ],
        },
      ],
    },
    {
      subtitle: 'Ingestion volumes',
      cards: [
        {
          span: 2,
          title: 'User points breakdown',
          blocks: [
            {
              kind: 'columns',
              categories: ['Known', 'Anonymous', 'Merged'],
              series: [serie('User points', 3, 640000, 0.55)],
            },
          ],
        },
        {
          span: 3,
          side: true,
          blocks: [
            {
              kind: 'columns',
              title: 'User Engagement Breakdown',
              categories: ['1', '2-3', '4-6', '7+'],
              series: [serie('Users', 4, 210000)],
            },
            {
              kind: 'columns',
              title: 'Active Users Breakdown',
              categories: ['Daily', 'Weekly', 'Monthly'],
              series: [serie('Active', 3, 88000, 0.62)],
            },
          ],
        },
      ],
    },
  ],

  features: [
    {
      cards: [
        {
          span: 2,
          side: true,
          title: 'Last 30 days !',
          blocks: [
            {
              kind: 'columns',
              title: '#events by route (drilldown)',
              categories: ['audience', 'settings', 'campaigns', 'home', 'datastudio', 'jobs'],
              series: [serie('Events', 6, 29000)],
            },
          ],
        },
        {
          span: 1,
          title: 'Adoption funnel based on page views',
          blocks: [
            {
              kind: 'columns',
              categories: ['Active', '≥ 20', '≥ 100', '≥ 150'],
              series: [
                serie('All', 4, 2400, 0.55),
                serie('Q1', 4, 1600, 0.55),
                serie('Q2', 4, 1100, 0.55),
                serie('Q3', 4, 700, 0.55),
              ],
            },
          ],
        },
      ],
    },
    {
      cards: [
        {
          title: 'Features usage',
          blocks: [
            {
              kind: 'columns',
              categories: [
                'audience', 'settings', 'campaigns', 'home', 'dashboards', 'jobs',
                'plugins', 'creatives', 'assets', 'experiments', 'file delivery', 'datastore',
              ],
              series: [serie('Usage', 12, 29000)],
              rotate: true,
            },
          ],
        },
      ],
    },
  ],

  havas: [
    {
      subtitle: 'Section',
      cards: [
        {
          title: 'User Engagement over time',
          blocks: [
            {
              kind: 'columns',
              categories: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8'],
              series: [serie('Sessions', 8, 12400, 0.97), serie('Users', 8, 4100, 0.97), serie('Events', 8, 38000, 0.97)],
            },
          ],
        },
      ],
    },
    {
      cards: [
        {
          span: 1,
          title: 'Active Users frequency',
          blocks: [
            {
              kind: 'table',
              columns: ['Frequency', 'Users', 'Share'],
              rows: [
                ['Every day', '412', '18 %'],
                ['2-3 per week', '867', '38 %'],
                ['Once a week', '640', '28 %'],
                ['Less often', '355', '16 %'],
              ],
            },
          ],
        },
        {
          span: 1,
          title: 'Active Users breakdown',
          blocks: [
            {
              kind: 'pie',
              data: [
                ['Navigator', 1420],
                ['Computing console', 610],
                ['API only', 244],
              ],
            },
          ],
        },
      ],
    },
  ],

  orgs: [
    {
      subtitle: 'Top organisations',
      cards: [
        {
          title: 'Users (last 30 days)',
          blocks: [
            {
              kind: 'columns',
              categories: ['mediarithmics', 'Havas', 'Valiuz', 'FNAC-DARTY', 'Leboncoin', 'TV Azteca'],
              series: [serie('Users', 6, 2100), serie('Sessions', 6, 7400)],
            },
          ],
        },
      ],
    },
  ],
};

function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case 'columns':
      return <ColumnChart categories={block.categories} series={block.series} rotateLabels={block.rotate} />;
    case 'bars':
      return <BarChart data={block.data} />;
    case 'pie':
      return <PieChart data={block.data} />;
    case 'channel':
      return <ChannelChart series={block.series} max={block.max} />;
    case 'metric':
      return <Counter title={block.title} value={block.value} />;
    case 'table':
      return (
        <Table
          size="small"
          pagination={false}
          rowKey={(r: Record<string, string>) => r.c0}
          columns={block.columns.map((c, i) => ({ title: c, dataIndex: `c${i}` })) as TableColumnsType<Record<string, string>>}
          dataSource={block.rows.map((r) => Object.fromEntries(r.map((v, i) => [`c${i}`, v])))}
        />
      );
    case 'error':
      /*
        La production affiche « Error » à la place du graphique sur ce board. L'état
        vide du DS ne conviendrait pas : sa règle dit qu'il explique une ABSENCE de
        données, pas un échec. Un vrai composant Alert est ce qu'il faudrait ici.
      */
      return (
        <span role="status" style={{ ...typography.body, color: semantic.error }}>
          {block.message}
        </span>
      );
  }
}

/** Un bloc et son titre propre, quand la carte en porte plusieurs. */
function TitledBlock({ block }: { block: Block }) {
  const title = 'title' in block && block.kind !== 'metric' ? block.title : undefined;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space16, minWidth: 0 }}>
      {title && <span style={{ ...typography.bodyLarge, color: semantic.textNormal }}>{title}</span>}
      <BlockView block={block} />
    </div>
  );
}

/**
 * Met les valeurs d'un bloc à l'échelle du segment comparé. Le facteur est le même
 * pour toute la colonne : c'est la FORME des distributions qu'on compare, et un
 * facteur par bloc la déformerait.
 */
function scaleBlock(block: Block, factor: number): Block {
  switch (block.kind) {
    case 'columns':
      return { ...block, series: block.series.map((s) => ({ ...s, values: s.values.map((v) => Math.round(v * factor)) })) };
    case 'bars':
      return { ...block, data: block.data.map(([l, v]) => [l, Math.round(v * factor)] as [string, number]) };
    case 'pie':
      return { ...block, data: block.data.map(([l, v]) => [l, Math.round(v * factor)] as [string, number]) };
    case 'channel':
      return { ...block, series: block.series.map((s) => ({ ...s, points: s.points.map(([x, y]) => [x, Math.round(y * factor)] as [number, number]) })) };
    case 'metric':
      return typeof block.value === 'number'
        ? { ...block, value: Math.round(block.value * factor) }
        : { ...block, value: (Number(block.value) * factor).toFixed(2) };
    default:
      return block;
  }
}

/** En-tête de colonne : le périmètre, en capitales, comme en production. */
function ColumnHeader({ children }: { children: string }) {
  return (
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
      title={children}
    >
      {children}
    </span>
  );
}

function CardsGrid({ row, factor, stack }: { row: Row; factor: number; stack: boolean }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: row.cards.map((c) => `${c.span ?? 1}fr`).join(' '),
        gap: scale.space16,
        alignItems: 'start',
      }}
    >
      {row.cards.map((c, ci) => (
        <Card key={ci} title={c.title}>
          <div
            style={
              // En comparaison la colonne fait la moitié de la largeur : les blocs
              // côte à côte s'empilent, sinon les graphiques deviennent illisibles.
              c.side && !stack
                ? { display: 'grid', gridTemplateColumns: `repeat(${c.blocks.length}, minmax(0, 1fr))`, gap: scale.space24 }
                : { display: 'flex', flexDirection: 'column', gap: scale.space16 }
            }
          >
            {c.blocks.map((b, bi) => (
              <TitledBlock key={bi} block={factor === 1 ? b : scaleBlock(b, factor)} />
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}

export function BoardContent({ board, compared }: { board: string; compared?: string | null }): ReactNode {
  const rows = BOARDS[board];
  if (!rows) return null;

  /*
    Le segment comparé est plus petit que le périmètre global : la colonne de droite
    est mise à l'échelle. Chaque graphique garde SA propre échelle d'axe — comparer
    deux ordres de grandeur sur une échelle commune écraserait le plus petit à zéro.
  */
  const FACTOR = 0.11;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space16 }}>
      {rows.map((row, ri) => (
        <div key={ri} style={{ display: 'flex', flexDirection: 'column', gap: scale.space16 }}>
          {!compared && row.subtitle && (
            <h2 style={{ margin: 0, ...typography.bodyLarge, color: semantic.textNormal }}>{row.subtitle}</h2>
          )}

          {row.cards.length > 0 &&
            (compared ? (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: scale.space24, alignItems: 'start' }}>
                {[
                  // Première rangée : le périmètre de chaque colonne. Ensuite, chaque
                  // colonne reprend le sous-titre de sa section — c'est la production.
                  { label: ri === 0 ? 'Current scope' : row.subtitle ?? '', factor: 1 },
                  { label: ri === 0 ? compared : row.subtitle ?? '', factor: FACTOR },
                ].map((col, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: scale.space8, minWidth: 0 }}>
                    {col.label && <ColumnHeader>{col.label}</ColumnHeader>}
                    <CardsGrid row={{ ...row, cards: row.cards }} factor={col.factor} stack />
                  </div>
                ))}
              </div>
            ) : (
              <CardsGrid row={row} factor={1} stack={false} />
            ))}
        </div>
      ))}
    </div>
  );
}

export { Legend, SERIES_COLORS };
