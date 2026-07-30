import { useEffect, useMemo, useRef, useState } from 'react';
import { Empty } from 'antd';
import { Icon } from './Icon';
import { SEGMENTS } from '../data/segments';
import { panelSurface } from './DropdownPanel';
import { scale, semantic } from '../theme/micsTheme';

interface Result {
  section: string;
  label: string;
  icon: string;
}

/** Index de démonstration : features du produit, segments du datamart, plugins. */
const INDEX: Result[] = [
  { section: 'FEATURES', label: 'Navigator > Segments', icon: 'team' },
  { section: 'FEATURES', label: 'Navigator > Builders', icon: 'cluster' },
  { section: 'FEATURES', label: 'Navigator > Campaigns', icon: 'campaigns' },
  { section: 'FEATURES', label: 'Settings > Users & Roles', icon: 'user' },
  ...SEGMENTS.map((s) => ({ section: 'SEGMENTS', label: s.name, icon: 'team' })),
  { section: 'PLUGINS', label: 'product-team-test-audience-segment-feed', icon: 'feeds' },
  { section: 'PLUGINS', label: 'linkedin-ads-user-list-feed', icon: 'feeds' },
];

/** Met en gras la sous-chaîne qui correspond à la requête. */
function highlight(label: string, query: string) {
  if (!query) return label;
  const i = label.toLowerCase().indexOf(query.toLowerCase());
  if (i < 0) return label;
  return (
    <>
      {label.slice(0, i)}
      <strong style={{ fontWeight: 500, color: semantic.textDarker }}>{label.slice(i, i + query.length)}</strong>
      {label.slice(i + query.length)}
    </>
  );
}

/**
 * Palette de recherche globale (Figma Search / Modal).
 * Surface superposée SPÉCIALE : centrée horizontalement, ancrée à 140 px du haut,
 * l 760, par-dessus un scrim bg/scrim. Pas de header ni de footer d'Overlay :
 * on ferme à Échap ou au clic sur le voile.
 */
export function SearchPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return INDEX.filter((r) => r.label.toLowerCase().includes(q)).slice(0, 12);
  }, [query]);

  useEffect(() => {
    if (open) {
      setQuery('');
      setCursor(0);
      window.setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setCursor((c) => Math.min(c + 1, Math.max(results.length - 1, 0)));
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setCursor((c) => Math.max(c - 1, 0));
      }
      if (e.key === 'Enter' && results[cursor]) onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, results, cursor, onClose]);

  if (!open) return null;

  let lastSection = '';
  let index = -1;

  return (
    <div
      onMouseDown={onClose}
      style={{ position: 'fixed', inset: 0, background: semantic.bgScrim, zIndex: 2000 }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Recherche globale"
        onMouseDown={(e) => e.stopPropagation()}
        style={{
          width: 760,
          maxWidth: 'calc(100vw - 48px)',
          margin: '140px auto 0',
          ...panelSurface,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: scale.space12,
            padding: `0 ${scale.space16}px`,
            height: 48,
            borderBottom: `1px solid ${semantic.borderInput}`,
          }}
        >
          <Icon name="magnifier" size={16} color={semantic.textLighter} />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setCursor(0);
            }}
            placeholder="Search your workspace"
            style={{ flex: 1, border: 0, outline: 'none', font: 'inherit', color: semantic.textNormal }}
          />
          <Icon name="options" size={16} color={semantic.textLighter} />
        </div>

        <div style={{ maxHeight: 420, overflowY: 'auto' }}>
          {query && !results.length && (
            <div style={{ padding: `${scale.space24}px 0` }}>
              <Empty description={`Aucun résultat pour « ${query} »`} />
            </div>
          )}
          {results.map((r) => {
            index += 1;
            const showSection = r.section !== lastSection;
            lastSection = r.section;
            const isCursor = index === cursor;
            const rowIndex = index;
            return (
              <div key={r.section + r.label}>
                {showSection && (
                  <div
                    style={{
                      padding: `${scale.space12}px ${scale.space16}px ${scale.space4}px`,
                      color: semantic.textLighter,
                      fontSize: 10,
                      letterSpacing: scale.trackingCaps,
                    }}
                  >
                    {r.section}
                  </div>
                )}
                <div
                  onMouseEnter={() => setCursor(rowIndex)}
                  onClick={onClose}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: scale.space12,
                    padding: `8px ${scale.space16}px`,
                    background: isCursor ? semantic.bgSubtle : 'transparent',
                    color: semantic.linkDefault,
                    cursor: 'pointer',
                  }}
                >
                  <Icon name={r.icon} size={16} color={semantic.textLighter} />
                  <span>{highlight(r.label, query)}</span>
                </div>
              </div>
            );
          })}
          {!query && (
            <div style={{ padding: `${scale.space20}px ${scale.space16}px`, color: semantic.textLighter }}>
              Tapez pour chercher une feature, un segment ou un plugin.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
