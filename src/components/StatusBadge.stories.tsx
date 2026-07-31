import type { Meta, StoryObj } from '@storybook/react-vite';
import { StatusBadge } from './StatusBadge';
import { scale, semantic } from '../theme/micsTheme';

const meta = {
  title: 'Composants/Simples/StatusBadge',
  component: StatusBadge,
  argTypes: {
    tone: {
      control: 'inline-radio',
      options: ['success', 'processing', 'warning', 'error', 'neutral'],
      description: "Couleur de la pastille. Elle double le libellé, elle ne le remplace jamais.",
    },
    label: { control: 'text', description: "Libellé de l'état, toujours rendu." },
  },
  args: { tone: 'success', label: 'Active' },
} satisfies Meta<typeof StatusBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BacASable: Story = {};

/** Les cinq tons, avec l'état que chacun sert à dire. */
export const Tons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space12 }}>
      <StatusBadge tone="success" label="Active" />
      <StatusBadge tone="processing" label="Pending" />
      <StatusBadge tone="warning" label="Paused" />
      <StatusBadge tone="error" label="Failed" />
      <StatusBadge tone="neutral" label="Archived" />
    </div>
  ),
};

/** Cas d'usage : colonne Status de la liste des campagnes. */
export const DansUnTableau: Story = {
  render: () => (
    <table style={{ borderCollapse: 'collapse', minWidth: 360 }}>
      <thead>
        <tr style={{ textAlign: 'left', color: semantic.textLighter }}>
          <th style={{ padding: scale.space8, fontWeight: 400 }}>Status</th>
          <th style={{ padding: scale.space8, fontWeight: 400 }}>Name</th>
        </tr>
      </thead>
      <tbody>
        {[
          ['success', 'Active', 'Test camp'],
          ['processing', 'Pending', 'TESTTTTT'],
          ['success', 'Active', 'CAMPAIGN_1_auto_generated'],
        ].map(([tone, label, name]) => (
          <tr key={name} style={{ borderTop: `1px solid ${semantic.borderDefault}` }}>
            <td style={{ padding: scale.space8 }}>
              <StatusBadge tone={tone as 'success' | 'processing'} label={label} />
            </td>
            <td style={{ padding: scale.space8, color: semantic.linkDefault }}>{name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ),
};
