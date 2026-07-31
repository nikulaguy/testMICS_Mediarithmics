import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumb } from './Breadcrumb';
import { scale, semantic } from '../theme/micsTheme';

const meta = {
  title: 'Composants/Composés/Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    items: { control: false, description: "Niveaux, du plus général au plus précis. Trois au maximum." },
    theme: {
      control: 'inline-radio',
      options: ['onLight', 'onDark'],
      description: 'Selon le fond : onLight sur bg/container, onDark sur un bandeau navy.',
    },
  },
  args: {
    items: [{ label: 'Segments', onClick: () => {} }, { label: 'Segments' }],
    theme: 'onLight',
  },
  decorators: [
    (Story, ctx) => (
      <div
        style={{
          background: ctx.args.theme === 'onDark' ? semantic.info : semantic.bgContainer,
          padding: scale.space20,
          borderRadius: scale.radiusCard,
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BacASable: Story = {};

/** Les trois niveaux : item du SideMenu, onglet actif, ressource ouverte. */
export const TroisNiveaux: Story = {
  args: {
    items: [
      { label: 'Segments', onClick: () => {} },
      { label: 'Segments', onClick: () => {} },
      { label: 'Copy of Copy of Test_max_230426' },
    ],
  },
};

/** Un seul niveau : le fil d'ariane reste, il situe même sans parent. */
export const UnNiveau: Story = { args: { items: [{ label: 'Campaigns' }] } };

/** Sur bandeau navy : liens en link/on-dark, courant en blanc. */
export const SurFondSombre: Story = {
  args: {
    theme: 'onDark',
    items: [
      { label: 'Segments', onClick: () => {} },
      { label: 'New segment', onClick: () => {} },
      { label: 'Query' },
    ],
  },
};
