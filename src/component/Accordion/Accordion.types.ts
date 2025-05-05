export interface AccordionItem {
    question: string;
    answer: string;
  }
  
  export interface AccordionProps {
    title?: string;
    questions: AccordionItem[];
    openColor?: string; // overrides theme.colors.primary
    className?: string;
  }
  