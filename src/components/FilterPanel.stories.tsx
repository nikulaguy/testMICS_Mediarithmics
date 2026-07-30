import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { FilterPanel } from './FilterPanel';
import type { FilterState } from '../data/segments';
import { scale, semantic } from '../theme/micsTheme';

/** Panneau piloté, comme dans un écran réel : cocher une valeur met l'état à jour. */
function Demo({ initial = {} as FilterState }: { initial?: FilterState }) {
  const [filters, setFilters] = useState<FilterState>(initial);
  return (
    <div style={{ background: semantic.bgWindow, padding: scale.space24, minHeight: 420 }}>
      <FilterPanel
        filters={filters}
        onToggle={(dim, value) =>
          setFilters((f) => {
            const current = f[dim] ?? [];
            const next = current.includes(value) ? current.filter((v) => v !== value) : [...current, value];
            return { ...f, [dim]: next };
          })
        }
        onSet={(dim, values) => setFilters((f) => ({ ...f, [dim]: values }))}
        onClearDimension={(dim) => setFilters((f) => ({ ...f, [dim]: [] }))}
        onClearAll={() => setFilters({})}
      />
    </div>
  );
}

const meta = {
  title: 'Composants/FilterPanel',
  component: FilterPanel,
  argTypes: {
    filters: { control: false, description: 'État courant : une entrée par dimension, valeurs cochées.' },
    onToggle: { control: false, description: 'Bascule une valeur (choix multiple).' },
    onSet: { control: false, description: 'Écrase la valeur d\'une dimension (choix unique : périodes).' },
    onClearDimension: { control: false, description: 'Vide une dimension depuis son pied de panneau.' },
    onClearAll: { control: false, description: 'Vide toutes les dimensions.' },
  },
  args: { filters: {}, onToggle: () => {}, onSet: () => {}, onClearDimension: () => {}, onClearAll: () => {} },
} satisfies Meta<typeof FilterPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Aucun filtre : le niveau 1 liste les dimensions, sans compteur. */
export const Vierge: Story = { render: () => <Demo /> };

/** Filtres appliqués : chaque dimension affiche le nombre de valeurs cochées. */
export const AvecFiltresActifs: Story = {
  render: () => <Demo initial={{ type: ['USER_QUERY', 'USER_LIST'], status: ['LIVE'] }} />,
};
