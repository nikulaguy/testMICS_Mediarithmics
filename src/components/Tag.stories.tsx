import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tag } from './Tag';
import logoUrl from '../assets/logo-mediarithmics.png';
import { scale, semantic } from '../theme/micsTheme';

/**
 * La page de documentation principale est `Tag.mdx` : elle reprend la doc Figma
 * (description, props, règles, do/don't, anatomie, accessibilité, évolutions).
 * Les stories ci-dessous en sont les illustrations vivantes.
 */
const meta = {
  title: 'Composants/Simples/Tag',
  component: Tag,
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'blue', 'green', 'orange', 'purple', 'red'],
      description: 'Rampe de couleur. Porte un sens, jamais décorative.',
      table: { defaultValue: { summary: 'default' } },
    },
    closable: { control: 'boolean', description: 'Affiche la croix de retrait.' },
    children: { control: 'text', description: 'Libellé court, 1 à 2 mots, sans ponctuation.' },
    logo: { control: false, description: 'Logo 16×16 optionnel (prop « Show logo » de la maquette).' },
    onClose: { control: false },
  },
  args: { children: 'Label', color: 'default', closable: false },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

const Row = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', gap: scale.space8, flexWrap: 'wrap', alignItems: 'center' }}>{children}</div>
);

/** Bac à sable : jouer avec les contrôles pour explorer toutes les combinaisons. */
export const BacASable: Story = {};

/** Les six rampes du composant. */
export const Couleurs: Story = {
  render: () => (
    <Row>
      <Tag>Default</Tag>
      <Tag color="blue">Blue</Tag>
      <Tag color="green">Green</Tag>
      <Tag color="orange">Orange</Tag>
      <Tag color="purple">Purple</Tag>
      <Tag color="red">Red</Tag>
    </Row>
  ),
};

/** Cas d'usage 1 : statuts et catégories, non fermables. */
export const StatutsEtCategories: Story = {
  render: () => (
    <Row>
      <Tag color="green">Actif</Tag>
      <Tag color="red">Erreur</Tag>
      <Tag color="orange">En attente</Tag>
      <Tag>Volume Drop Alerts Disabled</Tag>
    </Row>
  ),
};

/** Cas d'usage 2 : chips de filtre sélectionnés, fermables (menu Labels). Cliquer la croix retire réellement la chip. */
export const ChipsDeFiltre: Story = {
  render: () => {
    const [chips, setChips] = useState(['test_max_260526', 'test_max_260526_2', 'Test2']);
    return (
      <Row>
        {chips.map((c) => (
          <Tag key={c} closable onClose={() => setChips((v) => v.filter((x) => x !== c))}>
            {c}
          </Tag>
        ))}
        {chips.length === 0 && <span style={{ color: semantic.textLighter }}>Toutes les chips ont été retirées.</span>}
      </Row>
    );
  },
};

/** Cas d'usage 3 : avec logo de société. */
export const AvecLogo: Story = {
  render: () => {
    const logo = <img src={logoUrl} alt="" style={{ width: 16, objectFit: 'contain' }} />;
    return (
      <Row>
        <Tag closable logo={logo}>
          test_max_260526
        </Tag>
        <Tag closable logo={logo}>
          Test2
        </Tag>
      </Row>
    );
  },
};

/** À faire : des couleurs sémantiques stables d'un écran à l'autre. */
export const Do: Story = {
  render: () => (
    <div style={{ borderLeft: `3px solid ${semantic.success}`, paddingLeft: scale.space12 }}>
      <Row>
        <Tag color="green">Actif</Tag>
        <Tag color="red">Erreur</Tag>
        <Tag color="orange">En attente</Tag>
      </Row>
      <p style={{ color: semantic.textNormal, marginTop: scale.space8 }}>
        Vert = succès, rouge = erreur, orange = en attente. Le même statut garde la même couleur partout.
      </p>
    </div>
  ),
};

/** À éviter : la couleur décorative, qui ne veut plus rien dire. */
export const Dont: Story = {
  render: () => (
    <div style={{ borderLeft: `3px solid ${semantic.error}`, paddingLeft: scale.space12 }}>
      <Row>
        <Tag color="purple">Actif</Tag>
        <Tag color="blue">Actif</Tag>
      </Row>
      <p style={{ color: semantic.textNormal, marginTop: scale.space8 }}>
        Le même statut change de couleur d'un écran à l'autre : l'utilisateur ne peut plus rien en déduire.
      </p>
    </div>
  ),
};
