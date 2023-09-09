import clsx from 'clsx';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { AvatarFallback } from './AvatarFallback';
import { OnlineStatus } from './OnlineStatus';

interface AvatarContentProps {
  src?: string;
  variant: 'circle' | 'rounded';
  size: 'sm' | 'base' | 'lg';
  fallback: string;
  fallbackDelay?: number;
  isOnline?: boolean;
}

const avatarVariants = {
  circle: 'rounded-full',
  rounded: 'rounded',
};

export const AvatarContent = ({
  src,
  variant,
  size,
  fallback,
  isOnline,
}: AvatarContentProps) => (
  <>
    <AvatarPrimitive.Image
      src={src}
      alt="Avatar"
      className={clsx('h-full w-full object-cover', avatarVariants[variant])}
    />

    {isOnline && <OnlineStatus size={size} variant={variant} />}

    <AvatarFallback fallback={fallback} variant={variant} size={size} />
  </>
);
