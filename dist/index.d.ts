import React$1 from 'react';

type SimpleButtonProps = {
    title: string;
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    disabled?: boolean;
};

declare const SimpleButton: React$1.FC<SimpleButtonProps>;

export { SimpleButton };
