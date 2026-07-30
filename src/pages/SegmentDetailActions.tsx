import { useEffect, useRef, useState } from 'react';
import {
  Button,
  DropdownActionItem,
  DropdownDivider,
  DropdownPanel,
  Icon,
  Overlay,
} from '../ui';
import { scale, semantic } from '../theme/micsTheme';

interface Props {
  segmentName: string;
  /** Suppression confirmée : l'écran appelant revient à la liste. */
  onDelete: () => void;
}

/**
 * Actions de la page de détail d'un segment, dans l'Actionbar.
 * Trois actions visibles (Edit, Export, Add a Feed) puis un menu « ⋮ » qui porte
 * les actions moins fréquentes ou plus lourdes.
 *
 * Le menu est en DEUX groupes séparés d'un filet, comme en production : d'abord ce
 * qui CRÉE un objet à partir du segment, ensuite ce qui touche au segment lui-même.
 * Delete ferme la marche, en `error` : c'est la seule entrée irréversible.
 */
export function SegmentDetailActions({ segmentName, onDelete }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
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
      <Button icon={<Icon name="view" size={14} />}>Edit</Button>
      <Button icon={<Icon name="download" size={14} />}>Export</Button>
      <Button type="primary" icon={<Icon name="feeds" size={14} />}>
        Add a Feed
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
          <DropdownPanel anchored align="right" width={240}>
            <div role="menu" aria-label="Actions du segment" style={{ paddingBlock: scale.space8 }}>
              <DropdownActionItem
                icon="user-lookalike"
                label="Create Lookalike"
                onSelect={() => setMenuOpen(false)}
              />
              <DropdownActionItem
                icon="chart-line"
                label="Create Experiment"
                onSelect={() => setMenuOpen(false)}
              />
              <DropdownDivider inset={scale.space16} />
              <DropdownActionItem icon="history" label="History" onSelect={() => setMenuOpen(false)} />
              <DropdownActionItem
                icon="trash"
                label="Delete"
                tone="danger"
                onSelect={() => {
                  // Le menu se referme AVANT la modale : deux surfaces flottantes
                  // superposées, et on ne sait plus laquelle Échap est censée fermer.
                  setMenuOpen(false);
                  setConfirmOpen(true);
                }}
              />
            </div>
          </DropdownPanel>
        )}
      </div>

      {/*
        Modale et non drawer : la décision ne dépend pas de ce que la surface masque,
        et elle doit interrompre. C'est le cas d'usage de la modale décrit sur la page
        Overlay ; le drawer reste pour les tâches qui ont besoin du contexte derrière.
      */}
      <Overlay
        open={confirmOpen}
        title="Delete segment"
        headerTheme="light"
        width={480}
        onClose={() => setConfirmOpen(false)}
        footer={
          <>
            <Button onClick={() => setConfirmOpen(false)}>Cancel</Button>
            {/*
              `danger` et non `primary` : le bouton qui valide une destruction ne doit
              pas ressembler au bouton qui valide une création.
            */}
            <Button
              danger
              type="primary"
              onClick={() => {
                setConfirmOpen(false);
                onDelete();
              }}
            >
              Delete
            </Button>
          </>
        }
      >
        <div style={{ display: 'flex', gap: scale.space16, color: semantic.textNormal }}>
          <Icon name="trash" size={24} color={semantic.error} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space8 }}>
            {/* Le nom du segment est dans la question : c'est ce qui distingue une
                confirmation utile d'un « Êtes-vous sûr ? » qu'on valide sans lire. */}
            <p style={{ margin: 0 }}>
              Delete <b>{segmentName}</b> ?
            </p>
            <p style={{ margin: 0, color: semantic.textLighter }}>
              This action cannot be undone. The segment and its feeds are removed.
            </p>
          </div>
        </div>
      </Overlay>
    </>
  );
}
