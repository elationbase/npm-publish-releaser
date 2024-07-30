import type { IconNameTypes } from '@/types';

type ActionBaseProps = {
  /**
   * Call to action on the page
   */
  variant?:
    | 'primary'
    | 'secondary'
    | 'error'
    | 'success'
    | 'warning'
    | 'ghost'
    | 'link';
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Optional HTML tag
   */
  as?: React.ElementType;
  /**
   * Is the Action full width?
   */
  isFullWidth?: boolean;
  /**
   * The icon to display
   */
  icon?: IconNameTypes;
  /**
   * The position of the icon
   */
  iconPosition?: 'left' | 'right';
  /**
   * The content of the button
   */
  type?: 'button' | 'submit' | 'reset';
  /**
   * The ref to the button
   */
  ref?: React.Ref<HTMLButtonElement | HTMLAnchorElement>;
};

export type ActionProps = ActionBaseProps &
  (
    | React.ButtonHTMLAttributes<HTMLButtonElement>
    | React.AnchorHTMLAttributes<HTMLAnchorElement>
    | React.HTMLAttributes<HTMLSpanElement>
  );
