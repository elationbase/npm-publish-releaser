import type { TextColorTypes, FontSizeTypes, FontWeightTypes } from '@/types';
export type TextProps = {
  /*
   * The Size of the text
   */
  size?: FontSizeTypes;
  /*
   * The Color of the text
   */
  color?: TextColorTypes;
  /*
   * The Weight of the text
   */
  weight?: FontWeightTypes;
  /*
   * The HTML tag to render
   */
  as?: React.ElementType;
} & React.HTMLAttributes<HTMLElement>;
