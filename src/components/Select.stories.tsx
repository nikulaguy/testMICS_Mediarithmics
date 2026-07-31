import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select, type SelectOption } from './Select';
import { Input } from './Input';
import { scale, semantic } from '../theme/micsTheme';

const TYPES: SelectOption[] = [
  { value: 'query', label: 'User query', icon: 'user-query' },
  { value: 'list', label: 'User list', icon: 'team' },
  { value: 'pixel', label: 'User pixel', icon: 'user-pixel' },
  { value: 'lookalike', label: 'User lookalike', icon: 'user-lookalike' },
];

const meta = {
  title: 'Composants/Simples/Select',
  component: Select,
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text', description: 'Le choix attendu, pas une consigne.' },
    message: { control: 'text' },
    state: { control: 'inline-radio', options: ['default', 'error', 'disabled'] },
    required: { control: 'boolean' },
    width: { control: 'number', description: 'Alignée sur les autres champs du formulaire.' },
    multiple: { control: 'boolean', description: 'Les valeurs choisies s’affichent en Tags retirables.' },
    allowClear: { control: 'boolean' },
    showSearch: { control: 'boolean', description: 'À activer au-delà d’une dizaine d’options.' },
    loading: { control: 'boolean' },
    options: { control: false },
    onChange: { control: false },
  },
  args: { label: 'Segment type', placeholder: 'Sélectionner un type', options: TYPES, width: 320 },
  decorators: [
    (Story) => (
      <div style={{ background: semantic.bgContainer, padding: scale.space24, borderRadius: scale.radiusCard }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BacASable: Story = {};

/** Mêmes états que l'Input, portés par la bordure. Les deux champs sont indiscernables au repos. */
export const Etats: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space16 }}>
      <Select label="Default" placeholder="Sélectionner un type" options={TYPES} width={320} />
      <Select label="Rempli" defaultValue="query" options={TYPES} width={320} />
      <Select label="Erreur" state="error" message="Ce champ est obligatoire." placeholder="Sélectionner un type" options={TYPES} width={320} />
      <Select label="Désactivé" state="disabled" defaultValue="query" options={TYPES} width={320} />
    </div>
  ),
};

/** Avec icônes : l'icône dit le type de la valeur, elle ne décore pas. */
export const AvecIcones: Story = { args: { defaultValue: 'query' } };

/** Sélection multiple : les valeurs choisies deviennent des tags retirables. */
export const Multiple: Story = {
  render: () => {
    const [v, setV] = useState<string[]>(['query', 'list']);
    return (
      <Select
        label="Segment types"
        multiple
        allowClear
        options={TYPES}
        value={v}
        onChange={(next) => setV(next)}
        width={420}
      />
    );
  },
};

/** Avec recherche : au-delà d'une dizaine d'options, faire défiler ne suffit plus. */
export const AvecRecherche: Story = {
  args: {
    label: 'Datamart',
    showSearch: true,
    placeholder: 'Rechercher un datamart',
    options: Array.from({ length: 18 }, (_, i) => ({ value: `dm${i}`, label: `Datamart ${i + 1}` })),
  },
};

/** Aligné sur un Input : même hauteur, même largeur, même position de label. */
export const DansUnFormulaire: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space16 }}>
      <Input label="Segment name" placeholder="ex. Newsletter subscribers" width={320} required />
      <Select label="Segment type" placeholder="Sélectionner un type" options={TYPES} width={320} required />
      <Select label="Datamart" placeholder="Sélectionner un datamart" options={[{ value: 'p', label: 'mediarithmics - product' }]} width={320} />
    </div>
  ),
};
