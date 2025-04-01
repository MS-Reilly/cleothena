export type ButtonVariant = 'xs' | 'sm' | 'md' | 'lg';
export type ButtonColor = 'primary' | 'secondary' | 'accent' | 'highlight';
export type SimpleButtonProps = {
    title: string;
    children?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    className?: string;
    disabled?: boolean;
    variant?: ButtonVariant;
    color?: ButtonColor;
    outline?: boolean;
    ghost?: boolean;
};
