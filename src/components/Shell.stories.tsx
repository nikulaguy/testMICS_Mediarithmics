import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { TopBar, SideMenu } from './Shell';
import { SearchPalette } from './SearchPalette';
import { scale, semantic } from '../theme/micsTheme';

const meta = {
  title: 'Composants/Globaux/Shell',
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/** TopBar : logo, sélecteur d'organisation, recherche, aide, applications, compte. */
export const TopBarSeule: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div style={{ minHeight: 420, position: 'relative' }}>
        <TopBar onOpenSearch={() => setOpen(true)} />
        <SearchPalette open={open} onClose={() => setOpen(false)} />
      </div>
    );
  },
};

/** SideMenu : navigation principale. Trois états d'item, Default / Hover / Active. */
export const SideMenuSeul: Story = {
  render: () => {
    const [active, setActive] = useState('Segments');
    return (
      <div style={{ display: 'flex', minHeight: 480, background: semantic.bgWindow }}>
        <SideMenu active={active} onSelect={setActive} />
        <div style={{ padding: scale.space24, color: semantic.textLighter }}>
          Entrée active : <b style={{ color: semantic.textNormal }}>{active}</b>
        </div>
      </div>
    );
  },
};

/** Palette de recherche globale, ouverte par la loupe de la TopBar. */
export const RechercheGlobale: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <div style={{ minHeight: 520, background: semantic.bgWindow }}>
        <TopBar onOpenSearch={() => setOpen(true)} />
        <SearchPalette open={open} onClose={() => setOpen(false)} />
      </div>
    );
  },
};
