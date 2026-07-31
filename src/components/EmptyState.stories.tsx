import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from 'antd';
import { EmptyState } from './EmptyState';
import { scale, semantic } from '../theme/micsTheme';

const Card = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      background: semantic.bgContainer,
      borderRadius: scale.radiusCard,
      minHeight: 260,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    {children}
  </div>
);

const meta = {
  title: 'Composants/Simples/EmptyState',
  component: EmptyState,
  argTypes: {
    title: {
      control: 'text',
      description: 'Titre, Headline 4 (16/24). Correspond à la prop « Message » de la maquette.',
    },
    description: {
      control: 'text',
      description: 'Texte secondaire, Body/Book 12. Prop « Show description ». Facultatif.',
    },
    action: { control: false, description: 'Action de sortie. Prop « Show button ». Facultative, un seul bouton.' },
  },
  args: { title: 'No segment matches your filters' },
  decorators: [
    (Story) => (
      <Card>
        <Story />
      </Card>
    ),
  ],
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BacASable: Story = {};

/** Les trois compositions de la maquette : titre seul, titre + description, tout. */
export const Compositions: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: scale.space16 }}>
      <Card>
        <EmptyState title="No alert triggered" />
      </Card>
      <Card>
        <EmptyState title="No alert triggered" description="There are no alerts at the moment." />
      </Card>
      <Card>
        <EmptyState
          title="No segment yet"
          description="Create your first segment to start building audiences."
          action={<Button type="primary">New segment</Button>}
        />
      </Card>
    </div>
  ),
  decorators: [(Story) => <Story />],
};

/** Cas 1 : filtre trop restrictif. L'action ramène l'utilisateur à un état utile. */
export const FiltreTropRestrictif: Story = {
  args: {
    title: 'No segment matches your filters',
    description: 'Try removing one of the active filters to widen the results.',
    action: <Button>Clear all filters</Button>,
  },
};

/** Cas 2 : rien à traiter. C'est une bonne nouvelle, pas une erreur : pas d'action. */
export const RienATraiter: Story = {
  args: { title: 'No alert triggered', description: 'There are no alerts at the moment.', action: undefined },
};

/** Cas 3 : ressource jamais créée. L'action est la création. */
export const PremiereCreation: Story = {
  args: {
    title: 'No segment yet',
    description: 'Create your first segment to start building audiences.',
    action: <Button type="primary">New segment</Button>,
  },
};
