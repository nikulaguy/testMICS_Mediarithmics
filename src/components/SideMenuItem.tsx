import { useState, type ReactNode } from 'react';
import { Icon } from './Icon';
import { scale, semantic, typography } from '../theme/micsTheme';

interface Props {
  label: ReactNode;
  /** Nom d'un glyphe du set, ou d'une marque `app-*` dans l'AppLauncher. */
  icon: string;
  active?: boolean;
  onSelect?: () => void;
  /**
   * Rôle de l'entrée. `link` dans le SideMenu (on navigue dans l'application),
   * `menuitem` dans l'AppLauncher (on est dans un menu ouvert depuis un bouton).
   */
  role?: 'link' | 'menuitem';
  /** Contenu réservé aux lecteurs d'écran, par ex. « Nouvelle fenêtre ». */
  srSuffix?: string;
}

/**
 * SideMenu / Item (Figma component set 19:31) — catégorie CONSTRUIT.
 * Hauteur 32, radius 6, padding 0 / 10, gap 10, icône 16, libellé Body/Book 12.
 * Trois états : Default (fond transparent), Hover (`bg/hover`), Active
 * (`bg/selected` + libellé `primary` en Medium).
 *
 * Le composant sert à DEUX endroits, comme dans la maquette : les entrées du
 * SideMenu et celles de l'AppLauncher. Une entrée de navigation reste une entrée
 * de navigation ; en refaire une variante locale pour le launcher, c'était deux
 * survols, deux hauteurs et deux radius à maintenir.
 *
 * Le composant ne porte PAS sa gouttière : le SideMenu l'encadre de 15 px
 * horizontaux, l'AppLauncher de 15 horizontaux et 4 verticaux. La gouttière
 * appartient à la liste, pas à l'entrée.
 */
export function SideMenuItem({ label, icon, active = false, onSelect, role = 'link', srSuffix }: Props) {
  const [hover, setHover] = useState(false);
  const background = active ? semantic.bgSelected : hover ? semantic.bgHover : 'transparent';

  return (
    <div
      role={role}
      tabIndex={0}
      aria-current={role === 'link' && active ? 'page' : undefined}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect?.();
        }
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        flex: 1,
        minWidth: 0,
        display: 'flex',
        alignItems: 'center',
        gap: scale.space10,
        height: scale.sizeControl,
        paddingInline: scale.space10,
        borderRadius: scale.radiusCard,
        background,
        color: active ? semantic.primary : semantic.textNormal,
        ...(active ? typography.bodyMedium : typography.body),
        cursor: 'pointer',
      }}
    >
      <Icon name={icon} size={16} />
      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{label}</span>
      {srSuffix && <span className="mics-sr-only">{srSuffix}</span>}
    </div>
  );
}
