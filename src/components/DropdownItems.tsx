import { useState, type ReactNode } from 'react';
import { Button, Checkbox } from 'antd';
import { Icon } from './Icon';
import { scale, semantic } from '../theme/micsTheme';

/**
 * Les briques qui se composent DANS le slot d'un DropdownPanel (Figma, doc 153:194).
 * Un menu ne s'improvise pas avec des div : il empile ces items. Un type d'items
 * cohérent par groupe — Checkbox = multi-sélection, Option = sélection unique.
 */

/**
 * Survol commun à toutes les rangées : fond bg/hover.
 * Ajouté par rapport à la maquette, qui ne décrit que Default et Actif / Sélectionné.
 * Sans retour au survol, rien ne distingue une rangée cliquable d'une ligne de texte
 * tant qu'on n'a pas cliqué.
 */
function useRowHover() {
  const [hover, setHover] = useState(false);
  return {
    hover,
    handlers: { onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false) },
  };
}

const rowBase: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  border: 0,
  background: 'transparent',
  font: 'inherit',
  textAlign: 'left',
  cursor: 'pointer',
  padding: `6px ${scale.space16}px`,
};

/**
 * Dropdown / Nav Item (Figma 142:71) — catégorie d'un filtre en cascade.
 * Active = texte et icône en primary sur fond bg/window. Une seule à la fois.
 * Le compteur remplace la pastille verte de la production : il dit combien de
 * valeurs sont cochées, là où la pastille disait seulement « il y en a ».
 */
export function DropdownNavItem({
  icon,
  label,
  count = 0,
  active = false,
  onActivate,
}: {
  icon: string;
  label: string;
  count?: number;
  active?: boolean;
  onActivate?: () => void;
}) {
  const { hover, handlers } = useRowHover();
  return (
    <div
      role="menuitem"
      tabIndex={0}
      aria-haspopup="true"
      aria-expanded={active}
      {...handlers}
      onMouseEnter={() => {
        handlers.onMouseEnter();
        onActivate?.();
      }}
      onFocus={onActivate}
      onClick={onActivate}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowLeft') {
          e.preventDefault();
          onActivate?.();
        }
      }}
      style={{
        ...rowBase,
        gap: scale.space12,
        background: active ? semantic.bgWindow : hover ? semantic.bgHover : 'transparent',
        color: active ? semantic.primary : semantic.textNormal,
      }}
    >
      <Icon name={icon} size={18} />
      <span style={{ flex: 1 }}>{label}</span>
      {count > 0 && (
        <span style={{ color: semantic.primary, fontWeight: 500 }}>
          {count}
          <span style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
            {' '}
            valeurs sélectionnées
          </span>
        </span>
      )}
    </div>
  );
}

/**
 * Dropdown / Checkbox Item (Figma 143:76) — multi-sélection.
 * Pas de <label> autour de la rangée : le Checkbox d'AntD rend déjà le sien, et
 * deux labels imbriqués avalent le clic.
 */
export function DropdownCheckboxItem({
  checked,
  icon,
  label,
  onToggle,
}: {
  checked: boolean;
  icon?: string;
  label: string;
  onToggle: () => void;
}) {
  const { hover, handlers } = useRowHover();
  return (
    <div
      role="menuitemcheckbox"
      aria-checked={checked}
      tabIndex={0}
      {...handlers}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          onToggle();
        }
      }}
      style={{ ...rowBase, gap: scale.space12, background: hover ? semantic.bgHover : 'transparent' }}
    >
      <Checkbox checked={checked} />
      {icon && <Icon name={icon} size={18} color={semantic.textLighter} />}
      <span style={{ flex: 1 }}>{label}</span>
    </div>
  );
}

/**
 * Dropdown / Option Item (Figma 142:76) — sélection unique, libellé seul.
 * Sélectionné = texte primary sur fond bg/window.
 *
 * Le rôle suit le CONTEXTE, pas l'apparence : `menuitemradio` dans un menu ouvert
 * depuis un bouton, `option` dans la liste attachée à un champ de saisie
 * (combobox). Même rangée, deux sémantiques, aucune raison d'en dessiner deux.
 */
export function DropdownOptionItem({
  selected,
  label,
  onSelect,
  role = 'menuitemradio',
  id,
  active = false,
}: {
  selected: boolean;
  label: string;
  onSelect: () => void;
  role?: 'menuitemradio' | 'option';
  /** Nécessaire en combobox : c'est la cible d'`aria-activedescendant`. */
  id?: string;
  /** Rangée parcourue au clavier, sans être sélectionnée pour autant. */
  active?: boolean;
}) {
  const { hover, handlers } = useRowHover();
  const isOption = role === 'option';
  return (
    <div
      id={id}
      role={role}
      aria-checked={isOption ? undefined : selected}
      aria-selected={isOption ? selected : undefined}
      // En combobox le focus reste dans le champ : la rangée sort de l'ordre de
      // tabulation, elle est atteinte aux flèches via aria-activedescendant.
      tabIndex={isOption ? -1 : 0}
      {...handlers}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          onSelect();
        }
      }}
      style={{
        ...rowBase,
        background: selected ? semantic.bgWindow : hover || active ? semantic.bgHover : 'transparent',
        color: selected ? semantic.primary : semantic.textNormal,
      }}
    >
      {label}
    </div>
  );
}

/**
 * Entrée d'ACTION d'un menu : icône + libellé, elle déclenche quelque chose.
 * À ne pas confondre avec le Nav Item, qui ouvre une sous-liste, ni avec l'Option
 * Item, qui sélectionne une valeur. Trois besoins, trois entrées.
 *
 * `tone="danger"` pour une action destructive : libellé et icône en `error`. La
 * couleur ne suffit pas à prévenir — c'est la confirmation qui protège — mais elle
 * évite le clic distrait sur une entrée voisine.
 */
export function DropdownActionItem({
  icon,
  label,
  onSelect,
  tone = 'default',
}: {
  icon: string;
  label: string;
  onSelect: () => void;
  tone?: 'default' | 'danger';
}) {
  const { hover, handlers } = useRowHover();
  const color = tone === 'danger' ? semantic.error : semantic.textNormal;
  return (
    <div
      role="menuitem"
      tabIndex={0}
      {...handlers}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect();
        }
      }}
      style={{
        ...rowBase,
        gap: scale.space12,
        background: hover ? semantic.bgHover : 'transparent',
        color,
      }}
    >
      <Icon name={icon} size={16} />
      <span>{label}</span>
    </div>
  );
}

/**
 * Dropdown / Label Item (Figma 143:77) — étiquette de la liste des labels.
 * Cliquer ajoute le label aux valeurs sélectionnées (chips fermables au-dessus).
 */
export function DropdownLabelItem({ label, onSelect }: { label: string; onSelect?: () => void }) {
  const { hover, handlers } = useRowHover();
  return (
    <div
      role="menuitem"
      tabIndex={0}
      {...handlers}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          onSelect?.();
        }
      }}
      style={{
        ...rowBase,
        gap: scale.space8,
        padding: `${scale.space4}px ${scale.space24}px`,
        background: hover ? semantic.bgHover : 'transparent',
      }}
    >
      <Icon name="tag" size={18} color={semantic.textLighter} />
      <span>{label}</span>
    </div>
  );
}

/**
 * Dropdown / Clear (Figma 193:2804) — pied de menu, toujours en dernier.
 * Le bloc lui-même n'a plus d'état : c'est le Button Type=Link qu'il contient qui
 * porte le survol. Deux compositions : « clear » (un seul bouton centré, taille L)
 * et « reset-ok » (lien Reset à gauche, OK primary à droite, taille M).
 */
export function DropdownFooter({
  label,
  onClick,
  disabled,
  onOk,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  /** Présent = composition « Reset + OK » : fond blanc, actions réparties. */
  onOk?: () => void;
}) {
  const isResetOk = Boolean(onOk);
  return (
    <div
      style={{
        height: scale.sizeRow,
        flex: '0 0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: isResetOk ? 'space-between' : 'center',
        gap: scale.space8,
        padding: `${scale.space12}px ${scale.space16}px`,
        borderTop: `1px solid ${semantic.borderInput}`,
        background: isResetOk ? semantic.bgContainer : semantic.bgWindow,
      }}
    >
      <Button
        type="link"
        size={isResetOk ? 'small' : 'middle'}
        disabled={disabled}
        onClick={onClick}
        icon={isResetOk ? undefined : <Icon name="broom" size={12} />}
      >
        {label}
      </Button>
      {onOk && (
        <Button type="primary" size="small" onClick={onOk}>
          OK
        </Button>
      )}
    </div>
  );
}

/** Séparateur horizontal entre deux groupes d'items. */
export function DropdownDivider({ inset = 0 }: { inset?: number }) {
  return (
    <div
      role="separator"
      style={{ height: 1, background: semantic.borderInput, marginBlock: scale.space8, marginInline: inset }}
    />
  );
}

/** Groupe d'items sous un intitulé de section. */
export function DropdownGroup({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <div style={{ paddingBlock: scale.space8 }} role="group" aria-label={title}>
      {title && (
        <div
          style={{
            padding: `0 ${scale.space16}px ${scale.space4}px`,
            color: semantic.textLighter,
            fontSize: 10,
            letterSpacing: scale.trackingCaps,
            textTransform: 'uppercase',
          }}
        >
          {title}
        </div>
      )}
      {children}
    </div>
  );
}
