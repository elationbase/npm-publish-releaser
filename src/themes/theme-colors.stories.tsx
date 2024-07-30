const meta = {
  title: 'Theme/Colors',
};

export default meta;

function ThemeColor({
  color,
  name,
  tailwindName,
}: {
  color: string;
  name: string;
  tailwindName: string;
}) {
  return (
    <>
      <div
        style={{ backgroundColor: color }}
        className="ak-title flex-row ak-w-full ak-rounded-md ak-border ak-border-text4 ak-p-6 ak-font-mono ak-shadow-md">
        <span className="ak-rounded-md ak-bg-surface1 ak-px-2 ak-py-1 ak-capitalize">
          {name}
        </span>
      </div>
      <div className="ak-mb-8 ak-flex ak-justify-between ak-rounded-md ak-p-1">
        <div className="ak-font-mono ak-text-sm">
          <span className="ak-color-text4 ak-text-xs ak-font-bold">
            tailwindName:{' '}
          </span>
          {tailwindName}
        </div>
        <div className="ak-text-right ak-font-mono ak-text-sm">
          <span className="ak-color-text4 ak-text-xs ak-font-bold">
            CSS var:{' '}
          </span>
          {color}
        </div>
      </div>
    </>
  );
}

export const Colors = () => {
  return (
    <div className="ak-p-10">
      <h3 className="ak-pb-4 ak-text-2xl ak-font-bold">Base</h3>
      <ThemeColor
        color="var(--color-primary)"
        name="primary"
        tailwindName="ak-color.primary"
      />
      <ThemeColor
        color="var(--color-secondary)"
        name="secondary"
        tailwindName="ak-color.secondary"
      />

      <h3 className="ak-pb-4 ak-text-2xl ak-font-bold">Backgrounds</h3>
      <ThemeColor
        color="var(--color-surface1)"
        name="surface1"
        tailwindName="ak-color.surface1"
      />
      <ThemeColor
        color="var(--color-surface2)"
        name="surface2"
        tailwindName="ak-color.surface2"
      />
      <ThemeColor
        color="var(--color-surface3)"
        name="surface3"
        tailwindName="ak-color.surface3"
      />

      <h3 className="ak-pb-4 ak-text-2xl ak-font-bold">Text</h3>
      <ThemeColor
        color="var(--color-text1)"
        name="text1"
        tailwindName="ak-color.text1"
      />
      <ThemeColor
        color="var(--color-text2)"
        name="text2"
        tailwindName="ak-color.text2"
      />
      <ThemeColor
        color="var(--color-text3)"
        name="text3"
        tailwindName="ak-color.text3"
      />
      <ThemeColor
        color="var(--color-text4)"
        name="text4"
        tailwindName="ak-color.text4"
      />

      <h3 className="ak-pb-4 ak-text-2xl ak-font-bold">Utilities</h3>
      <ThemeColor
        color="var(--color-success)"
        name="success"
        tailwindName="ak-color.success"
      />
      <ThemeColor
        color="var(--color-error)"
        name="error"
        tailwindName="ak-color.error"
      />
      <ThemeColor
        color="var(--color-warning)"
        name="warning"
        tailwindName="ak-color.warning"
      />
      <ThemeColor
        color="var(--color-white)"
        name="white"
        tailwindName="ak-color.white"
      />
      <ThemeColor
        color="var(--color-black)"
        name="black"
        tailwindName="ak-color.black"
      />
    </div>
  );
};
