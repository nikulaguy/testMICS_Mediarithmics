import type { ReactNode } from 'react';
import { Icon } from './Icon';
import { scale, semantic } from '../theme/micsTheme';

interface Props {
  /** Titre : Headline 4 (16/24). Prop « Message » de la maquette. */
  title: string;
  /** Texte secondaire optionnel : Body/Book 12. Prop « Show description ». */
  description?: string;
  /** Action de sortie optionnelle. Prop « Show button ». */
  action?: ReactNode;
  /**
   * Illustration. Prop « Illustration (swap d'icône) » de la maquette : le glyphe
   * suit ce qui manque — `users` pour une audience, `inbox` par défaut. Toujours
   * décoratif, jamais porteur de l'information à lui seul.
   */
  icon?: string;
}

/**
 * Empty State (Figma 285:151) : illustration 44, titre, description optionnelle,
 * action optionnelle. Centré dans son conteneur, jamais aligné à gauche.
 * Gap 12 entre les blocs, 4 entre titre et description, padding 35×24.
 */
export function EmptyState({ title, description, action, icon = 'inbox' }: Props) {
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: scale.space12,
        padding: `${scale.space35}px ${scale.space24}px`,
        textAlign: 'center',
      }}
    >
      <Icon name={icon} size={44} color={semantic.textLightest} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space4, color: semantic.textLighter }}>
        <p style={{ margin: 0, fontSize: 16, lineHeight: '24px', fontWeight: 500 }}>{title}</p>
        {description && <p style={{ margin: 0, fontSize: 12, lineHeight: '20px' }}>{description}</p>}
      </div>
      {action}
    </div>
  );
}
