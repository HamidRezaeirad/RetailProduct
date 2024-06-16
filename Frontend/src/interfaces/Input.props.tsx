export interface InputProps {
  type?: string;
  className?: string;
  name?: string;
  placeholder?: string;
  lable?: string;
  value?: string;
  ariaLabel?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
