import type { Meta, StoryObj } from '@storybook/react-vite';
import { Steps } from 'antd';
import { scale, semantic } from '../theme/micsTheme';

const ITEMS = [
  { title: 'Browsed URL analysis' },
  { title: 'Select lift' },
  { title: 'Semantic analysis' },
];

const meta = {
  title: 'Composants/Steps',
  component: Steps,
  argTypes: {
    direction: { control: 'inline-radio', options: ['vertical', 'horizontal'] },
    current: { control: { type: 'number', min: 0, max: 2 } },
    items: { control: false },
  },
  args: { direction: 'vertical', items: ITEMS, current: -1 },
  decorators: [
    (Story) => (
      <div style={{ background: semantic.bgContainer, padding: scale.space24, width: 360 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Steps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BacASable: Story = {};

/**
 * Le cas de la production : les trois étapes de l'analyse contextuelle, toutes en
 * attente. Le stepper ANNONCE le parcours, il ne le pilote pas — aucune étape n'est
 * cliquable tant que l'analyse n'a pas démarré.
 */
export const ParcoursAVenir: Story = {
  args: { current: -1 },
};

/** En cours : l'étape courante est en primary, les précédentes sont validées. */
export const EnCours: Story = {
  args: { current: 1 },
};

/** Horizontal : pour un tunnel qui occupe toute la largeur d'une carte. */
export const Horizontal: Story = {
  args: { direction: 'horizontal', current: 1 },
  decorators: [
    (Story) => (
      <div style={{ background: semantic.bgContainer, padding: scale.space24, width: 700 }}>
        <Story />
      </div>
    ),
  ],
};
