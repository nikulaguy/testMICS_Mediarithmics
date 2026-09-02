import type { ReactNode } from 'react';
import { TopBar, SideMenu } from './Shell';
import { Breadcrumb, type Crumb } from './Breadcrumb';
import { SearchPalette } from './SearchPalette';
import { scale, semantic } from '../theme/micsTheme';

interface Props {
  /**
   * Fil d'ariane à trois niveaux :
   * 1 = item actif du SideMenu · 2 = onglet actif · 3 = ressource ouverte.
   */
  crumbs: Crumb[];
  actions: ReactNode;
  children: ReactNode;
  searchOpen: boolean;
  onSearchOpenChange: (open: boolean) => void;
  menuActive: string;
  onMenuSelect: (entry: string) => void;
}

export function AppShell({ crumbs, actions, children, searchOpen, onSearchOpenChange, menuActive, onMenuSelect }: Props) {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', background: semantic.bgWindow }}>
      <TopBar onOpenSearch={() => onSearchOpenChange(true)} />
      <SearchPalette open={searchOpen} onClose={() => onSearchOpenChange(false)} />
      <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
        <SideMenu active={menuActive} onSelect={onMenuSelect} />
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          <div
            style={{
              flex: '0 0 auto',
              background: semantic.bgContainer,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBlock: scale.space12,
              paddingInline: scale.space35,
              gap: scale.space16,
            }}
          >
            <Breadcrumb items={crumbs} />
            <div style={{ display: 'flex', alignItems: 'center', gap: scale.space8 }}>{actions}</div>
          </div>
          <div style={{ flex: 1, overflow: 'auto', padding: scale.space35 }}>{children}</div>
        </main>
      </div>
    </div>
  );
}
