import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Card, scale, semantic, typography } from '../ui';
import { ActionbarCreation, CreationFlow } from './CreationFlow';

/*
  La coque du parcours de création est en position fixed plein écran : ses stories
  s'affichent en layout fullscreen, comme l'écran qu'elle recouvre.
*/
const meta = {
  title: 'Templates/Parcours de création',
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/** L'Actionbar Type=Creation seule : fond info, titre + sous-titre, croix. */
export const Actionbar: Story = {
  render: () => (
    <ActionbarCreation title="New Audience Segment" subtitle="Segment type : User Query" onClose={() => {}} />
  ),
};

/**
 * La coque complète : TopBar réduite (nom d'organisation seul), Actionbar
 * Creation, contenu centré sur 1026, pied d'actions collé en bas.
 */
export const Coque: Story = {
  render: () => (
    <div style={{ position: 'relative', height: 600 }}>
      <CreationFlow
        title="New Audience Segment"
        subtitle="Segment type : User Query"
        onCloseRequest={() => {}}
        footer={
          <>
            <Button>Back</Button>
            <Button type="primary">Next</Button>
          </>
        }
      >
        <Card style={{ minHeight: 320 }}>
          <p style={{ margin: 0, ...typography.body, color: semantic.textLighter, padding: scale.space16 }}>
            Contenu de l'étape — voir la page de documentation pour les règles du tunnel.
          </p>
        </Card>
      </CreationFlow>
    </div>
  ),
};
