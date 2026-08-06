import type { ReactNode } from 'react';
import { scale, typography } from '../theme/micsTheme';

/**
 * Bandeau d'en-tête d'une page de documentation : catégorie, chemin du code,
 * référence Figma.
 *
 * Il existe pour deux raisons. D'abord parce que ces valeurs étaient recopiées à
 * l'identique en tête de 29 pages, avec des nombres en dur — la règle « aucune
 * valeur hors du module de thème » vaut aussi pour la documentation, sans quoi
 * elle prêche ce qu'elle n'applique pas. Ensuite parce qu'un bandeau recopié
 * finit par diverger : il suffit d'une page où le gap a été retouché.
 *
 * Usage :
 *
 *     <DocMeta>
 *       <span><b>Catégorie</b> : construit</span>
 *       <span><b>Source code</b> : `src/components/Tag.tsx`</span>
 *     </DocMeta>
 */
export function DocMeta({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: scale.space24,
        flexWrap: 'wrap',
        margin: `${scale.space16}px 0 ${scale.space24}px`,
        ...typography.body,
      }}
    >
      {children}
    </div>
  );
}
