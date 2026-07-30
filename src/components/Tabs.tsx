import { useCallback, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { DropdownPanel } from './DropdownPanel';
import { DropdownGroup, DropdownOptionItem } from './DropdownItems';
import { Icon } from './Icon';
import { elevation, scale, semantic } from '../theme/micsTheme';

export interface TabItem {
  key: string;
  label: string;
  /** Nombre à traiter. Pastille ronde orange, distincte du CountBadge. */
  badge?: number;
  content?: ReactNode;
}

/**
 * Tab (Figma 17:61) — un onglet. Libellé Circular Medium 14, hauteur 44,
 * padding 12 haut / 10 bas, soulignement de 2 px.
 * Actif = trait et libellé en primary. Défaut = trait transparent, libellé text/normal.
 * Le survol éclaircit le libellé : sans lui, rien ne dit que la zone est cliquable.
 */
export function Tab({
  label,
  badge,
  active,
  onSelect,
  panelId,
}: {
  label: string;
  badge?: number;
  active: boolean;
  onSelect: () => void;
  panelId?: string;
}) {
  const [hover, setHover] = useState(false);
  const color = active ? semantic.primary : hover ? semantic.textDarker : semantic.textNormal;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      aria-controls={panelId}
      tabIndex={active ? 0 : -1}
      onClick={onSelect}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        height: 44,
        padding: '12px 0 10px',
        background: 'transparent',
        border: 0,
        borderBottom: `2px solid ${active ? semantic.primary : 'transparent'}`,
        color,
        font: 'inherit',
        fontSize: 14,
        fontWeight: 500,
        lineHeight: '22px',
        cursor: 'pointer',
      }}
    >
      {label}
      {badge !== undefined && badge > 0 && (
        <span
          style={{
            minWidth: 16,
            height: 16,
            paddingInline: 4,
            borderRadius: 8,
            background: semantic.warning,
            color: semantic.textOnDark,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 10,
            fontWeight: 500,
            flex: '0 0 auto',
          }}
        >
          {badge}
        </span>
      )}
    </button>
  );
}

/**
 * Tab Bar (Figma 249:107) — rangée d'onglets et sa ligne de base pleine largeur.
 * Sous-vues d'un même contexte, jamais navigation entre objets : pour ça, c'est
 * le SideMenu. Un seul onglet actif, ordre stable d'un écran à l'autre.
 *
 * Débordement : la rangée défile horizontalement et un bouton « … » apparaît au bout,
 * posé sur une ombre pour que le contenu ait l'air de passer dessous. Sa dropdown
 * liste les onglets HORS ÉCRAN à cet instant — ceux de droite si on est à gauche, ceux
 * de gauche si on a défilé jusqu'au bout. Choisir une entrée sélectionne l'onglet et
 * le ramène dans le champ de vision.
 */
/** Largeur du bouton « … » (Figma : ButtonMore 48 × 44). */
const MORE_WIDTH = 48;

export function TabBar({
  items,
  active,
  onChange,
  idPrefix = 'tab',
}: {
  items: TabItem[];
  active: string;
  onChange: (key: string) => void;
  idPrefix?: string;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef(new Map<string, HTMLElement>());
  const moreRef = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState<string[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);

  /**
   * Un onglet est « caché » s'il déborde du cadre visible, bouton « … » compris.
   *
   * La largeur du bouton est une CONSTANTE, pas sa largeur mesurée : la déduire de la
   * présence du bouton créait une boucle. Un onglet à cheval sur la bande de 48 px
   * basculait caché → le bouton apparaissait → la zone utile rétrécissait → l'onglet
   * redevenait visible → le bouton disparaissait. Le va-et-vient faisait dériver le
   * défilement tout seul, à cause de l'ancrage de défilement du navigateur.
   */
  const measure = useCallback(() => {
    const scroller = scrollerRef.current;
    // Largeur nulle = barre pas encore rendue, ou dans un conteneur masqué. Mesurer
    // là-dedans conclurait que TOUS les onglets débordent.
    if (!scroller || !scroller.clientWidth) return;
    const overflows = scroller.scrollWidth > scroller.clientWidth + 1;
    const left = scroller.scrollLeft;
    const right = left + scroller.clientWidth - (overflows ? MORE_WIDTH : 0);
    const out: string[] = [];
    for (const item of items) {
      const el = tabRefs.current.get(item.key);
      if (!el) continue;
      // 1 px de tolérance : les arrondis de sous-pixel feraient clignoter le bouton.
      if (el.offsetLeft < left - 1 || el.offsetLeft + el.offsetWidth > right + 1) out.push(item.key);
    }
    setHidden((prev) => (prev.length === out.length && prev.every((k, i) => k === out[i]) ? prev : out));
  }, [items]);

  useLayoutEffect(() => {
    measure();
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const observer = new ResizeObserver(measure);
    observer.observe(scroller);
    return () => observer.disconnect();
  }, [measure]);

  /**
   * Ramène un onglet dans le champ de vision. On ne peut pas s'en remettre à
   * scrollIntoView : il s'arrête dès que l'élément touche le bord, et le laisse donc
   * à moitié sous le bouton « … ». On retire la largeur du bouton de la zone utile.
   */
  const reveal = useCallback((key: string) => {
    // Après la peinture : le changement d'onglet peut faire apparaître le bouton « … »
    // et sa réserve de fin de liste. Mesurer avant, c'est mesurer l'ancienne mise en
    // page et calculer un défilement qui sera aussitôt borné.
    requestAnimationFrame(() => {
      const scroller = scrollerRef.current;
      const el = tabRefs.current.get(key);
      if (!scroller || !el || !scroller.clientWidth) return;
      const left = el.offsetLeft;
      const right = left + el.offsetWidth;
      const viewLeft = scroller.scrollLeft;
      const viewRight = viewLeft + scroller.clientWidth - MORE_WIDTH;
      if (left < viewLeft) scroller.scrollTo({ left });
      else if (right > viewRight) scroller.scrollTo({ left: right - scroller.clientWidth + MORE_WIDTH });
    });
  }, []);

  /*
    Sur changement d'onglet UNIQUEMENT. Ne pas dépendre de `hidden` : le défilement
    modifie `hidden`, qui relancerait l'effet, qui ramènerait la barre sur l'onglet
    actif — l'utilisateur ne pourrait plus faire défiler.
  */
  useEffect(() => {
    reveal(active);
  }, [active, reveal]);

  useEffect(() => {
    if (!menuOpen) return;
    const onDown = (e: PointerEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('pointerdown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  const move = (delta: number) => {
    const i = items.findIndex((t) => t.key === active);
    onChange(items[(i + delta + items.length) % items.length].key);
  };

  return (
    <div style={{ position: 'relative', borderBottom: `1px solid ${semantic.borderInput}` }}>
      <div
        ref={scrollerRef}
        onScroll={measure}
        className="mics-tabbar-scroller"
        style={{ overflowX: 'auto', overflowY: 'hidden' }}
      >
        <div
          role="tablist"
          onKeyDown={(e) => {
            if (e.key === 'ArrowRight') { e.preventDefault(); move(1); }
            if (e.key === 'ArrowLeft') { e.preventDefault(); move(-1); }
          }}
          style={{ display: 'flex', alignItems: 'flex-end', gap: scale.space35, width: 'max-content' }}
        >
          {items.map((t) => (
            <span
              key={t.key}
              ref={(el) => {
                if (el) tabRefs.current.set(t.key, el);
                else tabRefs.current.delete(t.key);
              }}
              style={{ display: 'inline-flex' }}
            >
              <Tab
                label={t.label}
                badge={t.badge}
                active={t.key === active}
                onSelect={() => onChange(t.key)}
                panelId={`${idPrefix}-panel-${t.key}`}
              />
            </span>
          ))}
          {/*
            Réserve en fin de liste : sans elle, le défilement bute avant que le dernier
            onglet ait dépassé le bouton « … », qui le recouvre en permanence.
          */}
          {hidden.length > 0 && <span aria-hidden style={{ width: MORE_WIDTH, flex: '0 0 auto' }} />}
        </div>
      </div>

      {hidden.length > 0 && (
        <div ref={moreRef} style={{ position: 'absolute', right: 0, top: 0, height: 44 }}>
          <button
            type="button"
            aria-label={`Autres onglets (${hidden.length})`}
            aria-haspopup="true"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            style={{
              width: MORE_WIDTH,
              height: 44,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 0,
              // Fond opaque + ombre : le contenu qui défile passe visiblement dessous.
              background: semantic.bgSubtle,
              boxShadow: elevation.panel,
              color: semantic.textNormal,
              cursor: 'pointer',
            }}
          >
            <Icon name="dots" size={16} />
          </button>

          {menuOpen && (
            <DropdownPanel anchored align="right" width={240}>
              <DropdownGroup>
                {/* Les onglets hors écran, dans l'ordre de la barre. */}
                {items
                  .filter((t) => hidden.includes(t.key))
                  .map((t) => (
                    <DropdownOptionItem
                      key={t.key}
                      label={t.label}
                      selected={t.key === active}
                      onSelect={() => {
                        onChange(t.key);
                        setMenuOpen(false);
                        reveal(t.key);
                      }}
                    />
                  ))}
              </DropdownGroup>
            </DropdownPanel>
          )}
        </div>
      )}
    </div>
  );
}

/** Panneau associé à un onglet. À rendre sous la TabBar, un seul à la fois. */
export function TabPanel({ tabKey, idPrefix = 'tab', children }: { tabKey: string; idPrefix?: string; children: ReactNode }) {
  return (
    <div id={`${idPrefix}-panel-${tabKey}`} role="tabpanel" tabIndex={0}>
      {children}
    </div>
  );
}
