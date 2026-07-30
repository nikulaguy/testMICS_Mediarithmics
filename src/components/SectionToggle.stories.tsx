import type { Meta, StoryObj } from '@storybook/react-vite';
import { SectionToggle } from './SectionToggle';
import { Input } from './Input';
import { Select } from './Select';
import { scale, semantic } from '../theme/micsTheme';

const meta = {
  title: 'Composants/SectionToggle',
  component: SectionToggle,
  argTypes: {
    label: { control: 'text', description: 'Court : « Advanced », « Options ». Un intitulé, pas une phrase.' },
    defaultExpanded: { control: 'boolean', description: 'Replié par défaut : c’est tout l’intérêt du composant.' },
    disabled: { control: 'boolean' },
    children: { control: false },
  },
  args: { label: 'Advanced', defaultExpanded: false, children: null },
  decorators: [
    (Story) => (
      <div style={{ background: semantic.bgContainer, padding: scale.space24, borderRadius: scale.radiusCard, maxWidth: 480 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SectionToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

const Champs = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space16 }}>
    <Input label="Technical name" placeholder="ex. newsletter-subscribers" width={320} />
    <Select
      label="Persistance"
      options={[
        { value: 'p', label: 'Persisted' },
        { value: 'n', label: 'Not persisted' },
      ]}
      defaultValue="p"
      width={320}
    />
  </div>
);

export const BacASable: Story = { args: { children: <Champs /> } };

/** Replié : l'état par défaut. Le chevron pointe à droite. */
export const Replie: Story = { args: { children: <Champs /> } };

/** Déplié : le chevron pointe vers le bas, les champs apparaissent sous l'en-tête. */
export const Deplie: Story = { args: { defaultExpanded: true, children: <Champs /> } };

/** Dans un formulaire : les champs obligatoires en haut, l'optionnel replié en bas. */
export const DansUnFormulaire: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space24 }}>
      <Input label="Segment name" required placeholder="ex. Newsletter subscribers" width={320} />
      <Select
        label="Segment type"
        required
        options={[
          { value: 'query', label: 'User query', icon: 'user-query' },
          { value: 'list', label: 'User list', icon: 'team' },
        ]}
        placeholder="Sélectionner un type"
        width={320}
      />
      <SectionToggle label="Advanced">
        <Champs />
      </SectionToggle>
    </div>
  ),
};

/** À éviter : replier un champ obligatoire. Ce qui est caché sera oublié. */
export const Dont: Story = {
  render: () => (
    <div style={{ borderLeft: `3px solid ${semantic.error}`, paddingLeft: scale.space12 }}>
      <SectionToggle label="Advanced">
        <Input label="Segment name" required placeholder="Obligatoire, mais replié" width={320} />
      </SectionToggle>
      <p style={{ color: semantic.textNormal, marginTop: scale.space12 }}>
        Un champ obligatoire replié ne sera rempli qu’après un message d’erreur à la soumission.
      </p>
    </div>
  ),
};
