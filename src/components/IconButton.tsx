import { useState } from 'react';
import { Icon } from './Icon';
import { semantic } from '../theme/micsTheme';

interface Props {
  icon: string;
  label: string;
  onClick?: () => void;
  /** Bascule d'un panneau : on ouvre sur pointerdown pour un comportement déterministe. */
  onPointerDown?: (e: React.PointerEvent) => void;
  /** Le bouton ouvre un panneau : pilote aria-haspopup / aria-expanded. */
  expanded?: boolean;
  /**
   * Surface d'accueil. `onDark` par défaut : c'est la TopBar navy, seul contexte
   * où le composant existait jusqu'ici.
   */
  theme?: 'onDark' | 'onLight';
}

/**
 * Rampe de couleur du glyphe, alignée sur le set Figma `buttonIcon` (666:110318).
 * Chaque rampe s'ÉLOIGNE de sa surface : elle s'éclaircit sur le navy, elle fonce
 * sur le clair. Le pressé d'onLight est le navy `info` — miroir du bg/selected
 * bleuté d'onDark. La première version d'onLight estompait le glyphe (65 → 43 →
 * 25 %), ce qui faisait tomber le contraste du pressé à 1,8:1 pour un seuil de
 * 3:1 (RGAA 3.2) : corrigée des deux côtés le 8 août 2026.
 */
const RAMPE = {
  onDark: {
    default: semantic.textOnDark,
    hover: semantic.bgHover,
    pressed: semantic.bgSelected,
  },
  onLight: {
    default: semantic.textNormal,
    hover: semantic.textDarker,
    pressed: semantic.info,
  },
} as const;

/**
 * buttonIcon (Figma 666:110318) — bouton icône des barres denses.
 * Icône 20×20 sans fond : seule la couleur du glyphe change.
 * onDark  : text/on-dark → bg/hover → bg/selected.
 * onLight : text/normal → text/darker → info.
 * La cible cliquable fait 32×32 même si le visible fait 20 (confort de pointage).
 */
export function IconButton({ icon, label, onClick, onPointerDown, expanded, theme = 'onDark' }: Props) {
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);

  const rampe = RAMPE[theme];
  const color = pressed || expanded ? rampe.pressed : hover ? rampe.hover : rampe.default;

  return (
    <button
      type="button"
      aria-label={label}
      aria-haspopup={expanded === undefined ? undefined : true}
      aria-expanded={expanded}
      onClick={onClick}
      onPointerDown={(e) => {
        setPressed(true);
        onPointerDown?.(e);
      }}
      onPointerUp={() => setPressed(false)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setPressed(false);
      }}
      style={{
        width: 32,
        height: 32,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'transparent',
        border: 0,
        padding: 0,
        cursor: 'pointer',
        color,
      }}
    >
      <Icon name={icon} size={20} />
    </button>
  );
}
