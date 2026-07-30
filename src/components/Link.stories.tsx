import type { Meta, StoryObj } from '@storybook/react-vite';
import { Link } from './Link';
import { scale, semantic } from '../theme/micsTheme';

const meta = {
  title: 'Composants/Link',
  component: Link,
  parameters: {
    docs: {
      description: {
        component: [
          "**Catégorie : construit.** Ant Design n'a pas d'équivalent : son lien de typographie",
          "ne connaît ni les deux tailles, ni le thème sur fond sombre, ni l'état désactivé.",
          '',
          "C'est le SEUL atome de lien du système : niveaux du fil d'ariane, liens de tableau,",
          'actions légères. Une action principale reste un Button.',
        ].join(' '),
      },
    },
  },
  argTypes: {
    size: { control: 'inline-radio', options: ['L', 'M'] },
    theme: { control: 'inline-radio', options: ['onLight', 'onDark'] },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: { children: 'See more', size: 'M', theme: 'onLight', disabled: false },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defaut: Story = {};

/** Deux tailles : M (12) dans les composants et le corps de texte, L (14) pour un lien isolé. */
export const Tailles: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: scale.space24, alignItems: 'baseline' }}>
      <Link size="M">Taille M, 12 px</Link>
      <Link size="L">Taille L, 14 px</Link>
    </div>
  ),
};

/** Sur fond sombre : obligatoire dans l'Actionbar d'édition et les surfaces navy. */
export const SurFondSombre: Story = {
  render: () => (
    <div style={{ background: semantic.info, padding: scale.space20, display: 'flex', gap: scale.space24 }}>
      <Link theme="onDark">Lien normal</Link>
      <Link theme="onDark" disabled>
        Lien désactivé
      </Link>
    </div>
  ),
};

/** Avec icônes, calées sur la taille du texte. */
export const AvecIcones: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: scale.space24 }}>
      <Link leftIcon="download">Export</Link>
      <Link rightIcon="chart-line">Voir les statistiques</Link>
    </div>
  ),
};

/** Désactivé : text/lightest, curseur interdit, aria-disabled. */
export const Desactive: Story = { args: { disabled: true, children: 'Action indisponible' } };
