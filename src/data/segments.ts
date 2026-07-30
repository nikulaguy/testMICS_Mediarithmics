/** Fausses données en dur : aucune API, le test porte sur le front. */

export type SegmentType =
  | 'Automation'
  | 'Campaign'
  | 'Cohort lookalike'
  | 'EDGE'
  | 'Experiment group'
  | 'File import'
  | 'Partition'
  | 'Pixel'
  | 'Query';

export interface Segment {
  id: string;
  type: SegmentType;
  name: string;
  technicalName: string;
  creationDate: string;
  daysAgo: number;
  persisted: boolean;
  labels: string[];
  cleanRoom: string | null;
  userPoint: number;
  userAccounts: number;
  userProfiles: number;
  userDevicePoints: number;
  installationIds: number;
  vectorIds: number;
}

export const SEGMENTS: Segment[] = [
  { id: '18280553', type: 'Query', name: 'Segment name example', technicalName: 'georgia-pizza-winner-ack', creationDate: '20/07/2026', daysAgo: 8, persisted: true, labels: ['E commerce'], cleanRoom: null, userPoint: 5, userAccounts: 36, userProfiles: 28, userDevicePoints: 81, installationIds: 0, vectorIds: 7 },
  { id: '18280554', type: 'Query', name: 'Copy of Test max', technicalName: 'georgia-pizza-winner-bee', creationDate: '20/07/2026', daysAgo: 8, persisted: true, labels: ['test'], cleanRoom: null, userPoint: 5, userAccounts: 36, userProfiles: 28, userDevicePoints: 81, installationIds: 0, vectorIds: 7 },
  { id: '18280555', type: 'Campaign', name: 'Test_max_20260714', technicalName: 'georgia-pizza-winner-cod', creationDate: '19/07/2026', daysAgo: 9, persisted: false, labels: [], cleanRoom: 'Havas', userPoint: 5, userAccounts: 36, userProfiles: 28, userDevicePoints: 81, installationIds: 0, vectorIds: 7 },
  { id: '18280556', type: 'Cohort lookalike', name: 'Control_10_percent', technicalName: 'georgia-pizza-winner-dot', creationDate: '18/07/2026', daysAgo: 10, persisted: true, labels: ['titi'], cleanRoom: null, userPoint: 6, userAccounts: 36, userProfiles: 26, userDevicePoints: 81, installationIds: 0, vectorIds: 7 },
  { id: '18280557', type: 'EDGE', name: 'Test_1_90_percent', technicalName: 'georgia-pizza-winner-elf', creationDate: '18/07/2026', daysAgo: 10, persisted: true, labels: ['E commerce', 'r'], cleanRoom: null, userPoint: 5, userAccounts: 36, userProfiles: 28, userDevicePoints: 81, installationIds: 0, vectorIds: 7 },
  { id: '18280558', type: 'Automation', name: 'Control_10_percent bis', technicalName: 'georgia-pizza-winner-fig', creationDate: '17/07/2026', daysAgo: 11, persisted: false, labels: [], cleanRoom: null, userPoint: 6, userAccounts: 36, userProfiles: 28, userDevicePoints: 81, installationIds: 0, vectorIds: 7 },
  { id: '18280559', type: 'Pixel', name: 'Test_1_90_percent bis', technicalName: 'georgia-pizza-winner-gnu', creationDate: '16/07/2026', daysAgo: 12, persisted: true, labels: ['test'], cleanRoom: 'Valiuz', userPoint: 5, userAccounts: 36, userProfiles: 18, userDevicePoints: 81, installationIds: 0, vectorIds: 7 },
  { id: '18280560', type: 'File import', name: 'Control_10_percent ter', technicalName: 'georgia-pizza-winner-hat', creationDate: '15/07/2026', daysAgo: 13, persisted: false, labels: [], cleanRoom: null, userPoint: 6, userAccounts: 36, userProfiles: 28, userDevicePoints: 81, installationIds: 0, vectorIds: 7 },
  { id: '18280561', type: 'Partition', name: 'Audience partition A', technicalName: 'georgia-pizza-winner-ink', creationDate: '14/07/2026', daysAgo: 14, persisted: true, labels: ['r'], cleanRoom: null, userPoint: 4, userAccounts: 22, userProfiles: 14, userDevicePoints: 51, installationIds: 0, vectorIds: 3 },
  { id: '18280562', type: 'Experiment group', name: 'Experiment control group', technicalName: 'georgia-pizza-winner-jam', creationDate: '12/07/2026', daysAgo: 16, persisted: false, labels: ['titi'], cleanRoom: 'Havas', userPoint: 2, userAccounts: 12, userProfiles: 9, userDevicePoints: 33, installationIds: 0, vectorIds: 2 },
];

/**
 * Dimensions de filtrage de la page.
 * Une dimension = une clé d'état. Peu importe l'endroit où l'utilisateur la règle
 * (panneau Filters ou entonnoir de colonne), c'est cette clé qui est écrite :
 * une seule source de vérité, donc une seule chip.
 */
export interface FilterDimension {
  key: string;
  label: string;
  values: string[];
  /** Icône du DS (page 🖼 Icons du fichier Figma). */
  icon: string;
  /** Une dimension aussi réglable depuis l'en-tête de la colonne du tableau. */
  columnKey?: string;
}

export const DIMENSIONS: FilterDimension[] = [
  {
    key: 'type',
    label: 'Segment type',
    icon: 'team',
    columnKey: 'type',
    values: ['Automation', 'Campaign', 'Cohort lookalike', 'EDGE', 'Experiment group', 'File import', 'Partition', 'Pixel', 'Query'],
  },
  { key: 'labels', label: 'Labels', icon: 'tag', values: ['E commerce', 'r', 'test', 'titi'] },
  { key: 'persistence', label: 'Persistence', icon: 'save', values: ['Persisted', 'Not persisted'] },
  { key: 'cleanRoom', label: 'Data Clean Room', icon: 'database', values: ['Havas', 'Valiuz'] },
  {
    key: 'creationDate',
    label: 'Creation date',
    icon: 'calendar',
    // Filtre de période : UNE seule valeur à la fois, préréglage relatif OU plage
    // absolue « abs:AAAA-MM-JJ..AAAA-MM-JJ ».
    values: ['Today', 'Yesterday', 'Last 7 days', 'Last 30 days'],
  },
];

/** Icône par type de segment : la même dans le tableau et dans les listes de valeurs. */
export const VALUE_ICONS: Record<string, string> = {
  Automation: 'automation',
  Campaign: 'campaigns',
  'Cohort lookalike': 'user-lookalike',
  EDGE: 'cloud',
  'Experiment group': 'chart-line',
  'File import': 'file-import',
  Partition: 'cluster',
  Pixel: 'user-pixel',
  Query: 'query',
};

export type FilterState = Record<string, string[]>;

const MAX_DAYS: Record<string, number> = { Today: 0, Yesterday: 1, 'Last 7 days': 7, 'Last 30 days': 30, 'Last 90 days': 90 };

/** « 20/07/2026 » → « 2026-07-20 », pour comparer des dates en chaînes ISO. */
function toISO(frenchDate: string): string {
  const [d, m, y] = frenchDate.split('/');
  return `${y}-${m}-${d}`;
}

/** Une valeur de période est soit un préréglage relatif, soit une plage absolue. */
export function isAbsoluteRange(value: string): boolean {
  return value.startsWith('abs:');
}

export function parseAbsoluteRange(value: string): [string, string] {
  const [start, end] = value.slice(4).split('..');
  return [start, end];
}

export function applyFilters(rows: Segment[], filters: FilterState, search: string): Segment[] {
  const q = search.trim().toLowerCase();
  return rows.filter((row) => {
    if (q && !row.name.toLowerCase().includes(q) && !row.technicalName.toLowerCase().includes(q)) return false;
    for (const [key, values] of Object.entries(filters)) {
      if (!values.length) continue;
      if (key === 'type' && !values.includes(row.type)) return false;
      if (key === 'labels' && !row.labels.some((l) => values.includes(l))) return false;
      if (key === 'persistence') {
        const wanted = values.includes(row.persisted ? 'Persisted' : 'Not persisted');
        if (!wanted) return false;
      }
      if (key === 'cleanRoom' && (!row.cleanRoom || !values.includes(row.cleanRoom))) return false;
      if (key === 'creationDate') {
        const value = values[0];
        if (isAbsoluteRange(value)) {
          const [start, end] = parseAbsoluteRange(value);
          const created = toISO(row.creationDate);
          if (created < start || created > end) return false;
        } else if (row.daysAgo > (MAX_DAYS[value] ?? Infinity)) {
          return false;
        }
      }
    }
    return true;
  });
}

/** Libellé d'une chip : « Dimension : première valeur +n ». */
export function chipLabel(dimension: FilterDimension, values: string[]): string {
  const [first, ...rest] = values;
  return `${dimension.label} : ${first}${rest.length ? ` +${rest.length}` : ''}`;
}
