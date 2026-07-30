import type { Meta, StoryObj } from '@storybook/react-vite';
import { elevation, scale, semantic, typography } from '../theme/micsTheme';

const meta = { title: 'Design System/Tokens/Fondations' } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

const Frame = ({ children }: { children: React.ReactNode }) => (
  <div style={{ background: semantic.bgWindow, padding: scale.space24, color: semantic.textNormal }}>{children}</div>
);

const Card = ({ children }: { children: React.ReactNode }) => (
  <div style={{ background: semantic.bgContainer, borderRadius: scale.radiusCard, padding: scale.space20 }}>
    {children}
  </div>
);

const Caption = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      ...typography.captionMedium,
      letterSpacing: scale.trackingCaps,
      textTransform: 'uppercase',
      color: semantic.textLighter,
      marginBottom: scale.space8,
    }}
  >
    {children}
  </div>
);

/* ------------------------------------------------------------------ couleurs */

const ROLES: Array<{ token: string; value: string; role: string; onDark?: boolean }> = [
  { token: 'primary', value: semantic.primary, role: 'Action principale, état actif, sélection', onDark: true },
  { token: 'info', value: semantic.info, role: 'Surfaces navy : TopBar, tooltip, header technique', onDark: true },
  { token: 'success', value: semantic.success, role: 'Résultat positif, rien à traiter', onDark: true },
  { token: 'warning', value: semantic.warning, role: 'À traiter, sans gravité', onDark: true },
  { token: 'error', value: semantic.error, role: 'Échec, action destructive', onDark: true },
];

const TEXTS: Array<{ token: string; value: string; role: string }> = [
  { token: 'text/darker', value: semantic.textDarker, role: 'Titres, valeurs chiffrées mises en avant' },
  { token: 'text/normal', value: semantic.textNormal, role: 'Corps de texte, libellés' },
  { token: 'text/lighter', value: semantic.textLighter, role: 'Métadonnées, en-têtes de colonne, aide' },
  { token: 'text/lightest', value: semantic.textLightest, role: 'Placeholder, désactivé, illustration' },
];

const SURFACES: Array<{ token: string; value: string; role: string; border?: boolean }> = [
  { token: 'bg/window', value: semantic.bgWindow, role: 'Fond de page. Le niveau du dessous.' },
  { token: 'bg/container', value: semantic.bgContainer, role: 'Carte, panneau, tableau. Le niveau du dessus.', border: true },
  { token: 'bg/subtle', value: semantic.bgSubtle, role: 'Zone secondaire DANS une carte (barre de filtres actifs)' },
  { token: 'bg/hover', value: semantic.bgHover, role: 'Survol. Transitoire, disparaît quand le pointeur part.' },
  { token: 'bg/selected', value: semantic.bgSelected, role: 'Sélection. Persistante, elle reste après le clic.' },
];

function Swatch({ value, size = 40, border }: { value: string; size?: number; border?: boolean }) {
  return (
    <span
      style={{
        width: size,
        height: size,
        borderRadius: scale.radiusBase,
        background: value,
        border: border ? `1px solid ${semantic.borderInput}` : undefined,
        flex: '0 0 auto',
      }}
    />
  );
}

function Row({ token, value, role, border }: { token: string; value: string; role: string; border?: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: scale.space12, padding: `${scale.space8}px 0` }}>
      <Swatch value={value} border={border} />
      <div style={{ minWidth: 130 }}>
        <div style={{ ...typography.bodyMedium }}>{token}</div>
        <div style={{ ...typography.caption, color: semantic.textLighter }}>{value}</div>
      </div>
      <div style={{ color: semantic.textNormal }}>{role}</div>
    </div>
  );
}

/** Les rôles sémantiques : ce que chaque couleur veut dire, pas à quoi elle ressemble. */
export const RolesDeCouleur: Story = {
  render: () => (
    <Frame>
      <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space16 }}>
        <Card>
          <Caption>Couleurs de sens</Caption>
          {ROLES.map((r) => (
            <Row key={r.token} {...r} />
          ))}
        </Card>
        <Card>
          <Caption>Rampe de texte</Caption>
          {TEXTS.map((r) => (
            <Row key={r.token} {...r} />
          ))}
        </Card>
        <Card>
          <Caption>Surfaces</Caption>
          {SURFACES.map((r) => (
            <Row key={r.token} {...r} />
          ))}
        </Card>
      </div>
    </Frame>
  ),
};

/** Les deux niveaux de surface, et pourquoi il n'en faut pas un troisième. */
export const NiveauxDeSurface: Story = {
  render: () => (
    <Frame>
      <Caption>bg/window — fond de page</Caption>
      <Card>
        <Caption>bg/container — la carte</Caption>
        <div style={{ background: semantic.bgSubtle, borderRadius: scale.radiusCard, padding: scale.space16 }}>
          <span style={{ color: semantic.textNormal }}>
            bg/subtle — zone secondaire dans la carte. On s'arrête là : un quatrième niveau de gris
            ne se distingue plus du troisième.
          </span>
        </div>
      </Card>
    </Frame>
  ),
};

/** Survol contre sélection : deux gris, deux durées de vie. */
export const SurvolEtSelection: Story = {
  render: () => (
    <Frame>
      <Card>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {[
            { label: 'Ligne au repos', bg: 'transparent', note: 'transparent' },
            { label: 'Ligne survolée', bg: semantic.bgHover, note: 'bg/hover — transitoire' },
            { label: 'Ligne sélectionnée', bg: semantic.bgSelected, note: 'bg/selected — persistante', primary: true },
          ].map((r) => (
            <div
              key={r.label}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: `${scale.space8}px ${scale.space16}px`,
                background: r.bg,
                color: r.primary ? semantic.primary : semantic.textNormal,
              }}
            >
              <span>{r.label}</span>
              <span style={{ ...typography.caption, color: semantic.textLighter }}>{r.note}</span>
            </div>
          ))}
        </div>
      </Card>
    </Frame>
  ),
};

/* --------------------------------------------------------------- espacements */

const SPACES = [
  { name: 'space/4', v: scale.space4, use: 'Titre et sa description, icône collée à son libellé' },
  { name: 'space/8', v: scale.space8, use: 'Entre éléments d’un même groupe : boutons, chips, gap d’un item' },
  { name: 'space/12', v: scale.space12, use: 'Icône et libellé d’une rangée, éléments d’une barre' },
  { name: 'space/16', v: scale.space16, use: 'Entre blocs d’une même carte. La valeur par défaut.' },
  { name: 'space/20', v: scale.space20, use: 'Padding intérieur d’une carte' },
  { name: 'space/24', v: scale.space24, use: 'Entre sections, padding d’un overlay' },
  { name: 'space/35', v: scale.space35, use: 'Marge de contenu de page (valeur héritée de la prod)' },
];

/** L'échelle réellement utilisée, et ce que chaque cran veut dire. */
export const Espacements: Story = {
  render: () => (
    <Frame>
      <Card>
        <Caption>Échelle</Caption>
        <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space12 }}>
          {SPACES.map((s) => (
            <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: scale.space16 }}>
              <span style={{ ...typography.bodyMedium, minWidth: 80 }}>{s.name}</span>
              <span style={{ height: 16, width: s.v, background: semantic.primary, borderRadius: 2, flex: '0 0 auto' }} />
              <span style={{ ...typography.caption, color: semantic.textLighter, minWidth: 28 }}>{s.v}</span>
              <span>{s.use}</span>
            </div>
          ))}
        </div>
      </Card>
    </Frame>
  ),
};

/** Le rythme vertical : l'espace dit le groupement avant toute bordure. */
export const RythmeVertical: Story = {
  render: () => (
    <Frame>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: scale.space24 }}>
        <Card>
          <Caption>À faire — espaces contrastés</Caption>
          <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space24 }}>
            {['Section A', 'Section B'].map((s) => (
              <div key={s} style={{ display: 'flex', flexDirection: 'column', gap: scale.space4 }}>
                <span style={{ ...typography.bodyMedium, color: semantic.textDarker }}>{s}</span>
                <span style={{ color: semantic.textLighter }}>Sa description, collée à son titre.</span>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <Caption>À éviter — espace uniforme</Caption>
          <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space12 }}>
            {['Section A', 'Section B'].map((s) => (
              <div key={s} style={{ display: 'flex', flexDirection: 'column', gap: scale.space12 }}>
                <span style={{ ...typography.bodyMedium, color: semantic.textDarker }}>{s}</span>
                <span style={{ color: semantic.textLighter }}>Rien ne dit ce qui va avec quoi.</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Frame>
  ),
};

/* -------------------------------------------------------------- typographie */

const TYPE: Array<{ name: string; style: React.CSSProperties; use: string }> = [
  { name: 'Headline · 24/28 Medium', style: typography.headline, use: 'Valeur d’un Counter. Un seul par carte.' },
  { name: 'Headline 3 · 20/24 Medium', style: typography.headline3, use: 'Titre de section dans une page' },
  { name: 'Headline 4 · 16/24 Medium', style: typography.headline4, use: 'Titre de ressource, titre d’overlay, état vide' },
  { name: 'Body Large · 14/22 Book', style: typography.bodyLarge, use: 'Onglet, lien isolé' },
  { name: 'Body · 12/20 Book', style: typography.body, use: 'Corps de texte. Le défaut de l’interface.' },
  { name: 'Body Medium · 12/20 Medium', style: typography.bodyMedium, use: 'Libellé de bouton, intitulé de champ' },
  { name: 'Caption · 10/14 Book', style: typography.caption, use: 'Métadonnée, légende' },
  { name: 'Caption Medium · 10/14 Medium', style: typography.captionMedium, use: 'Micro-libellé en capitales, bouton dense' },
];

/** Neuf styles, pas un de plus. Une taille absente de la liste est une dérive. */
export const Typographie: Story = {
  render: () => (
    <Frame>
      <Card>
        <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space16 }}>
          {TYPE.map((t) => (
            <div key={t.name} style={{ display: 'flex', alignItems: 'baseline', gap: scale.space24 }}>
              <span style={{ ...t.style, color: semantic.textDarker, minWidth: 320 }}>Aa — {t.name.split(' · ')[0]}</span>
              <span style={{ ...typography.caption, color: semantic.textLighter, minWidth: 150 }}>
                {t.name.split(' · ')[1]}
              </span>
              <span>{t.use}</span>
            </div>
          ))}
        </div>
      </Card>
    </Frame>
  ),
};

/** La hiérarchie se fait par la graisse et la couleur, pas par la taille seule. */
export const HierarchieDeTexte: Story = {
  render: () => (
    <Frame>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: scale.space24 }}>
        <Card>
          <Caption>À faire</Caption>
          <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space4 }}>
            <span style={{ ...typography.bodyMedium, color: semantic.textDarker }}>Number of segments</span>
            <span style={{ ...typography.headline, color: semantic.textDarker }}>1 284</span>
            <span style={{ ...typography.caption, color: semantic.textLighter }}>Sur les 30 derniers jours</span>
          </div>
        </Card>
        <Card>
          <Caption>À éviter</Caption>
          <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space4 }}>
            <span style={{ ...typography.body, color: semantic.textNormal }}>Number of segments</span>
            <span style={{ ...typography.body, color: semantic.textNormal }}>1 284</span>
            <span style={{ ...typography.body, color: semantic.textNormal }}>Sur les 30 derniers jours</span>
          </div>
          <p style={{ color: semantic.textLighter, marginTop: scale.space12 }}>
            Trois lignes de même poids : l’œil doit tout lire pour trouver le chiffre.
          </p>
        </Card>
      </div>
    </Frame>
  ),
};

/* -------------------------------------------------------------------- effets */

/** Deux élévations et quatre rayons. Rien d'autre ne flotte, rien d'autre n'est arrondi. */
export const Effets: Story = {
  render: () => (
    <Frame>
      <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space24 }}>
        <Card>
          <Caption>Élévation</Caption>
          <div style={{ display: 'flex', gap: scale.space24, paddingBlock: scale.space16 }}>
            {[
              { name: 'aucune', shadow: 'none', use: 'Carte, tableau, barre : dans le flux' },
              { name: 'elevation.panel', shadow: elevation.panel, use: 'Menu, dropdown, popover' },
              { name: 'elevation.overlay', shadow: elevation.overlay, use: 'Modale, drawer' },
            ].map((e) => (
              <div key={e.name} style={{ flex: 1 }}>
                <div
                  style={{
                    height: 72,
                    background: semantic.bgContainer,
                    borderRadius: scale.radiusCard,
                    boxShadow: e.shadow,
                    border: e.shadow === 'none' ? `1px solid ${semantic.borderInput}` : undefined,
                    marginBottom: scale.space8,
                  }}
                />
                <div style={{ ...typography.bodyMedium }}>{e.name}</div>
                <div style={{ ...typography.caption, color: semantic.textLighter }}>{e.use}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <Caption>Rayons</Caption>
          <div style={{ display: 'flex', gap: scale.space24, paddingBlock: scale.space16 }}>
            {[
              { name: 'radius/sm · 2', v: scale.radiusSm, use: 'Case à cocher' },
              { name: 'radius/base · 3', v: scale.radiusBase, use: 'Bouton, champ, tag, bouton de page' },
              { name: 'radius/card · 6', v: scale.radiusCard, use: 'Carte, panneau, overlay, badge' },
              { name: 'pleine hauteur', v: 999, use: 'Pastille ronde d’un onglet' },
            ].map((r) => (
              <div key={r.name} style={{ flex: 1 }}>
                <div
                  style={{
                    height: 56,
                    background: semantic.bgWindow,
                    border: `1px solid ${semantic.borderInput}`,
                    borderRadius: r.v,
                    marginBottom: scale.space8,
                  }}
                />
                <div style={{ ...typography.bodyMedium }}>{r.name}</div>
                <div style={{ ...typography.caption, color: semantic.textLighter }}>{r.use}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <Caption>Bordures</Caption>
          <div style={{ display: 'flex', gap: scale.space24, paddingBlock: scale.space8 }}>
            {[
              { name: 'border/input', v: semantic.borderInput, use: 'Contour d’un contrôle, séparateur de liste' },
              { name: 'border/default', v: semantic.borderDefault, use: 'Séparateur de structure : lignes de tableau, pied d’overlay' },
            ].map((b) => (
              <div key={b.name} style={{ flex: 1 }}>
                <div style={{ height: 40, border: `1px solid ${b.v}`, borderRadius: scale.radiusBase, marginBottom: scale.space8 }} />
                <div style={{ ...typography.bodyMedium }}>{b.name}</div>
                <div style={{ ...typography.caption, color: semantic.textLighter }}>{b.use}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Frame>
  ),
};
