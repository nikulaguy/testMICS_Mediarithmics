import logoUrl from '../assets/logo-mediarithmics.png';
import { scale, semantic } from '../theme/micsTheme';

export interface LauncherApp {
  name: string;
  /** Pastille de couleur de l'application. */
  color: string;
}

interface Props {
  /** Application dans laquelle on se trouve, en tête de liste, non cliquable. */
  current: string;
  apps: LauncherApp[];
  onSelect?: (name: string) => void;
}

/**
 * AppLauncher (Figma 19:148) — contenu du panneau « Applications » de la TopBar.
 * Bandeau de marque, application courante, puis les autres applications.
 * Le composant ne dessine pas sa surface : il se pose dans un DropdownPanel,
 * comme tous les panneaux du produit.
 */
export function AppLauncher({ current, apps, onSelect }: Props) {
  return (
    <div role="menu" aria-label="Applications">
      <div
        style={{
          height: 68,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: `1px solid ${semantic.borderInput}`,
        }}
      >
        <img src={logoUrl} alt="mediarithmics" style={{ width: 140 }} />
      </div>

      <div
        style={{
          height: scale.sizeHeader,
          display: 'flex',
          alignItems: 'center',
          paddingInline: scale.space16,
          color: semantic.textNormal,
        }}
        aria-current="true"
      >
        {current}
      </div>

      {apps.map((a) => (
        <div
          key={a.name}
          className="mics-panel-row"
          role="menuitem"
          tabIndex={0}
          onClick={() => onSelect?.(a.name)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onSelect?.(a.name);
            }
          }}
          style={{
            height: scale.sizeHeader,
            display: 'flex',
            alignItems: 'center',
            gap: scale.space12,
            paddingInline: scale.space16,
            cursor: 'pointer',
          }}
        >
          <span style={{ width: 18, height: 18, borderRadius: 4, background: a.color, flex: '0 0 auto' }} />
          {a.name}
        </div>
      ))}
    </div>
  );
}
