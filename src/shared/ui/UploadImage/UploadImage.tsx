import React, { useState } from 'react';
import clsx from 'clsx';
import { DropZone } from './DropZone';
import { IconButton } from '../IconButton';
import { Icon } from '../Icon';

interface PreviewProps {
  className?: string;
  preview: string;
  fileName: string;
  alt: string;
}

interface ImageUploadProps {
  className?: string;
  id?: string;
  preview?: string | null | undefined;
  onChange?: (files: File) => void;
}

export const Preview = ({
  className,
  preview,
  fileName,
  alt,
}: PreviewProps) => (
  <div className={clsx('flex items-center', className)}>
    <img
      src={preview}
      alt={alt}
      className="h-[48px] w-[48px] object-cover pointer-events-none rounded-lg mr-[16px]"
    />

    <span className="text-[#2BA3FB]">{fileName}</span>
  </div>
);

export const UploadImage = ({
  className,
  id,
  onChange,
  preview: previewFromProps,
}: ImageUploadProps) => {
  const [preview, setPreview] = useState(previewFromProps || null);
  const [fileName, setFileName] = useState('');

  const handleInputChange = (files: FileList | File[]) => {
    if (!files[0]) {
      return;
    }
    if (!files[0].type.includes('image')) {
      return;
    }

    onChange?.(files[0]);

    const preveiweURL = URL.createObjectURL(files[0]);
    setPreview(preveiweURL);
    setFileName(files[0].name);
  };

  const handleIconClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log('icon')

    e.preventDefault();
    e.stopPropagation();
    setPreview(null);
  };

  const handleIconKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.code !== 'Tab') e.preventDefault();
    if (e.code === 'Enter' || e.code === 'Space') {
      setPreview(null);
    }
  };

  return (
    <DropZone
      id={id}
      onFilesDrop={handleInputChange}
      className={clsx(preview ? 'h-[64px]' : 'h-[46px] active:scale-95', className)}
    >
      {preview ? (
        <>
          <Preview alt="Cover" fileName={fileName} preview={preview} />

          <IconButton
            className="!h-[24px] !w-[24px] "
            variant="ghost"
            iconName="meatballs"
            onClickCapture={handleIconClick}
            onKeyDownCapture={handleIconKeyDown}
          />
        </>
      ) : (
        <div className="w-full flex items-center justify-center">
          <Icon iconName="import" className="mr-[8px]" />
          <span>Нажмите для загрузки</span>
        </div>
      )}
    </DropZone>
  );
};
