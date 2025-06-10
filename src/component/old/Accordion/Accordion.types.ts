export interface AccordionItem {
  question: string;
  answer: string;
}

export interface AccordionProps {
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
