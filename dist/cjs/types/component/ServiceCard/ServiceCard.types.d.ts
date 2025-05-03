import { SimpleButtonProps } from '../SimpleButton/types';
export interface ServiceCardProps {
    title: string;
    description: string;
    imageUrl: string;
    altText?: string;
    className?: string;
    buttonProps?: Omit<SimpleButtonProps, 'children' | 'title'>;
}
