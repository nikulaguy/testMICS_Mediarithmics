import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from './Icon';
import { scale, semantic } from '../theme/micsTheme';

/** Glyphes : monochromes, ils prennent la couleur du texte parent. */
const NAMES = [
  'appstore', 'automation', 'automations', 'broom', 'calendar', 'campaigns',
  'chart-bar', 'chart-line', 'chevron-bottom', 'chevron-right', 'close', 'cloud',
  'cluster', 'database', 'display', 'download', 'feeds', 'file-image',
  'file-import', 'filter', 'funnel', 'inbox', 'info', 'magnifier',
  'monitor', 'options', 'plug', 'plus', 'dots', 'query',
  'save', 'server', 'settings', 'table', 'tag', 'target',
  'team', 'terminal', 'tree', 'user', 'users', 'user-lookalike',
  'user-pixel', 'user-query', 'view',
];

/** Marques d'application : elles gardent leurs couleurs, la prop `color` ne les touche pas. */
const APP_MARKS = [
  'app-navigator', 'app-computing-console', 'app-developer-documentation', 'app-user-guide',
];

const meta = {
  title: 'Composants/Icon',
  component: Icon,
  argTypes: {
    name: {
      control: 'select',
      options: [...NAMES, ...APP_MARKS],
      description: 'Nom du glyphe dans le set exporté de Figma.',
    },
    size: { control: { type: 'number', min: 8, max: 64 }, description: 'Côté en px. Pilote aussi la font-size.' },
    color: { control: 'color', description: 'Par défaut : hérite de la couleur du parent (currentColor).' },
    style: { control: false },
  },
  args: { name: 'team', size: 20 },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BacASable: Story = {};

/** Les glyphes du set, exportés de la page « 🖼 Icons » du fichier Figma. */
export const Bibliotheque: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: scale.space16 }}>
      {NAMES.map((name) => (
        <div
          key={name}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: scale.space8,
            padding: scale.space8,
            color: semantic.textNormal,
          }}
        >
          <Icon name={name} size={20} />
          <span style={{ fontSize: 10, color: semantic.textLighter, textAlign: 'center' }}>{name}</span>
        </div>
      ))}
    </div>
  ),
};

/**
 * Marques d'application, préfixées `app-`. Ce ne sont pas des glyphes mais des logos :
 * ils portent leurs couleurs de marque et ignorent la prop `color`.
 */
export const MarquesApplication: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: scale.space24 }}>
      {APP_MARKS.map((name) => (
        <div
          key={name}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: scale.space8,
            width: 150,
            color: semantic.textNormal,
          }}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: scale.space12 }}>
            <Icon name={name} size={40} />
            <Icon name={name} size={20} />
          </span>
          <span style={{ fontSize: 10, color: semantic.textLighter, textAlign: 'center' }}>{name}</span>
        </div>
      ))}
    </div>
  ),
};

/** La taille suit la prop `size` ; le glyphe reste centré sur sa boîte. */
export const Tailles: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: scale.space24, alignItems: 'center' }}>
      {[14, 16, 20, 24, 40].map((size) => (
        <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <Icon name="team" size={size} />
          <span style={{ fontSize: 10, color: semantic.textLighter }}>{size}</span>
        </div>
      ))}
    </div>
  ),
};

/** Sans prop `color`, le glyphe prend la couleur du texte parent : un seul glyphe pour tous les états. */
export const Couleur: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: scale.space24, alignItems: 'center' }}>
      <span style={{ color: semantic.textNormal, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
        <Icon name="info" size={16} /> hérité
      </span>
      <span style={{ color: semantic.primary, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
        <Icon name="info" size={16} /> primary
      </span>
      <span style={{ color: semantic.error, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
        <Icon name="info" size={16} /> error
      </span>
      <span style={{ background: semantic.info, color: semantic.textOnDark, padding: '4px 8px', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
        <Icon name="info" size={16} /> sur fond sombre
      </span>
    </div>
  ),
};
