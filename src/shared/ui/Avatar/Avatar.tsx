import clsx from 'clsx';
import { AvatarContainer } from './AvatarContainer';
import { AvatarContent } from './AvatarContent';

interface AvatarProps {
  className?: string;
  size?: 'sm' | 'base' | 'lg';
  src?: string;
  variant?: 'circle' | 'rounded';
  isOnline?: boolean;
  fallback?: string;
  fallbackDelay?: number;
}

export const Avatar = ({
  className,
  src,
  variant = 'circle',
  size = 'base',
  fallback = '',
  isOnline,
}: AvatarProps) => (
  <AvatarContainer
    className={clsx('group', className)}
    size={size}
    variant={variant}
  >
    <AvatarContent
      src={src}
      size={size}
      variant={variant}
      isOnline={isOnline}
      fallback={fallback}
    />
  </AvatarContainer>
);
