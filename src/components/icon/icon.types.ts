import type { IconNameTypes } from '@/types';

export type IconProps = {
  size?: string | number;
  fill?: string;
  name: IconNameTypes;
  ariaLabel?: string;
} & React.SVGProps<SVGSVGElement>;
