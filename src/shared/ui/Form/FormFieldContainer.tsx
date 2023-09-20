import { ReactNode } from 'react';
import { Label } from '../Label';

interface FormFieldContainerProps {
  children: ReactNode;
  className?: string;
  name?: string;
  label: string;
  errorText?: string;
}

export const FormFieldContainer = ({
  children,
  className,
  name,
  label,
  errorText,
}: FormFieldContainerProps) => (
  <div className={className}>
    <Label htmlFor={name} className="mb-[4px]">
      {label}
    </Label>

    {children}

    <span className="h-[20px] block text-sm break-words text-red mt-[4px]">
      {errorText}
    </span>
  </div>
);
