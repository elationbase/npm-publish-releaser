import * as IconComponents from '@/icons';
import { formatIconsCase } from '@/utils';
import { createElement } from 'react';
import type { IconProps } from './icon.types';

export function Icon({
  name = 'user',
  size,
  fill,
  ariaLabel,
  ...props
}: IconProps) {
  const iconName = formatIconsCase(name);

  if (IconComponents[iconName]) {
    return createElement(IconComponents[iconName], {
      fill,
      size,
      ariaLabel,
      ...props,
    });
  }

  return null;
}
