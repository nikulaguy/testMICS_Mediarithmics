import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Icon } from './Icon';
import { IconButton } from './IconButton';
import { DropdownPanel } from './DropdownPanel';
import { AppLauncher } from './AppLauncher';
import { SideMenuItem } from './SideMenuItem';
import logoUrl from '../assets/logo-mediarithmics.png';
import { scale, semantic } from '../theme/micsTheme';

function PanelRow({ children, onClick }: { children: ReactNode; onClick?: () => void }) {
  return (
    <div
      className="mics-panel-row"
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: scale.space12,
        height: 32,
        paddingInline: scale.space16,
        cursor: 'pointer',
      }}
    >
      {children}
    </div>
  );
}

const ORGS = [
  { name: 'mediarithmics - product', id: '1278' },
  { name: 'mediarithmics - Dogfooding', id: '11125' },
];

/*
  Deux groupes, comme le code produit (getAppMenuSections) : les applications
  d'abord, les ressources documentaires ensuite, séparées par un filet.
*/
const APP_GROUPS = [
  [
    { name: 'Navigator', icon: 'app-navigator' },
    { name: 'Computing console', icon: 'app-computing-console' },
  ],
  [
    { name: 'Developer Documentation', icon: 'app-developer-documentation', external: true },
    { name: 'User Guide', icon: 'app-user-guide', external: true },
  ],
];

type PanelName = 'org' | 'apps' | 'account' | null;

/** TopBar : h40, fond primary, toujours le premier enfant de l'écran. */
export function TopBar({ onOpenSearch }: { onOpenSearch: () => void }) {
  const [open, setOpen] = useState<PanelName>(null);
  const [org, setOrg] = useState(ORGS[0]);
  const barRef = useRef<HTMLElement>(null);

  // Fermeture au clic extérieur / Échap. On écoute pointerdown, et les bascules
  // ouvrent aussi sur pointerdown : l'ordre des évènements devient déterministe
  // (avec onClick, un clic légèrement glissé n'ouvrait pas le panneau).
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (barRef.current && !barRef.current.contains(e.target as Node)) setOpen(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
    };
    document.addEventListener('pointerdown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const toggle = (name: Exclude<PanelName, null>) => (e: React.PointerEvent) => {
    e.stopPropagation();
    setOpen((p) => (p === name ? null : name));
  };

  return (
    <header
      ref={barRef}
      role="banner"
      style={{
        height: scale.sizeHeader,
        background: semantic.primary,
        display: 'flex',
        alignItems: 'center',
        gap: scale.space24,
        paddingInline: scale.space16,
        flex: '0 0 auto',
        position: 'relative',
        zIndex: 1100,
      }}
    >
      {/* Switcher d'organisation : ne change QUE le contexte org, pas la page. */}
      <div style={{ position: 'relative', flex: '0 0 auto' }}>
        <button
          type="button"
          onPointerDown={toggle('org')}
          aria-haspopup="true"
          aria-expanded={open === 'org'}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: scale.space8,
            height: 24,
            background: 'transparent',
            border: 0,
            padding: 0,
            color: semantic.textOnDark,
            font: 'inherit',
            cursor: 'pointer',
          }}
        >
          <Icon name="tree" size={20} />
          <span>{org.name}</span>
          <span style={{ fontSize: 8, opacity: 0.9 }}>▼</span>
        </button>
        {open === 'org' && (
          <DropdownPanel anchored align="left" width={260}>
            {ORGS.map((o) => (
              <PanelRow
                key={o.id}
                onClick={() => {
                  setOrg(o);
                  setOpen(null);
                }}
              >
                <span style={{ flex: 1, color: o.id === org.id ? semantic.primary : semantic.textNormal }}>
                  {o.name}
                </span>
                <span style={{ color: semantic.textLighter }}>{o.id}</span>
              </PanelRow>
            ))}
          </DropdownPanel>
        )}
      </div>

      {/* La recherche est globale : le clic (ou Cmd+K) ouvre la palette. */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }} role="search">
        <button
          type="button"
          onClick={onOpenSearch}
          className="mics-topbar-search"
          style={{
            width: '100%',
            maxWidth: 520,
            height: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: scale.space8,
            background: semantic.searchFieldBg,
            border: 0,
            borderRadius: scale.radiusBase,
            paddingInline: scale.space8,
            color: semantic.searchFieldText,
            font: 'inherit',
            cursor: 'pointer',
          }}
        >
          <span>Search your workspace (Cmd + k)</span>
          <Icon name="magnifier" size={14} color={semantic.textOnDark} />
        </button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: scale.space8, position: 'relative' }}>
        <IconButton icon="appstore" label="Applications" expanded={open === 'apps'} onPointerDown={toggle('apps')} />
        <IconButton icon="options" label="Réglages" />
        <IconButton icon="user" label="Mon compte" expanded={open === 'account'} onPointerDown={toggle('account')} />

        {/* 260 : la largeur du composant Figma. */}
        {open === 'apps' && (
          <DropdownPanel anchored width={260}>
            <AppLauncher groups={APP_GROUPS} />
          </DropdownPanel>
        )}

        {open === 'account' && (
          <DropdownPanel anchored width={220}>
            <div
              style={{
                height: 40,
                display: 'flex',
                alignItems: 'center',
                paddingInline: scale.space16,
                color: semantic.textLighter,
              }}
            >
              nguy@frontguys.fr
            </div>
            <div style={{ borderTop: `1px solid ${semantic.borderInput}` }} />
            <PanelRow>Logout</PanelRow>
          </DropdownPanel>
        )}
      </div>
    </header>
  );
}

const MENU: Array<{ group?: string; items: Array<{ label: string; icon: string }> }> = [
  { items: [{ label: 'Boards', icon: 'chart-bar' }] },
  {
    group: 'AUDIENCE',
    items: [
      { label: 'Builders', icon: 'cluster' },
      { label: 'User lookup', icon: 'monitor' },
      { label: 'Segments', icon: 'team' },
    ],
  },
  {
    group: 'ACTIVATION',
    items: [
      { label: 'Feeds', icon: 'feeds' },
      { label: 'Creatives', icon: 'file-image' },
      { label: 'Automations', icon: 'automations' },
    ],
  },
  { group: 'CONTEXTUAL', items: [{ label: 'Targeting lists', icon: 'target' }] },
  {
    group: 'MEASUREMENT',
    items: [
      { label: 'Experiments', icon: 'chart-line' },
      { label: 'Campaigns', icon: 'campaigns' },
      { label: 'Funnel', icon: 'funnel' },
    ],
  },
  { group: 'DATA STUDIO', items: [{ label: 'Query Tool', icon: 'terminal' }] },
];

/** SideMenu : 200 fixe, un seul item actif. */
export function SideMenu({ active, onSelect }: { active: string; onSelect: (entry: string) => void }) {
  return (
    <nav
      aria-label="Navigation principale"
      style={{
        width: scale.sideMenuWidth,
        flex: '0 0 auto',
        background: semantic.bgContainer,
        paddingBottom: scale.space16,
        overflowY: 'auto',
      }}
    >
      {/* Le logo ramène à l'entrée Boards du menu. */}
      <div
        role="link"
        tabIndex={0}
        onClick={() => onSelect('Boards')}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onSelect('Boards');
          }
        }}
        style={{ height: 72, display: 'flex', alignItems: 'center', paddingInline: scale.space16, cursor: 'pointer' }}
      >
        <img src={logoUrl} alt="mediarithmics" style={{ width: 150, height: 'auto' }} />
      </div>
      {MENU.map((section, i) => (
        <div key={i}>
          {section.group && (
            <div
              style={{
                padding: `${scale.space16}px ${scale.space16}px ${scale.space4}px`,
                color: semantic.textLighter,
                fontSize: 10,
                letterSpacing: scale.trackingCaps,
              }}
            >
              {section.group}
            </div>
          )}
          {section.items.map((item) => (
            // Gouttière de la liste : 15 horizontaux, 2 de gap vertical (Figma « row »).
            <div key={item.label} style={{ display: 'flex', padding: '1px 15px' }}>
              <SideMenuItem
                label={item.label}
                icon={item.icon}
                active={item.label === active}
                onSelect={() => onSelect(item.label)}
              />
            </div>
          ))}
        </div>
      ))}
    </nav>
  );
}
