import { SideMenuItem } from './SideMenuItem';
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
 * Les entrées sont des `SideMenuItem`, le composant des entrées du menu latéral :
 * c'est le choix de la maquette, et il évite d'entretenir un second item avec son
 * propre survol, sa propre hauteur et son propre radius.
 *
 * Chaque entrée porte la MARQUE de son application, pas un glyphe du set : c'est
 * le seul menu du produit où l'on quitte l'application courante, et c'est le logo
 * qui rend la cible reconnaissable avant même la lecture du libellé.
 *
 * Le composant ne dessine pas sa surface : il se pose dans un DropdownPanel.
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
        <div key={groupIndex} role="group">
          {group.map((app) => (
            // Gouttière de la liste : 15 horizontaux, 4 verticaux (Figma « row »).
            <div key={app.name} style={{ display: 'flex', padding: `${scale.space4}px 15px` }}>
              <SideMenuItem
                role="menuitem"
                icon={app.icon}
                label={app.name}
                onSelect={() => onSelect?.(app.name)}
                /*
                  Ressource externe : rien de visible, la maquette ne prévoit pas de
                  marqueur. Mais l'ouverture dans un autre onglet doit être annoncée,
                  sinon le retour arrière du lecteur d'écran ne ramène nulle part.
                */
                srSuffix={app.external ? 'Nouvelle fenêtre' : undefined}
              />
            </div>
          ))}

          {/*
            Filet entre groupes seulement, en retrait de 16 de chaque côté (Figma).
            Un filet pleine largeur sous le dernier groupe doublerait le bord du panneau.
          */}
          {groupIndex < groups.length - 1 && (
            <div style={{ paddingInline: scale.space16 }}>
              <div style={{ borderTop: `1px solid ${semantic.borderDefault}` }} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
