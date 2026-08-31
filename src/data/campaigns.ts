/*
  Jeu de démonstration des Campaigns, relevé sur la maquette « Campaigns — Liste »
  (Figma 611:2). Les métriques y valent toutes « - » : les campagnes de
  l'organisation de test n'ont jamais diffusé. On garde ce vide plutôt que
  d'inventer des chiffres, qui donneraient une fausse idée de ce que l'écran
  affiche en vrai.
*/

export type CampaignStatus = 'Active' | 'Pending' | 'Paused';

export interface Campaign {
  id: string;
  name: string;
  status: CampaignStatus;
  /** Labels posés sur la campagne. C'est sur eux que porte « Filter by Label ». */
  labels: string[];
  /** Impressions, clics, dépensé, CPM, CTR, CPC. `null` s'affiche « - ». */
  impressions: number | null;
  clicks: number | null;
  spent: number | null;
  cpm: number | null;
  ctr: number | null;
  cpc: number | null;
}

/** Les mêmes labels que les segments : ils sont posés au niveau de l'organisation. */
export const CAMPAIGN_LABELS = ['E commerce', 'r', 'test', 'titi'];

export const CAMPAIGNS: Campaign[] = [
  { id: 'c1', name: 'Test camp', status: 'Active', labels: ['test'], impressions: null, clicks: null, spent: null, cpm: null, ctr: null, cpc: null },
  { id: 'c2', name: 'TESTTTTT', status: 'Pending', labels: ['test', 'titi'], impressions: null, clicks: null, spent: null, cpm: null, ctr: null, cpc: null },
  { id: 'c3', name: 'CAMPAIGN_1_auto_generated', status: 'Active', labels: ['E commerce'], impressions: null, clicks: null, spent: null, cpm: null, ctr: null, cpc: null },
  { id: 'c4', name: 'CAMPAIGN-1_auto_generated', status: 'Active', labels: ['E commerce', 'r'], impressions: null, clicks: null, spent: null, cpm: null, ctr: null, cpc: null },
  { id: 'c5', name: 'CAMPAIGN-3_auto_generated', status: 'Active', labels: [], impressions: null, clicks: null, spent: null, cpm: null, ctr: null, cpc: null },
  { id: 'c6', name: 'CAMPAIGN-2_auto_generated', status: 'Active', labels: ['titi'], impressions: null, clicks: null, spent: null, cpm: null, ctr: null, cpc: null },
];

/** Couleur du Badge par statut, alignée sur la maquette (Success / Processing). */
export const CAMPAIGN_STATUS_TONE: Record<CampaignStatus, 'success' | 'processing' | 'warning'> = {
  Active: 'success',
  Pending: 'processing',
  Paused: 'warning',
};

/**
 * Entrée « tous les statuts » du filtre. C'est une valeur à part entière, pas
 * l'absence de valeur : un Select vide ne se remet pas à zéro une fois qu'on a
 * choisi, l'utilisateur reste coincé sur le dernier statut retenu.
 */
export const CAMPAIGN_STATUS_ALL = 'All status';

/** Statuts filtrables, dérivés de la table des tons : une seule source. */
export const CAMPAIGN_STATUSES = Object.keys(CAMPAIGN_STATUS_TONE) as CampaignStatus[];

export const CAMPAIGN_PERIODS = ['Last 7 days', 'Last 30 days', 'Last 90 days'];

/**
 * Filtrage de la liste. Les labels se cumulent en OU : cocher « test » puis
 * « titi » élargit le résultat au lieu de le vider. Deux labels sur une même
 * dimension décrivent une alternative, pas une intersection — c'est la règle
 * appliquée partout ailleurs dans le produit.
 */
export function applyCampaignFilters(
  rows: Campaign[],
  { search, labels, status }: { search: string; labels: string[]; status: string | null },
): Campaign[] {
  const q = search.trim().toLowerCase();
  return rows.filter((c) => {
    if (q && !c.name.toLowerCase().includes(q)) return false;
    if (labels.length && !c.labels.some((l) => labels.includes(l))) return false;
    if (status && status !== CAMPAIGN_STATUS_ALL && c.status !== status) return false;
    return true;
  });
}
