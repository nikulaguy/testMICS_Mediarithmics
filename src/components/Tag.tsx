import { Tag as AntTag } from 'antd';
import type { ReactNode } from 'react';
import { Icon } from './Icon';
import { primitives, scale, semantic } from '../theme/micsTheme';

export type TagColor = 'default' | 'blue' | 'green' | 'orange' | 'purple' | 'red';

/**
 * Palettes exactes du composant Tag (Figma 15:18) : fond 100, bordure 300, texte 700.
 * Default est la seule variante en gris, avec le texte courant.
 */
const PALETTE: Record<TagColor, { bg: string; border: string; text: string }> = {
  default: { bg: primitives.grey200, border: primitives.grey400, text: semantic.textNormal },
  blue: { bg: primitives.blue100, border: primitives.blue300, text: primitives.blue700 },
  green: { bg: primitives.green100, border: primitives.green300, text: primitives.green700 },
  orange: { bg: primitives.orange100, border: primitives.orange300, text: primitives.orange700 },
  purple: { bg: primitives.purple100, border: primitives.purple300, text: primitives.purple700 },
  red: { bg: primitives.red100, border: primitives.red300, text: primitives.red700 },
};

interface Props {
  children: ReactNode;
  color?: TagColor;
  closable?: boolean;
  onClose?: () => void;
  /** Emplacement du logo (16×16) prévu par la prop « Show logo » du composant. */
  logo?: ReactNode;
}

/**
 * Croix de retrait. Glyphe 8 px comme dans la maquette ; cible de pointage 20 px
 * via un calque transparent en position absolue, hors flux, qui ne déforme donc
 * pas l'anatomie du tag.
 *
 * `...rest` N'EST PAS FACULTATIF : Ant Design clone le nœud passé en `closeIcon`
 * pour y injecter `onClick`, `onKeyDown`, `role`, `tabIndex` et `className`.
 * Un composant qui ne transmet pas ces props les avale en silence, et la croix
 * ne ferme plus rien. Le spread vient AVANT nos propres attributs pour que le
 * comportement d'AntD gagne et que notre `aria-label` reste.
 */
function CloseCross({ label, style, ...rest }: { label: string } & React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      {...rest}
      aria-label={`Retirer ${label}`}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 8,
        height: 8,
        marginInlineStart: 0,
        color: 'inherit',
        cursor: 'pointer',
        flex: '0 0 auto',
        ...style,
      }}
    >
      <Icon name="close" size={8} />
      {/* cible de pointage 20×20, invisible et hors flux */}
      <span aria-hidden style={{ position: 'absolute', top: -6, left: -6, width: 20, height: 20 }} />
    </span>
  );
}

/**
 * Tag (Figma 15:18) — catégorie ENVELOPPE.
 * Ant Design sait faire un tag bordé et fermable : on garde son rendu et son
 * comportement, on impose seulement l'anatomie du DS (six palettes, hauteur 26,
 * padding 2/8, gap 4, radius/base, libellé Body/Book 12, croix du set d'icônes).
 */
export function Tag({ children, color = 'default', closable, onClose, logo }: Props) {
  const palette = PALETTE[color];

  return (
    <AntTag
      closable={closable}
      onClose={onClose}
      closeIcon={closable ? <CloseCross label={typeof children === 'string' ? children : 'ce filtre'} /> : undefined}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: scale.space4,
        height: 26,
        marginInlineEnd: 0,
        paddingBlock: 2,
        paddingInline: scale.space8,
        background: palette.bg,
        borderColor: palette.border,
        borderRadius: scale.radiusBase,
        color: palette.text,
        fontSize: 12,
        lineHeight: '20px',
      }}
    >
      {logo && <span style={{ width: 16, height: 16, display: 'inline-flex', flex: '0 0 auto' }}>{logo}</span>}
      {children}
    </AntTag>
  );
}
