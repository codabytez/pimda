// Components Types

interface CountdownProps {
  endTime: Date;
  style?: {
    timeAboveLabel?: boolean;
    rounded?: boolean;
    noSeparator?: boolean;
  };
}

interface NavbarProps {
  isLoggedIn: boolean;
  savedItemsCount: number;
  cartItemsCount: number;
}

interface productCategoriesProps {
  limit?: number;
  showMore?: boolean;
  className?: string;
}

interface serviceProps {
  image: string;
  title: string;
  description: string;
}

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  socials: {
    twitter: string;
    instagram?: string;
    linkedin?: string;
  };
}

interface topProduct {
  id: number;
  name: string;
  image: string;
  category: string;
}

interface whyusProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

// Components / UI Types

interface BreadCrumbProps {
  homeElement: ReactNode;
  separator: ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
}

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  href?: string;
  spinnerColor?: string;
  spinnerSize?: string | number;
  variant?: "primary" | "secondary" | "tertiary" | "text";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

interface itemProps {
  name: string;
  price: number;
  images: string[];
  discount?: number;
  variants?: string[];
  rating?: number;
  totalRatings?: number;
  isNew?: boolean;
}

interface CartProps {
  item: itemProps;
  isNew?: boolean;
  isHot?: boolean;
  showDiscount?: boolean;
  isRed?: boolean;
  isFavorite?: boolean;
  ratingPosition?: "side" | "below";
}

// Navbar dropdown
interface DropdownProps {
  icon: React.ReactNode;
  title: string;
  items: Array<{
    icon?: React.ReactNode;
    label: string;
    href?: string;
    danger?: boolean;
  }>;
}

interface ToastProps {
  message: string;
  position?: ToastPosition;
  autoClose?: number | false;
  hideProgressBar?: boolean;
  closeOnClick?: boolean;
  pauseOnHover?: boolean;
  draggable?: boolean;
  progress?: number | undefined;
  type?: TypeOptions;
  theme?: Theme;
}

type Variant = "default" | "primary" | "secondary" | "tertiary";
type Size = "sm" | "md" | "lg";

interface SelectInputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Array<{ value: string; label: string; disabled?: boolean }>;
  isLoading?: boolean;
  disabled?: boolean;
  href?: string;
  caretColor?: string;
  caretSize?: string | number;
  leftIcon?: React.ReactNode;
  optionColor?: string;
  variant?: Variant;
  inputSize?: Size;
  fullWidth?: boolean;
}

interface TextInputProps {
  onChange?: any;
  isLoading?: boolean;
  disabled?: boolean;
  iconColor?: string;
  iconSize?: string | number;
  type?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  placeholder?: string;
  isPasswordVisible?: boolean;
  variant?: Variant;
  inputSize?: Size;
  inputType?: "input" | "textarea";
  fullWidth?: boolean;
  rows?: number;
}

interface StarProps {
  fill: "full" | "half" | "empty";
}

interface StarRatingProps {
  rating: number;
  totalRatings: number;
}

interface SpinnerProps {
  color?: string;
}
