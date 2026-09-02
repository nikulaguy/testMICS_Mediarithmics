import { useEffect, useRef, type ReactNode } from 'react';
import { Icon } from '../components/Icon';
import { scale, semantic, typography } from '../theme/micsTheme';

/**
 * TopBar réduite du parcours de création : le nom de l'organisation, sans le
 * chevron d'en changer — la ressource se rattache à l'organisation d'où l'on est
 * parti — et sans recherche ni actions : le tunnel est la seule tâche en cours.
 */
function CreationTopBar({ orgName }: { orgName: string }) {
  return (
    <header
      role="banner"
      style={{
        height: scale.sizeHeader,
        flex: '0 0 auto',
        background: semantic.primary,
        display: 'flex',
        alignItems: 'center',
        gap: scale.space8,
        paddingInline: scale.space16,
        color: semantic.textOnDark,
      }}
    >
      <Icon name="tree" size={20} />
      <span>{orgName}</span>
    </header>
  );
}

/**
 * Actionbar Type=Creation (Figma 245:4156) — header du parcours de création.
 * Fond `info`, padding 12 / 35 comme les autres variantes, hauteur au contenu.
 * Pas de fil d'Ariane : le tunnel est hors navigation. À sa place, le titre de la
 * ressource en cours de création et, une fois le type choisi, son sous-titre.
 * La croix est la seule sortie du tunnel.
 */
export function ActionbarCreation({
  title,
  subtitle,
  onClose,
}: {
  title: string;
  subtitle?: string;
  onClose: () => void;
}) {
  return (
    <div
      style={{
        flex: '0 0 auto',
        background: semantic.info,
        color: semantic.textOnDark,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: scale.space16,
        paddingBlock: scale.space12,
        paddingInline: scale.space35,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space8, minWidth: 0 }}>
        <h1 style={{ margin: 0, ...typography.headline, color: 'inherit' }}>{title}</h1>
        {subtitle && <span style={{ ...typography.body, color: 'inherit' }}>{subtitle}</span>}
      </div>
      <button
        type="button"
        aria-label="Fermer"
        onClick={onClose}
        style={{
          width: scale.sizeTargetMin,
          height: scale.sizeTargetMin,
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
    </div>
  );
}

interface Props {
  title: string;
  subtitle?: string;
  orgName?: string;
  /** Demande de sortie (croix, Échap). Au parent d'ouvrir la modale d'abandon si besoin. */
  onCloseRequest: () => void;
  /**
   * Une surface est ouverte PAR-DESSUS le tunnel (drawer, modale). Échap lui
   * appartient alors : le tunnel ne réagit plus, sinon une même touche fermerait
   * la modale ET demanderait la sortie.
   */
  overlayOpen?: boolean;
  /** Actions du pied sticky. Omis sur l'écran de choix du type : le clic vaut choix. */
  footer?: ReactNode;
  children: ReactNode;
}

/**
 * Parcours de création de ressource (template §12 de /md-templates) — coque du
 * tunnel plein écran. Elle recouvre l'application : TopBar réduite, Actionbar
 * Type=Creation, zone de contenu défilante, pied d'actions collé en bas.
 *
 * Seule la zone entre header et pied défile : chercher « Next » en bas d'une page
 * longue fait croire l'étape bloquée. Le contenu est centré sur 1026 de large,
 * la colonne des écrans de la maquette.
 */
export function CreationFlow({ title, subtitle, orgName = 'mediarithmics - product', onCloseRequest, overlayOpen, footer, children }: Props) {
  const onCloseRef = useRef(onCloseRequest);
  onCloseRef.current = onCloseRequest;
  const overlayOpenRef = useRef(overlayOpen);
  overlayOpenRef.current = overlayOpen;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !overlayOpenRef.current) onCloseRef.current();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      style={{
        position: 'fixed',
        inset: 0,
        // Sous zModal (1200) : les drawers et modales du tunnel passent devant.
        zIndex: 1150,
        display: 'flex',
        flexDirection: 'column',
        background: semantic.bgWindow,
      }}
    >
      <CreationTopBar orgName={orgName} />
      <ActionbarCreation title={title} subtitle={subtitle} onClose={onCloseRequest} />
      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: scale.space35 }}>
        <div style={{ maxWidth: 1026, marginInline: 'auto', display: 'flex', flexDirection: 'column', gap: scale.space24 }}>
          {children}
        </div>
      </div>
      {footer && (
        <div
          style={{
            flex: '0 0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: scale.space8,
            padding: `10px ${scale.space16}px`,
            background: semantic.bgWindow,
            borderTop: `1px solid ${semantic.borderDefault}`,
          }}
        >
          {footer}
        </div>
      )}
    </div>
  );
}
