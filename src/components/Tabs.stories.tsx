import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tab, TabBar, TabPanel, type TabItem } from './Tabs';
import { scale, semantic } from '../theme/micsTheme';

const ITEMS: TabItem[] = [
  { key: 'segments', label: 'Segments' },
  { key: 'usage', label: 'Usage overview' },
  { key: 'alerts', label: 'Alerts', badge: 1 },
];

const meta = {
  title: 'Composants/Composés/Tabs',
  component: TabBar,
  argTypes: {
    items: { control: false, description: 'Onglets : key, label, badge optionnel.' },
    active: { control: false, description: 'Clé de l’onglet actif. Un seul à la fois.' },
    onChange: { control: false },
    idPrefix: { control: 'text', description: 'Préfixe des id, pour relier chaque onglet à son panneau.' },
  },
  args: { items: ITEMS, active: 'segments', onChange: () => {}, idPrefix: 'demo' },
  decorators: [
    (Story) => (
      <div style={{ background: semantic.bgContainer, padding: scale.space24, borderRadius: scale.radiusCard }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TabBar>;

export default meta;
type Story = StoryObj<typeof meta>;

function Demo({ items = ITEMS }: { items?: TabItem[] }) {
  const [active, setActive] = useState(items[0].key);
  return (
    <>
      <TabBar items={items} active={active} onChange={setActive} idPrefix="demo" />
      <TabPanel tabKey={active} idPrefix="demo">
        <p style={{ color: semantic.textNormal, paddingTop: scale.space16 }}>
          Contenu de l’onglet « {items.find((i) => i.key === active)?.label} ».
        </p>
      </TabPanel>
    </>
  );
}

/** La barre complète, avec son panneau. Les flèches gauche / droite naviguent. */
export const BacASable: Story = { render: () => <Demo /> };

/** Les deux états d’un onglet : Default et Actif. Le survol éclaircit le libellé. */
export const Etats: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: scale.space35, borderBottom: `1px solid ${semantic.borderInput}` }}>
      <Tab label="Default" active={false} onSelect={() => {}} />
      <Tab label="Actif" active onSelect={() => {}} />
      <Tab label="Avec badge" badge={3} active={false} onSelect={() => {}} />
    </div>
  ),
};

/** Le badge annonce un nombre d’éléments à traiter, pas une décoration. */
export const AvecBadge: Story = {
  render: () => (
    <Demo
      items={[
        { key: 'stats', label: 'Stats' },
        { key: 'alerts', label: 'Alerts', badge: 2 },
        { key: 'exports', label: 'Exports' },
      ]}
    />
  ),
};

/**
 * Débordement : la barre défile et le bouton « … » liste les onglets hors écran.
 * Défiler à droite change la liste — ce sont ceux de gauche qui deviennent invisibles.
 */
export const Debordement: Story = {
  render: () => (
    <div style={{ maxWidth: 520 }}>
      <Demo
        items={[
          { key: 'stats', label: 'Stats' },
          { key: 'overlap', label: 'Overlap' },
          { key: 'exports', label: 'Exports' },
          { key: 'features', label: 'Features and adoption' },
          { key: 'targeting', label: 'Contextual Targeting' },
          { key: 'timeline', label: 'Timeline' },
          { key: 'alerts', label: 'Alerts', badge: 2 },
          { key: 'feeds', label: 'Feeds' },
          { key: 'audit', label: 'Audit log' },
        ]}
      />
    </div>
  ),
};

/** Onglets de détail d’un segment : cinq sous-vues d’un même objet. */
export const OngletsDeDetail: Story = {
  render: () => (
    <Demo
      items={[
        { key: 'stats', label: 'Stats' },
        { key: 'overlap', label: 'Overlap' },
        { key: 'exports', label: 'Exports' },
        { key: 'features', label: 'Features and adoption' },
        { key: 'targeting', label: 'Contextual Targeting' },
      ]}
    />
  ),
};
