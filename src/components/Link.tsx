import { useState, type ReactNode } from 'react';
import { Icon } from './Icon';
import { scale, semantic, typography } from '../theme/micsTheme';

type Size = 'L' | 'M';
type Theme = 'onLight' | 'onDark';

interface Props {
  children: ReactNode;
  size?: Size;
  theme?: Theme;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
  leftIcon?: string;
  rightIcon?: string;
}

/**
 * Link (Figma 567:140) — atome de lien du DS.
 * Size L = 14 (Body/Large) · M = 12 (Body/Book).
 * onLight : link/default → link/hover → text/lightest (disabled).
 * onDark  : link/on-dark → text/on-dark → text/on-dark-disabled.
 *
 * C'est le SEUL atome de lien du système : niveaux du fil d'ariane, liens de
 * tableau, actions légères. Un bouton d'action principale reste un Button.
 */
export function Link({
  children,
  size = 'M',
  theme = 'onLight',
  disabled,
  href,
  onClick,
  leftIcon,
  rightIcon,
}: Props) {
  const [hover, setHover] = useState(false);

  const palette =
    theme === 'onDark'
      ? { base: semantic.linkOnDark, hover: semantic.textOnDark, disabled: semantic.textOnDarkDisabled }
      : { base: semantic.linkDefault, hover: semantic.linkHover, disabled: semantic.textLightest };

  const color = disabled ? palette.disabled : hover ? palette.hover : palette.base;
  // L = Body/Large (14/22), M = Body (12/20). Deux styles du DS, pas deux nombres.
  const type = size === 'L' ? typography.bodyLarge : typography.body;

  const content = (
    <>
      {leftIcon && <Icon name={leftIcon} size={type.fontSize} />}
      {children}
      {rightIcon && <Icon name={rightIcon} size={type.fontSize} />}
    </>
  );

  /*
    Pas de raccourci `font` ici. Declare apres `fontSize`, il le reinitialise en
    silence : les tailles L et M rendaient toutes les deux en 12. On normalise le
    <button> avec les proprietes longues uniquement.
  */
  const style: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: scale.space4,
    fontFamily: 'inherit',
    ...type,
    color,
    background: 'transparent',
    border: 0,
    padding: 0,
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
  };

  const handlers = {
    onMouseEnter: () => !disabled && setHover(true),
    onMouseLeave: () => setHover(false),
  };

  // <a href> quand on navigue, <button> quand on agit dans la page (RGAA 7.3).
  if (href && !disabled) {
    return (
      <a href={href} style={style} {...handlers}>
        {content}
      </a>
    );
  }
  return (
    <button
      type="button"
      disabled={disabled}
      aria-disabled={disabled}
      onClick={onClick}
      style={style}
      {...handlers}
    >
      {content}
    </button>
  );
}
