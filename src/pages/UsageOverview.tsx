import { Icon, Select } from '../ui';
import { scale, semantic } from '../theme/micsTheme';

function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <section
      style={{
        background: semantic.bgContainer,
        borderRadius: scale.radiusCard,
        padding: scale.space20,
        ...style,
      }}
    >
      {children}
    </section>
  );
}

function CardTitle({ children, info }: { children: React.ReactNode; info?: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: scale.space8 }}>
      <span style={{ fontWeight: 500, color: semantic.textDarker }}>{children}</span>
      {info && <Icon name="info" size={14} color={semantic.textLightest} />}
    </div>
  );
}

/** Compteur avec barre de progression (Counter du DS). */
function Counter({ label, value, max }: { label: string; value: number; max: number }) {
  return (
    <Card style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: scale.space16 }}>
      <CardTitle info>{label}</CardTitle>
      <div style={{ height: 8, borderRadius: 4, background: semantic.bgWindow, overflow: 'hidden' }}>
        <div
          style={{
            width: `${Math.min((value / max) * 100, 100)}%`,
            height: '100%',
            background: semantic.success,
            borderRadius: 4,
          }}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: scale.space8 }}>
        <span style={{ fontSize: 24, fontWeight: 500, color: semantic.textDarker }}>{value}</span>
        <span style={{ color: semantic.textLighter }}>/ {max}</span>
      </div>
    </Card>
  );
}

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
          <Counter label="Number of activated segments" value={6} max={100} />
          <Counter label="Total number of segments" value={168} max={100} />
        </div>

        <Card style={{ display: 'flex', flexDirection: 'column', gap: scale.space16 }}>
          <CardTitle>Breakdown of segments by type</CardTitle>
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

      <Card style={{ display: 'flex', flexDirection: 'column', gap: scale.space16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: scale.space16 }}>
          <span style={{ fontWeight: 500, color: semantic.textDarker }}>Segments created over time</span>
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
        </div>
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
