import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconButton } from './IconButton';
import { scale, semantic } from '../theme/micsTheme';

const meta = {
  title: 'Composants/Simples/IconButton',
  component: IconButton,
  argTypes: {
    icon: {
      control: 'select',
      options: ['appstore', 'user', 'info', 'magnifier', 'options', 'dots', 'download'],
      description: 'Nom du glyphe du set Icon.',
    },
    label: { control: 'text', description: 'Intitulé accessible. Obligatoire : le bouton n\'a pas de texte visible.' },
    theme: {
      control: 'inline-radio',
      options: ['onDark', 'onLight'],
      description: 'Surface d\'accueil. onDark pour la TopBar navy, onLight pour une barre claire.',
    },
    expanded: {
      control: 'boolean',
      description: 'Le bouton ouvre un panneau. Pilote aria-haspopup / aria-expanded et l\'état visuel Pressed.',
    },
    onClick: { control: false },
    onPointerDown: { control: false },
  },
  args: { icon: 'appstore', label: 'Applications', theme: 'onDark' },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Le bac à sable suit le thème : changer `theme` change aussi le fond. Le
 * décorateur n'est posé QUE sur cette story — les suivantes portent leurs
 * propres surfaces, et un fond global les enfermerait toutes dans du navy.
 */
export const BacASable: Story = {
  decorators: [
    (Story, ctx) => (
      <div
        style={{
          background: ctx.args.theme === 'onLight' ? semantic.bgContainer : semantic.info,
          padding: scale.space16,
          display: 'inline-flex',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

const Surface = ({
  theme,
  titre,
  children,
}: {
  theme: 'onDark' | 'onLight';
  titre: string;
  children: React.ReactNode;
}) => (
  <div>
    <div style={{ color: semantic.textLighter, marginBottom: scale.space8 }}>{titre}</div>
    <div
      style={{
        background: theme === 'onLight' ? semantic.bgContainer : semantic.info,
        border: theme === 'onLight' ? `1px solid ${semantic.borderInput}` : undefined,
        padding: scale.space16,
        display: 'flex',
        gap: scale.space24,
        alignItems: 'center',
      }}
    >
      {children}
    </div>
  </div>
);

const Cas = ({
  theme,
  legende,
  ...props
}: { theme: 'onDark' | 'onLight'; legende: string; icon: string; label: string; expanded?: boolean }) => (
  <div style={{ textAlign: 'center' }}>
    <IconButton theme={theme} {...props} />
    <div style={{ fontSize: 10, marginTop: 4, color: theme === 'onLight' ? semantic.textLighter : semantic.textOnDark }}>
      {legende}
    </div>
  </div>
);

/**
 * Les deux thèmes, chacun sur sa surface. Le survol ne se capture pas ici :
 * passer la souris sur les boutons pour le voir.
 */
export const Themes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space24 }}>
      <Surface theme="onDark" titre="onDark — la TopBar navy">
        <Cas theme="onDark" legende="Default" icon="appstore" label="Applications" />
        <Cas theme="onDark" legende="Ouvert" icon="user" label="Compte" expanded />
      </Surface>
      <Surface theme="onLight" titre="onLight — une barre claire">
        <Cas theme="onLight" legende="Default" icon="appstore" label="Applications" />
        <Cas theme="onLight" legende="Ouvert" icon="user" label="Compte" expanded />
      </Surface>
    </div>
  ),
};

/** Les états d'un même thème. Ouvert et pressé partagent la même couleur. */
export const Etats: Story = {
  render: () => (
    <Surface theme="onDark" titre="onDark">
      <Cas theme="onDark" legende="Default" icon="appstore" label="Applications" />
      <Cas theme="onDark" legende="Ouvert" icon="user" label="Compte" expanded />
    </Surface>
  ),
};

/** La rangée de la TopBar, telle qu'elle est rendue en production. */
export const RangeeTopBar: Story = {
  render: () => (
    <Surface theme="onDark" titre="TopBar">
      <div style={{ display: 'flex', gap: scale.space8, alignItems: 'center' }}>
        <IconButton icon="magnifier" label="Rechercher" />
        <IconButton icon="info" label="Aide" />
        <IconButton icon="appstore" label="Applications" />
        <IconButton icon="user" label="Compte" />
      </div>
    </Surface>
  ),
};
