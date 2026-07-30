import { useId, type ReactNode } from 'react';
import { scale, semantic, typography } from '../theme/micsTheme';

export type FieldState = 'default' | 'error' | 'disabled';

export interface FieldProps {
  /** Libellé visible au-dessus du champ. Obligatoire, sauf pattern de recherche. */
  label?: string;
  /** Texte d'aide sous le champ. Remplacé par le message d'erreur en état error. */
  message?: string;
  state?: FieldState;
  /** Champ obligatoire : ajoute l'astérisque et l'attribut `required` du contrôle. */
  required?: boolean;
  /** Largeur du champ. Identique dans tout un formulaire, 600 au maximum. */
  width?: number | string;
}

/**
 * Enveloppe de champ : label + contrôle + message (Figma Input 14:16, Select 14:30).
 *
 * En production, label et message sont portés par le FormItem d'Ant Design, pas par
 * le champ. La maquette les intègre au composant ; cette enveloppe fait de même, et
 * c'est elle qui garantit que le label est un vrai <label for> et que le message est
 * relié au contrôle par aria-describedby.
 *
 * Elle prend une fonction en enfant pour transmettre au contrôle les identifiants et
 * les attributs ARIA calculés — un champ ne les recompose jamais lui-même.
 */
export function Field({
  label,
  message,
  state = 'default',
  required,
  width,
  children,
}: FieldProps & {
  children: (control: {
    id: string;
    'aria-describedby': string | undefined;
    'aria-invalid': true | undefined;
    disabled: boolean;
    required: boolean | undefined;
    status: 'error' | undefined;
  }) => ReactNode;
}) {
  const id = useId();
  const messageId = `${id}-message`;
  const isError = state === 'error';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space4, width }}>
      {label && (
        <label htmlFor={id} style={{ ...typography.bodyMedium, color: semantic.textDarker }}>
          {label}
          {required && (
            <span aria-hidden style={{ color: semantic.error, marginInlineStart: 2 }}>
              *
            </span>
          )}
        </label>
      )}

      {children({
        id,
        'aria-describedby': message ? messageId : undefined,
        'aria-invalid': isError || undefined,
        disabled: state === 'disabled',
        required: required || undefined,
        status: isError ? 'error' : undefined,
      })}

      {message && (
        <span
          id={messageId}
          // L'erreur est annoncée dès qu'elle apparaît ; l'aide, non : elle est
          // déjà rattachée au champ par aria-describedby.
          role={isError ? 'alert' : undefined}
          style={{ ...typography.body, color: isError ? semantic.error : semantic.textLighter }}
        >
          {message}
        </span>
      )}
    </div>
  );
}
