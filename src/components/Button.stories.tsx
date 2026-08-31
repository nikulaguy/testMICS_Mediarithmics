import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from 'antd';
import { Icon } from './Icon';
import { scale, semantic } from '../theme/micsTheme';

/**
 * Button — catégorie THÉMÉ : c'est le Button d'Ant Design habillé par les tokens.
 * Aucune enveloppe côté DS, donc aucune prop inventée : ce qui est documenté ici
 * est l'API d'AntD, restreinte à ce que la maquette prévoit.
 */
const meta = {
  title: 'Composants/Simples/Button',
  component: Button,
  argTypes: {
    type: {
      control: 'inline-radio',
      options: ['primary', 'default', 'link'],
      description: 'Primary = action principale · default = action secondaire · link = action légère.',
    },
    danger: { control: 'boolean', description: 'Action destructive. Se combine à `type`, ce n’est pas un type.' },
    size: {
      control: 'inline-radio',
      options: ['middle', 'small'],
      description: 'middle = taille L de la maquette (h32) · small = taille M (h24).',
    },
    disabled: { control: 'boolean' },
    children: { control: 'text', description: 'Le libellé. Un verbe d’action.' },
    icon: { control: false, description: 'Icône du set du DS, posée à gauche du libellé.' },
  },
  args: { type: 'primary', size: 'middle', children: 'New segment' },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BacASable: Story = {};

const Rangee = ({ titre, children }: { titre: string; children: React.ReactNode }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: scale.space16 }}>
    <span style={{ width: 90, color: semantic.textLighter }}>{titre}</span>
    {children}
  </div>
);

/** Les quatre types. `danger` se combine à un type, il n'en remplace pas un. */
export const Types: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space12 }}>
      <Rangee titre="primary">
        <Button type="primary">New segment</Button>
      </Rangee>
      <Rangee titre="default">
        <Button>Export</Button>
      </Rangee>
      <Rangee titre="link">
        <Button type="link">Clear all filters</Button>
      </Rangee>
      <Rangee titre="danger">
        <Button danger>Delete</Button>
      </Rangee>
    </div>
  ),
};

/** Deux tailles, et deux seulement : L (h32) et M (h24). Même texte 12/20. */
export const Tailles: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space12 }}>
      <Rangee titre="L — middle">
        <Button type="primary">New segment</Button>
        <Button>Export</Button>
      </Rangee>
      <Rangee titre="M — small">
        <Button type="primary" size="small">New segment</Button>
        <Button size="small">Export</Button>
      </Rangee>
    </div>
  ),
};

/** L'icône est toujours à gauche du libellé, et à la taille du texte. */
export const AvecIcone: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: scale.space12 }}>
      <Button type="primary" icon={<Icon name="plus" size={14} />}>New segment</Button>
      <Button icon={<Icon name="download" size={14} />}>Export</Button>
      <Button type="link" icon={<Icon name="broom" size={12} />}>Clear all filters</Button>
    </div>
  ),
};

/**
 * Les états, dont deux ne se voient qu'à l'usage. `autoFocus` ne les montrerait
 * pas : `:focus-visible` ne se déclenche qu'au clavier, et forcer le focus au
 * chargement d'une page de documentation la ferait sauter à cet endroit.
 */
export const Etats: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space12 }}>
      <Rangee titre="default">
        <Button type="primary">New segment</Button>
      </Rangee>
      <Rangee titre="hover">
        <Button type="primary">Survoler ce bouton</Button>
      </Rangee>
      <Rangee titre="disabled">
        <Button type="primary" disabled>New segment</Button>
      </Rangee>
      <Rangee titre="focus">
        <Button type="primary">Atteindre au clavier</Button>
        <span style={{ color: semantic.textLighter }}>
          Tab jusqu’à ce bouton : le liseré apparaît. Un clic à la souris ne le montre pas.
        </span>
      </Rangee>
      <Rangee titre="onde">
        <Button type="primary">Cliquer ici</Button>
        <span style={{ color: semantic.textLighter }}>
          L’anneau part du bord et s’efface en deux secondes. Ce n’est pas un état.
        </span>
      </Rangee>
    </div>
  ),
};
