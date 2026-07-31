/**
 * Surface publique du design system.
 * Les écrans (`src/pages/`) importent UNIQUEMENT depuis ce fichier, jamais `antd`.
 * C'est ce qui permet de remplacer l'implémentation d'un composant (thème AntD →
 * enveloppe → composant maison) sans toucher une seule page.
 *
 * Trois catégories, voir ARCHITECTURE.md :
 *  - THÉMÉ    : AntD ré-exporté tel quel, habillé par les tokens du ConfigProvider
 *  - ENVELOPPÉ: composant maison qui rend l'AntD en dessous avec l'API du DS
 *  - CONSTRUIT: composant maison, AntD n'a pas d'équivalent
 */

// --- THÉMÉS -----------------------------------------------------------------
// Règle : un besoin = UNE entrée. Un composant AntD dont le DS a sa propre version
// (Badge → CountBadge, Tag → Tag, Empty → EmptyState) n'est PAS réexporté ici :
// deux portes d'entrée pour le même besoin, et les écrans finissent par diverger.
export { Button, Checkbox, Radio, Table, DatePicker, Tooltip, Steps } from 'antd';
export type { TableColumnsType } from 'antd';

// --- ENVELOPPÉS -------------------------------------------------------------
export { Tag } from './components/Tag';
export { Field } from './components/Field';
export type { FieldProps, FieldState } from './components/Field';
export { Input } from './components/Input';
export { Select } from './components/Select';
export type { SelectOption } from './components/Select';
export { Switch } from './components/Switch';
export { Pagination } from './components/Pagination';
export type { TagColor } from './components/Tag';
export { EmptyState } from './components/EmptyState';

// --- CONSTRUITS -------------------------------------------------------------
export { Card } from './components/Card';
export { Icon } from './components/Icon';
export { IconButton } from './components/IconButton';
export { Link } from './components/Link';
export { CountBadge } from './components/CountBadge';
export { StatusBadge } from './components/StatusBadge';
export type { StatusTone } from './components/StatusBadge';
export { DropdownPanel, panelSurface } from './components/DropdownPanel';
export {
  DropdownNavItem,
  DropdownCheckboxItem,
  DropdownOptionItem,
  DropdownActionItem,
  DropdownLabelItem,
  DropdownFooter,
  DropdownDivider,
  DropdownGroup,
} from './components/DropdownItems';
export { Toolbar, ToolbarSearch } from './components/Toolbar';
export { Counter } from './components/Counter';
export { ResourceTitleHeader } from './components/ResourceTitleHeader';
export { LabelPicker } from './components/LabelPicker';
export type { ResourceLabel } from './components/ResourceTitleHeader';
export { AppLauncher } from './components/AppLauncher';
export { SectionToggle } from './components/SectionToggle';
export { SegmentHeader } from './components/SegmentHeader';
export type { SegmentMetric } from './components/SegmentHeader';
export { Tab, TabBar, TabPanel } from './components/Tabs';
export type { TabItem } from './components/Tabs';
export { Breadcrumb } from './components/Breadcrumb';
export { Overlay, OverlayHeader, OverlayFooter } from './components/Overlay';
export type { OverlayHeaderTheme } from './components/Overlay';
export type { LauncherApp } from './components/AppLauncher';
export { ActiveFilterBar } from './components/ActiveFilterBar';
export type { ActiveFilter } from './components/ActiveFilterBar';
export { FilterPanel } from './components/FilterPanel';
export { SearchPalette } from './components/SearchPalette';
export { AppShell } from './components/AppShell';
export type { Crumb } from './components/Breadcrumb';
export { TopBar, SideMenu } from './components/Shell';
export { SideMenuItem } from './components/SideMenuItem';

// --- TEMPLATES --------------------------------------------------------------
// Coques d'écran : elles fixent l'ordre des blocs et les espacements, jamais le
// contenu. Une page les remplit, elle ne les recompose pas.
export { ListTemplate } from './templates/ListTemplate';

// --- TOKENS -----------------------------------------------------------------
export { micsTheme, primitives, semantic, scale, elevation, typography } from './theme/micsTheme';
