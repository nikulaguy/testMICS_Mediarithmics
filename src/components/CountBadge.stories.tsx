import type { Meta, StoryObj } from '@storybook/react-vite';
import { CountBadge } from './CountBadge';
import { Icon } from './Icon';
import { scale, semantic } from '../theme/micsTheme';

const meta = {
  title: 'Composants/Simples/CountBadge',
  component: CountBadge,
  argTypes: {
    count: { control: { type: 'number', min: 0 }, description: 'Nombre affiché.' },
    tone: {
      control: 'inline-radio',
      options: ['info', 'warning', 'success'],
      description: 'info = état neutre · warning = à traiter · success = rien à traiter.',
      table: { defaultValue: { summary: 'info' } },
    },
  },
  args: { count: 3, tone: 'info' },
} satisfies Meta<typeof CountBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BacASable: Story = {};

/** Les trois tons. Le ton porte le sens, jamais l'esthétique. */
export const Tons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: scale.space24, alignItems: 'center' }}>
      <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}>
        <CountBadge count={3} /> info
      </span>
      <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}>
        <CountBadge count={12} tone="warning" /> warning
      </span>
      <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}>
        <CountBadge count={0} tone="success" /> success
      </span>
    </div>
  ),
};

/**
 * Cas d'usage 1 : nombre de filtres actifs, débordant du coin haut-droit du
 * bouton Filter (relevé Figma : top −7 / right −10) — l'exception à la règle
 * « dans le flux ». La pastille est aria-hidden et laisse passer les clics ;
 * le compte vit dans le nom accessible du bouton.
 */
export const SurBoutonFiltre: Story = {
  render: () => (
    <span style={{ position: 'relative', display: 'inline-flex', margin: 10 }}>
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: scale.space8,
          height: 32,
          paddingInline: scale.space12,
          border: `1px solid ${semantic.borderInput}`,
          borderRadius: scale.radiusBase,
          background: semantic.bgContainer,
          color: semantic.textNormal,
        }}
      >
        <Icon name="filter" size={14} /> Filter
      </span>
      <span aria-hidden style={{ position: 'absolute', top: -7, right: -10, pointerEvents: 'none' }}>
        <CountBadge count={3} />
      </span>
    </span>
  ),
};

/** Cas d'usage 2 : alertes à traiter sur un onglet. */
export const SurOnglet: Story = {
  render: () => (
    /*
      alignItems: center sur la rangée. Sans lui les items s'étirent (align-items: stretch par
      défaut) : l'onglet sans badge fait la hauteur de sa ligne de texte, celui qui en a un fait
      20 px, et les deux libellés ne tombent plus sur la même ligne.
    */
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: scale.space24,
        borderBottom: `1px solid ${semantic.borderInput}`,
        paddingBottom: scale.space8,
      }}
    >
      <span style={{ color: semantic.textLighter }}>Usage overview</span>
      <span style={{ display: 'inline-flex', gap: scale.space8, alignItems: 'center', color: semantic.primary }}>
        Alerts <CountBadge count={2} tone="warning" />
      </span>
    </div>
  ),
};
