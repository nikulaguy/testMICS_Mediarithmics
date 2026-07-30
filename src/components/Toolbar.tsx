import type { ReactNode } from 'react';
import { Input } from 'antd';
import { Icon } from './Icon';
import { scale, semantic } from '../theme/micsTheme';

/**
 * Table / Toolbar (Figma 21:65) — barre d'outils d'un tableau.
 * Recherche à gauche, actions à droite, ordre stable d'un écran à l'autre.
 *
 * Ce qu'on y met : ce qui agit sur LE TABLEAU (recherche, filtres, Edit view,
 * actions de masse). Les actions de page (New …, Export, Edit) vont dans
 * l'ActionBar. Test : si l'action garde du sens quand le tableau est vide,
 * elle est de page.
 */
export function Toolbar({ search, actions }: { search?: ReactNode; actions?: ReactNode }) {
  return (
    <div
      role="toolbar"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: search ? 'space-between' : 'flex-end',
        gap: scale.space12,
      }}
    >
      {search}
      {actions && <div style={{ display: 'flex', alignItems: 'center', gap: scale.space12 }}>{actions}</div>}
    </div>
  );
}

/**
 * Champ de recherche de la Toolbar : le seul Input du DS sans label visible,
 * parce que la loupe et le placeholder suffisent à en dire la fonction.
 */
export function ToolbarSearch({
  value,
  onChange,
  placeholder = 'Search',
  width = 400,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  width?: number;
}) {
  return (
    <Input
      type="search"
      aria-label={placeholder}
      placeholder={placeholder}
      suffix={<Icon name="magnifier" size={14} color={semantic.textLighter} />}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ width }}
      allowClear
    />
  );
}
