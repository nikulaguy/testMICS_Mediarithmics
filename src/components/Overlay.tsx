import { useEffect, useRef, type ReactNode } from 'react';
import { Icon } from './Icon';
import { elevation, primitives, scale, semantic } from '../theme/micsTheme';

export type OverlayHeaderTheme = 'blue' | 'light' | 'dark';

const HEADER_THEME: Record<OverlayHeaderTheme, { bg: string; color: string; borderBottom?: string }> = {
  blue: { bg: semantic.primary, color: semantic.textOnDark },
  light: { bg: semantic.bgContainer, color: semantic.textNormal, borderBottom: semantic.borderDefault },
  dark: { bg: semantic.info, color: semantic.textOnDark },
};

/**
 * Overlay / Header (Figma 190:198) — bandeau d'en-tête de modale et de drawer.
 * Titre à gauche, croix à droite. Trois thèmes relevés en production :
 * Blue (création, action forte), Light (édition, consultation), Dark (configuration
 * technique). Le titre nomme la dialog : c'est lui que pointe l'aria-labelledby.
 */
export function OverlayHeader({
  title,
  theme = 'blue',
  onClose,
  id,
}: {
  title: string;
  theme?: OverlayHeaderTheme;
  onClose?: () => void;
  id?: string;
}) {
  const t = HEADER_THEME[theme];
  return (
    <div
      style={{
        height: 52,
        flex: '0 0 auto',
        display: 'flex',
        alignItems: 'center',
        gap: scale.space12,
        padding: `0 ${scale.space20}px 0 ${scale.space24}px`,
        background: t.bg,
        color: t.color,
        borderBottom: t.borderBottom ? `1px solid ${t.borderBottom}` : undefined,
      }}
    >
      <h2 id={id} style={{ margin: 0, flex: 1, fontSize: 16, lineHeight: '24px', fontWeight: 500, color: 'inherit' }}>
        {title}
      </h2>
      {onClose && (
        <button
          type="button"
          aria-label="Fermer"
          onClick={onClose}
          style={{
            width: 20,
            height: 20,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'transparent',
            border: 0,
            padding: 0,
            color: 'inherit',
            cursor: 'pointer',
          }}
        >
          <Icon name="close" size={18} />
        </button>
      )}
    </div>
  );
}

/**
 * Overlay / Footer (Figma 202:198) — barre d'actions en pied de modale et de drawer.
 * Actions alignées à DROITE, le bouton primaire tout à droite, le secondaire à sa
 * gauche. Jusqu'à trois actions, un seul primaire. L'ordre visuel est le même
 * partout : c'est ce qui permet de cliquer sans relire.
 */
export function OverlayFooter({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        height: 52,
        flex: '0 0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: scale.space8,
        padding: `10px ${scale.space16}px`,
        background: semantic.bgContainer,
        borderTop: `1px solid ${semantic.borderDefault}`,
      }}
    >
      {children}
    </div>
  );
}

interface OverlayProps {
  open: boolean;
  /** Modale = tâche courte qui doit bloquer. Drawer = tâche secondaire qui a besoin du contexte. */
  mode?: 'modal' | 'drawer';
  title: string;
  headerTheme?: OverlayHeaderTheme;
  onClose: () => void;
  children: ReactNode;
  /** Actions du pied. Omis = variante sans footer (sélecteurs sans validation). */
  footer?: ReactNode;
  /** Modale : 420–600. Drawer : largeur constante dans un même parcours (520). */
  width?: number;
}

/**
 * Overlay / Container (Figma 212:169) — conteneur unique des surfaces superposées.
 * Il sert à la fois de MODALE et de DRAWER : même structure Header + contenu + Footer,
 * seuls la forme et la position changent. Header et footer sont fixes, le contenu
 * scrolle à l'intérieur.
 *
 * Le choix de la surface n'est pas esthétique : il porte sur le coût de l'interruption
 * et sur le besoin de contexte. Voir la page de documentation.
 */
export function Overlay({
  open,
  mode = 'modal',
  title,
  headerTheme = 'blue',
  onClose,
  children,
  footer,
  width,
}: OverlayProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = `overlay-title-${title.replace(/\W+/g, '-').toLowerCase()}`;

  /*
    onClose est presque toujours une lambda recréée à chaque rendu du parent. La garder
    en dépendance d'un effet qui déplace le focus rejoue cet effet à CHAQUE frappe dans
    le contenu : le focus repart sur le panneau et le champ de saisie le perd.
    On la lit donc via une ref, et l'effet ne dépend plus que de `open`.
  */
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  // Échap ferme, et le focus part dans le panneau à l'ouverture (WAI-APG dialog).
  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    panelRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCloseRef.current();
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      previous?.focus();
    };
  }, [open]);

  if (!open) return null;

  const isDrawer = mode === 'drawer';
  const panelWidth = width ?? (isDrawer ? 520 : 600);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: scale.zModal,
        background: semantic.bgScrim,
        display: 'flex',
        alignItems: isDrawer ? 'stretch' : 'center',
        justifyContent: isDrawer ? 'flex-end' : 'center',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        style={{
          width: panelWidth,
          maxWidth: '100%',
          maxHeight: isDrawer ? '100%' : '80vh',
          display: 'flex',
          flexDirection: 'column',
          background: semantic.bgContainer,
          borderRadius: isDrawer ? 0 : scale.radiusCard,
          boxShadow: elevation.overlay,
          outline: 'none',
          overflow: 'hidden',
        }}
      >
        <OverlayHeader id={titleId} title={title} theme={headerTheme} onClose={onClose} />
        {/* Padding 24 porté par le conteneur : le contenu ne se re-padde jamais. */}
        <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: scale.space24 }}>{children}</div>
        {footer && <OverlayFooter>{footer}</OverlayFooter>}
      </div>
    </div>
  );
}

/** Rappel du token de voile, pour les surfaces qui ne passent pas par Overlay. */
export const overlayScrim = primitives.black43;
