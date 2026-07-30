import { useEffect, useId, useRef, useState } from 'react';
import { Input as AntInput } from 'antd';
import { DropdownOptionItem } from './DropdownItems';
import { Icon } from './Icon';
import { panelSurface } from './DropdownPanel';
import { scale, semantic } from '../theme/micsTheme';

interface Props {
  /** Labels proposables, déjà privés de ceux qui sont posés sur la ressource. */
  options: string[];
  onSelect: (label: string) => void;
  onCancel: () => void;
  width?: number;
}

/**
 * Sélecteur de label (Figma Resource Title Header, variant `status=adding` +
 * écran « Segment — Dashboard (add label) » 706:115710).
 *
 * Champ de recherche de 240 à loupe, et sa liste de suggestions COLLÉE dessous,
 * sans gouttière : c'est une liste attachée à une saisie, pas un menu flottant.
 * Le DropdownPanel ancré du produit se pose à 4 px de son déclencheur ; ici la
 * liste appartient au champ, l'écart la détacherait visuellement de lui.
 *
 * Motif combobox du WAI-APG : le focus ne quitte jamais le champ, les flèches
 * déplacent une rangée active désignée par `aria-activedescendant`.
 */
export function LabelPicker({ options, onSelect, onCancel, width = 240 }: Props) {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  /*
    onCancel est lu par référence. En dépendance d'effet, une lambda recréée à
    chaque rendu du parent remonterait l'effet à chaque frappe — et le champ
    perdrait le focus caractère par caractère.
  */
  const onCancelRef = useRef(onCancel);
  onCancelRef.current = onCancel;

  const matches = options.filter((o) => o.toLowerCase().includes(query.trim().toLowerCase()));

  useEffect(() => {
    const onDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) onCancelRef.current();
    };
    document.addEventListener('pointerdown', onDown);
    return () => document.removeEventListener('pointerdown', onDown);
  }, []);

  // La rangée active revient en tête dès que la liste change : la garder au même
  // index désignerait un label qui n'est plus au même endroit.
  useEffect(() => setActive(0), [query]);

  const choose = (label: string) => {
    onSelect(label);
    setQuery('');
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      onCancel();
      return;
    }
    if (!matches.length) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i) => (i + 1) % matches.length);
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i) => (i - 1 + matches.length) % matches.length);
    }
    if (e.key === 'Enter') {
      e.preventDefault();
      choose(matches[active]);
    }
  };

  return (
    <div ref={rootRef} style={{ position: 'relative', width, flex: '0 0 auto' }}>
      <AntInput
        autoFocus
        role="combobox"
        aria-label="Rechercher un label"
        aria-expanded={matches.length > 0}
        aria-controls={listId}
        aria-autocomplete="list"
        aria-activedescendant={matches.length ? `${listId}-${active}` : undefined}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={onKeyDown}
        prefix={<Icon name="magnifier" size={14} color={semantic.textLighter} />}
      />

      {matches.length > 0 && (
        <div
          id={listId}
          role="listbox"
          aria-label="Labels disponibles"
          style={{
            ...panelSurface,
            position: 'absolute',
            top: '100%',
            left: 0,
            width,
            zIndex: scale.zDropdown,
            paddingBlock: scale.space8,
            maxHeight: 240,
            overflowY: 'auto',
          }}
        >
          {matches.map((label, i) => (
            <DropdownOptionItem
              key={label}
              id={`${listId}-${i}`}
              role="option"
              selected={false}
              active={i === active}
              label={label}
              onSelect={() => choose(label)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
