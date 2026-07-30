import appstore from '../assets/icons/appstore.svg?raw';
import automation from '../assets/icons/automation.svg?raw';
import automations from '../assets/icons/automations.svg?raw';
import broom from '../assets/icons/broom.svg?raw';
import calendar from '../assets/icons/calendar.svg?raw';
import campaigns from '../assets/icons/campaigns.svg?raw';
import chartBar from '../assets/icons/chart-bar.svg?raw';
import chartLine from '../assets/icons/chart-line.svg?raw';
import chevronBottom from '../assets/icons/chevron-bottom.svg?raw';
import chevronRight from '../assets/icons/chevron-right.svg?raw';
import close from '../assets/icons/close.svg?raw';
import cloud from '../assets/icons/cloud.svg?raw';
import cluster from '../assets/icons/cluster.svg?raw';
import database from '../assets/icons/database.svg?raw';
import display from '../assets/icons/display.svg?raw';
import download from '../assets/icons/download.svg?raw';
import feeds from '../assets/icons/feeds.svg?raw';
import fileImage from '../assets/icons/file-image.svg?raw';
import fileImport from '../assets/icons/file-import.svg?raw';
import filter from '../assets/icons/filter.svg?raw';
import inbox from '../assets/icons/inbox.svg?raw';
import info from '../assets/icons/info.svg?raw';
import funnel from '../assets/icons/funnel.svg?raw';
import magnifier from '../assets/icons/magnifier.svg?raw';
import monitor from '../assets/icons/monitor.svg?raw';
import options from '../assets/icons/options.svg?raw';
import plug from '../assets/icons/plug.svg?raw';
import plus from '../assets/icons/plus.svg?raw';
import dots from '../assets/icons/dots.svg?raw';
import query from '../assets/icons/query.svg?raw';
import save from '../assets/icons/save.svg?raw';
import server from '../assets/icons/server.svg?raw';
import settings from '../assets/icons/settings.svg?raw';
import table from '../assets/icons/table.svg?raw';
import tag from '../assets/icons/tag.svg?raw';
import target from '../assets/icons/target.svg?raw';
import team from '../assets/icons/team.svg?raw';
import terminal from '../assets/icons/terminal.svg?raw';
import tree from '../assets/icons/tree.svg?raw';
import user from '../assets/icons/user.svg?raw';
import users from '../assets/icons/users.svg?raw';
import userLookalike from '../assets/icons/user-lookalike.svg?raw';
import userPixel from '../assets/icons/user-pixel.svg?raw';
import userQuery from '../assets/icons/user-query.svg?raw';
import view from '../assets/icons/view.svg?raw';

/**
 * Icônes exportées du fichier Figma (page 🖼 Icons), pas de la librairie AntD :
 * ce sont les glyphes du DS. Les fills exportés ont été remplacés par
 * `currentColor`, la taille suit la font-size, donc la couleur et la taille
 * se pilotent en CSS comme pour un glyphe de police.
 */
const ICONS: Record<string, string> = {
  appstore,
  automation,
  automations,
  broom,
  calendar,
  campaigns,
  'chart-bar': chartBar,
  'chart-line': chartLine,
  'chevron-bottom': chevronBottom,
  'chevron-right': chevronRight,
  close,
  cloud,
  cluster,
  database,
  display,
  download,
  feeds,
  'file-image': fileImage,
  'file-import': fileImport,
  filter,
  inbox,
  info,
  funnel,
  magnifier,
  monitor,
  options,
  plug,
  plus,
  dots,
  query,
  save,
  server,
  settings,
  table,
  tag,
  target,
  team,
  terminal,
  tree,
  user,
  users,
  'user-lookalike': userLookalike,
  'user-pixel': userPixel,
  'user-query': userQuery,
  view,
};

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
