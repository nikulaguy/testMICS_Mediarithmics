import type { ReactNode } from 'react';
import { ActiveFilterBar, Toolbar, ToolbarSearch, type ActiveFilter } from '../ui';
import { scale, semantic } from '../theme/micsTheme';

interface Props {
  /** Texte de la recherche. Omettre `onSearchChange` retire le champ. */
  search?: string;
  onSearchChange?: (value: string) => void;
  searchPlaceholder?: string;
  /** Filtres, bouton de vue, exports : tout ce qui agit sur le tableau. */
  actions?: ReactNode;
  /**
   * Filtres appliqués. La barre de rappel n'est rendue que s'il y en a, et
   * seulement pour ceux que `actions` ne montre plus.
   */
  activeFilters?: ActiveFilter[];
  onRemoveFilter?: (key: string) => void;
  onClearFilters?: () => void;
  /** Le tableau, ou l'état vide quand il n'y a rien à montrer. */
  children: ReactNode;
  /** Pagination, rendue sous le tableau et alignée à droite. */
  pagination?: ReactNode;
}

/**
 * Template « Liste » — la coque commune à tous les écrans de liste du produit.
 *
 * Extrait de l'écran Segments, qui en est la référence, puis vidé de tout ce qui
 * lui était propre. Il ne décide de rien : ni des colonnes, ni des filtres, ni de
 * la donnée. Il ne fixe que ce qui doit être identique d'un écran à l'autre —
 * l'ordre des blocs, la surface, et les espacements entre eux.
 *
 * Ce qu'il garantit :
 *  - la recherche est à gauche, les actions à droite, sur une seule rangée ;
 *  - la barre de filtres actifs se place SOUS la barre d'outils, jamais au-dessus,
 *    et disparaît quand il n'y a aucun filtre — pas de hauteur réservée à vide ;
 *  - le tableau vient après, la pagination sous lui, alignée à droite.
 *
 * Ce qu'il ne fait pas : le fil d'ariane et les actions de page, qui vivent dans
 * l'Actionbar et appartiennent à la coque de l'application, pas à la liste.
 */
export function ListTemplate({
  search,
  onSearchChange,
  searchPlaceholder = 'Search',
  actions,
  activeFilters = [],
  onRemoveFilter,
  onClearFilters,
  children,
  pagination,
}: Props) {
  const hasToolbar = Boolean(onSearchChange || actions);

  return (
    <section
      style={{
        background: semantic.bgContainer,
        borderRadius: scale.radiusCard,
        padding: scale.space20,
        display: 'flex',
        flexDirection: 'column',
        gap: scale.space20,
      }}
    >
      {hasToolbar && (
        <Toolbar
          search={
            onSearchChange ? (
              <ToolbarSearch
                value={search ?? ''}
                onChange={onSearchChange}
                placeholder={searchPlaceholder}
              />
            ) : undefined
          }
          actions={actions}
        />
      )}

      {/*
        Le composant se rend lui-même à vide, mais on le monte sous condition :
        sans filtre actif, rien ne doit occuper cette place, pas même un noeud
        invisible qui laisserait le gap de la colonne.
      */}
      {activeFilters.length > 0 && (
        <ActiveFilterBar
          filters={activeFilters}
          onRemove={onRemoveFilter ?? (() => {})}
          onClearAll={onClearFilters ?? (() => {})}
        />
      )}

      {children}

      {pagination && <div style={{ display: 'flex', justifyContent: 'flex-end' }}>{pagination}</div>}
    </section>
  );
}
