import { cn } from '@/shared/lib';
import React, {
  ReactNode,
  DragEvent,
  useEffect,
  useState,
  useRef,
} from 'react';

interface DropZoneProps {
  children: ReactNode;
  id?: string;
  className: string;
  multiple?: boolean;
  onDragStateChange?: (isDragActive: boolean) => void;
  onDrag?: () => void;
  onDragIn?: () => void;
  onDragOut?: () => void;
  onDrop?: () => void;
  onClick?: () => void;
  onFilesDrop?: (file: File[]) => void;
}

export const DropZone = ({
  children,
  id,
  className,
  multiple = false,
  onFilesDrop,
  onDrag,
  onDrop,
  onDragIn,
  onDragOut,
  onClick,
  onDragStateChange,
}: DropZoneProps) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const mapFileListToArray = (files: FileList) => Array.from(files);

  const handleDragIn = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    onDragIn?.();

    if (event.dataTransfer?.items && event.dataTransfer.items.length > 0) {
      setIsDragActive(true);
    }
  };

  const handleDragOut = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    onDragOut?.();

    setIsDragActive(false);
  };

  const handleDrag = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    onDrag?.();
    if (!isDragActive) {
      setIsDragActive(true);
    }
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    setIsDragActive(false);
    onDrop?.();

    if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
      const files = mapFileListToArray(event.dataTransfer.files);

      onFilesDrop?.(files);
      event.dataTransfer.clearData();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = mapFileListToArray(event.target.files);
      onFilesDrop?.(files);

      if (inputRef.current) {
        inputRef.current.value = '';
      }
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
    onClick?.();
  };

  useEffect(() => {
    onDragStateChange?.(isDragActive);
  }, [isDragActive, onDragStateChange]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.code !== 'Tab') e.preventDefault();
    if (e.code === 'Enter' || e.code === 'Space') {
      inputRef.current?.click();
    }
  };

  return (
    <div
      className={cn(
        'p-2 cursor-pointer flex justify-between items-center bg-white rounded-xl border border-gray focus-visible:ring ring-primary ring-offset-2 duration-100',
        className
      )}
      onDragEnter={handleDragIn}
      onDragLeave={handleDragOut}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      onDrag={e => e.stopPropagation()}
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      {children}

      <input
        ref={inputRef}
        id={id}
        type="file"
        accept="image/*"
        multiple={multiple}
        className="hidden"
        onChange={handleInputChange}
      />
    </div>
  );
};
