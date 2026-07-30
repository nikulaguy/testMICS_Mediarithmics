import { useId, useState, type ReactNode } from 'react';
import { Icon } from './Icon';
import { scale, semantic, typography } from '../theme/micsTheme';

interface Props {
  /** Court : « Advanced », « Options ». C'est un intitulé, pas une phrase. */
  label: string;
  children: ReactNode;
  defaultExpanded?: boolean;
  disabled?: boolean;
}

/**
 * Section Toggle (Figma 111:39) — catégorie CONSTRUIT.
 * En-tête cliquable d'une section repliable de formulaire (« Advanced »).
 * Icône settings + libellé + chevron, le tout en primary.
 *
 * Réservé aux champs OPTIONNELS. Un champ obligatoire ne se replie jamais : replier
 * ce qui doit être rempli garantit qu'il sera oublié. Un seul par groupe de champs.
 *
 * Unifie les deux implémentations de production, un Button custom
 * (`optional-section-title`) et un Collapse.Panel d'Ant Design, présentes dans plus
 * de dix formulaires.
 */
export function SectionToggle({ label, children, defaultExpanded = false, disabled }: Props) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const id = useId();
  const panelId = `${id}-panel`;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space16 }}>
      <button
        type="button"
        aria-expanded={expanded}
        aria-controls={panelId}
        disabled={disabled}
        onClick={() => setExpanded((v) => !v)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: scale.space8,
          alignSelf: 'flex-start',
          height: 24,
          background: 'transparent',
          border: 0,
          padding: 0,
          font: 'inherit',
          ...typography.bodyMedium,
          color: disabled ? semantic.textLightest : semantic.primary,
          cursor: disabled ? 'not-allowed' : 'pointer',
        }}
      >
        <Icon name="settings" size={16} />
        {label}
        {/* Le chevron double l'état annoncé par aria-expanded : ▶ replié, ▼ déplié. */}
        <Icon name={expanded ? 'chevron-bottom' : 'chevron-right'} size={12} />
      </button>

      <div id={panelId} hidden={!expanded}>
        {expanded && children}
      </div>
    </div>
  );
}
