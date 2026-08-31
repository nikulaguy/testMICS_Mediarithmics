import { useEffect, useRef, useState } from 'react';
import { Button, DatePicker } from 'antd';
import dayjs from 'dayjs';
import { panelSurface } from './DropdownPanel';
import { DropdownOptionItem } from './DropdownItems';
import { Icon } from './Icon';
import { isAbsoluteRange, parseAbsoluteRange } from '../data/segments';
import { scale, semantic } from '../theme/micsTheme';

/** Libellé du déclencheur : le préréglage, ou les deux bornes de la plage. */
function formatPeriod(value: string): string {
  if (!isAbsoluteRange(value)) return value;
  const [start, end] = parseAbsoluteRange(value);
  return `${start} → ${end}`;
}

/**
 * Contenu du choix de période (Figma 145:73) : plage absolue à gauche,
 * préréglages relatifs à droite.
 *
 * UNE seule valeur à la fois. Choisir une plage efface le préréglage et
 * réciproquement : les deux répondent à la même question, en afficher deux
 * actives laisserait l'utilisateur deviner laquelle gagne.
 */
export function PeriodPanel({
  value,
  presets,
  onChange,
  anchorSelector = '.mics-period-panel',
  allowClear = false,
}: {
  value: string;
  presets: string[];
  onChange: (value: string) => void;
  /**
   * Où ancrer le calendrier d'AntD. Par défaut le panneau lui-même : ancré au
   * body, il se projetait hors de l'écran depuis une surface flottante.
   */
  anchorSelector?: string;
  /**
   * Autorise le retour à « aucune période ». Vrai dans un panneau de filtres, où
   * la dimension peut ne pas être renseignée ; faux sur un filtre autonome, où
   * une période est toujours en vigueur et où se retrouver sans valeur ne veut
   * rien dire.
   */
  allowClear?: boolean;
}) {
  const absolute = value && isAbsoluteRange(value) ? parseAbsoluteRange(value) : null;

  return (
    <div style={{ display: 'flex', gap: scale.space24, padding: scale.space16 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space8 }}>
        <span style={{ color: semantic.textLighter, fontSize: 10, whiteSpace: 'nowrap' }}>
          Absolute time range
        </span>
        <DatePicker.RangePicker
          getPopupContainer={(trigger) =>
            (trigger.closest(anchorSelector) as HTMLElement) ?? document.body
          }
          placement="bottomLeft"
          value={absolute ? [dayjs(absolute[0]), dayjs(absolute[1])] : null}
          onChange={(range) => {
            if (!range || !range[0] || !range[1]) {
              if (allowClear) onChange('');
              return;
            }
            onChange(`abs:${range[0].format('YYYY-MM-DD')}..${range[1].format('YYYY-MM-DD')}`);
          }}
          allowClear={allowClear}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space8 }}>
        <span style={{ color: semantic.textLighter, fontSize: 10, whiteSpace: 'nowrap' }}>
          Relative time ranges
        </span>
        {presets.map((p) => (
          <DropdownOptionItem
            key={p}
            label={p}
            selected={value === p}
            onSelect={() => onChange(allowClear && value === p ? '' : p)}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * Filtre de période autonome : un déclencheur qui porte la valeur courante, et
 * le panneau ci-dessus.
 *
 * Il remplace le Select de préréglages, qui ne savait pas exprimer une plage de
 * dates : l'utilisateur pouvait choisir « Last 30 days » mais pas « du 1er au
 * 12 ». Même contenu que le niveau 2 « Period » du panneau de filtres, pour que
 * la même question se pose partout de la même façon.
 */
export function PeriodFilter({
  value,
  presets,
  onChange,
  label = 'Period',
}: {
  value: string;
  presets: string[];
  onChange: (value: string) => void;
  /** Intitulé accessible du déclencheur, le libellé visible étant la valeur. */
  label?: string;
}) {
  const [open, setOpen] = useState(false);
  const zone = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Le calendrier d'AntD est rendu dans un portail : un clic dedans n'est
      // pas un clic en dehors, sinon choisir une date de début refermerait tout.
      if (target.closest?.('.ant-picker-dropdown')) return;
      if (zone.current && !zone.current.contains(target)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      // Un calendrier ouvert se ferme en premier.
      if (document.querySelector('.ant-picker-dropdown:not(.ant-picker-dropdown-hidden)')) return;
      setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div ref={zone} style={{ position: 'relative' }}>
      <Button
        aria-label={label}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        icon={<Icon name="clock" size={14} color={open ? semantic.primary : undefined} />}
        style={open ? { borderColor: semantic.primary, color: semantic.primary } : undefined}
      >
        {formatPeriod(value)}
        <Icon name="chevron-bottom" size={12} color={open ? semantic.primary : semantic.textLighter} />
      </Button>
      {open && (
        <div
          className="mics-period-panel"
          style={{
            position: 'absolute',
            top: 'calc(100% + 4px)',
            right: 0,
            zIndex: scale.zDropdown,
            width: 425,
            ...panelSurface,
          }}
        >
          <PeriodPanel value={value} presets={presets} onChange={onChange} />
        </div>
      )}
    </div>
  );
}
