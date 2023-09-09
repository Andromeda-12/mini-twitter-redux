import React, {ReactNode, useState} from 'react';
import clsx from 'clsx';
import {DropZone} from './DropZone';
import {IconButton} from '../IconButton';
import {Icon} from '../Icon';

interface PreviewProps {
    className?: string;
    preview: string;
    fileName: string;
    alt: string;
}

interface ImageUploadProps {
    className?: string;
    preview?: string | null | undefined;
    onChange?: (files: File) => void;
}

export const Preview = ({className, preview, fileName, alt}: PreviewProps) => (
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
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        e.stopPropagation();
        setPreview(null);
    };

    return (
        <DropZone
            onFilesDrop={handleInputChange}
            className={clsx(
                ' p-[8px] flex justify-between items-center bg-white rounded-xl border border-gray',
                'cursor-pointer',
                preview ? 'h-[64px]' : 'h-[46px]',
                className,
            )}
        >
            {preview ? (
                <>
                    <Preview
                        alt="Cover"
                        fileName={fileName}
                        preview={preview}
                    />

                    <IconButton
                        className="!h-[24px] !w-[24px] !p-0"
                        variant="cleared"
                        iconName="meatballs"
                        onClick={handleIconClick}
                    />
                </>
            ) : (
                <div className="w-full flex items-center justify-center">
                    <Icon
                        iconName="import"
                        className="mr-[8px]"
                    />
                    <span>Нажмите для загрузки</span>
                </div>
            )}
        </DropZone>
    );
};
