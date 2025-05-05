import React$1, { ReactNode, CSSProperties } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

type ButtonVariant = 'xs' | 'sm' | 'md' | 'lg';
type ButtonColor = 'primary' | 'secondary' | 'accent' | 'highlight';
type SimpleButtonProps = {
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

declare const SimpleButton: React$1.FC<SimpleButtonProps>;

type NavItem = {
    label: string;
    href: string;
    children?: NavItem[];
};
interface NavbarProps {
    logo?: React.ReactNode;
    links: NavItem[];
    position?: 'static' | 'fixed' | 'sticky';
    theme?: 'light' | 'dark';
    className?: string;
    ghost?: boolean;
    sidebarProps?: Omit<SideBarProps, "sidebarConfig" | "logo">;
}

declare const Navbar: React$1.FC<NavbarProps>;

interface SideBarProps$1 {
    logo: string;
    sidebarConfig?: SidebarSectionConfig[];
    side?: "left" | "right";
    hamburgerStyle?: React.CSSProperties;
    hamburgerFill?: string;
}
interface SidebarSectionConfig {
    section: string;
    items: SidebarItemConfig[];
    [key: string]: any;
}
interface SidebarItemConfig {
    title: string;
    path?: string;
    icon?: React.ReactNode;
    disabled?: boolean;
    color?: string;
    subItems?: SidebarItemConfig[];
    [key: string]: any;
}

declare const SideBar: React$1.FC<SideBarProps$1>;

interface FullScreenHeroProps {
    image: string;
    children: ReactNode;
    top?: string;
    left?: string;
    right?: string;
    animationThreshold?: number;
    overlay?: boolean;
    overlayColor?: string;
}
interface HeroContentWrapperProps {
    children: React.ReactNode;
    overlayColor?: string;
    gradientDirection?: string;
}

declare const FullScreenHero: React$1.FC<FullScreenHeroProps>;

declare const HeroContentWrapper: React$1.FC<HeroContentWrapperProps>;

type ScrollDirection = 'up' | 'down' | 'left' | 'right' | 'bothSides';
interface ScrollIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
    onClick?: () => void;
    className?: string;
    text?: string;
    arrowProps?: React.SVGProps<SVGSVGElement>;
    textProps?: React.HTMLAttributes<HTMLSpanElement>;
    direction?: ScrollDirection;
}

declare const ScrollIndicator: React$1.FC<ScrollIndicatorProps>;

/**
 * Possible color variants, e.g. for the SVG fill.
 */
type ColorVariants = 'primary' | 'secondary' | 'accent' | 'highlight';
/**
 * Possible size variants for small responsive changes.
 */
type SizeVariants = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
interface SeparatorProps {
    /**
     * The SVG React component (from `import Icon from '...svg'` via SVGR).
     */
    icon: React$1.FunctionComponent<React$1.SVGProps<SVGSVGElement>>;
    /**
     * How many times to repeat the icon.
     * @default 3
     */
    count?: number;
    /**
     * Color variant for the icon fill.
     * @default "primary"
     */
    color?: ColorVariants;
    /**
     * Size variant to slightly scale the icon dimensions.
     * @default "md"
     */
    size?: SizeVariants;
    /**
     * Additional CSS class.
     */
    className?: string;
}

/**
 * Map from color variant to actual hex (or theme-based) color.
 * In a real app, you could pull these from a theme or context if desired.
 */
declare const Separator: React$1.FC<SeparatorProps>;

interface HeroCarouselProps {
    /** Enable auto-play? */
    autoPlay?: boolean;
    /** Interval in ms between slide transitions when autoPlay is true */
    autoPlayInterval?: number;
    /** Additional CSS class for the root container */
    className?: string;
    /** The slides to display (e.g. <FullScreenHero> children) */
    children?: React$1.ReactNode;
    showNavButtons?: boolean;
}

declare const HeroCarousel: React$1.FC<HeroCarouselProps>;

interface ServiceCardProps {
    title: string;
    description: string;
    imageUrl: string;
    altText?: string;
    className?: string;
    buttonProps?: Omit<SimpleButtonProps, 'children' | 'title'>;
}

declare const ServiceCard: React$1.FC<ServiceCardProps>;

interface TestimonialCardProps {
    name: string;
    role: string;
    message: string;
    imageUrl: string;
    rating?: number;
    className?: string;
    variant?: 'xs' | 'sm' | 'md' | 'lg';
}

declare const TestimonialCard: React$1.FC<TestimonialCardProps>;

interface IconCardProps {
    icon: React.ComponentType<any>;
    title: string;
    color?: string;
    backgroundColor?: string;
    iconSize?: number;
    className?: string;
}

declare const IconCard: React$1.FC<IconCardProps>;

interface ServiceHighlightCardProps {
    imageUrl: string;
    altText?: string;
    title: string;
    description: string;
    titleColor?: string;
    className?: string;
}

declare const ServiceHighlightCard: React$1.FC<ServiceHighlightCardProps>;

interface PricingCardProps {
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

declare const PricingCard: React$1.FC<PricingCardProps>;

interface PricingCarouselProps {
    children: ReactNode;
    className?: string;
    arrowStyle?: CSSProperties;
}

declare const PricingCarousel: React$1.FC<PricingCarouselProps>;

interface AccordionItem {
    question: string;
    answer: string;
}
interface AccordionProps {
    questions: AccordionItem[];
    className?: string;
    colors?: {
        openTextColor?: string;
        closedTextColor?: string;
        openBg?: string;
        closedBg?: string;
    };
    arrow?: {
        width?: string;
        height?: string;
        fillOpen?: string;
        fillClosed?: string;
    };
}

declare const Accordion: React$1.FC<AccordionProps>;

interface ImageCarouselProps {
    images: string[];
    title?: string;
    interval?: number;
    imageWidth?: string;
    imageHeight?: string;
}

declare const ImageCarousel: ({ images, interval, imageWidth, imageHeight, }: ImageCarouselProps) => react_jsx_runtime.JSX.Element;

declare const theme: {
    colors: {
        primary: string;
        secondary: string;
        accent: string;
        highlight: string;
        neutral: {
            white: string;
            black: string;
            grey: string;
        };
        disabledBg: string;
        disabledText: string;
        disabledBorder: string;
    };
    typography: {
        fontFamily: string;
        fontSizeBase: string;
        fontSizeLg: string;
        headings: {
            h1: string;
            h2: string;
            h3: string;
        };
    };
    borders: {
        radiusXs: string;
        radiusSm: string;
        radiusMd: string;
        radiusLg: string;
    };
    shadows: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
};

declare const ThemeProvider: React$1.FC<{
    children: React$1.ReactNode;
    theme?: Partial<typeof theme>;
}>;

declare const useTheme: () => {
    colors: {
        primary: string;
        secondary: string;
        accent: string;
        highlight: string;
        neutral: {
            white: string;
            black: string;
            grey: string;
        };
        disabledBg: string;
        disabledText: string;
        disabledBorder: string;
    };
    typography: {
        fontFamily: string;
        fontSizeBase: string;
        fontSizeLg: string;
        headings: {
            h1: string;
            h2: string;
            h3: string;
        };
    };
    borders: {
        radiusXs: string;
        radiusSm: string;
        radiusMd: string;
        radiusLg: string;
    };
    shadows: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
};

interface Theme {
    primaryColor: string;
    secondaryColor?: string;
    fontFamily?: string;
}
interface ThemeProviderProps {
    theme?: Partial<Theme>;
    children: React$1.ReactNode;
}

export { Accordion, FullScreenHero, HeroCarousel, HeroContentWrapper, IconCard, ImageCarousel, Navbar, PricingCard, PricingCarousel, ScrollIndicator, Separator, ServiceCard, ServiceHighlightCard, SideBar, SimpleButton, TestimonialCard, ThemeProvider, theme, useTheme };
export type { Theme, ThemeProviderProps };
