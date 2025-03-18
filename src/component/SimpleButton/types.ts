export type SimpleButtonProps = {
    title: string;
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    disabled?: boolean;
    // You might want to include other standard button attributes as needed
};