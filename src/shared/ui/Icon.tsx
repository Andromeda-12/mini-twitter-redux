import { SVGAttributes } from 'react';
import { cn } from '../lib';

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
  | 'pin'
  | 'heart'
  | 'filled-heart'
  | 'cross'
  | 'cross-xl';

interface IconProps extends SVGAttributes<SVGSVGElement> {
  iconName?: IconNames;
}

export const Icon = ({ iconName, className, ...props }: IconProps) => {
  const fileName = 'iconsSprite.svg';

  return (
    <svg
      focusable="false"
      aria-hidden
      className={cn(
        'select-none fill-current inline-block text-inherit text-center w-6 h-6 outline-none',
        className
      )}
      {...props}
    >
      <use xlinkHref={`${import.meta.env.BASE_URL}${fileName}#${iconName}`} />
    </svg>
  );
};
