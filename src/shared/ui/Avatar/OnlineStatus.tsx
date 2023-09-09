import clsx from 'clsx';

interface OnlineStatusProps {
  className?: string;
  variant: 'circle' | 'rounded';
  size?: 'sm' | 'base' | 'lg';
}

const onlineStatusSizeMap = {
  sm: 'h-2.5 w-2.5',
  base: 'h-3 w-3',
  lg: 'h-3.5 w-3.5',
};

const ringSizeMap = {
  sm: 'ring-2',
  base: 'ring',
  lg: 'ring-4',
};

const circleVariantPosition = {
  sm: '-translate-y-[1px] -translate-x-[1px]',
  base: '-translate-y-[3px] -translate-x-[3px]',
  lg: '-translate-y-[3px] -translate-x-[3px]',
};

export const OnlineStatus = ({
  className,
  variant = 'circle',
  size = 'base',
}: OnlineStatusProps) => (
  <div
    className={clsx(
      'absolute z-10 bottom-0 right-0',
      onlineStatusSizeMap[size],
      variant === 'circle' && circleVariantPosition[size],
      className
    )}
  >
    <span
      className={clsx(
        'block rounded-full bg-green-400 ring-white',
        ringSizeMap[size],
        onlineStatusSizeMap[size]
      )}
    />
  </div>
);
