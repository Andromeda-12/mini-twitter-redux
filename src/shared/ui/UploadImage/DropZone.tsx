import React, {ReactNode, DragEvent, useEffect, useState, useRef} from 'react';

interface DropZoneProps {
    children: ReactNode;
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

    return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div
            className={className}
            onDragEnter={handleDragIn}
            onDragLeave={handleDragOut}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onDrag={(e) => e.stopPropagation()}
            onClick={handleClick}
        >
            <input
                ref={inputRef}
                type="file"
                accept="image/*"
                multiple={multiple}
                className="hidden"
                onChange={handleInputChange}
            />
            {children}
        </div>
    );
};
