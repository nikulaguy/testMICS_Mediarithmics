
import { ICON_SOURCES } from '../assets/icons.generated';

/**
 * Icônes exportées du fichier Figma (page 🖼 Icons), pas de la librairie AntD :
 * ce sont les glyphes du DS. Les fills exportés ont été remplacés par
 * `currentColor`, la taille suit la font-size, donc la couleur et la taille
 * se pilotent en CSS comme pour un glyphe de police.
 */
/*
  Les sources SVG viennent d'un fichier TypeScript généré, et non d'imports
  `?raw` : ce suffixe est propre à Vite, et le composant doit rester copiable
  dans une chaîne de build Webpack. Régénérer avec `npm run icons` après tout
  ajout ou modification d'un SVG.

  Les logos d'application (préfixe `app-`) gardent leurs couleurs de marque : la
  prop `color` n'a aucun effet dessus, un logo qui change de couleur n'est plus
  un logo.
*/
const ICONS: Record<string, string> = ICON_SOURCES;

export type IconName = keyof typeof ICONS;

/**
 * Les props DOM restantes sont transmises au <span>. C'est indispensable :
 * Ant Design clone les icônes qu'on lui passe en slot (closeIcon, suffix…) pour
 * y injecter onClick et className. Un composant qui n'accepte que ses propres
 * props avale l'injection en silence — la croix d'un Tag ne ferme plus rien.
 */
interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  name: IconName | string;
  size?: number;
  color?: string;
}

export function Icon({ name, size = 14, color, style, ...rest }: Props) {
  const svg = ICONS[name];
  if (!svg) return null;
  return (
    <span
      aria-hidden
      {...rest}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: size,
        width: size,
        height: size,
        color,
        flex: '0 0 auto',
        ...style,
      }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
