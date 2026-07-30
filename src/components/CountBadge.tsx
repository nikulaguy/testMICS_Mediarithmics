import { semantic } from '../theme/micsTheme';

type Tone = 'info' | 'warning' | 'success';

const TONE: Record<Tone, string> = {
  info: semantic.info,
  warning: semantic.warning,
  success: semantic.success,
};

/**
 * Badge Type=Count (Figma 15:38) — catégorie CONSTRUIT.
 * Pastille de comptage : 20 de haut, radius 6, chiffre en text/on-dark.
 * La couleur porte le sens : info pour un état (nombre de filtres actifs),
 * warning pour des éléments à traiter, success pour « rien à traiter ».
 * Jamais la pastille seule : elle accompagne toujours un libellé lisible.
 */
export function CountBadge({ count, tone = 'info' }: { count: number; tone?: Tone }) {
  return (
    <span
      style={{
        minWidth: 20,
        height: 20,
        paddingInline: 6,
        borderRadius: 6,
        background: TONE[tone],
        color: semantic.textOnDark,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 12,
        lineHeight: '20px',
        flex: '0 0 auto',
      }}
    >
      {count}
    </span>
  );
}
