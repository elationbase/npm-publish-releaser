import { Icon } from '@/components';
import * as IconComponents from '@/icons';
import type { IconNameTypes } from '@/types';

const meta = {
  title: 'Theme/Icons',
};

export default meta;

function ThemeIcon({ icon }: { icon: string }) {
  return (
    <div className="ak-p4 ak-flex ak-size-40 ak-flex-col ak-items-center ak-justify-center ak-rounded-md ak-bg-surface2 ak-shadow-lg">
      <Icon name={icon as IconNameTypes} size={100} />
      <div className="ak-font-mono ak-text-body4">{icon}</div>
    </div>
  );
}

export const Icons = () => {
  const iconList = Object.keys(IconComponents).map((icon) => icon);

  return (
    <div className="ak-flex ak-flex-row ak-flex-wrap ak-gap-4">
      {iconList.map((icon) => (
        <ThemeIcon icon={icon} key={icon} />
      ))}
    </div>
  );
};
