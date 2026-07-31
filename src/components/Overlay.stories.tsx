import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Input } from 'antd';
import { Overlay, OverlayFooter, OverlayHeader } from './Overlay';
import { scale, semantic } from '../theme/micsTheme';

const meta = {
  title: 'Composants/Simples/Overlay',
  component: Overlay,
  parameters: { layout: 'fullscreen' },
  argTypes: {
    open: { control: 'boolean' },
    mode: {
      control: 'inline-radio',
      options: ['modal', 'drawer'],
      description: 'Modale = tâche courte qui doit bloquer. Drawer = tâche secondaire qui a besoin du contexte.',
    },
    title: { control: 'text', description: 'Titre du header. C’est lui que pointe aria-labelledby.' },
    headerTheme: {
      control: 'inline-radio',
      options: ['blue', 'light', 'dark'],
      description: 'Blue = création. Light = édition, consultation. Dark = configuration technique.',
    },
    width: { control: 'number', description: 'Modale 420–600. Drawer 520, constant dans un même parcours.' },
    footer: { control: false, description: 'Actions du pied. Omis = variante sans footer.' },
    children: { control: false },
    onClose: { control: false },
  },
  args: { open: false, mode: 'modal', title: 'Create a feed', headerTheme: 'blue', children: null, onClose: () => {} },
} satisfies Meta<typeof Overlay>;

export default meta;
type Story = StoryObj<typeof meta>;

const Page = ({ children }: { children: React.ReactNode }) => (
  <div style={{ background: semantic.bgWindow, minHeight: 420, padding: scale.space24 }}>{children}</div>
);

function Demo({
  mode = 'modal' as const,
  headerTheme = 'blue' as const,
  withFooter = true,
  label = 'Ouvrir',
}: {
  mode?: 'modal' | 'drawer';
  headerTheme?: 'blue' | 'light' | 'dark';
  withFooter?: boolean;
  label?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Page>
      <Button type="primary" onClick={() => setOpen(true)}>
        {label}
      </Button>
      <p style={{ color: semantic.textLighter, marginTop: scale.space16 }}>
        Échap ferme, le clic sur le voile aussi. À la fermeture, le focus revient sur le bouton.
      </p>
      <Overlay
        open={open}
        mode={mode}
        headerTheme={headerTheme}
        title={mode === 'drawer' ? 'Segment details' : 'Create a feed'}
        onClose={() => setOpen(false)}
        footer={
          withFooter ? (
            <>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button type="primary" onClick={() => setOpen(false)}>
                Create
              </Button>
            </>
          ) : undefined
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space16 }}>
          <label style={{ display: 'flex', flexDirection: 'column', gap: scale.space4 }}>
            <span style={{ color: semantic.textDarker, fontWeight: 500 }}>Name</span>
            <Input placeholder="ex. linkedin-ads-user-list-feed" />
          </label>
          <p style={{ color: semantic.textNormal, margin: 0 }}>
            Le contenu défile à l’intérieur du slot ; header et footer restent fixes. Le padding de
            24 est porté par le conteneur, le contenu ne se re-padde jamais.
          </p>
        </div>
      </Overlay>
    </Page>
  );
}

/** Mode modale : centrée sur un voile, largeur 600. */
export const Modale: Story = { render: () => <Demo /> };

/** Mode drawer : collé au bord droit, pleine hauteur, largeur 520. La page reste lisible. */
export const Drawer: Story = { render: () => <Demo mode="drawer" headerTheme="light" label="Ouvrir le drawer" /> };

/** Sans footer : les sélecteurs qui n’ont rien à valider. */
export const SansFooter: Story = { render: () => <Demo withFooter={false} label="Ouvrir sans footer" /> };

/** Les trois thèmes de header relevés en production. */
export const ThemesDeHeader: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space16, padding: scale.space24, background: semantic.bgWindow }}>
      {(['blue', 'light', 'dark'] as const).map((t) => (
        <div key={t} style={{ borderRadius: scale.radiusCard, overflow: 'hidden', boxShadow: '0 3px 6px -4px rgba(0,0,0,.12)' }}>
          <OverlayHeader title={`Titre de la modale — ${t}`} theme={t} onClose={() => {}} />
        </div>
      ))}
    </div>
  ),
};

/** Le footer seul : jusqu’à trois actions, un seul primaire, tout à droite. */
export const Footer: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space16, padding: scale.space24, background: semantic.bgWindow }}>
      <div style={{ background: semantic.bgContainer, borderRadius: scale.radiusCard, overflow: 'hidden' }}>
        <OverlayFooter>
          <Button>Cancel</Button>
          <Button type="primary">Create</Button>
        </OverlayFooter>
      </div>
      <div style={{ background: semantic.bgContainer, borderRadius: scale.radiusCard, overflow: 'hidden' }}>
        <OverlayFooter>
          <Button>Save and activate later</Button>
          <Button>Cancel</Button>
          <Button type="primary">Create</Button>
        </OverlayFooter>
      </div>
    </div>
  ),
};

/** À éviter : plusieurs actions primaires, ou une modale pour un parcours long. */
export const Dont: Story = {
  render: () => (
    <div style={{ padding: scale.space24, background: semantic.bgWindow }}>
      <div
        style={{
          borderLeft: `3px solid ${semantic.error}`,
          paddingLeft: scale.space12,
          background: semantic.bgContainer,
          borderRadius: scale.radiusCard,
          overflow: 'hidden',
        }}
      >
        <OverlayFooter>
          <Button type="primary">Save</Button>
          <Button type="primary">Save and activate</Button>
        </OverlayFooter>
      </div>
      <p style={{ color: semantic.textNormal, marginTop: scale.space12, maxWidth: 560 }}>
        Deux boutons primaires côte à côte : plus rien n’indique l’action attendue, et l’utilisateur
        doit lire les deux libellés pour trancher.
      </p>
    </div>
  ),
};
