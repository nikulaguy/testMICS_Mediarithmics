/** Fausses données en dur : aucune API, le test porte sur le front. */

export interface ProcessingActivity {
  name: string;
  /** Base légale RGPD, telle que la production l'affiche (capitales + underscores). */
  legalBasis: string;
}

/** Les deux activités de l'organisation de démo, relevées sur les écrans prod. */
export const PROCESSING_ACTIVITIES: ProcessingActivity[] = [
  { name: 'FirstConsent', legalBasis: 'CONSENT' },
  { name: 'OK', legalBasis: 'CONTRACTUAL_PERFORMANCE' },
];

/** Types de segment proposés au départ du parcours de création. */
export interface SegmentTypeOption {
  name: string;
  /** Une phrase, affichée dans le tooltip de l'icône « i » de la rangée. */
  tooltip: string;
  /** Seul « User Query » est maquetté de bout en bout dans ce prototype. */
  available: boolean;
}

export const SEGMENT_TYPES: SegmentTypeOption[] = [
  { name: 'User Query', tooltip: 'Segment défini par une requête sur les données du datamart.', available: true },
  { name: 'User List', tooltip: "Segment alimenté par une liste d'identifiants importée.", available: false },
  { name: 'User Pixel', tooltip: 'Segment alimenté par un pixel de collecte posé sur un site.', available: false },
  { name: 'User Expert Query', tooltip: 'Requête avancée écrite directement en OTQL.', available: false },
  { name: 'Edge', tooltip: 'Segment calculé sur le device, sans remontée des données.', available: false },
];
