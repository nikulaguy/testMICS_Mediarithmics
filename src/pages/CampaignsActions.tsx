import { useEffect, useRef, useState } from 'react';
import { Button, DropdownActionItem, DropdownPanel, Icon } from '../ui';
import { scale } from '../theme/micsTheme';

/**
 * Actions de page des Campaigns, dans l'Actionbar.
 *
 * Le menu « ⋮ » ne porte qu'une seule entrée, « Goals ». C'est contraire à la
 * règle appliquée sur la liste des segments, où le « ⋮ » a justement été retiré
 * faute de contenu : un menu de dépassement à une entrée coûte un clic pour rien
 * et apprend à ne plus l'ouvrir.
 *
 * L'exception est assumée et métier : Goals est en cours de dépréciation. La
 * ranger derrière le menu la sort du chemin principal sans la supprimer, et le
 * jour où elle disparaît, c'est le menu entier qui s'en va — pas un trou dans la
 * barre d'actions.
 */
export function CampaignsActions() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onDown = (e: PointerEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('pointerdown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  return (
    <>
      <Button icon={<Icon name="download" size={14} />}>Export</Button>
      <Button type="primary" icon={<Icon name="plus" size={14} />}>
        New Campaign
      </Button>

      <div ref={menuRef} style={{ position: 'relative' }}>
        <Button
          icon={<Icon name="dots" size={14} />}
          aria-label="Plus d'actions"
          aria-haspopup="menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        />
        {menuOpen && (
          <DropdownPanel anchored align="right" width={160}>
            <div role="menu" aria-label="Actions des campagnes" style={{ paddingBlock: scale.space8 }}>
              {/* target et non funnel : funnel est déjà l'icône de l'entrée Funnel du SideMenu. */}
              <DropdownActionItem icon="target" label="Goals" onSelect={() => setMenuOpen(false)} />
            </div>
          </DropdownPanel>
        )}
      </div>
    </>
  );
}
