import type { Meta, StoryObj } from '@storybook/react-vite';
import { AppLauncher } from './AppLauncher';
import { DropdownPanel } from './DropdownPanel';
import { primitives, scale, semantic } from '../theme/micsTheme';

const APPS = [
  { name: 'Developer console', color: primitives.purpleMain },
  { name: 'Navigator', color: semantic.primary },
];

const meta = {
  title: 'Composants/AppLauncher',
  component: AppLauncher,
  argTypes: {
    current: { control: 'text', description: "Application courante, en tête, non cliquable." },
    apps: { control: false, description: 'Les autres applications accessibles.' },
    onSelect: { control: false },
  },
  args: { current: 'Platform Admin', apps: APPS },
  decorators: [
    (Story) => (
      <div style={{ background: semantic.bgWindow, padding: scale.space24, display: 'inline-block' }}>
        <DropdownPanel width={300}>
          <Story />
        </DropdownPanel>
      </div>
    ),
  ],
} satisfies Meta<typeof AppLauncher>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Dans sa surface réelle : le panneau de 300 de la TopBar. */
export const BacASable: Story = {};

/** Une seule autre application : la liste reste, elle ne se replie pas en lien. */
export const UneSeuleAutreApp: Story = {
  args: { apps: [{ name: 'Navigator', color: semantic.primary }] },
};

/** Depuis Navigator : l'application courante change, la liste aussi. */
export const DepuisNavigator: Story = {
  args: {
    current: 'Navigator',
    apps: [
      { name: 'Platform Admin', color: semantic.info },
      { name: 'Developer console', color: primitives.purpleMain },
    ],
  },
};
