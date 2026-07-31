import type { Meta, StoryObj } from '@storybook/react-vite';
import { AppLauncher } from './AppLauncher';
import { DropdownPanel } from './DropdownPanel';
import { Icon } from './Icon';
import { scale, semantic } from '../theme/micsTheme';

const GROUPS = [
  [
    { name: 'Navigator', icon: 'app-navigator' },
    { name: 'Computing console', icon: 'app-computing-console' },
  ],
  [
    { name: 'Developer Documentation', icon: 'app-developer-documentation', external: true },
    { name: 'User Guide', icon: 'app-user-guide', external: true },
  ],
];

const meta = {
  title: 'Composants/Globaux/AppLauncher',
  component: AppLauncher,
  argTypes: {
    groups: {
      control: false,
      description: 'Groupes d’entrées, séparés par un filet : applications, puis ressources.',
    },
    onSelect: { control: false },
  },
  args: { groups: GROUPS },
  decorators: [
    (Story) => (
      <div style={{ background: semantic.bgWindow, padding: scale.space24, display: 'inline-block' }}>
        <DropdownPanel width={260}>
          <Story />
        </DropdownPanel>
      </div>
    ),
  ],
} satisfies Meta<typeof AppLauncher>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Dans sa surface réelle : le panneau de 260 de la TopBar. */
export const BacASable: Story = {};

/** Une organisation sans Computing Console : le groupe se réduit, il ne disparaît pas. */
export const SansComputingConsole: Story = {
  args: {
    groups: [
      [{ name: 'Navigator', icon: 'app-navigator' }],
      [
        { name: 'Developer Documentation', icon: 'app-developer-documentation', external: true },
        { name: 'User Guide', icon: 'app-user-guide', external: true },
      ],
    ],
  },
};

/** Les quatre marques, à leur taille de menu (20) et en grand (40). */
export const Marques: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: scale.space24, background: semantic.bgContainer }}>
      {GROUPS.flat().map((app) => (
        <div
          key={app.name}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: scale.space8,
            width: 130,
            color: semantic.textNormal,
          }}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: scale.space12 }}>
            <Icon name={app.icon} size={40} />
            <Icon name={app.icon} size={20} />
          </span>
          <span style={{ fontSize: 10, color: semantic.textLighter, textAlign: 'center' }}>{app.icon}</span>
        </div>
      ))}
    </div>
  ),
};
