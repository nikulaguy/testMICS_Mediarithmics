import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from 'antd';
import { Card } from './Card';
import { Icon } from './Icon';
import { scale, semantic } from '../theme/micsTheme';

const meta = {
  title: 'Composants/Simples/Card',
  component: Card,
  argTypes: {
    title: { control: 'text', description: 'Titre de la carte. Headline 4.' },
    actions: { control: false, description: 'Actions de la carte, à droite du titre.' },
    children: { control: false },
    style: { control: false },
  },
  args: { title: 'Features usage', children: <Filler /> },
  decorators: [
    (Story) => (
      <div style={{ background: semantic.bgWindow, padding: scale.space24 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Contenu de démonstration, pour montrer la surface plutôt que ce qu'elle porte. */
function Filler({ h = 120 }: { h?: number }) {
  return (
    <div
      style={{
        height: h,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: `1px dashed ${semantic.borderDefault}`,
        borderRadius: scale.radiusBase,
        color: semantic.textLighter,
      }}
    >
      Contenu de la carte
    </div>
  );
}

export const BacASable: Story = {};

/** Avec des actions : elles appartiennent à la carte, pas à la page. */
export const AvecActions: Story = {
  render: () => (
    <Card
      title="Exports"
      actions={
        <Button size="small" icon={<Icon name="plus" size={10} />}>
          New export
        </Button>
      }
    >
      <Filler />
    </Card>
  ),
};

/** Sans titre : l'en-tête disparaît, le contenu remonte contre le padding. */
export const SansEnTete: Story = {
  render: () => (
    <Card>
      <Filler />
    </Card>
  ),
};

/** Actions seules : le titre garde sa place, les actions restent à droite. */
export const ActionsSeules: Story = {
  render: () => (
    <Card actions={<Button size="small">Create overlap analysis</Button>}>
      <Filler h={80} />
    </Card>
  ),
};

/** Deux cartes empilées : le gap appartient à la page, pas à la carte. */
export const DeuxCartes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space16 }}>
      <Card title="Première carte">
        <Filler h={60} />
      </Card>
      <Card title="Seconde carte">
        <Filler h={60} />
      </Card>
    </div>
  ),
};
