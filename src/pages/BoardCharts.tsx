import { scale, semantic, typography } from '../theme/micsTheme';

/*
  Formes de graphique des tableaux de bord, DESSINÉES DANS LA PAGE.

  Décision produit : le DS ne porte pas de composant de graphique, chaque forme est
  dessinée là où elle sert. Elles sont regroupées ici plutôt que dispersées dans les
  pages — quatre formes proches dans deux fichiers, c'était le début d'une dérive.

  Les couleurs de série viennent des sémantiques du DS, dans l'ordre relevé sur le
  graphique Stats de la production : primary, warning, success, error, brown, info.
*/

export const SERIES_COLORS = [
  semantic.primary,
  semantic.warning,
  semantic.success,
  semantic.error,
  semantic.info,
];

/** Borne haute « ronde » de l'axe, comme `niceMax` du détail de segment. */
function niceMax(max: number) {
  if (max <= 0) return 1;
  const exp = 10 ** Math.floor(Math.log10(max));
  const f = max / exp;
  return (f <= 1 ? 1 : f <= 2 ? 2 : f <= 2.5 ? 2.5 : f <= 5 ? 5 : 10) * exp;
}

/** Format court des graduations : 3M, 1.2k, 480. */
export function tickLabel(v: number) {
  if (v >= 1e6) return `${Math.round(v / 1e5) / 10}M`;
  if (v >= 1000) return `${Math.round(v / 100) / 10}k`;
  return `${Math.round(v)}`;
}

interface Serie {
  label: string;
  values: number[];
}

/** Graduations et grille horizontale, partagées par les formes à axe vertical. */
function Grid({ ticks, max }: { ticks: number[]; max: number }) {
  return (
    <>
      {ticks.map((t) => (
        <span
          key={t}
          aria-hidden
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: `${(t / max) * 100}%`,
            borderTop: `1px solid ${semantic.borderDefault}`,
          }}
        />
      ))}
    </>
  );
}

function Axis({ ticks, width = 34 }: { ticks: number[]; width?: number }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column-reverse', justifyContent: 'space-between', width }}>
      {ticks.map((t) => (
        <span key={t} style={{ ...typography.caption, color: semantic.textLighter, textAlign: 'right' }}>
          {tickLabel(t)}
        </span>
      ))}
    </div>
  );
}

/** Légende horizontale, centrée. Pastille ronde + libellé. */
export function Legend({ items }: { items: Array<{ label: string; color: string }> }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: scale.space20 }}>
      {items.map((i) => (
        <span key={i.label} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: semantic.textNormal }}>
          <span aria-hidden style={{ width: 8, height: 8, borderRadius: 4, background: i.color }} />
          <span style={{ ...typography.bodyMedium }}>{i.label}</span>
        </span>
      ))}
    </div>
  );
}

/**
 * Histogramme vertical. Une ou plusieurs séries : à plusieurs, les barres sont
 * groupées par catégorie, comme le fait la production sur « Users (last 30 days) ».
 */
export function ColumnChart({
  categories,
  series,
  height = 250,
  rotateLabels = false,
}: {
  categories: string[];
  series: Serie[];
  height?: number;
  rotateLabels?: boolean;
}) {
  const max = niceMax(Math.max(...series.flatMap((s) => s.values), 1));
  const ticks = [0, max / 3, (max * 2) / 3, max];
  const multi = series.length > 1;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space12 }}>
      <div style={{ display: 'flex', gap: scale.space8, height }}>
        <Axis ticks={ticks} />
        <div style={{ position: 'relative', flex: 1, minWidth: 0 }}>
          <Grid ticks={ticks} max={max} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', gap: scale.space16 }}>
            {categories.map((cat, ci) => (
              // height: 100% est indispensable : un pourcentage contre un parent de
              // hauteur automatique se résout à zéro, et les barres restent plates.
              <div
                key={cat}
                style={{
                  flex: 1,
                  minWidth: 0,
                  height: '100%',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  gap: 2,
                }}
              >
                {series.map((s, si) => (
                  <div
                    key={s.label}
                    title={`${s.label} — ${cat} : ${s.values[ci].toLocaleString('en-US')}`}
                    style={{
                      width: multi ? `${70 / series.length}%` : '70%',
                      height: `${(s.values[ci] / max) * 100}%`,
                      minHeight: s.values[ci] ? 2 : 0,
                      background: SERIES_COLORS[si % SERIES_COLORS.length],
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: scale.space16, marginLeft: 42, height: rotateLabels ? 80 : 20 }}>
        {categories.map((cat) => (
          <div key={cat} style={{ flex: 1, minWidth: 0, position: 'relative' }}>
            <span
              title={cat}
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
            >
              {cat}
            </span>
          </div>
        ))}
      </div>

      {multi && <Legend items={series.map((s, i) => ({ label: s.label, color: SERIES_COLORS[i % SERIES_COLORS.length] }))} />}
    </div>
  );
}

/**
 * Histogramme HORIZONTAL. Réservé aux libellés longs : c'est le seul cas où incliner
 * les étiquettes ne suffit plus, et la production l'utilise pour les drilldowns.
 */
export function BarChart({ data }: { data: Array<[string, number]> }) {
  const max = niceMax(Math.max(...data.map(([, v]) => v), 1));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space8 }}>
      {data.map(([label, v]) => (
        <div key={label} style={{ display: 'flex', alignItems: 'center', gap: scale.space12 }}>
          <span
            title={label}
            style={{
              width: 220,
              flex: '0 0 auto',
              ...typography.caption,
              color: semantic.textLighter,
              textAlign: 'right',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {label}
          </span>
          <div style={{ flex: 1, minWidth: 0, height: 16, background: semantic.bgWindow }}>
            <div
              title={v.toLocaleString('en-US')}
              style={{ width: `${(v / max) * 100}%`, height: '100%', background: semantic.primary }}
            />
          </div>
          <span style={{ width: 56, flex: '0 0 auto', ...typography.caption, color: semantic.textNormal }}>
            {tickLabel(v)}
          </span>
        </div>
      ))}
    </div>
  );
}

/**
 * Camembert. Le chiffre est TOUJOURS dans la légende : sur un camembert on compare
 * des angles, ce qui ne permet pas de lire une valeur — la couleur seule ne dit rien.
 */
export function PieChart({ data, size = 180 }: { data: Array<[string, number]>; size?: number }) {
  const total = data.reduce((n, [, v]) => n + v, 0) || 1;
  let start = 0;
  const slices = data.map(([label, v], i) => {
    const from = start;
    const to = start + (v / total) * 360;
    start = to;
    return { label, v, from, to, color: SERIES_COLORS[i % SERIES_COLORS.length] };
  });

  const point = (angle: number) => {
    const r = (angle - 90) * (Math.PI / 180);
    return [50 + 50 * Math.cos(r), 50 + 50 * Math.sin(r)];
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: scale.space24, flexWrap: 'wrap' }}>
      <svg viewBox="0 0 100 100" width={size} height={size} role="img" aria-label="Répartition">
        {slices.map((s) => {
          const [x1, y1] = point(s.from);
          const [x2, y2] = point(s.to);
          const large = s.to - s.from > 180 ? 1 : 0;
          return (
            <path
              key={s.label}
              d={`M50 50 L${x1} ${y1} A50 50 0 ${large} 1 ${x2} ${y2} Z`}
              fill={s.color}
            />
          );
        })}
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space4 }}>
        {slices.map((s) => (
          <span key={s.label} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: semantic.textNormal }}>
            <span aria-hidden style={{ width: 8, height: 8, borderRadius: 4, background: s.color }} />
            <span style={{ ...typography.bodyMedium }}>{s.label}</span>
            <span style={{ ...typography.body, color: semantic.textLighter }}>
              {Math.round((s.v / total) * 100)} % · {s.v.toLocaleString('en-US')}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
