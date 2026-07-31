import type { Meta, StoryObj } from '@storybook/react-vite';
import { SegmentHeader, type SegmentMetric } from './SegmentHeader';
import { scale, semantic } from '../theme/micsTheme';

/** Définitions issues de developer.mediarithmics.io. */
const METRICS: SegmentMetric[] = [
  {
    key: 'accounts',
    icon: 'users',
    label: 'User Accounts',
    value: 36,
    hint: 'Utilisateurs identifiés dans vos systèmes (CRM, fidélité, authentification).',
  },
  {
    key: 'profiles',
    icon: 'user',
    label: 'User Profiles',
    value: 28,
    hint: "Données de profil attachées à un UserPoint. Ce n'est pas un identifiant autonome.",
  },
  {
    key: 'devices',
    icon: 'display',
    label: 'User Device Points',
    value: 81,
    hint: 'Appareils rattachés au UserPoint. Un UserPoint peut en avoir plusieurs.',
  },
  {
    key: 'installations',
    icon: 'display',
    label: 'Installation IDs',
    value: 0,
    hint: 'Cookies first-party mediarithmics, format ins:<registry>:<valeur>.',
  },
  {
    key: 'vectors',
    icon: 'display',
    label: 'Vector IDs',
    value: 7,
    hint: 'Cookies third-party mediarithmics, format vec:<valeur> ou mum:<valeur>.',
  },
];

const meta = {
  title: 'Composants/Simples/SegmentHeader',
  component: SegmentHeader,
  argTypes: {
    userPoint: { control: 'number', description: 'Métrique principale : la taille de l’audience.' },
    metrics: { control: false, description: 'Les cinq métriques secondaires, avec leur infobulle.' },
    computedAt: { control: 'text', description: 'Date du dernier calcul. Dit la fraîcheur du chiffre.' },
  },
  args: { userPoint: 5, metrics: METRICS, computedAt: '22/07/2026 - 12:21:19' },
  decorators: [
    (Story) => (
      <div style={{ background: semantic.bgWindow, padding: scale.space24 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SegmentHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BacASable: Story = {};

/** Grande audience : les valeurs restent lisibles, séparateur de milliers français. */
export const GrandeAudience: Story = {
  args: {
    userPoint: 1284000,
    metrics: METRICS.map((m) => ({ ...m, value: m.value * 12480 })),
  },
};

/** Métriques à zéro : le chiffre s'affiche, il n'est pas masqué. Zéro est une information. */
export const AZero: Story = {
  args: { userPoint: 0, metrics: METRICS.map((m) => ({ ...m, value: 0 })) },
};

/** Sans date de calcul : à éviter, on ne sait plus si le chiffre date d'hier ou du mois dernier. */
export const SansDateDeCalcul: Story = { args: { computedAt: undefined } };
