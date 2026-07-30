import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from 'antd';
import { AppShell } from './AppShell';
import { scale, semantic } from '../theme/micsTheme';

const Card = ({ children }: { children: React.ReactNode }) => (
  <div style={{ background: semantic.bgContainer, borderRadius: scale.radiusCard, padding: scale.space24, color: semantic.textNormal }}>
    {children}
  </div>
);

function Demo({ crumbs, actions }: { crumbs: { label: string; onClick?: () => void }[]; actions: React.ReactNode }) {
  const [search, setSearch] = useState(false);
  const [menu, setMenu] = useState('Segments');
  return (
    <div style={{ height: 560 }}>
      <AppShell
        crumbs={crumbs}
        actions={actions}
        searchOpen={search}
        onSearchOpenChange={setSearch}
        menuActive={menu}
        onMenuSelect={setMenu}
      >
        <Card>Contenu de la page.</Card>
      </AppShell>
    </div>
  );
}

const meta = {
  title: 'Composants/AppShell',
  component: AppShell,
  parameters: { layout: 'fullscreen' },
  argTypes: {
    crumbs: { control: false, description: 'Fil d\'ariane. 1 = item du SideMenu, 2 = onglet actif, 3 = ressource ouverte.' },
    actions: { control: false, description: 'Actions de niveau page, rendues à droite de l\'ActionBar.' },
    children: { control: false },
    searchOpen: { control: false },
    onSearchOpenChange: { control: false },
    menuActive: { control: false },
    onMenuSelect: { control: false },
  },
  args: {
    crumbs: [{ label: 'Segments' }],
    actions: null,
    children: null,
    searchOpen: false,
    onSearchOpenChange: () => {},
    menuActive: 'Segments',
    onMenuSelect: () => {},
  },
} satisfies Meta<typeof AppShell>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Écran de liste : deux niveaux de fil d'ariane, actions de page à droite. */
export const Liste: Story = {
  render: () => (
    <Demo
      crumbs={[{ label: 'Segments', onClick: () => {} }, { label: 'Segments' }]}
      actions={
        <>
          <Button>Export</Button>
          <Button type="primary">New segment</Button>
        </>
      }
    />
  ),
};

/** Écran de détail : trois niveaux, le dernier est la ressource ouverte, en texte. */
export const Detail: Story = {
  render: () => (
    <Demo
      crumbs={[{ label: 'Segments', onClick: () => {} }, { label: 'Segments', onClick: () => {} }, { label: 'Newsletter subscribers' }]}
      actions={<Button type="primary">Edit</Button>}
    />
  ),
};
