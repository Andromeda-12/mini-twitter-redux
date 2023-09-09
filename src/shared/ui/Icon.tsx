import { SVGAttributes } from 'react';
import clsx from 'clsx';

export type IconNames =
  | 'error'
  | 'sign-out'
  | 'home'
  | 'user'
  | 'group'
  | 'chevron'
  | 'burger'
  | 'burger-mobile'
  | 'search'
  | 'eye'
  | 'eye-slash'
  | 'cross'
  | 'check'
  | 'done'
  | 'import'
  | 'logo'
  | 'meatballs'
  | 'pin';

interface IconProps extends SVGAttributes<SVGSVGElement> {
  iconName?: IconNames;
}

export const Icon = ({ iconName, className, ...props }: IconProps) => {
  const fileName = 'iconsSprite.svg';

  return (
    <svg
      focusable="false"
      aria-hidden
      className={clsx(
        'select-none fill-current inline-block text-inherit text-center w-6 h-6 outline-none',
        className
      )}
      {...props}
    >
      <use xlinkHref={`/${fileName}#${iconName}`} />
    </svg>
  );
};
