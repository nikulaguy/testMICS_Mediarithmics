import { Link } from './Link';
import { scale, semantic } from '../theme/micsTheme';

export interface Crumb {
  label: string;
  onClick?: () => void;
}

/**
 * Breadcrumb (Figma 29:22142) — fil d'Ariane, catégorie CONSTRUIT.
 * Deux thèmes selon le fond : on-light (liens navy) et on-dark (liens bleu clair
 * sur bandeau navy). Trois niveaux au maximum : item du SideMenu, onglet actif,
 * ressource ouverte.
 *
 * Les parents sont des instances du composant Link du DS, pas le lien natif d'AntD
 * qui rend en gris. Le dernier niveau est du texte : un lien vers la page où l'on
 * se trouve n'a pas de destination. C'est une hiérarchie, pas un historique.
 */
export function Breadcrumb({ items, theme = 'onLight' }: { items: Crumb[]; theme?: 'onLight' | 'onDark' }) {
  const currentColor = theme === 'onDark' ? semantic.textOnDark : semantic.textNormal;
  const separatorColor = theme === 'onDark' ? semantic.linkOnDark : semantic.textLighter;

  return (
    <nav aria-label="Fil d'Ariane">
      <ol
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: scale.space8,
          margin: 0,
          padding: 0,
          listStyle: 'none',
        }}
      >
        {items.map((c, i) => {
          const isCurrent = i === items.length - 1;
          return (
            <li key={`${c.label}-${i}`} style={{ display: 'inline-flex', alignItems: 'center', gap: scale.space8 }}>
              {i > 0 && (
                <span aria-hidden style={{ color: separatorColor }}>
                  ›
                </span>
              )}
              {isCurrent || !c.onClick ? (
                <span aria-current={isCurrent ? 'page' : undefined} style={{ color: currentColor }}>
                  {c.label}
                </span>
              ) : (
                <Link size="M" theme={theme} onClick={c.onClick}>
                  {c.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
