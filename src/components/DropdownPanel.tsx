import type { CSSProperties, ReactNode } from 'react';
import { elevation, scale, semantic } from '../theme/micsTheme';

/** Surface flottante du DS : à réutiliser quand la mise en page est spécifique. */
export const panelSurface: CSSProperties = {
  background: semantic.bgContainer,
  borderRadius: scale.radiusBase,
  boxShadow: elevation.panel,
};

interface Props {
  children: ReactNode;
  width?: number;
  /** Panneau ancré : positionné en absolu sous son déclencheur. */
  anchored?: boolean;
  align?: 'left' | 'right';
  style?: CSSProperties;
}

/**
 * Dropdown / Container (Figma 145:69) — catégorie CONSTRUIT.
 * Surface flottante blanche du DS : radius/base, ombre, contenu au choix.
 * Tous les panneaux du produit passent par ici (menus de la TopBar, panneau de
 * filtres, choix des colonnes) : une seule ombre, un seul radius, un seul z-index.
 */
export function DropdownPanel({ children, width, anchored, align = 'right', style }: Props) {
  return (
    <div
      style={{
        width,
        ...panelSurface,
        color: semantic.textNormal,
        ...(anchored
          ? { position: 'absolute' as const, top: 'calc(100% + 4px)', [align]: 0, zIndex: scale.zDropdown }
          : null),
        ...style,
      }}
    >
      {children}
    </div>
  );
}
