import { useId } from 'react';
import { Switch as AntSwitch } from 'antd';
import { scale, semantic, typography } from '../theme/micsTheme';

interface Props {
  checked: boolean;
  onChange: (checked: boolean) => void;
  /**
   * Décrit l'état ACTIVÉ et ne se retourne pas : « Recevoir les alertes », jamais
   * « Ne pas recevoir les alertes ». Obligatoire — un interrupteur nu n'a pas de nom.
   */
  label: string;
  /** Précision sous le libellé : conséquence, portée, délai d'application. */
  description?: string;
  disabled?: boolean;
  loading?: boolean;
}

/**
 * Switch (Figma 14:67) — catégorie ENVELOPPE.
 * Ant Design rend l'interrupteur (piste 44×22, knob 18) ; le DS ajoute le libellé et
 * la description, que la production gère aujourd'hui hors du composant.
 *
 * Un switch a un EFFET IMMÉDIAT : il n'attend pas de bouton « Enregistrer ». Si le
 * choix doit être soumis avec le reste d'un formulaire, c'est une Checkbox.
 */
export function Switch({ checked, onChange, label, description, disabled, loading }: Props) {
  const id = useId();
  const descriptionId = description ? `${id}-description` : undefined;

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: scale.space12 }}>
      <AntSwitch
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        loading={loading}
        aria-describedby={descriptionId}
        style={{ marginTop: 1, flex: '0 0 auto' }}
      />
      <label htmlFor={id} style={{ display: 'flex', flexDirection: 'column', gap: 2, cursor: disabled ? 'not-allowed' : 'pointer' }}>
        <span style={{ ...typography.body, color: disabled ? semantic.textLightest : semantic.textNormal }}>
          {label}
        </span>
        {description && (
          <span id={descriptionId} style={{ ...typography.caption, color: semantic.textLighter }}>
            {description}
          </span>
        )}
      </label>
    </div>
  );
}
