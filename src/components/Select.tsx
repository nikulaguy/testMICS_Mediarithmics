import { Checkbox, Select as AntSelect } from 'antd';
import { Field, type FieldProps } from './Field';
import { Icon } from './Icon';
import { scale, semantic } from '../theme/micsTheme';

export interface SelectOption {
  value: string;
  label: string;
  /** Icône du set du DS, affichée avant le libellé. */
  icon?: string;
  disabled?: boolean;
}

interface Props extends FieldProps {
  options: SelectOption[];
  value?: string | string[];
  defaultValue?: string | string[];
  onChange?: (value: string & string[]) => void;
  /** Le choix attendu (« Sélectionner un datamart »), pas une consigne. */
  placeholder?: string;
  /** Sélection multiple : les valeurs choisies s'affichent en Tags retirables. */
  multiple?: boolean;
  allowClear?: boolean;
  loading?: boolean;
  /** Recherche dans les options. À activer au-delà d'une dizaine d'entrées. */
  showSearch?: boolean;
}

/**
 * Select (Figma 14:30) — catégorie ENVELOPPE.
 * Ant Design gère le panneau, le clavier et la recherche ; le DS ajoute l'enveloppe
 * label + message, le caret du set d'icônes officiel, et impose que le panneau
 * fasse la largeur du déclencheur.
 *
 * Même anatomie que l'Input : hauteur 32, radius/base, bordure border/input, états
 * portés par la bordure. Les deux champs doivent être indiscernables au repos.
 */
export function Select({
  label,
  message,
  state,
  required,
  width,
  options,
  value,
  defaultValue,
  onChange,
  placeholder,
  multiple,
  allowClear,
  loading,
  showSearch,
}: Props) {
  return (
    <Field label={label} message={message} state={state} required={required} width={width}>
      {(control) => (
        <AntSelect
          id={control.id}
          aria-describedby={control['aria-describedby']}
          aria-invalid={control['aria-invalid']}
          disabled={control.disabled}
          status={control.status}
          value={value as never}
          defaultValue={defaultValue as never}
          onChange={onChange as never}
          placeholder={placeholder}
          mode={multiple ? 'multiple' : undefined}
          allowClear={allowClear}
          loading={loading}
          showSearch={showSearch}
          optionFilterProp="label"
          style={{ width: '100%' }}
          // Le panneau fait la largeur du déclencheur : une liste plus large déborde
          // de la colonne du formulaire et se lit comme un élément détaché.
          popupMatchSelectWidth
          suffixIcon={<Icon name="chevron-bottom" size={10} color={semantic.textLighter} />}
          // Multi-sélection : la maquette utilise le Dropdown / Checkbox Item, case à
          // cocher à GAUCHE. La coche à droite d'AntD est remplacée par cette case.
          menuItemSelectedIcon={multiple ? null : undefined}
          optionRender={(option) => {
            const source = options.find((o) => o.value === option.value);
            return (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: scale.space12 }}>
                {multiple && <Checkbox checked={option.data?.selected} />}
                {source?.icon && <Icon name={source.icon} size={18} color={semantic.textLighter} />}
                {source?.label ?? String(option.label)}
              </span>
            );
          }}
          options={options.map((o) => ({
            value: o.value,
            label: o.label,
            disabled: o.disabled,
            selected: Array.isArray(value) ? value.includes(o.value) : value === o.value,
          }))}
        />
      )}
    </Field>
  );
}
