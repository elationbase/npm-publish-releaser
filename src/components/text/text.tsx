import { cn } from '../../utils';
import type { TextProps } from './text.types';

/**
 * Text component for all type variants
 */
export function Text({
  size = 'body3',
  color = 'text1',
  weight,
  as: Tag,
  className,
  children,
  ...props
}: TextProps) {
  if (!Tag) {
    switch (size) {
      case 'title1':
        Tag = 'h1';
        break;
      case 'title2':
        Tag = 'h2';
        break;
      case 'title3':
        Tag = 'h3';
        break;
      case 'title4':
        Tag = 'h4';
        break;
      case 'body1':
      case 'body2':
      case 'body3':
      case 'body4':
      case 'body5':
      case 'body6':
      default:
        Tag = 'p';
        break;
    }
  }

  const sizeVariantClass = {
    title1: 'ak-text-title1 ak-font-bold',
    title2: 'ak-text-title2 ak-font-bold',
    title3: 'ak-text-title3 ak-font-bold',
    title4: 'ak-text-title4 ak-font-bold',
    body1: 'ak-text-body1 ak-font-medium',
    body2: 'ak-text-body2 ak-font-medium',
    body3: 'ak-text-body3 ak-font-medium',
    body4: 'ak-text-body4 ak-font-medium',
    body5: 'ak-text-body5 ak-font-medium',
    body6: 'ak-text-body6 ak-font-medium',
  };

  const colorVariantClass = {
    text1: 'ak-text-text1',
    text2: 'ak-text-text2',
    text3: 'ak-text-text3',
    text4: 'ak-text-text4',
    primary: 'ak-text-primary',
    secondary: 'ak-text-secondary',
    success: 'ak-text-success',
    warning: 'ak-text-warning',
    error: 'ak-text-error',
  };

  const weightVariantClass = {
    light: 'ak-font-light',
    medium: 'ak-font-medium',
    bold: 'ak-font-bold',
  };

  const weightClass = weight ? weightVariantClass[weight] : '';

  return (
    <Tag
      className={cn(
        `ak-flex ak-flex-1 ak-text-ellipsis ak-font-sans ${colorVariantClass[color]} ${weightClass} ${sizeVariantClass[size]}`,
        className
      )}
      {...props}>
      {children}
    </Tag>
  );
}
