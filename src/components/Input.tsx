import { Input as AntInput } from 'antd';
import { Field, type FieldProps } from './Field';
import { Icon } from './Icon';
import { semantic } from '../theme/micsTheme';

interface Props extends FieldProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** Illustre le format attendu (« ex. jean@acme.com »), jamais une consigne. */
  placeholder?: string;
  /** Icône à gauche du texte. Réservée aux patterns de recherche (prefix AntD). */
  leftIcon?: string;
  /** Icône à droite, cohérente avec la donnée saisie. Jamais décorative. */
  rightIcon?: string;
  type?: 'text' | 'search' | 'email' | 'url' | 'password';
  autoComplete?: string;
  /**
   * Nom accessible, pour les champs sans `label` visible — une recherche dans un
   * panneau, par exemple. Un placeholder ne remplace pas un intitulé : il n'est
   * plus lisible dès la première frappe (RGAA 11.1).
   */
  'aria-label'?: string;
}

/**
 * Input (Figma 14:16) — catégorie ENVELOPPE.
 * Ant Design rend le champ ; le DS ajoute l'enveloppe label + message et impose
 * l'anatomie : hauteur 32, padding horizontal 7, radius/base, bordure border/input.
 * Les états passent par la bordure — Hover et Focus en primary (halo 2 px en Focus),
 * Error en error, Disabled sur fond bg/window.
 */
export function Input({
  label,
  message,
  state,
  required,
  width,
  value,
  defaultValue,
  onChange,
  placeholder,
  leftIcon,
  rightIcon,
  type = 'text',
  autoComplete,
  'aria-label': ariaLabel,
}: Props) {
  return (
    <Field label={label} message={message} state={state} required={required} width={width}>
      {(control) => (
        <AntInput
          id={control.id}
          // Le label visible prime : le doubler d'un aria-label le remplacerait
          // dans l'annonce, et on n'entendrait plus ce qui est affiché.
          aria-label={label ? undefined : ariaLabel}
          aria-describedby={control['aria-describedby']}
          aria-invalid={control['aria-invalid']}
          required={control.required}
          disabled={control.disabled}
          status={control.status}
          type={type}
          autoComplete={autoComplete}
          value={value}
          defaultValue={defaultValue}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder}
          prefix={leftIcon ? <Icon name={leftIcon} size={14} color={semantic.textLighter} /> : undefined}
          suffix={rightIcon ? <Icon name={rightIcon} size={14} color={semantic.textLighter} /> : undefined}
        />
      )}
    </Field>
  );
}
