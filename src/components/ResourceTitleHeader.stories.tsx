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
    availableLabels: {
      control: false,
      description: 'Labels proposables. Ceux déjà posés en sont retirés automatiquement.',
    },
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

/** Labels définis au niveau de l'organisation, proposés à l'ajout. */
const ORGANISATION_LABELS = ['Test 1', 'Test 2', 'Test 3', 'Test 4', 'test_max_260526', 'test_max_261226'];

function Editable({ initial }: { initial: ResourceLabel[] }) {
  const [labels, setLabels] = useState<ResourceLabel[]>(initial);
  return (
    <ResourceTitleHeader
      title="Copy of Copy of Test_max_230426"
      type="User Query"
      typeIcon="user-query"
      created="Created on 16/07/2026 - 11:11:49"
      labels={labels}
      availableLabels={ORGANISATION_LABELS}
      onAddLabel={(label) => setLabels((l) => [...l, { key: label, label }])}
      onRemoveLabel={(key) => setLabels((l) => l.filter((x) => x.key !== key))}
    />
  );
}

/** Avec labels : la ligne 2 apparaît, avec son bouton d'ajout et les chips. */
export const AvecLabels: Story = {
  render: () => (
    <Editable
      initial={[
        { key: 'a', label: 'Volume Drop Alerts Disabled' },
        { key: 'b', label: 'e-commerce' },
      ]}
    />
  ),
};

/**
 * Ajout d'un label. Cliquer sur « Add label » remplace le bouton par un champ de
 * recherche ; la liste des labels restants s'ouvre collée dessous. Les flèches
 * parcourent, Entrée choisit, Échap annule.
 */
export const AjoutDeLabel: Story = {
  render: () => <Editable initial={[{ key: 'vda', label: 'Volume Drop Alerts Disabled' }]} />,
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
