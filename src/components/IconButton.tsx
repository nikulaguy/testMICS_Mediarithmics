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
}

/**
 * buttonIcon (Figma 666:110318) — bouton icône de la TopBar.
 * Icône 20×20 sans fond : seule la couleur change selon l'état.
 * Default = text/on-dark · Hover = bg/hover · Pressed = bg/selected.
 * La cible cliquable fait 32×32 même si le visible fait 20 (confort de pointage).
 */
export function IconButton({ icon, label, onClick, onPointerDown, expanded }: Props) {
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);

  const color = pressed || expanded ? semantic.bgSelected : hover ? semantic.bgHover : semantic.textOnDark;

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
