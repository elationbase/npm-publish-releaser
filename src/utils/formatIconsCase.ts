import type { IconNameTypes, IconComponentsTypes } from '../types';

export function formatIconsCase(icon: IconNameTypes): IconComponentsTypes {
  const ans = icon.toLowerCase().charAt(0).toUpperCase() + icon.slice(1);

  return ans
    .split('-')
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join('') as IconComponentsTypes;
}
