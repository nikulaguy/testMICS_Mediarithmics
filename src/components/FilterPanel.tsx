import { useState } from 'react';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import { panelSurface } from './DropdownPanel';
import { DropdownCheckboxItem, DropdownFooter, DropdownNavItem, DropdownOptionItem } from './DropdownItems';
import { DIMENSIONS, VALUE_ICONS, isAbsoluteRange, parseAbsoluteRange, type FilterState } from '../data/segments';
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
 * Contenu du niveau 2 pour une dimension de type période (Figma 145:73).
 * UNE seule valeur à la fois : soit une plage absolue, soit un préréglage relatif.
 * Choisir l'un efface l'autre.
 */
function DateRangeContent({
  values,
  selected,
  onSet,
  dimensionKey,
}: {
  values: string[];
  selected: string[];
  onSet: (dimensionKey: string, values: string[]) => void;
  dimensionKey: string;
}) {
  const current = selected[0];
  const absolute = current && isAbsoluteRange(current) ? parseAbsoluteRange(current) : null;

  return (
    <div style={{ display: 'flex', gap: scale.space24, padding: scale.space16 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space8 }}>
        <span style={{ color: semantic.textLighter, fontSize: 10 }}>Absolute time range</span>
        <DatePicker.RangePicker
          // Ancré au panneau (et non au body) : depuis une surface flottante,
          // l'alignement par défaut projetait le calendrier hors de l'écran.
          getPopupContainer={(trigger) =>
            (trigger.closest('.mics-filter-level2') as HTMLElement) ?? document.body
          }
          placement="bottomLeft"
          value={absolute ? [dayjs(absolute[0]), dayjs(absolute[1])] : null}
          onChange={(range) => {
            if (!range || !range[0] || !range[1]) onSet(dimensionKey, []);
            else onSet(dimensionKey, [`abs:${range[0].format('YYYY-MM-DD')}..${range[1].format('YYYY-MM-DD')}`]);
          }}
          allowClear
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space8 }}>
        <span style={{ color: semantic.textLighter, fontSize: 10 }}>Relative time ranges</span>
        {values.map((v) => (
          <DropdownOptionItem
            key={v}
            label={v}
            selected={current === v}
            onSelect={() => onSet(dimensionKey, current === v ? [] : [v])}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * Panneau de filtres en cascade, deux niveaux.
 * Niveau 1 : les dimensions, avec un COMPTEUR (et non une pastille de couleur, qui
 * n'est ni perceptible par un daltonien ni annoncée par un lecteur d'écran).
 * Niveau 2 : les valeurs de la dimension survolée, application immédiate.
 */
export function FilterPanel({ filters, onToggle, onSet, onClearDimension, onClearAll }: Props) {
  const [activeKey, setActiveKey] = useState<string>(DIMENSIONS[0].key);
  const active = DIMENSIONS.find((d) => d.key === activeKey)!;

  const panel: React.CSSProperties = { ...panelSurface, overflow: 'hidden' };

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
      {/* niveau 2 : valeurs, ouvert vers la gauche car le déclencheur est à droite */}
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
          <DateRangeContent
            dimensionKey={active.key}
            values={active.values}
            selected={filters[active.key] ?? []}
            onSet={onSet}
          />
        ) : (
        <div role="menu" style={{ padding: `${scale.space8}px 0`, maxHeight: 320, overflowY: 'auto' }}>
          {active.values.map((value) => (
            <DropdownCheckboxItem
              key={value}
              label={value}
              icon={VALUE_ICONS[value]}
              checked={(filters[active.key] ?? []).includes(value)}
              onToggle={() => onToggle(active.key, value)}
            />
          ))}
        </div>
        )}
        <DropdownFooter
          label={`Clear ${active.label.toLowerCase()}`}
          disabled={!(filters[active.key] ?? []).length}
          onClick={() => onClearDimension(active.key)}
        />
      </div>

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
              onActivate={() => setActiveKey(d.key)}
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
