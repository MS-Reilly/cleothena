export type ButtonVariant = 'xs'|'sm' | 'md' | 'lg';
export type ButtonColor = 'primary' | 'secondary' | 'accent' | 'highlight';

export type SimpleButtonProps = {
  title: string;
  children?: React.ReactNode; // ✅ Made optional
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void; // ✅ Changed to <div>
  className?: string;
  disabled?: boolean;
  variant?: ButtonVariant; // ✅ Supports sm, md, lg
  color?: ButtonColor; // ✅ Supports primary, secondary, etc.
  outline?: boolean; // ✅ Outline variant
  ghost?: boolean; // ✅ Ghost variant
};
