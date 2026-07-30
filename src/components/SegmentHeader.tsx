import { Tooltip } from 'antd';
import { Icon } from './Icon';
import { scale, semantic, typography } from '../theme/micsTheme';

export interface SegmentMetric {
  key: string;
  icon: string;
  label: string;
  value: number;
  /** Ce que compte la métrique, d'après la documentation développeur mediarithmics. */
  hint?: string;
}

interface Props {
  userPoint: number;
  metrics: SegmentMetric[];
  /** Date du dernier calcul, affichée sous la carte. */
  computedAt?: string;
}

/**
 * Segment Header (Figma « Segment Header », page 🏷 Data Display).
 * Carte navy à gauche (icône server 60, « UserPoint », grande valeur) et liste de
 * métriques à droite. La métrique principale est mise en avant, les secondaires sont
 * alignées à droite de leur libellé.
 *
 * Les valeurs sont celles du DERNIER CALCUL, pas du temps réel : la date sous la carte
 * n'est pas décorative, c'est elle qui dit à quel point le chiffre est frais.
 */
export function SegmentHeader({ userPoint, metrics, computedAt }: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space4 }}>
      <div style={{ display: 'flex', borderRadius: scale.radiusCard, overflow: 'hidden' }}>
        <div
          style={{
            width: 500,
            flex: '0 0 auto',
            background: semantic.info,
            color: semantic.textOnDark,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: scale.space12,
            padding: scale.space24,
          }}
        >
          <Icon name="server" size={60} />
          <span style={{ ...typography.headline3 }}>UserPoint</span>
          <span style={{ ...typography.headline }}>{userPoint.toLocaleString('en-US')}</span>
        </div>

        <div
          style={{
            flex: 1,
            background: semantic.bgContainer,
            padding: scale.space24,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: scale.space12,
          }}
        >
          {metrics.map((m) => (
            <div
              key={m.key}
              style={{ display: 'flex', alignItems: 'center', gap: scale.space12, minHeight: 24 }}
            >
              <Icon name={m.icon} size={20} color={semantic.primary} />
              <span style={{ ...typography.headline4, flex: 1, minWidth: 0, color: semantic.textNormal }}>
                {m.hint ? (
                  <Tooltip title={m.hint}>
                    <span tabIndex={0} style={{ cursor: 'help' }}>
                      {m.label}
                    </span>
                  </Tooltip>
                ) : (
                  m.label
                )}
              </span>
              <span
                style={{ ...typography.headline4, color: semantic.textNormal, flex: '0 0 auto', whiteSpace: 'nowrap' }}
              >
                {m.value.toLocaleString('en-US')}
              </span>
            </div>
          ))}
        </div>
      </div>

      {computedAt && (
        <span style={{ ...typography.caption, color: semantic.textLighter, textAlign: 'right' }}>
          Last computed on {computedAt}
        </span>
      )}
    </div>
  );
}
