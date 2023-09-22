import { cn } from '../lib';

interface PageTitleProps {
  className?: string;
  text: string;
}

export const PageTitle = ({ className, text }: PageTitleProps) => (
  <h3 className={cn('text-2xl font-bold', className)}>{text}</h3>
);
