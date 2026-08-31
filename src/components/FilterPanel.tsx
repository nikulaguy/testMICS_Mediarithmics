import { useState } from 'react';
import { panelSurface } from './DropdownPanel';
import { Input } from './Input';
import { DropdownCheckboxItem, DropdownFooter, DropdownNavItem } from './DropdownItems';
import { PeriodPanel } from './PeriodFilter';
import { DIMENSIONS, VALUE_ICONS, type FilterState } from '../data/segments';
import { scale, semantic } from '../theme/micsTheme';

interface Props {
  filters: FilterState;
  onToggle: (dimensionKey: string, value: string) => void;
  /** Écrase la valeur d'une dimension : utilisé par les filtres à choix unique. */
  onSet: (dimensionKey: string, values: string[]) => void;
  onClearDimension: (dimensionKey: string) => void;
  onClearAll: () => void;
}

/**
 * Panneau de filtres en cascade, deux niveaux.
 * Niveau 1 : les dimensions, avec un COMPTEUR (et non une pastille de couleur, qui
 * n'est ni perceptible par un daltonien ni annoncée par un lecteur d'écran).
 * Niveau 2 : les valeurs de la dimension CHOISIE, application immédiate.
 *
 * À l'ouverture, aucune dimension n'est choisie et le niveau 2 n'existe pas : il
 * s'ouvre au clic. Le survol l'ouvrait auparavant, ce qui affichait « Segment
 * type » d'emblée et donnait l'impression d'un filtre déjà posé.
 */
export function FilterPanel({ filters, onToggle, onSet, onClearDimension, onClearAll }: Props) {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const active = DIMENSIONS.find((d) => d.key === activeKey) ?? null;

  const panel: React.CSSProperties = { ...panelSurface, overflow: 'hidden' };

  // La recherche appartient à la dimension ouverte : en changer la remet à zéro,
  // sinon on reviendrait sur une liste filtrée par un terme qu'on ne voit plus.
  const openDimension = (key: string) => {
    setActiveKey((prev) => (prev === key ? null : key));
    setSearch('');
  };

  const searchable = active?.searchable ?? false;
  const visibleValues = active
    ? active.values.filter((v) => !searchable || v.toLowerCase().includes(search.trim().toLowerCase()))
    : [];

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
      {/* niveau 2 : valeurs, ouvert vers la gauche car le déclencheur est à droite */}
      {active && (
        <div
          className="mics-filter-level2"
          style={{
            ...panel,
            width: active.key === 'creationDate' ? 425 : 270,
            // le calendrier déborde volontairement du panneau : ne pas le rogner
            overflow: active.key === 'creationDate' ? 'visible' : 'hidden',
            position: 'relative',
          }}
        >
          {active.key === 'creationDate' ? (
            <PeriodPanel
              value={(filters[active.key] ?? [])[0] ?? ''}
              presets={active.values}
              onChange={(v) => onSet(active.key, v ? [v] : [])}
              anchorSelector=".mics-filter-level2"
              allowClear
            />
          ) : (
            <>
              {searchable && (
                <div style={{ padding: `${scale.space8}px ${scale.space12}px 0` }}>
                  <Input
                    type="search"
                    placeholder={`Search ${active.label.toLowerCase()}`}
                    rightIcon="magnifier"
                    value={search}
                    onChange={setSearch}
                    aria-label={`Search ${active.label.toLowerCase()}`}
                  />
                </div>
              )}
              <div role="menu" style={{ padding: `${scale.space8}px 0`, maxHeight: 320, overflowY: 'auto' }}>
                {visibleValues.length > 0 ? (
                  visibleValues.map((value) => (
                    <DropdownCheckboxItem
                      key={value}
                      label={value}
                      icon={VALUE_ICONS[value]}
                      checked={(filters[active.key] ?? []).includes(value)}
                      onToggle={() => onToggle(active.key, value)}
                    />
                  ))
                ) : (
                  // Sans ce message, une recherche infructueuse rend un panneau vide
                  // qu'on peut lire comme « cette dimension n'a pas de valeur ».
                  <p
                    style={{
                      margin: 0,
                      padding: `${scale.space8}px ${scale.space16}px`,
                      color: semantic.textLighter,
                    }}
                  >
                    Aucun résultat
                  </p>
                )}
              </div>
            </>
          )}
          <DropdownFooter
            label={`Clear ${active.label.toLowerCase()}`}
            disabled={!(filters[active.key] ?? []).length}
            onClick={() => onClearDimension(active.key)}
          />
        </div>
      )}

      {/* niveau 1 : dimensions */}
      <div style={{ ...panel, width: 240 }}>
        <div role="menu" style={{ padding: `${scale.space8}px 0` }}>
          {DIMENSIONS.map((d) => (
            <DropdownNavItem
              key={d.key}
              icon={d.icon}
              label={d.label}
              count={(filters[d.key] ?? []).length}
              active={d.key === activeKey}
              onActivate={() => openDimension(d.key)}
            />
          ))}
        </div>
        <DropdownFooter
          label="Clear all filters"
          disabled={!Object.values(filters).some((v) => v.length)}
          onClick={onClearAll}
        />
      </div>
    </div>
  );
}
