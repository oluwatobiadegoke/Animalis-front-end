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

export interface LinkProps {
  to: string;
  exact?: boolean;
  children: React.ReactNode;
  className: string;
  activeClassName?: string;
  inactiveClassName?: string;
}
