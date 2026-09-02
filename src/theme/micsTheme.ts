import type { ThemeConfig } from 'antd';

/**
 * Thème MICS, aligné sur frontend/libs/advanced/src/theme/themes/defaultTheme.ts
 * du repo client, complété par les arbitrages du DS (ticket « Tokens de couleurs »
 * de la page Audit) : colorLink explicite, borderRadiusLG 6, controlHeight 32.
 *
 * Les primitives vivent ici et nulle part ailleurs : aucun composant n'écrit un hex.
 */
export const primitives = {
  blueMain: '#00a1df',
  blue900: '#003056',
  blue950: '#002c4f',
  blue700: '#005e91',
  blue300: '#6ed5f7',
  blue200: '#c5efff',
  blue100: '#e8f7fc',
  green100: '#d3ebdd',
  green300: '#64d19b',
  green700: '#005e3f',
  orange100: '#fff5e6',
  orange300: '#ffcb8c',
  orange700: '#b04300',
  purple100: '#f5f0ff',
  purple300: '#beaeeb',
  purple700: '#20195e',
  red100: '#fff2f0',
  red300: '#ffbab5',
  red700: '#9e2e35',
  greenMain: '#00ab67',
  orangeMain: '#fd7c12',
  redVivid: '#fc3f48',
  purpleMain: '#513fab',
  /** Sixième couleur de série des graphiques, relevée sur le graphique Stats. */
  brown700: '#862f2f',
  redMain: '#eb5c5d',
  neutral400: '#d9d9d9',
  grey100: '#f5f8f9',
  grey200: '#f0f3f5',
  grey250: '#ebeff2',
  grey300: '#e0e1e1',
  grey400: '#d3dbe1',
  white: '#ffffff',
  black78: 'rgba(0, 0, 0, 0.78)',
  black65: 'rgba(0, 0, 0, 0.65)',
  black43: 'rgba(0, 0, 0, 0.43)',
  black25: 'rgba(0, 0, 0, 0.25)',
} as const;

/** Sémantiques : uniquement des alias de primitives. */
export const semantic = {
  primary: primitives.blueMain,
  info: primitives.blue900,
  success: primitives.greenMain,
  warning: primitives.orangeMain,
  error: primitives.redVivid,
  textDarker: primitives.black78,
  textNormal: primitives.black65,
  textLighter: primitives.black43,
  textLightest: primitives.black25,
  textOnDark: primitives.white,
  linkDefault: primitives.blue900,
  linkHover: primitives.blue700,
  linkOnDark: primitives.blue200,
  textOnDarkDisabled: 'rgba(255, 255, 255, 0.25)',
  bgContainer: primitives.white,
  bgWindow: primitives.grey200,
  bgSubtle: primitives.grey100,
  bgHover: primitives.grey250,
  bgSelected: primitives.blue100,
  bgTooltip: primitives.blue950,
  bgScrim: 'rgba(0, 0, 0, 0.45)',
  /** Champ de recherche posé sur la TopBar primary. */
  searchFieldBg: 'rgba(255, 255, 255, 0.18)',
  searchFieldText: 'rgba(255, 255, 255, 0.75)',
  borderDefault: primitives.grey400,
  borderInput: primitives.grey300,
} as const;

/**
 * Élévation. Deux niveaux, pas un de plus : une surface flotte au-dessus de la page
 * (panneau) ou au-dessus de tout (overlay). Valeurs alignées sur les styles d'effet
 * du fichier Figma (Dropdown, Drawer).
 */
export const elevation = {
  /** Panneau ancré : menu, dropdown, popover. Figma « Dropdown ». */
  panel: '0 1px 6px rgba(0, 0, 0, 0.2)',
  /** Surface superposée : modale, drawer. Figma « Drawer ». */
  overlay: '0 0 10px rgba(0, 0, 0, 0.2), 0 0 24px rgba(0, 0, 0, 0.14), 0 0 30px rgba(0, 0, 0, 0.12)',
} as const;

/**
 * Échelle typographique. Une taille n'existe que si elle est ici : 11, 13 ou 15 px
 * sont des dérives, pas des nuances. Les noms sont ceux des styles de texte Figma.
 */
export const typography = {
  headline: { fontSize: 24, lineHeight: '28px', fontWeight: 500 },
  headline3: { fontSize: 20, lineHeight: '24px', fontWeight: 500 },
  headline4: { fontSize: 16, lineHeight: '24px', fontWeight: 500 },
  bodyLarge: { fontSize: 14, lineHeight: '22px', fontWeight: 400 },
  bodyLargeMedium: { fontSize: 14, lineHeight: '22px', fontWeight: 500 },
  body: { fontSize: 12, lineHeight: '20px', fontWeight: 400 },
  bodyMedium: { fontSize: 12, lineHeight: '20px', fontWeight: 500 },
  caption: { fontSize: 10, lineHeight: '14px', fontWeight: 400 },
  captionMedium: { fontSize: 10, lineHeight: '14px', fontWeight: 500 },
} as const;

export const scale = {
  /** Padding vertical du Tag. La plus petite valeur de l'échelle. */
  space2: 2,
  space4: 4,
  /** Gap d'une pastille à son libellé — StatusBadge, Counter. */
  space6: 6,
  space8: 8,
  space10: 10,
  space12: 12,
  /** Padding et gap de la Card, relevés sur la classe `mcs-card` de la production. */
  space15: 15,
  space16: 16,
  space20: 20,
  space24: 24,
  space35: 35,
  /** Padding horizontal d'un champ Ant Design. Valeur héritée, hors échelle. */
  spaceInputPadH: 7,
  radiusBase: 3,
  radiusSm: 2,
  radiusCard: 6,
  sizeControl: 32,
  /**
   * Taille M des contrôles. AntD la dérive de `controlHeight` (32 × 0,75) ; on la
   * déclare pour que le rendu ne dépende plus d'un calcul interne de la librairie.
   * Mesurée à 24 dans le DOM, la maquette annonçait 25 à tort.
   */
  sizeControlSm: 24,
  sizeHeader: 40,
  sizeRow: 44,
  /** Hauteur du Tag. Relevée sur le composant Figma, qui fait 26 et non 24. */
  sizeTag: 26,
  /** Côté de la pastille de comptage (CountBadge). */
  sizeBadge: 20,
  /** Icône courante dans un bouton ou une rangée. */
  sizeIcon: 14,
  /** Icône d'un item de menu ou d'une rangée de dropdown. */
  sizeIconLg: 16,
  /**
   * Plus petite cible de pointage acceptable. Elle ne suit pas la taille du
   * glyphe : la croix du Tag fait 8, sa cible fait 20 — un calque transparent
   * hors flux les découple.
   */
  sizeTargetMin: 20,
  /** Épaisseur de filet, unique dans tout le produit. */
  borderWidth: 1,
  sideMenuWidth: 200,
  /**
   * Hauteur du bandeau d'en-tête d'un Overlay (drawer, modale). L'Actionbar ne
   * l'utilise plus : elle est en padding 12 / 35 (35 = marge de page) et sa
   * hauteur suit le contenu, comme la maquette.
   */
  actionBarHeight: 52,
  /** Interlettrage des micro-libellés en capitales. Une seule valeur. */
  trackingCaps: 0.4,
  /**
   * z-index : quatre paliers repris d'Ant Design, sauf `zModal`. La maquette et la
   * production le donnent à 1000 (`z/modal`, `@zindex-modal`), ce qui le place SOUS
   * les surfaces flottantes d'AntD — dropdown 1050, tooltip 1060 — rendues dans un
   * portail attaché au body : un panneau de filtres passerait par-dessus l'overlay
   * qui l'a ouvert. 1200 est un écart assumé du prototype, pas un oubli.
   */
  zDropdown: 1050,
  zPopover: 1030,
  zModal: 1200,
  zTooltip: 1060,
} as const;

const FONT_FAMILY =
  "Circular, LLCircularWeb-Book, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";

export const micsTheme: ThemeConfig = {
  token: {
    colorPrimary: semantic.primary,
    colorInfo: semantic.info,
    colorSuccess: semantic.success,
    colorWarning: semantic.warning,
    colorError: semantic.error,
    colorText: semantic.textNormal,
    colorTextSecondary: semantic.textLighter,
    colorTextDescription: semantic.textLighter,
    colorBgContainer: semantic.bgContainer,
    colorBgLayout: semantic.bgWindow,
    colorBorder: semantic.borderInput,
    colorBorderSecondary: semantic.borderDefault,
    colorLink: semantic.linkDefault,
    colorLinkHover: semantic.linkHover,
    // Sélection dans une liste : les valeurs du Dropdown / Option Item de la maquette.
    // Sélectionné = bg/window, survolé = bg/hover. Ce token gouverne le Select, le
    // menu Dropdown, le DatePicker, le Cascader et le TreeSelect d'un seul coup.
    controlItemBgActive: semantic.bgWindow,
    controlItemBgHover: semantic.bgHover,
    controlItemBgActiveHover: semantic.bgHover,
    fontFamily: FONT_FAMILY,
    fontSize: 12,
    lineHeight: 1.5,
    borderRadius: scale.radiusBase,
    borderRadiusLG: scale.radiusCard,
    controlHeight: scale.sizeControl,
    controlHeightSM: scale.sizeControlSm,
  },
  components: {
    Button: { fontSizeLG: 14, primaryShadow: '0 2px 0 rgba(0, 48, 86, 0.1)' },
    // Contrôles de formulaire : valeurs relevées dans la maquette (page Form Inputs).
    // Sans ces déclarations, ils tournaient sur les défauts d'AntD, qui coïncidaient
    // par chance — une mise à jour d'AntD aurait suffi à les faire diverger.
    Input: { paddingInline: 7, controlHeight: 32 },
    Select: { controlHeight: 32, optionSelectedColor: semantic.primary, optionSelectedFontWeight: 400 },
    Checkbox: { controlInteractiveSize: 16, borderRadiusSM: 2 },
    Radio: { radioSize: 16, dotSize: 8 },
    Switch: { trackHeight: 22, trackMinWidth: 44, handleSize: 18, colorTextQuaternary: semantic.textLightest },
    Table: {
      fontWeightStrong: 500,
      rowHoverBg: semantic.bgHover,
      borderColor: semantic.borderDefault,
      headerBg: semantic.bgContainer,
      headerColor: semantic.textLighter,
      cellPaddingBlock: 12,
    },
    Tooltip: { colorBgSpotlight: semantic.bgTooltip },
    Breadcrumb: {
      linkColor: semantic.linkDefault,
      linkHoverColor: semantic.linkHover,
      lastItemColor: semantic.textNormal,
      separatorColor: semantic.textLighter,
    },
    Tag: { defaultBg: semantic.bgSubtle, defaultColor: semantic.textNormal },
    Pagination: { borderRadius: scale.radiusBase },
    Dropdown: { borderRadiusLG: scale.radiusBase },
  },
};
