import { useState } from 'react';
import { Button } from 'antd';
import { Icon } from './Icon';
import { LabelPicker } from './LabelPicker';
import { Tag } from './Tag';
import { scale, semantic } from '../theme/micsTheme';

export interface ResourceLabel {
  key: string;
  label: string;
}

interface Props {
  title: string;
  /** Type de la ressource, affiché à droite du titre. */
  type?: string;
  /** Icône du type. Nom du set Icon ; par défaut le glyphe « plug ». */
  typeIcon?: string;
  /** Date de création, déjà formatée. */
  created?: string;
  /** Labels de la ressource. `undefined` masque la ligne entière. */
  labels?: ResourceLabel[];
  /**
   * Labels proposables. Ceux déjà posés en sont retirés automatiquement : une
   * liste qui propose ce qui est déjà là fait douter de ce qu'on vient de faire.
   * Sans cette prop, le bouton d'ajout n'ouvre rien — il n'y a rien à choisir.
   */
  availableLabels?: string[];
  onAddLabel?: (label: string) => void;
  onRemoveLabel?: (key: string) => void;
  /** Niveau de titre. h1 sur une page de détail, h2 dans une carte. */
  as?: 'h1' | 'h2';
}

const meta: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  color: semantic.textLighter,
  flex: '0 0 auto',
};

/**
 * Resource Title Header (Figma 706:116522) — bloc titre d'une page de détail.
 * Ligne 1 : titre à gauche, métadonnées à droite. Ligne 2 : labels.
 * Un seul titre principal par écran ; les métadonnées ne se mettent jamais
 * à gauche, sinon elles concurrencent le nom de la ressource.
 *
 * Trois états de la ligne 2, comme les trois variants de la maquette :
 * withoutLabel · withLabel · adding (le bouton devient un LabelPicker).
 */
export function ResourceTitleHeader({
  title,
  type,
  typeIcon = 'plug',
  created,
  labels,
  availableLabels,
  onAddLabel,
  onRemoveLabel,
  as: Heading = 'h1',
}: Props) {
  const [adding, setAdding] = useState(false);
  // Les labels déjà posés ne sont pas proposés une seconde fois.
  const applied = new Set((labels ?? []).map((l) => l.label.toLowerCase()));
  const options = (availableLabels ?? []).filter((o) => !applied.has(o.toLowerCase()));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space12 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: scale.space12 }}>
        <Heading
          style={{ margin: 0, flex: 1, fontSize: 16, lineHeight: '24px', fontWeight: 500, color: semantic.textDarker }}
        >
          {title}
        </Heading>
        {type && (
          <span style={meta}>
            <Icon name={typeIcon} size={14} /> {type}
          </span>
        )}
        {created && (
          <span style={meta}>
            <Icon name="calendar" size={14} /> {created}
          </span>
        )}
      </div>

      {labels && (
        <div style={{ display: 'flex', alignItems: 'center', gap: scale.space8, flexWrap: 'wrap' }}>
          {/*
            Le champ REMPLACE le bouton, il ne s'ajoute pas à côté : la rangée ne se
            réorganise pas et l'action reste à l'endroit exact où l'on a cliqué.
          */}
          {adding ? (
            <LabelPicker
              options={options}
              onSelect={(label) => {
                onAddLabel?.(label);
                setAdding(false);
              }}
              onCancel={() => setAdding(false)}
            />
          ) : (
            <Button
              size="small"
              icon={<Icon name="plus" size={10} />}
              aria-expanded={false}
              aria-haspopup="listbox"
              onClick={() => setAdding(true)}
            >
              Add label
            </Button>
          )}
          {labels.map((l) => (
            <Tag key={l.key} closable={Boolean(onRemoveLabel)} onClose={() => onRemoveLabel?.(l.key)}>
              {l.label}
            </Tag>
          ))}
        </div>
      )}
    </div>
  );
}
