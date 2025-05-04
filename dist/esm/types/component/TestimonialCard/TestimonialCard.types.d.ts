export interface TestimonialCardProps {
    name: string;
    role: string;
    message: string;
    imageUrl: string;
    rating?: number;
    className?: string;
    variant?: 'xs' | 'sm' | 'md' | 'lg';
}
