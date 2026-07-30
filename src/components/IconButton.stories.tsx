import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconButton } from './IconButton';
import { scale, semantic } from '../theme/micsTheme';

const meta = {
  title: 'Composants/IconButton',
  component: IconButton,
  argTypes: {
    icon: {
      control: 'select',
      options: ['appstore', 'user', 'info', 'magnifier', 'options', 'dots', 'download'],
      description: 'Nom du glyphe du set Icon.',
    },
    label: { control: 'text', description: 'Intitulé accessible. Obligatoire : le bouton n\'a pas de texte visible.' },
    expanded: {
      control: 'boolean',
      description: 'Le bouton ouvre un panneau. Pilote aria-haspopup / aria-expanded et l\'état visuel Pressed.',
    },
    onClick: { control: false },
    onPointerDown: { control: false },
  },
  args: { icon: 'appstore', label: 'Applications' },
  decorators: [
    (Story) => (
      <div style={{ background: semantic.info, padding: scale.space16, display: 'inline-flex' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Sur la navy de la TopBar, son contexte réel. */
export const BacASable: Story = {};

/** Les trois états : Default (text/on-dark), Hover (bg/hover), Pressed / ouvert (bg/selected). */
export const Etats: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: scale.space24, alignItems: 'center', color: semantic.textOnDark }}>
      <div style={{ textAlign: 'center' }}>
        <IconButton icon="appstore" label="Applications" />
        <div style={{ fontSize: 10, marginTop: 4 }}>Default</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <IconButton icon="user" label="Compte" expanded />
        <div style={{ fontSize: 10, marginTop: 4 }}>Ouvert</div>
      </div>
    </div>
  ),
};

/** La rangée de la TopBar, telle qu'elle est rendue en production. */
export const RangeeTopBar: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: scale.space8, alignItems: 'center' }}>
      <IconButton icon="magnifier" label="Rechercher" />
      <IconButton icon="info" label="Aide" />
      <IconButton icon="appstore" label="Applications" />
      <IconButton icon="user" label="Compte" />
    </div>
  ),
};
