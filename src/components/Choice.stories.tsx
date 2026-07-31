import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox, Radio } from 'antd';
import { Switch } from './Switch';
import { Select } from './Select';
import { scale, semantic, typography } from '../theme/micsTheme';

const meta = {
  title: 'Composants/Simples/Choix (Checkbox, Radio, Switch)',
  parameters: { layout: 'padded' },
  decorators: [
    (Story) => (
      <div style={{ background: semantic.bgContainer, padding: scale.space24, borderRadius: scale.radiusCard }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const Legend = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space8 }}>
    <span
      style={{
        ...typography.captionMedium,
        letterSpacing: scale.trackingCaps,
        textTransform: 'uppercase',
        color: semantic.textLighter,
      }}
    >
      {label}
    </span>
    {children}
  </div>
);

/** Les trois contrôles côte à côte, avec leurs états. */
export const LesTrois: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: scale.space35, alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <Legend label="Checkbox — choix multiple">
        <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space8 }}>
          <Checkbox>Non cochée</Checkbox>
          <Checkbox defaultChecked>Cochée</Checkbox>
          <Checkbox indeterminate>Indéterminée</Checkbox>
          <Checkbox disabled>Désactivée</Checkbox>
        </div>
      </Legend>
      <Legend label="Radio — choix unique">
        <Radio.Group defaultValue="b" style={{ display: 'flex', flexDirection: 'column', gap: scale.space8 }}>
          <Radio value="a">Non sélectionné</Radio>
          <Radio value="b">Sélectionné</Radio>
          <Radio value="c" disabled>
            Désactivé
          </Radio>
        </Radio.Group>
      </Legend>
      <Legend label="Switch — effet immédiat">
        <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space12 }}>
          <Switch checked={false} onChange={() => {}} label="Désactivé" />
          <Switch checked onChange={() => {}} label="Activé" />
          <Switch checked={false} onChange={() => {}} label="Non modifiable" disabled />
        </div>
      </Legend>
    </div>
  ),
};

/** Checkbox : groupe nommé, alignement vertical, libellé cliquable. */
export const GroupeDeCheckbox: Story = {
  render: () => {
    const ALL = ['User query', 'User list', 'User pixel', 'User lookalike'];
    const [checked, setChecked] = useState<string[]>(['User query']);
    const allChecked = checked.length === ALL.length;
    return (
      <fieldset style={{ border: 0, padding: 0, margin: 0 }}>
        <legend style={{ ...typography.bodyMedium, color: semantic.textDarker, marginBottom: scale.space8 }}>
          Segment types
        </legend>
        <Checkbox
          indeterminate={checked.length > 0 && !allChecked}
          checked={allChecked}
          onChange={(e) => setChecked(e.target.checked ? ALL : [])}
          style={{ marginBottom: scale.space8 }}
        >
          Tout sélectionner
        </Checkbox>
        <Checkbox.Group
          value={checked}
          onChange={(v) => setChecked(v as string[])}
          options={ALL}
          style={{ display: 'flex', flexDirection: 'column', gap: scale.space8, paddingInlineStart: scale.space24 }}
        />
      </fieldset>
    );
  },
};

/** Radio : deux à cinq options exclusives, avec un défaut sensé présélectionné. */
export const GroupeDeRadio: Story = {
  render: () => {
    const [value, setValue] = useState('persisted');
    return (
      <fieldset style={{ border: 0, padding: 0, margin: 0 }}>
        <legend style={{ ...typography.bodyMedium, color: semantic.textDarker, marginBottom: scale.space8 }}>
          Persistance
        </legend>
        <Radio.Group
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{ display: 'flex', flexDirection: 'column', gap: scale.space8 }}
        >
          <Radio value="persisted">Persisted</Radio>
          <Radio value="not-persisted">Not persisted</Radio>
        </Radio.Group>
      </fieldset>
    );
  },
};

/** Switch : le libellé décrit l'état activé et ne se retourne pas. */
export const SwitchAvecDescription: Story = {
  render: () => {
    const [on, setOn] = useState(true);
    const [alerts, setAlerts] = useState(false);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space16, maxWidth: 420 }}>
        <Switch
          checked={on}
          onChange={setOn}
          label="Synchroniser avec le datamart"
          description="La synchronisation démarre immédiatement et se répète toutes les heures."
        />
        <Switch
          checked={alerts}
          onChange={setAlerts}
          label="Recevoir les alertes de chute de volume"
          description="Un email par jour au maximum."
        />
      </div>
    );
  },
};

/** Le même choix, rendu par les trois contrôles. Un seul est correct. */
export const LeBonControle: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: scale.space24 }}>
      <div style={{ borderLeft: `3px solid ${semantic.success}`, paddingLeft: scale.space12 }}>
        <Legend label="À faire — 2 options exclusives">
          <Radio.Group defaultValue="p" style={{ display: 'flex', flexDirection: 'column', gap: scale.space8 }}>
            <Radio value="p">Persisted</Radio>
            <Radio value="n">Not persisted</Radio>
          </Radio.Group>
        </Legend>
      </div>
      <div style={{ borderLeft: `3px solid ${semantic.error}`, paddingLeft: scale.space12 }}>
        <Legend label="À éviter — un Select pour 2 options">
          <Select
            options={[
              { value: 'p', label: 'Persisted' },
              { value: 'n', label: 'Not persisted' },
            ]}
            defaultValue="p"
            width={200}
          />
        </Legend>
      </div>
      <div style={{ borderLeft: `3px solid ${semantic.error}`, paddingLeft: scale.space12 }}>
        <Legend label="À éviter — un Switch dans un formulaire">
          <Switch checked onChange={() => {}} label="Persisted" />
        </Legend>
      </div>
    </div>
  ),
};
