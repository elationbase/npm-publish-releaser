const meta = {
  title: 'Theme/Typography',
};

export default meta;

function ThemeType({
  tailwindName,
  children,
}: {
  tailwindName: string;
  children: React.ReactNode;
}) {
  return (
    <div className="ak-mb-4 ak-p-1">
      <div className="ak-font-mono ak-text-sm ak-text-text2">
        className: {tailwindName}
      </div>
      {children}
    </div>
  );
}

const TEXT_STRING = 'The quick brown fox jumps over the lazy dog';

export const Family = () => {
  return (
    <div className="ak-p-10">
      <h3 className="ak-mb-3 ak-border-b-2 ak-pb-1 ak-text-2xl ak-font-bold ak-text-text2">
        Type Families
      </h3>
      <ThemeType tailwindName="ak-font-sans">
        <h1 className="ak-font-sans ak-text-title3">{TEXT_STRING}</h1>
      </ThemeType>
      <ThemeType tailwindName="ak-font-mono">
        <h1 className="ak-font-mono ak-text-title3">{TEXT_STRING}</h1>
      </ThemeType>
    </div>
  );
};

export const Sizes = () => {
  return (
    <div className="ak-p-10">
      <h3 className="ak-mb-3 ak-border-b-2 ak-pb-1 ak-text-2xl ak-font-bold ak-text-text2">
        Title Text
      </h3>
      <ThemeType tailwindName="ak-text-title1">
        <h1 className="ak-text-title1">{TEXT_STRING}</h1>
      </ThemeType>
      <ThemeType tailwindName="ak-text-title2">
        <h2 className="ak-text-title2">{TEXT_STRING}</h2>
      </ThemeType>
      <ThemeType tailwindName="ak-text-title3">
        <h3 className="ak-text-title3">{TEXT_STRING}</h3>
      </ThemeType>
      <ThemeType tailwindName="ak-text-title4">
        <h4 className="ak-text-title4">{TEXT_STRING}</h4>
      </ThemeType>
      <h3 className="ak-mb-3 ak-mt-10 ak-border-b-2 ak-pb-1 ak-text-2xl ak-font-bold ak-text-text2">
        Body Text
      </h3>
      <ThemeType tailwindName="ak-text-body1">
        <p className="ak-text-body1">{TEXT_STRING}</p>
      </ThemeType>
      <ThemeType tailwindName="ak-text-body2">
        <p className="ak-text-body2">{TEXT_STRING}</p>
      </ThemeType>
      <ThemeType tailwindName="ak-text-body3">
        <p className="ak-text-body3">{TEXT_STRING}</p>
      </ThemeType>
      <ThemeType tailwindName="ak-text-body4">
        <p className="ak-text-body4">{TEXT_STRING}</p>
      </ThemeType>
      <ThemeType tailwindName="ak-text-body5">
        <p className="ak-text-body5">{TEXT_STRING}</p>
      </ThemeType>
      <ThemeType tailwindName="ak-text-body6">
        <p className="ak-text-body6">{TEXT_STRING}</p>
      </ThemeType>
    </div>
  );
};

export const Weights = () => {
  return (
    <div className="ak-p-10">
      <h3 className="ak-mb-3 ak-border-b-2 ak-pb-1 ak-text-2xl ak-font-bold ak-text-text2">
        Type Weights
      </h3>
      <ThemeType tailwindName="ak-font-light">
        <h1 className="ak-text-title2 ak-font-light">{TEXT_STRING}</h1>
      </ThemeType>
      <ThemeType tailwindName="ak-font-medium">
        <h1 className="ak-text-title2 ak-font-medium">{TEXT_STRING}</h1>
      </ThemeType>
      <ThemeType tailwindName="ak-font-bold">
        <h1 className="ak-text-title2 ak-font-bold">{TEXT_STRING}</h1>
      </ThemeType>
    </div>
  );
};
