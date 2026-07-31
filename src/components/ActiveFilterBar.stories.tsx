import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ActiveFilterBar, type ActiveFilter } from './ActiveFilterBar';

const FEW: ActiveFilter[] = [
  { key: 'type:USER_QUERY', label: 'Type : User query' },
  { key: 'status:LIVE', label: 'Status : Live' },
];

const MANY: ActiveFilter[] = [
  ...FEW,
  { key: 'label:test_max_260526', label: 'Label : test_max_260526' },
  { key: 'label:test_max_260526_2', label: 'Label : test_max_260526_2' },
  { key: 'label:Test2', label: 'Label : Test2' },
  { key: 'date:last-7', label: 'Creation date : Last 7 days' },
  { key: 'owner:nguy', label: 'Owner : nguy@frontguys.fr' },
  { key: 'datamart:product', label: 'Datamart : mediarithmics - product' },
];

/** Barre pilotée, comme dans un écran réel : retirer une chip la fait disparaître. */
function Demo({ initial }: { initial: ActiveFilter[] }) {
  const [filters, setFilters] = useState(initial);
  return (
    <div style={{ width: 720 }}>
      <ActiveFilterBar
        filters={filters}
        onRemove={(key) => setFilters((f) => f.filter((x) => x.key !== key))}
        onClearAll={() => setFilters([])}
      />
    </div>
  );
}

const meta = {
  title: 'Composants/Composés/ActiveFilterBar',
  component: ActiveFilterBar,
  argTypes: {
    filters: { control: false, description: 'Une entrée par valeur appliquée. Jamais de regroupement.' },
    onRemove: { control: false, description: 'Retire une valeur. Reçoit la clé de la chip.' },
    onClearAll: { control: false, description: 'Vide toutes les dimensions.' },
  },
  args: { filters: FEW, onRemove: () => {}, onClearAll: () => {} },
} satisfies Meta<typeof ActiveFilterBar>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Peu de filtres : une ligne, pas de dépliage. */
export const Repliee: Story = { render: () => <Demo initial={FEW} /> };

/** Beaucoup de filtres : la barre mesure les chips et n'affiche que ce qui tient. */
export const AvecDebordement: Story = { render: () => <Demo initial={MANY} /> };

/**
 * Aucun filtre actif : le composant rend `null`. Le cadre en pointillés ci-dessous
 * n'appartient pas au composant, il matérialise l'espace qu'il N'occupe PAS.
 */
export const Vide: Story = {
  render: () => (
    <div style={{ width: 720 }}>
      <div
        style={{
          border: '1px dashed rgba(0,0,0,0.15)',
          borderRadius: 6,
          padding: 16,
          textAlign: 'center',
          color: 'rgba(0,0,0,0.43)',
        }}
      >
        <ActiveFilterBar filters={[]} onRemove={() => {}} onClearAll={() => {}} />
        Rien n'est rendu : pas de bande vide, pas de décalage de la page.
      </div>
    </div>
  ),
};
