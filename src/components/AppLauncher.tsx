import { Icon } from './Icon';
import logoUrl from '../assets/logo-mediarithmics.png';
import { scale, semantic } from '../theme/micsTheme';

export interface LauncherApp {
  name: string;
  /** Marque de l'application dans le set d'icônes (`app-navigator`, `app-user-guide`…). */
  icon: string;
  /** Ressource externe : la doc et le guide ouvrent un autre site, il faut l'annoncer. */
  external?: boolean;
}

interface Props {
  /**
   * Groupes d'entrées, dans l'ordre du code produit : userLinks (applications),
   * puis resourceLinks (documentation). Un filet sépare deux groupes.
   */
  groups: LauncherApp[][];
  onSelect?: (name: string) => void;
}

/**
 * AppLauncher (Figma 19:148) — contenu du panneau « Applications » de la TopBar.
 * Bandeau de marque, puis les entrées groupées : les applications, un filet, les
 * ressources documentaires.
 *
 * Le composant ne dessine pas sa surface : il se pose dans un DropdownPanel,
 * comme tous les panneaux du produit.
 *
 * Chaque entrée porte la MARQUE de son application, pas un glyphe du set : c'est
 * le seul menu du produit où l'on quitte l'application courante, et c'est le logo
 * qui rend la cible reconnaissable avant même la lecture du libellé.
 */
export function AppLauncher({ groups, onSelect }: Props) {
  return (
    <div role="menu" aria-label="Applications">
      <div
        style={{
          height: 101,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: `${scale.space20}px 0 ${scale.space16}px`,
        }}
      >
        <img src={logoUrl} alt="mediarithmics" style={{ width: 140 }} />
      </div>

      {groups.map((group, groupIndex) => (
        <div
          key={groupIndex}
          role="group"
          style={
            // Filet entre groupes seulement : un filet sous le dernier ferait un
            // trait au ras du bord du panneau, qui doublerait son propre contour.
            groupIndex < groups.length - 1
              ? { borderBottom: `1px solid ${semantic.borderInput}` }
              : undefined
          }
        >
          {group.map((app) => (
            <div
              key={app.name}
              className="mics-panel-row"
              role="menuitem"
              tabIndex={0}
              onClick={() => onSelect?.(app.name)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelect?.(app.name);
                }
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: scale.space10,
                padding: `${scale.space10}px ${scale.space20}px`,
                color: semantic.textNormal,
                cursor: 'pointer',
              }}
            >
              <Icon name={app.icon} size={20} />
              <span>{app.name}</span>
              {/*
                Ressource externe : rien de visible, la maquette ne prévoit pas de
                marqueur. Mais l'ouverture dans un autre onglet doit être annoncée,
                sinon le retour arrière du lecteur d'écran ne ramène nulle part.
              */}
              {app.external && <span className="mics-sr-only">Nouvelle fenêtre</span>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
