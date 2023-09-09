import { ReactNode } from 'react';
import clsx from 'clsx';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

interface AvatarContainerProps {
  className?: string;
  children: ReactNode;
  variant?: 'circle' | 'rounded';
  size?: 'sm' | 'base' | 'lg';
}

const avatarSizes = {
  sm: 'h-[32px] w-[32px]',
  base: 'h-[50px] w-[50px]',
  lg: 'h-[60px] w-[60px]',
};

const avatarVariants = {
  circle: 'rounded-full',
  rounded: 'rounded',
};

export const AvatarContainer = ({
  className,
  children,
  size = 'base',
  variant = 'circle',
}: AvatarContainerProps) => (
  <AvatarPrimitive.Root
    className={clsx(
      'relative inline-flex',
      avatarSizes[size],
      avatarVariants[variant],
      className
    )}
  >
    {children}
  </AvatarPrimitive.Root>
);
