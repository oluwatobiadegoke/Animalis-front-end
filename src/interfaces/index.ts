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

export interface IInputProps {
  label: string;
  name: string;
  type?: string;
}

export interface formValues {
  password: string;
  username: string;
}

export type Media = {
  link: string;
  type: string;
};

export type Comments = {
  userId: string;
  username: string;
  _id: string;
  text: string;
  date: Date;
};

interface Likes {
  userId: string;
}

export interface PostProps {
  _id: string;
  userId: string;
  username: string;
  userAvatar: string;
  words: string;
  media: Media[];
  likes: Likes[];
  comments: Comments[];
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  userId: string;
  username: string;
  email: string;
  avatar: string;
  bio: string;
}
