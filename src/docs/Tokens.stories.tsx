import type { Meta, StoryObj } from '@storybook/react-vite';
import { primitives, scale, semantic } from '../theme/micsTheme';

const meta: Meta = {
  title: 'Design System/Tokens',
  parameters: {
    docs: {
      description: {
        component:
          "Les tokens sont la seule source de valeurs du projet. Les primitives portent les valeurs et ne nomment que des couleurs ; les sémantiques ne sont que des alias de primitives et nomment des usages. Un composant n'utilise jamais une primitive directement.",
      },
    },
  },
};
export default meta;

type Story = StoryObj;

function Swatch({ name, value }: { name: string; value: string }) {
  return (
    <div style={{ width: 168 }}>
      <div
        style={{
          height: 48,
          borderRadius: scale.radiusBase,
          background: value,
          border: `1px solid ${semantic.borderInput}`,
        }}
      />
      <div style={{ marginTop: 6, color: semantic.textDarker }}>{name}</div>
      <div style={{ color: semantic.textLighter }}>{value}</div>
    </div>
  );
}

function Grid({ children }: { children: React.ReactNode }) {
  return <div style={{ display: 'flex', flexWrap: 'wrap', gap: scale.space16 }}>{children}</div>;
}

function Title({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div style={{ margin: `${scale.space24}px 0 ${scale.space12}px` }}>
      <div style={{ fontSize: 16, fontWeight: 500, color: semantic.textDarker }}>{children}</div>
      {sub && <div style={{ color: semantic.textLighter, marginTop: 4 }}>{sub}</div>}
    </div>
  );
}

/** Sémantiques : ce que les composants utilisent réellement. */
export const Semantiques: Story = {
  render: () => (
    <>
      <Title sub="Ce que les composants utilisent. Chaque sémantique est un alias d'une primitive.">
        Couleurs sémantiques
      </Title>
      <Grid>
        {(
          [
            ['primary', semantic.primary],
            ['info', semantic.info],
            ['success', semantic.success],
            ['warning', semantic.warning],
            ['error', semantic.error],
            ['link/default', semantic.linkDefault],
            ['link/hover', semantic.linkHover],
            ['link/on-dark', semantic.linkOnDark],
            ['text/darker', semantic.textDarker],
            ['text/normal', semantic.textNormal],
            ['text/lighter', semantic.textLighter],
            ['text/lightest', semantic.textLightest],
            ['bg/container', semantic.bgContainer],
            ['bg/window', semantic.bgWindow],
            ['bg/subtle', semantic.bgSubtle],
            ['bg/hover', semantic.bgHover],
            ['bg/selected', semantic.bgSelected],
            ['bg/tooltip', semantic.bgTooltip],
            ['border/default', semantic.borderDefault],
            ['border/input', semantic.borderInput],
          ] as const
        ).map(([name, value]) => (
          <Swatch key={name} name={name} value={value} />
        ))}
      </Grid>
    </>
  ),
};

/** Primitives : les valeurs, nommées par couleur uniquement. */
export const Primitives: Story = {
  render: () => (
    <>
      <Title sub="Les valeurs. Nommées par couleur, jamais par usage. Réservées aux sémantiques.">
        Primitives
      </Title>
      <Grid>
        {Object.entries(primitives).map(([name, value]) => (
          <Swatch key={name} name={name} value={value as string} />
        ))}
      </Grid>
    </>
  ),
};

/** Échelle : espacements, radius, tailles de contrôle. */
export const Echelle: Story = {
  render: () => (
    <>
      <Title sub="Tous les gaps et paddings du produit sortent de cette échelle.">Espacements</Title>
      <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space8 }}>
        {(['space4', 'space8', 'space12', 'space16', 'space20', 'space24', 'space35'] as const).map((k) => (
          <div key={k} style={{ display: 'flex', alignItems: 'center', gap: scale.space16 }}>
            <span style={{ width: 90, color: semantic.textNormal }}>{k.replace('space', 'space/')}</span>
            <div style={{ height: 12, width: scale[k], background: semantic.primary, borderRadius: 2 }} />
            <span style={{ color: semantic.textLighter }}>{scale[k]} px</span>
          </div>
        ))}
      </div>

      <Title sub="radius/base pour les contrôles, radius/card pour les cartes et les overlays.">Radius</Title>
      <div style={{ display: 'flex', gap: scale.space16 }}>
        {(
          [
            ['radius/base', scale.radiusBase],
            ['radius/card', scale.radiusCard],
          ] as const
        ).map(([name, r]) => (
          <div key={name} style={{ textAlign: 'center' }}>
            <div
              style={{
                width: 96,
                height: 64,
                borderRadius: r,
                background: semantic.bgSubtle,
                border: `1px solid ${semantic.borderDefault}`,
              }}
            />
            <div style={{ marginTop: 6, color: semantic.textNormal }}>
              {name} ({r})
            </div>
          </div>
        ))}
      </div>

      <Title sub="Hauteurs fixes de la coque et des contrôles.">Tailles</Title>
      <div style={{ color: semantic.textNormal, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span>TopBar : {scale.sizeHeader} · Actionbar : {scale.actionBarHeight} · SideMenu : {scale.sideMenuWidth}</span>
        <span>Contrôle (bouton, champ, select) : {scale.sizeControl} · Ligne de tableau : {scale.sizeRow}</span>
      </div>
    </>
  ),
};

/** Typographie : une seule police, une échelle courte. */
export const Typographie: Story = {
  render: () => (
    <>
      <Title sub="Police unique Circular, deux graisses : Book et Medium.">Styles de texte</Title>
      <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space12 }}>
        {(
          [
            ['Headline', 24, 500],
            ['Headline 3', 20, 500],
            ['Headline 4', 16, 500],
            ['Body/Large', 14, 400],
            ['Body/Book', 12, 400],
            ['Body/Medium', 12, 500],
            ['Caption/Main', 10, 400],
          ] as const
        ).map(([name, size, weight]) => (
          <div key={name} style={{ display: 'flex', alignItems: 'baseline', gap: scale.space24 }}>
            <span style={{ width: 120, color: semantic.textLighter }}>{name}</span>
            <span style={{ fontSize: size, fontWeight: weight, color: semantic.textDarker }}>
              Segment name example
            </span>
            <span style={{ color: semantic.textLighter }}>{size} px</span>
          </div>
        ))}
      </div>
    </>
  ),
};
