import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { SideMenuItem } from './SideMenuItem';
import { scale, semantic } from '../theme/micsTheme';

const meta = {
  title: 'Composants/SideMenuItem',
  component: SideMenuItem,
  argTypes: {
    label: { control: 'text', description: 'Libellé de l’entrée. Court, sans ponctuation.' },
    icon: { control: 'text', description: 'Glyphe du set, ou marque `app-*` dans l’AppLauncher.' },
    active: { control: 'boolean', description: 'Entrée en cours. Une seule par liste.' },
    role: {
      control: 'inline-radio',
      options: ['link', 'menuitem'],
      description: 'link dans le SideMenu, menuitem dans un menu ouvert depuis un bouton.',
      table: { defaultValue: { summary: 'link' } },
    },
    srSuffix: { control: 'text', description: 'Complément réservé aux lecteurs d’écran.' },
    onSelect: { control: false },
  },
  args: { label: 'Segments', icon: 'team', active: false, role: 'link' },
  decorators: [
    (Story) => (
      // La gouttière appartient à la liste : 15 px horizontaux, comme dans la maquette.
      <div style={{ width: 200, background: semantic.bgContainer, padding: '8px 15px', display: 'flex' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SideMenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BacASable: Story = {};

/** Les trois états de la maquette. Le survol est à essayer à la souris. */
export const Etats: Story = {
  render: () => (
    <div style={{ width: 170, display: 'flex', flexDirection: 'column', gap: 2 }}>
      <SideMenuItem label="Default" icon="team" />
      <SideMenuItem label="Active" icon="team" active />
      <SideMenuItem label="Survolez-moi" icon="team" />
    </div>
  ),
};

/** Une liste réelle : un seul actif, gap 2, gouttière de 15. */
export const DansUneListe: Story = {
  render: () => {
    const items = [
      { label: 'Builders', icon: 'cluster' },
      { label: 'User lookup', icon: 'monitor' },
      { label: 'Segments', icon: 'team' },
    ];
    return <Liste items={items} />;
  },
};

/** Les mêmes entrées dans l'AppLauncher : marques d'application, rôle `menuitem`. */
export const DansLAppLauncher: Story = {
  render: () => (
    <div style={{ width: 230, display: 'flex', flexDirection: 'column' }}>
      {[
        { label: 'Navigator', icon: 'app-navigator' },
        { label: 'Computing console', icon: 'app-computing-console' },
      ].map((a) => (
        <div key={a.label} style={{ display: 'flex', padding: `${scale.space4}px 0` }}>
          <SideMenuItem role="menuitem" label={a.label} icon={a.icon} />
        </div>
      ))}
    </div>
  ),
};

function Liste({ items }: { items: Array<{ label: string; icon: string }> }) {
  const [active, setActive] = useState(items[2].label);
  return (
    <div style={{ width: 170, display: 'flex', flexDirection: 'column', gap: 2 }}>
      {items.map((i) => (
        <SideMenuItem
          key={i.label}
          label={i.label}
          icon={i.icon}
          active={i.label === active}
          onSelect={() => setActive(i.label)}
        />
      ))}
    </div>
  );
}
