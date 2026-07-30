import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from 'antd';
import { Toolbar, ToolbarSearch } from './Toolbar';
import { Icon } from './Icon';
import { CountBadge } from './CountBadge';
import { scale, semantic } from '../theme/micsTheme';

const Card = ({ children }: { children: React.ReactNode }) => (
  <div style={{ background: semantic.bgContainer, borderRadius: scale.radiusCard, padding: scale.space20 }}>
    {children}
  </div>
);

const meta = {
  title: 'Composants/Toolbar',
  component: Toolbar,
  argTypes: {
    search: { control: false, description: 'Champ de recherche, à gauche. Omis = pas de recherche sur ce tableau.' },
    actions: { control: false, description: 'Actions sur le tableau, à droite. Jamais les actions de page.' },
  },
  args: { search: undefined, actions: undefined },
  decorators: [
    (Story) => (
      <div style={{ background: semantic.bgWindow, padding: scale.space24 }}>
        <Card>
          <Story />
        </Card>
      </div>
    ),
  ],
} satisfies Meta<typeof Toolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

function SearchDemo({ placeholder = 'Search segments' }: { placeholder?: string }) {
  const [value, setValue] = useState('');
  return <ToolbarSearch value={value} onChange={setValue} placeholder={placeholder} />;
}

/** La composition standard d'une liste : recherche, Filters, Edit view. */
export const Standard: Story = {
  render: () => (
    <Toolbar
      search={<SearchDemo />}
      actions={
        <>
          <Button icon={<Icon name="filter" size={14} />}>
            Filters <CountBadge count={2} />
          </Button>
          <Button icon={<Icon name="view" size={14} />}>Edit view</Button>
        </>
      }
    />
  ),
};

/** Recherche seule : un tableau court, sans dimension à filtrer. */
export const RechercheSeule: Story = {
  render: () => <Toolbar search={<SearchDemo placeholder="Search feeds" />} />,
};

/** Actions seules : le tableau se lit d'un coup d'œil, la recherche serait du décor. */
export const ActionsSeules: Story = {
  render: () => (
    <Toolbar
      actions={
        <>
          <Button icon={<Icon name="filter" size={14} />}>Filters</Button>
          <Button icon={<Icon name="view" size={14} />}>Edit view</Button>
        </>
      }
    />
  ),
};

/** À éviter : les actions de page descendues dans la Toolbar. */
export const Dont: Story = {
  render: () => (
    <div style={{ borderLeft: `3px solid ${semantic.error}`, paddingLeft: scale.space12 }}>
      <Toolbar
        search={<SearchDemo />}
        actions={
          <>
            <Button icon={<Icon name="filter" size={14} />}>Filters</Button>
            <Button icon={<Icon name="download" size={14} />}>Export</Button>
            <Button type="primary" icon={<Icon name="plus" size={14} />}>
              New segment
            </Button>
          </>
        }
      />
      <p style={{ color: semantic.textNormal, marginTop: scale.space12, maxWidth: 640 }}>
        « Export » et « New segment » gardent leur sens quand le tableau est vide : ce sont des
        actions de page, leur place est dans l'ActionBar.
      </p>
    </div>
  ),
};
