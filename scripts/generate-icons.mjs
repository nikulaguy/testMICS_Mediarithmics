/*
  Génère src/assets/icons.generated.ts à partir des SVG de src/assets/icons/.

  Pourquoi ce détour plutôt que d'importer les SVG directement : les imports
  `../assets/x.svg?raw` sont une fonctionnalité de Vite. Un dépôt qui construit
  avec Webpack — celui du client, sous Nx — ne sait pas les résoudre, et le
  composant Icon devient incopiable. Or 24 de nos 31 composants en dépendent.

  Le fichier généré est du TypeScript ordinaire : il se copie tel quel dans
  n'importe quelle chaîne de build.

    node scripts/generate-icons.mjs

  À relancer après tout ajout, retrait ou modification d'un SVG.
*/
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const dir = join(here, '..', 'src', 'assets', 'icons');
const out = join(here, '..', 'src', 'assets', 'icons.generated.ts');

const fichiers = readdirSync(dir).filter((f) => f.endsWith('.svg')).sort();

const entrees = fichiers.map((f) => {
  const nom = f.replace(/\.svg$/, '');
  // Une seule ligne par icône : le SVG est déjà normalisé à l'export, et un
  // diff lisible importe moins ici que la compacité du fichier.
  const svg = readFileSync(join(dir, f), 'utf8').replace(/\s+/g, ' ').trim();
  return `  ${JSON.stringify(nom)}: ${JSON.stringify(svg)},`;
});

writeFileSync(
  out,
  `/*
  FICHIER GÉNÉRÉ — ne pas éditer à la main.
  Source : src/assets/icons/*.svg · Générateur : scripts/generate-icons.mjs

  Les SVG sont inlinés en TypeScript plutôt qu'importés avec le suffixe \`?raw\`,
  qui est propre à Vite. Le composant Icon reste ainsi copiable dans une chaîne
  de build Webpack sans configuration particulière.
*/
export const ICON_SOURCES: Record<string, string> = {
${entrees.join('\n')}
};
`,
  'utf8',
);

console.log(`${fichiers.length} icônes écrites dans src/assets/icons.generated.ts`);
