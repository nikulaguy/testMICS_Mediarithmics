import { Tooltip } from 'antd';
import { Icon } from './Icon';
import { scale, semantic } from '../theme/micsTheme';

interface Props {
  title: string;
  value: number;
  /** Plafond. Présent = barre de progression ; absent = KPI sans plafond. */
  max?: number;
  /** Explication affichée en infobulle sur l'icône info. */
  hint?: string;
}

/**
 * Counter (Figma 185:81) — carte de compteur d'un tableau de bord.
 * La barre n'apparaît que s'il y a un plafond : une progression sans maximum
 * ne veut rien dire. Le chiffre est toujours là, la barre ne fait que l'illustrer.
 */
export function Counter({ title, value, max, hint }: Props) {
  const ratio = max ? Math.min(1, value / max) : 0;

  return (
    <div
      style={{
        background: semantic.bgContainer,
        borderRadius: scale.radiusCard,
        padding: scale.space24,
        display: 'flex',
        flexDirection: 'column',
        gap: scale.space16,
        minWidth: 240,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{ flex: 1, color: semantic.textNormal, fontWeight: 500 }}>{title}</span>
        {hint && (
          <Tooltip title={hint}>
            <span style={{ display: 'inline-flex', color: semantic.textLighter }} tabIndex={0} aria-label={hint}>
              <Icon name="info" size={14} />
            </span>
          </Tooltip>
        )}
      </div>

      {max !== undefined && (
        <div
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-label={title}
          style={{ height: 16, borderRadius: scale.radiusCard, background: semantic.bgWindow, overflow: 'hidden' }}
        >
          <div style={{ height: '100%', width: `${ratio * 100}%`, background: semantic.success }} />
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'baseline', gap: scale.space8 }}>
        <span style={{ fontSize: 24, lineHeight: '28px', fontWeight: 500, color: semantic.textDarker }}>
          {value.toLocaleString('fr-FR')}
        </span>
        {max !== undefined && (
          <span style={{ color: semantic.textLighter }}>/ {max.toLocaleString('fr-FR')}</span>
        )}
      </div>
    </div>
  );
}
