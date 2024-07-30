import { cn } from '@/utils/cn';
import { forwardRef } from 'react';
import { Icon } from '../icon';
import type { ActionProps } from './action.types';

/**
 * Primary Action component for user interaction
 */
export const Action = forwardRef(
  (
    {
      variant = 'primary',
      size = 'medium',
      type = 'button',
      as: Tag = 'button',
      className,
      isFullWidth,
      icon,
      iconPosition = 'left',
      children,
      ...props
    }: ActionProps,
    ref
  ) => {
    const sizes = {
      small: 'ak-text-body4',
      medium: 'ak-text-body3',
      large: 'ak-text-body2',
    };

    const variants = {
      primary:
        'ak-bg-primary ak-border-primary hover:ak-bg-primary-hover ak-text-white hover:ak-text-white ak-border',
      secondary:
        'ak-border ak-border-primary hover:ak-bg-primary ak-text-primary hover:ak-text-white',
      error:
        'ak-border ak-border-error ak-bg-error hover:ak-bg-error ak-text-white hover:ak-text-white',
      success:
        'ak-border ak-border-success ak-bg-success hover:ak-bg-success ak-text-white hover:ak-text-white',
      warning:
        'ak-border ak-border-warning ak-bg-warning hover:ak-bg-warning ak-text-white hover:ak-text-white',
      ghost:
        'ak-border ak-border-transparent ak-bg-transparent hover:ak-bg-transparent ak-text-primary hover:ak-text-primary hover:ak-underline',
      link: 'ak-border ak-border-transparent ak-bg-transparent hover:ak-bg-transparent ak-text-primary hover:ak-text-primary hover:ak-underline',
    };

    const iconSize = {
      small: 20,
      medium: 24,
      large: 32,
    };

    const iconPaddingSize = {
      small: 'ak-m-1',
      medium: 'ak-m-2',
      large: 'ak-m-3',
    };

    let typeProp = {};
    if (Tag === 'button') {
      typeProp = { type };
    }

    return (
      <Tag
        ref={ref}
        className={cn(
          `ak-inline-flex ak-items-center ak-justify-center ak-rounded ak-font-sans ak-no-underline ak-transition-colors disabled:ak-pointer-events-none disabled:ak-opacity-70 disabled:hover:ak-text-text1 ${sizes[size]} ${variants[variant]}`,
          {
            'ak-px-4 ak-py-2':
              size === 'small' && variant !== 'link' && children,
            'ak-px-5 ak-py-3':
              size === 'medium' && variant !== 'link' && children,
            'ak-px-6 ak-py-4':
              size === 'large' && variant !== 'link' && children,
            'ak-w-full': isFullWidth,
            'ak-flex-row-reverse': iconPosition === 'right',
          },
          className
        )}
        {...typeProp}
        {...props}>
        {icon && (
          <Icon
            name={icon}
            size={iconSize[size]}
            className={cn('', {
              [iconPaddingSize[size]]: !children,
              'ak--mr-1': children && iconPosition === 'right',
              'ak--ml-1': children && iconPosition === 'left',
            })}
          />
        )}
        {children}
      </Tag>
    );
  }
);
