import clsx from 'clsx';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

interface AvatarFallbackProps {
  fallback: string;
  variant: 'circle' | 'rounded';
  size: 'sm' | 'base' | 'lg';
}

const avatarVariants = {
  circle: 'rounded-full',
  rounded: 'rounded',
};

const fallbackSize = {
  sm: 'text-[10px]',
  base: 'text-[14px]',
  lg: 'text-[16px]',
};

export const AvatarFallback = ({
  fallback,
  variant,
  size,
}: AvatarFallbackProps) => (
  <AvatarPrimitive.Fallback
    className={clsx(
      'flex absolute h-full w-full items-center justify-center bg-primary text-white',
      avatarVariants[variant]
    )}
    delayMs={100}
  >
    <span
      className={clsx(
        'font-extrabold tracking-widest uppercase text-gray-700 select-none',
        fallbackSize[size]
      )}
    >
      {fallback}
    </span>
  </AvatarPrimitive.Fallback>
);
