export interface IBtnProps {
  onClick?: () => void;
  children: unknown;
  className?: string;
  type?: "primary" | "secondary";
  link?: string;
  disabled?: boolean;
  width?: string;
  height?: string;
  fontSize?: string;
}
