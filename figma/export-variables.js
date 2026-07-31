/*
  Régénère figma/variables.json depuis le fichier Figma.

  À exécuter dans le contexte plugin de Figma — soit via le MCP figma-console
  (`figma_execute`), soit collé dans la console d'un plugin de développement.
  Le résultat est renvoyé sous forme de chaîne : le coller dans variables.json,
  en conservant le bloc $meta et en remettant la date à jour.

  Ce script est en lecture seule : il ne modifie rien dans le fichier.
*/
const cols = await figma.variables.getLocalVariableCollectionsAsync();
const all = await figma.variables.getLocalVariablesAsync();
const byId = Object.fromEntries(all.map((v) => [v.id, v]));

const hex = (c) => {
  const h = (n) => Math.round(n * 255).toString(16).padStart(2, '0');
  // L'alpha n'est écrit que s'il y en a un : #rrggbb reste lisible dans le diff.
  return `#${h(c.r)}${h(c.g)}${h(c.b)}` + (c.a !== undefined && c.a < 1 ? h(c.a) : '');
};

/*
  Suit la chaîne d'alias jusqu'à la valeur littérale. On garde le premier maillon
  (`aliasOf`) parce que c'est lui qui porte l'intention — « bg/container EST du
  blanc » se relit mieux que « bg/container vaut #ffffff ». La borne de
  profondeur protège d'un cycle introduit par erreur dans le fichier.
*/
function resolve(v, modeId, depth = 0) {
  const raw = v.valuesByMode[modeId];
  if (raw && raw.type === 'VARIABLE_ALIAS' && depth < 10) {
    const target = byId[raw.id];
    if (!target) return { value: null };
    const col = cols.find((c) => c.id === target.variableCollectionId);
    return { aliasOf: target.name, ...resolve(target, col.modes[0].modeId, depth + 1) };
  }
  if (raw && typeof raw === 'object' && 'r' in raw) return { value: hex(raw) };
  return { value: raw === undefined ? null : raw };
}

const out = {};
for (const c of cols) {
  // Le mode est unique dans ce fichier ; le jour où un thème tenant en ajoute
  // un, c'est ici qu'il faudra boucler sur c.modes plutôt que prendre le premier.
  const mode = c.modes[0];
  out[c.name] = {
    modes: c.modes.map((m) => m.name),
    variables: c.variableIds
      .map((id) => byId[id])
      .filter(Boolean)
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((v) => {
        const entry = { name: v.name, type: v.resolvedType, ...resolve(v, mode.modeId) };
        const code = (v.description || '').match(/CODE\s*:\s*(.+)/);
        if (code) entry.code = code[1].trim();
        else if (v.description) entry.note = v.description.trim();
        return entry;
      }),
  };
}

const flat = Object.values(out).flatMap((c) => c.variables);
return {
  json: JSON.stringify(out, null, 2),
  total: flat.length,
  // Deux contrôles à lire avant de commiter : une variable sans cible de code
  // n'a pas de pont vers micsTheme.ts, une valeur nulle est un alias cassé.
  missingCode: flat.filter((v) => !v.code).map((v) => v.name),
  nullValues: flat.filter((v) => v.value === null).map((v) => v.name),
};
