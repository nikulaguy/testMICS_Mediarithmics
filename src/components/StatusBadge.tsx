import { semantic } from '../theme/micsTheme';

export type StatusTone = 'success' | 'processing' | 'warning' | 'error' | 'neutral';

const TONE: Record<StatusTone, string> = {
  success: semantic.success,
  processing: semantic.primary,
  warning: semantic.warning,
  error: semantic.error,
  neutral: semantic.textLightest,
};

/**
 * Badge Type=Dot | Success | Processing | Warning | Error (Figma 15:38) —
 * catégorie CONSTRUIT.
 *
 * L'autre moitié du composant `Badge` de la maquette : `CountBadge` en rend la
 * variante Count, celui-ci les variantes d'état. La séparation est côté code
 * seulement — un compteur et un état ne partagent ni forme, ni API, ni usage, et
 * les réunir sous une prop `type` obligerait chaque appel à ignorer la moitié des
 * props.
 *
 * La pastille ne porte JAMAIS le sens seule : le libellé est toujours rendu à côté
 * (RGAA 3.1). Sans libellé, un point vert et un point orange ne se distinguent pas
 * pour une part des utilisateurs, et pas du tout pour un lecteur d'écran.
 */
export function StatusBadge({ tone, label }: { tone: StatusTone; label: string }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
      <span
        aria-hidden
        style={{ width: 6, height: 6, borderRadius: '50%', background: TONE[tone], flex: '0 0 auto' }}
      />
      {label}
    </span>
  );
}
