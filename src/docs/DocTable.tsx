import type { ReactNode } from 'react';

/**
 * Tableau de documentation. MDX ne parse pas les tableaux markdown : toutes les
 * pages composant passent par ce composant pour garder une présentation unique.
 */
export function DocTable({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) {
  const cell: React.CSSProperties = {
    borderBottom: '1px solid rgba(38, 85, 115, 0.15)',
    padding: '10px 12px',
    textAlign: 'left',
    verticalAlign: 'top',
    fontSize: 12,
    lineHeight: 1.5,
  };
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '16px 0 24px' }}>
      <thead>
        <tr>
          {headers.map((h) => (
            <th key={h} style={{ ...cell, fontWeight: 600, whiteSpace: 'nowrap' }}>
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((c, j) => (
              <td key={j} style={cell}>
                {c}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
