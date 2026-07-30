import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';
import { scale, semantic } from '../theme/micsTheme';

const meta = {
  title: 'Composants/Input',
  component: Input,
  argTypes: {
    label: { control: 'text', description: 'Libellé visible au-dessus. Obligatoire, sauf pattern de recherche.' },
    placeholder: { control: 'text', description: 'Illustre le format attendu, jamais une consigne.' },
    message: { control: 'text', description: 'Aide sous le champ. Remplacée par le message d’erreur en état error.' },
    state: { control: 'inline-radio', options: ['default', 'error', 'disabled'] },
    required: { control: 'boolean', description: 'Astérisque + attribut `required` sur le champ.' },
    width: { control: 'number', description: 'Identique dans tout un formulaire, 600 au maximum.' },
    leftIcon: { control: 'text', description: 'Réservée aux patterns de recherche (prefix AntD).' },
    rightIcon: { control: 'text', description: 'Cohérente avec la donnée saisie. Jamais décorative.' },
    type: { control: 'inline-radio', options: ['text', 'search', 'email', 'url', 'password'] },
    onChange: { control: false },
  },
  args: { label: 'Segment name', placeholder: 'ex. Newsletter subscribers', width: 320 },
  decorators: [
    (Story) => (
      <div style={{ background: semantic.bgContainer, padding: scale.space24, borderRadius: scale.radiusCard }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BacASable: Story = {};

/** Les états passent tous par la bordure. Le fond ne change qu'en Disabled. */
export const Etats: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space16 }}>
      <Input label="Default" placeholder="ex. Newsletter subscribers" width={320} />
      <Input label="Rempli" defaultValue="Newsletter subscribers" width={320} />
      <Input label="Erreur" defaultValue="Newsletter" state="error" message="Ce nom est déjà utilisé." width={320} />
      <Input label="Désactivé" defaultValue="Newsletter subscribers" state="disabled" width={320} />
    </div>
  ),
};

/** Avec aide : le message est relié au champ par aria-describedby. */
export const AvecAide: Story = {
  args: { label: 'Technical name', message: 'Utilisé dans les exports. Modifiable une seule fois.', width: 320 },
};

/** Erreur : la bordure rouge ne suffit jamais, le message est obligatoire. */
export const Erreur: Story = {
  args: {
    label: 'Email',
    defaultValue: 'nguy@',
    state: 'error',
    message: 'Adresse incomplète : il manque le domaine.',
    width: 320,
  },
};

/** Obligatoire : astérisque visible et attribut `required` sur le champ. */
export const Obligatoire: Story = {
  args: { label: 'Segment name', required: true, placeholder: 'ex. Newsletter subscribers', width: 320 },
};

/** Recherche : le seul cas sans label visible. La loupe est à gauche. */
export const Recherche: Story = {
  render: () => {
    const [v, setV] = useState('');
    return <Input type="search" placeholder="Search segments" leftIcon="magnifier" value={v} onChange={setV} width={320} />;
  },
};

/** À éviter : le placeholder utilisé comme label. Il disparaît à la saisie. */
export const Dont: Story = {
  render: () => (
    <div style={{ borderLeft: `3px solid ${semantic.error}`, paddingLeft: scale.space12 }}>
      <Input placeholder="Nom du segment" width={320} />
      <p style={{ color: semantic.textNormal, marginTop: scale.space12, maxWidth: 420 }}>
        Sans label, l’utilisateur qui a commencé à taper ne peut plus vérifier ce qu’on lui
        demande, et le lecteur d’écran n’annonce aucun nom de champ.
      </p>
    </div>
  ),
};
