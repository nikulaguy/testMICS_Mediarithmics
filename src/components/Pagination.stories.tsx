import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Pagination } from './Pagination';
import { scale, semantic } from '../theme/micsTheme';

const meta = {
  title: 'Composants/Simples/Pagination',
  component: Pagination,
  argTypes: {
    current: { control: 'number', description: 'Page courante, 1-indexée.' },
    total: { control: 'number', description: "Nombre total d'éléments, pas de pages." },
    pageSize: { control: 'number', description: "Nombre d'éléments par page." },
    showSizeChanger: { control: 'boolean', description: 'Sélecteur « n / page ». À activer sur les gros volumes.' },
    pageSizeOptions: { control: false },
    onChange: { control: false },
  },
  args: { current: 1, total: 180, pageSize: 10, showSizeChanger: true, onChange: () => {} },
  decorators: [
    (Story) => (
      <div style={{ background: semantic.bgContainer, padding: scale.space20, borderRadius: scale.radiusCard }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

function Demo({ total, size = 10, showSizeChanger = true }: { total: number; size?: number; showSizeChanger?: boolean }) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(size);
  return (
    <Pagination
      current={page}
      total={total}
      pageSize={pageSize}
      showSizeChanger={showSizeChanger}
      onChange={(p, s) => {
        setPage(p);
        setPageSize(s);
      }}
    />
  );
}

/** 18 pages : ellipsis au milieu, première et dernière toujours atteignables. */
export const BacASable: Story = { render: () => <Demo total={180} /> };

/** Premières pages : « précédent » désactivé. */
export const PremierePage: Story = { args: { current: 1, total: 180 } };

/** Dernière page : « suivant » désactivé. */
export const DernierePage: Story = { args: { current: 18, total: 180 } };

/** Petit volume : pas de sélecteur de taille, il n'apporterait rien. */
export const PetitVolume: Story = { render: () => <Demo total={24} showSizeChanger={false} /> };

/** En bas d'un tableau, sa seule position : à droite, sous la dernière ligne. */
export const SousUnTableau: Story = {
  render: () => (
    <div>
      <div
        style={{
          border: `1px solid ${semantic.borderInput}`,
          borderRadius: scale.radiusBase,
          padding: scale.space16,
          color: semantic.textLighter,
          textAlign: 'center',
        }}
      >
        Tableau
      </div>
      <Demo total={180} />
    </div>
  ),
};
