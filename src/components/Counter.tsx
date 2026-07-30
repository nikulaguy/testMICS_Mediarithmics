import { Tooltip } from 'antd';
import { Icon } from './Icon';
import { scale, semantic, typography } from '../theme/micsTheme';

interface Props {
  title: string;
  value: number | string;
  /** Plafond. Présent = barre de progression ; absent = KPI sans plafond. */
  max?: number;
  /** Explication affichée en infobulle sur l'icône info. */
  hint?: string;
}

/**
 * Counter (Figma 185:81) — métrique d'un tableau de bord : un libellé, un chiffre,
 * et une barre quand il y a un plafond.
 *
 * Le composant ne dessine PAS de surface. C'est la `Card` qui la porte, et une
 * carte ne se pose pas dans une carte. Plusieurs compteurs partagent d'ailleurs
 * souvent la même carte, comme sur le board « Activities » : leur donner chacun
 * un fond ferait trois cartes là où l'écran n'en montre qu'une.
 *
 * La barre n'apparaît que s'il y a un plafond : une progression sans maximum ne
 * veut rien dire. Le chiffre est toujours là, la barre ne fait que l'illustrer.
 */
export function Counter({ title, value, max, hint }: Props) {
  const numeric = typeof value === 'number';
  const ratio = max && numeric ? Math.min(1, value / max) : 0;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space8 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{ flex: 1, ...typography.bodyMedium, color: semantic.textNormal }}>{title}</span>
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
          aria-valuenow={numeric ? (value as number) : undefined}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-label={title}
          style={{ height: 8, borderRadius: 4, background: semantic.bgWindow, overflow: 'hidden' }}
        >
          <div style={{ height: '100%', width: `${ratio * 100}%`, background: semantic.success }} />
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'baseline', gap: scale.space8 }}>
        <span style={{ ...typography.headline, color: semantic.textDarker }}>
          {numeric ? (value as number).toLocaleString('en-US') : value}
        </span>
        {max !== undefined && (
          <span style={{ color: semantic.textLighter }}>/ {max.toLocaleString('en-US')}</span>
        )}
      </div>
    </div>
  );
}
