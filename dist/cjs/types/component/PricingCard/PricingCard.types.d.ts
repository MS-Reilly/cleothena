export interface PricingCardProps {
    planName: string;
    price?: string;
    billingCycle?: string;
    description: string;
    features: string[];
    isPopular?: boolean;
    popularLabel?: string;
    buttonText?: string;
    onButtonClick?: () => void;
    className?: string;
}
