import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { DropdownPanel } from './DropdownPanel';
import {
  DropdownCheckboxItem,
  DropdownDivider,
  DropdownFooter,
  DropdownGroup,
  DropdownNavItem,
  DropdownOptionItem,
} from './DropdownItems';
import { scale, semantic } from '../theme/micsTheme';

const meta = {
  title: 'Composants/DropdownPanel',
  component: DropdownPanel,
  argTypes: {
    width: {
      control: { type: 'number', min: 120, max: 480 },
      description: 'Largeur fixe en px. Sinon le panneau épouse son contenu.',
    },
    anchored: { control: 'boolean', description: 'Positionne le panneau en absolu sous son déclencheur.' },
    align: { control: 'inline-radio', options: ['left', 'right'], description: "Bord d'ancrage quand anchored." },
    children: { control: false },
    style: { control: false },
  },
  args: { width: 240, children: null },
  decorators: [
    (Story) => (
      <div style={{ background: semantic.bgWindow, padding: scale.space24 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof DropdownPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Le panneau nu : une surface. Ce qu'il contient vient des items du DS. */
export const BacASable: Story = {
  args: {
    children: (
      <DropdownGroup>
        <DropdownOptionItem label="Persisted" selected onSelect={() => {}} />
        <DropdownOptionItem label="Not persisted" selected={false} onSelect={() => {}} />
      </DropdownGroup>
    ),
  },
};

/** Cas 1 : menu de catégories. Les Nav Items ouvrent une cascade. */
function CategoriesDemo() {
  const [active, setActive] = useState('type');
  return (
    <DropdownPanel width={240}>
      <DropdownGroup>
        <DropdownNavItem
          icon="tag"
          label="Segment type"
          count={2}
          active={active === 'type'}
          onActivate={() => setActive('type')}
        />
        <DropdownNavItem
          icon="cluster"
          label="Datamart"
          active={active === 'datamart'}
          onActivate={() => setActive('datamart')}
        />
        <DropdownNavItem
          icon="calendar"
          label="Creation date"
          count={1}
          active={active === 'date'}
          onActivate={() => setActive('date')}
        />
      </DropdownGroup>
      <DropdownFooter label="Clear all filters" onClick={() => {}} />
    </DropdownPanel>
  );
}

export const MenuCategories: Story = { render: () => <CategoriesDemo /> };

/** Cas 2 : multi-sélection. Un seul type d'items par groupe. */
function MultiDemo() {
  const [checked, setChecked] = useState<string[]>(['User query']);
  const toggle = (v: string) =>
    setChecked((c) => (c.includes(v) ? c.filter((x) => x !== v) : [...c, v]));
  return (
    <DropdownPanel width={270}>
      <DropdownGroup>
        {['User query', 'User list', 'User pixel', 'User lookalike'].map((v) => (
          <DropdownCheckboxItem
            key={v}
            label={v}
            icon="team"
            checked={checked.includes(v)}
            onToggle={() => toggle(v)}
          />
        ))}
      </DropdownGroup>
      <DropdownFooter
        label="Clear segment type"
        disabled={!checked.length}
        onClick={() => setChecked([])}
      />
    </DropdownPanel>
  );
}

export const MultiSelection: Story = { render: () => <MultiDemo /> };

/**
 * Cas 3 : ancré sous son déclencheur. Le conteneur relatif épouse le bouton —
 * un conteneur plus haut que le déclencheur décollerait le panneau d'autant.
 */
export const Ancre: Story = {
  render: () => (
    <div style={{ height: 220 }}>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <button
          type="button"
          style={{
            height: scale.sizeControl,
            paddingInline: scale.space12,
            border: `1px solid ${semantic.borderInput}`,
            borderRadius: scale.radiusBase,
            background: semantic.bgContainer,
            color: semantic.textNormal,
            font: 'inherit',
            cursor: 'pointer',
          }}
        >
          Edit view
        </button>
        <DropdownPanel anchored align="left" width={220}>
          <DropdownGroup>
            <DropdownCheckboxItem label="Name" icon="tag" checked onToggle={() => {}} />
            <DropdownCheckboxItem label="Type" icon="cluster" checked onToggle={() => {}} />
            <DropdownCheckboxItem label="Owner" icon="user" checked={false} onToggle={() => {}} />
          </DropdownGroup>
        </DropdownPanel>
      </div>
    </div>
  ),
};

/** Cas 4 : groupes séparés. Le séparateur marque un changement de nature d'action. */
export const GroupesSepares: Story = {
  render: () => (
    <DropdownPanel width={240}>
      <DropdownGroup title="Vue">
        <DropdownOptionItem label="Columns" selected={false} onSelect={() => {}} />
        <DropdownOptionItem label="Density" selected={false} onSelect={() => {}} />
      </DropdownGroup>
      <DropdownDivider />
      <DropdownGroup title="Export">
        <DropdownOptionItem label="Download as CSV" selected={false} onSelect={() => {}} />
      </DropdownGroup>
    </DropdownPanel>
  ),
};
