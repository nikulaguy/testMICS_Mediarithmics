import type { Meta, StoryObj } from '@storybook/react-vite';
import { Counter } from './Counter';
import { scale, semantic } from '../theme/micsTheme';

const meta = {
  title: 'Composants/Counter',
  component: Counter,
  argTypes: {
    title: { control: 'text', description: 'Ce que compte la carte. Body/Medium 12.' },
    value: { control: 'number', description: 'Valeur courante. Headline 24.' },
    max: {
      control: 'number',
      description: 'Plafond. Présent = barre de progression ; absent = KPI sans plafond.',
    },
    hint: { control: 'text', description: 'Explication en infobulle sur l’icône info. Facultative.' },
  },
  args: { title: 'Number of activated segments', value: 6, max: 100 },
  decorators: [
    (Story) => (
      <div style={{ background: semantic.bgWindow, padding: scale.space24 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BacASable: Story = {};

/** Avec plafond : la barre illustre le rapport, le chiffre le dit. */
export const AvecPlafond: Story = {
  args: {
    title: 'Number of activated segments',
    value: 6,
    max: 100,
    hint: 'Segments actifs sur le quota de votre offre.',
  },
};

/** Sans plafond : pas de barre. Une progression sans maximum ne veut rien dire. */
export const SansPlafond: Story = {
  args: { title: 'Executions in the last 30 days', value: 12480, max: undefined, hint: undefined },
};

/** En rangée sur un tableau de bord : même largeur, même hauteur, gap 16. */
export const Rangee: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: scale.space16 }}>
      <Counter title="Number of activated segments" value={6} max={100} hint="Quota de votre offre." />
      <Counter title="User points" value={1284000} />
      <Counter title="Storage used" value={82} max={100} hint="Espace du datamart." />
    </div>
  ),
};

/** Plafond atteint : la barre est pleine, le chiffre reste la source de vérité. */
export const PlafondAtteint: Story = {
  args: { title: 'Storage used', value: 100, max: 100, hint: 'Espace du datamart.' },
};
