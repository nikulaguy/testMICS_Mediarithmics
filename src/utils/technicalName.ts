/**
 * Nom technique dérivé d'un nom d'affichage — règle générique du produit.
 *
 * Toute ressource qui expose un « Technical Name » (segment, campagne, feed…) le
 * suggère à partir du nom saisi : minuscules, accents retirés, tout ce qui n'est
 * pas alphanumérique devient un tiret, jamais deux tirets de suite, ni en tête ni
 * en queue. « Été 2026 — Prospects FR » → « ete-2026-prospects-fr ».
 *
 * La suggestion s'arrête dès que l'utilisateur édite le champ lui-même, et
 * reprend s'il le vide (voir SegmentCreation) : une valeur voulue ne se fait
 * jamais écraser.
 */
export function toTechnicalName(name: string): string {
  return sanitizeTechnicalName(name).replace(/-+$/, '');
}

/**
 * La même règle, appliquée à la frappe DANS le champ : elle conserve un tiret
 * final, sinon taper « my-name » serait impossible (le tiret serait mangé à
 * chaque frappe). `toTechnicalName` reste la forme canonique à la soumission.
 */
export function sanitizeTechnicalName(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+/, '');
}
