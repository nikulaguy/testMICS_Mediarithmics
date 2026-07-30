import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  DropdownCheckboxItem,
  DropdownDivider,
  DropdownFooter,
  DropdownGroup,
  DropdownLabelItem,
  DropdownNavItem,
  DropdownOptionItem,
} from './DropdownItems';
import { DropdownPanel } from './DropdownPanel';
import { Tag } from './Tag';
import { scale, semantic } from '../theme/micsTheme';

const meta = {
  title: 'Composants/DropdownItems',
  parameters: { layout: 'padded' },
  decorators: [
    (Story) => (
      <div style={{ background: semantic.bgWindow, padding: scale.space24 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const Legend = ({ children, label }: { children: React.ReactNode; label: string }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space8 }}>
    <span style={{ fontSize: 10, letterSpacing: scale.trackingCaps, textTransform: 'uppercase', color: semantic.textLighter }}>
      {label}
    </span>
    <DropdownPanel width={260}>{children}</DropdownPanel>
  </div>
);

/** Les cinq briques, avec leurs états. */
export const Briques: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: scale.space24, alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <Legend label="Nav Item">
        <DropdownGroup>
          <DropdownNavItem icon="tag" label="Segment type" onActivate={() => {}} />
          <DropdownNavItem icon="cluster" label="Datamart" count={2} active onActivate={() => {}} />
        </DropdownGroup>
      </Legend>
      <Legend label="Checkbox Item">
        <DropdownGroup>
          <DropdownCheckboxItem label="Automation" icon="automation" checked={false} onToggle={() => {}} />
          <DropdownCheckboxItem label="User query" icon="user-query" checked onToggle={() => {}} />
        </DropdownGroup>
      </Legend>
      <Legend label="Option Item">
        <DropdownGroup>
          <DropdownOptionItem label="Persisted" selected={false} onSelect={() => {}} />
          <DropdownOptionItem label="Not persisted" selected onSelect={() => {}} />
        </DropdownGroup>
      </Legend>
      <Legend label="Label Item">
        <DropdownGroup>
          <DropdownLabelItem label="Test1" />
          <DropdownLabelItem label="e-commerce" />
        </DropdownGroup>
      </Legend>
      <Legend label="Footer">
        <DropdownFooter label="Clear all filters" onClick={() => {}} />
      </Legend>
    </div>
  ),
};

/** Nav Item : Default, Active, et Active avec compteur de valeurs cochées. */
export const NavItem: Story = {
  render: () => (
    <DropdownPanel width={240}>
      <DropdownGroup>
        <DropdownNavItem icon="tag" label="Segment type" onActivate={() => {}} />
        <DropdownNavItem icon="cluster" label="Datamart" active onActivate={() => {}} />
        <DropdownNavItem icon="calendar" label="Creation date" count={3} active onActivate={() => {}} />
      </DropdownGroup>
    </DropdownPanel>
  ),
};

/** Checkbox Item : multi-sélection, l'icône dit le type de la valeur. */
export const CheckboxItem: Story = {
  render: () => {
    const [checked, setChecked] = useState<string[]>(['User query']);
    const VALUES = [
      { label: 'User query', icon: 'user-query' },
      { label: 'User list', icon: 'team' },
      { label: 'User pixel', icon: 'user-pixel' },
      { label: 'User lookalike', icon: 'user-lookalike' },
    ];
    return (
      <DropdownPanel width={270}>
        <DropdownGroup>
          {VALUES.map((v) => (
            <DropdownCheckboxItem
              key={v.label}
              label={v.label}
              icon={v.icon}
              checked={checked.includes(v.label)}
              onToggle={() =>
                setChecked((c) => (c.includes(v.label) ? c.filter((x) => x !== v.label) : [...c, v.label]))
              }
            />
          ))}
        </DropdownGroup>
        <DropdownFooter label="Clear segment type" disabled={!checked.length} onClick={() => setChecked([])} />
      </DropdownPanel>
    );
  },
};

/** Option Item : sélection unique. Choisir une valeur désélectionne la précédente. */
export const OptionItem: Story = {
  render: () => {
    const [value, setValue] = useState('Today');
    return (
      <DropdownPanel width={220}>
        <DropdownGroup>
          {['Today', 'Yesterday', 'Last 7 days', 'Last 30 days'].map((v) => (
            <DropdownOptionItem key={v} label={v} selected={value === v} onSelect={() => setValue(v)} />
          ))}
        </DropdownGroup>
      </DropdownPanel>
    );
  },
};

/** Label Item : la liste des labels, avec les valeurs choisies en chips fermables au-dessus. */
export const LabelItem: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>(['test_max_260526']);
    const LABELS = ['test_max_260526', 'test_max_260526_2', 'Test2', 'e-commerce'];
    return (
      <DropdownPanel width={320}>
        {selected.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: scale.space8, padding: scale.space16 }}>
            {selected.map((l) => (
              <Tag key={l} closable onClose={() => setSelected((s) => s.filter((x) => x !== l))}>
                {l}
              </Tag>
            ))}
          </div>
        )}
        <DropdownDivider inset={scale.space16} />
        <DropdownGroup>
          {LABELS.filter((l) => !selected.includes(l)).map((l) => (
            <DropdownLabelItem key={l} label={l} onSelect={() => setSelected((s) => [...s, l])} />
          ))}
        </DropdownGroup>
        <DropdownFooter label="Clear labels" disabled={!selected.length} onClick={() => setSelected([])} />
      </DropdownPanel>
    );
  },
};

/** Footer : deux compositions. « Clear » centré taille L, « Reset + OK » réparti taille M. */
export const Footer: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: scale.space24, alignItems: 'flex-start' }}>
      <Legend label="Clear (taille L)">
        <DropdownFooter label="Clear all filters" onClick={() => {}} />
      </Legend>
      <Legend label="Clear désactivé">
        <DropdownFooter label="Clear all filters" disabled onClick={() => {}} />
      </Legend>
      <Legend label="Reset + OK (taille M)">
        <DropdownFooter label="Reset" onClick={() => {}} onOk={() => {}} />
      </Legend>
    </div>
  ),
};

/** À éviter : mêler multi-sélection et sélection unique dans un même groupe. */
export const Dont: Story = {
  render: () => (
    <div style={{ borderLeft: `3px solid ${semantic.error}`, paddingLeft: scale.space12 }}>
      <DropdownPanel width={260}>
        <DropdownGroup>
          <DropdownCheckboxItem label="User query" checked onToggle={() => {}} />
          <DropdownOptionItem label="Persisted" selected onSelect={() => {}} />
          <DropdownCheckboxItem label="User list" checked={false} onToggle={() => {}} />
        </DropdownGroup>
      </DropdownPanel>
      <p style={{ color: semantic.textNormal, marginTop: scale.space8, maxWidth: 420 }}>
        Case à cocher et sélection unique dans la même liste : l'utilisateur ne peut pas prévoir si
        cliquer ajoute une valeur ou remplace la précédente.
      </p>
    </div>
  ),
};
