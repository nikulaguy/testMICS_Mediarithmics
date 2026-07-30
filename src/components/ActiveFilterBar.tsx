import { useLayoutEffect, useRef, useState } from 'react';
import { Button } from 'antd';
import { Tag } from './Tag';
import { Icon } from './Icon';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { scale, semantic } from '../theme/micsTheme';

export interface ActiveFilter {
  /** Identifiant unique : dimension + valeur. */
  key: string;
  label: string;
}

interface Props {
  filters: ActiveFilter[];
  onRemove: (key: string) => void;
  onClearAll: () => void;
}

/**
 * Barre de filtres actifs (Figma : fond bg/subtle, radius/card, padding 8, gap 12).
 * UNE chip par filtre appliqué, jamais de regroupement : c'est le principe même de
 * cette barre de rappel. Elle n'apparaît que s'il existe au moins un filtre actif
 * non lisible dans la barre d'outils.
 * Par défaut une seule ligne ; le dépliage n'apparaît que si ça déborde vraiment,
 * la largeur réelle des chips étant mesurée avant de décider combien en afficher.
 */
export function ActiveFilterBar({ filters, onRemove, onClearAll }: Props) {
  const rowRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(filters.length);
  const [expanded, setExpanded] = useState(false);

  useLayoutEffect(() => {
    const row = rowRef.current;
    const measure = measureRef.current;
    if (!row || !measure) return;

    const compute = () => {
      const available = row.clientWidth;
      const widths = Array.from(measure.children).map((c) => (c as HTMLElement).offsetWidth);
      const GAP = scale.space8;
      const TOGGLE_WIDTH = 96; // place réservée au lien « +n autres »
      let used = 0;
      let count = 0;
      for (let i = 0; i < widths.length; i += 1) {
        const next = used + widths[i] + (i > 0 ? GAP : 0);
        const needsToggle = i < widths.length - 1;
        if (next + (needsToggle ? GAP + TOGGLE_WIDTH : 0) > available) break;
        used = next;
        count += 1;
      }
      setVisibleCount(Math.max(1, count));
    };

    compute();
    const observer = new ResizeObserver(compute);
    observer.observe(row);
    return () => observer.disconnect();
  }, [filters]);

  if (!filters.length) return null;

  const overflows = visibleCount < filters.length;
  const shown = expanded || !overflows ? filters : filters.slice(0, visibleCount);
  const hiddenCount = filters.length - visibleCount;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: expanded ? 'flex-start' : 'center',
        gap: scale.space12,
        background: semantic.bgSubtle,
        borderRadius: scale.radiusCard,
        padding: scale.space8,
      }}
    >
      {/* rangée de mesure : hors écran, pour connaître la largeur réelle des chips */}
      <div
        ref={measureRef}
        aria-hidden
        style={{ position: 'absolute', visibility: 'hidden', pointerEvents: 'none', display: 'flex', gap: scale.space8 }}
      >
        {filters.map((f) => (
          <Tag key={f.key} closable>
            {f.label}
          </Tag>
        ))}
      </div>

      <div
        ref={rowRef}
        style={{
          flex: 1,
          display: 'flex',
          flexWrap: expanded ? 'wrap' : 'nowrap',
          gap: scale.space8,
          alignItems: 'center',
          minWidth: 0,
        }}
      >
        {shown.map((f) => (
          <Tag key={f.key} closable onClose={() => onRemove(f.key)}>
            {f.label}
          </Tag>
        ))}
        {overflows && (
          <Button type="link" size="small" onClick={() => setExpanded((v) => !v)} style={{ paddingInline: 0 }}>
            {expanded ? (
              <>
                Réduire <UpOutlined style={{ fontSize: 10 }} />
              </>
            ) : (
              <>
                +{hiddenCount} autres <DownOutlined style={{ fontSize: 10 }} />
              </>
            )}
          </Button>
        )}
      </div>

      {/* Même bouton que le pied des dropdown de filtres, en taille M : icône balai
          + libellé. La réinitialisation se reconnaît partout au même balai. */}
      <Button
        type="link"
        size="small"
        onClick={onClearAll}
        icon={<Icon name="broom" size={10} />}
        style={{ flex: '0 0 auto' }}
      >
        Clear all filters
      </Button>
    </div>
  );
}
