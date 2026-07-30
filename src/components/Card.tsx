import type { CSSProperties, ReactNode } from 'react';
import { scale, semantic, typography } from '../theme/micsTheme';

interface Props {
  /** Titre de la carte. Sans lui, l'en-tête n'existe pas — sauf si `actions` est fourni. */
  title?: string;
  /** Actions de la CARTE, à droite du titre. Les actions de la PAGE restent dans l'Actionbar. */
  actions?: ReactNode;
  children: ReactNode;
  style?: CSSProperties;
}

/**
 * Card (Figma 706:116913) — surface de contenu d'un écran.
 * Fond `bg/container`, radius/card, padding 15 vertical / 20 horizontal, gap 15,
 * PAS de bordure et PAS d'ombre : la carte est posée sur `bg/window`, elle ne
 * flotte pas. L'ombre est réservée aux surfaces flottantes (DropdownPanel, Overlay).
 *
 * Valeurs relevées sur la classe `mcs-card` de la production. Le fichier Figma
 * contient onze composants qui redessinent cette surface avec un padding de 24 :
 * c'est la production qui fait foi, la migration est notée sur le composant.
 */
export function Card({ title, actions, children, style }: Props) {
  const hasHeader = Boolean(title || actions);
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: scale.space15,
        padding: `${scale.space15}px ${scale.space20}px`,
        background: semantic.bgContainer,
        borderRadius: scale.radiusCard,
        ...style,
      }}
    >
      {hasHeader && (
        <div style={{ display: 'flex', alignItems: 'center', gap: scale.space12 }}>
          {/* Le titre garde sa place même vide : sans lui les actions glisseraient à gauche. */}
          <h3 style={{ margin: 0, flex: 1, minWidth: 0, ...typography.headline4, color: semantic.textDarker }}>
            {title}
          </h3>
          {actions && (
            <div style={{ display: 'flex', alignItems: 'center', gap: scale.space8, flex: '0 0 auto' }}>{actions}</div>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
