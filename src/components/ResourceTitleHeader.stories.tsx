import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ResourceTitleHeader, type ResourceLabel } from './ResourceTitleHeader';
import { scale, semantic } from '../theme/micsTheme';

const meta = {
  title: 'Composants/ResourceTitleHeader',
  component: ResourceTitleHeader,
  argTypes: {
    title: { control: 'text', description: 'Nom de la ressource. Headline 4 (16/24).' },
    type: { control: 'text', description: 'Type de la ressource, à droite du titre. Facultatif.' },
    typeIcon: { control: 'text', description: 'Nom du glyphe du set Icon pour le type.' },
    created: { control: 'text', description: 'Date de création, déjà formatée. Facultative.' },
    labels: { control: false, description: 'Labels. `undefined` masque la ligne entière (Show labels).' },
    onAddLabel: { control: false },
    onRemoveLabel: { control: false },
    as: { control: 'inline-radio', options: ['h1', 'h2'], description: 'Niveau de titre.' },
  },
  args: {
    title: 'Copy of Copy of Test_max_230426',
    type: 'User Query',
    typeIcon: 'user-query',
    created: 'Created on 16/07/2026 - 11:11:49',
  },
  decorators: [
    (Story) => (
      <div style={{ background: semantic.bgContainer, borderRadius: scale.radiusCard, padding: scale.space24 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ResourceTitleHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BacASable: Story = {};

/** Avec labels : la ligne 2 apparaît, avec son bouton d'ajout et les chips. */
export const AvecLabels: Story = {
  render: () => {
    const [labels, setLabels] = useState<ResourceLabel[]>([
      { key: 'a', label: 'Volume Drop Alerts Disabled' },
      { key: 'b', label: 'e-commerce' },
    ]);
    return (
      <ResourceTitleHeader
        title="Copy of Copy of Test_max_230426"
        type="User Query"
        typeIcon="user-query"
        created="Created on 16/07/2026 - 11:11:49"
        labels={labels}
        onAddLabel={() => setLabels((l) => [...l, { key: String(l.length), label: 'Nouveau label' }])}
        onRemoveLabel={(key) => setLabels((l) => l.filter((x) => x.key !== key))}
      />
    );
  },
};

/** Sans labels : la ligne 2 disparaît entièrement, elle ne laisse pas un vide. */
export const SansLabels: Story = {
  args: { labels: undefined },
};

/** Aucun label encore posé : le bouton d'ajout reste, seul. */
export const LabelsVides: Story = {
  args: { labels: [] },
};

/** Sans métadonnées : un titre suffit quand le type se lit dans le fil d'ariane. */
export const TitreSeul: Story = {
  args: { type: undefined, created: undefined, labels: undefined },
};
