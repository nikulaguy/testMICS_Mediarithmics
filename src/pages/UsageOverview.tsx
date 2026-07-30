import { Card, Counter, Select } from '../ui';
import { scale, semantic } from '../theme/micsTheme';

/*
  Cet écran redessinait sa propre Card, son propre titre de carte et son propre
  Counter. Les trois viennent maintenant du DS : c'est la seule façon qu'une
  correction de surface se propage sans qu'on repasse écran par écran.
*/

/*
  L'icône info des titres de carte est passée dans l'infobulle du Counter, là où
  elle appartient : c'est la métrique qui a besoin d'être expliquée, pas la carte.
*/

const BREAKDOWN = [
  { label: 'Cohort lookalike', value: 0 },
  { label: 'Experiment', value: 2 },
  { label: 'File import', value: 0 },
  { label: 'Partition', value: 0 },
  { label: 'Pixel', value: 0 },
  { label: 'Query', value: 24 },
];

const OVER_TIME = [
  92, 4, 3, 3, 3, 4, 3, 3, 4, 5, 6, 4, 3, 5, 6, 7, 6, 5, 4, 6, 8, 9, 10, 12, 11, 10, 12, 14, 13, 12, 15, 13, 11, 10, 9,
];

/** Onglet « Usage overview » de la section Segments. */
export function UsageOverview() {
  const maxBreakdown = Math.max(...BREAKDOWN.map((b) => b.value), 1);
  const maxTime = Math.max(...OVER_TIME);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space16 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 1fr) 2fr', gap: scale.space16 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space16 }}>
          {/* Une carte par compteur : la maquette leur donne chacun sa surface. */}
          <Card style={{ flex: 1, justifyContent: 'center' }}>
            <Counter title="Number of activated segments" value={6} max={100} hint="Quota de votre offre." />
          </Card>
          <Card style={{ flex: 1, justifyContent: 'center' }}>
            <Counter title="Total number of segments" value={168} max={100} hint="Tous types confondus." />
          </Card>
        </div>

        <Card title="Breakdown of segments by type">
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: scale.space16, height: 240 }}>
            {BREAKDOWN.map((b) => (
              <div key={b.label} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: scale.space8 }}>
                <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', width: '100%' }}>
                  <div
                    title={`${b.value}`}
                    style={{
                      width: '100%',
                      height: `${(b.value / maxBreakdown) * 100}%`,
                      minHeight: b.value ? 4 : 0,
                      background: semantic.primary,
                    }}
                  />
                </div>
                <span style={{ color: semantic.textLighter, fontSize: 10 }}>{b.label}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card
        title="Segments created over time"
        actions={
          <>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: scale.space8,
                height: scale.sizeControl,
                paddingInline: scale.space12,
                border: `1px solid ${semantic.borderInput}`,
                borderRadius: scale.radiusBase,
                color: semantic.textNormal,
              }}
            >
              2018-10 <span style={{ color: semantic.textLighter }}>→</span> 2026-07
            </div>
            <Select
              defaultValue="monthly"
              width={120}
              options={[
                { value: 'monthly', label: 'Monthly' },
                { value: 'weekly', label: 'Weekly' },
              ]}
            />
          </>
        }
      >
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 200 }}>
          {OVER_TIME.map((v, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: `${(v / maxTime) * 100}%`,
                minHeight: 3,
                background: semantic.primary,
              }}
            />
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: semantic.textLighter, fontSize: 10 }}>
          {["Jan '19", "Jul '20", "Jan '22", "Jul '23", "Jan '25", "Jul '26"].map((l) => (
            <span key={l}>{l}</span>
          ))}
        </div>
      </Card>
    </div>
  );
}
