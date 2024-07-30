import type { Preview } from "@storybook/react";
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import './styles.css';


const preview: Preview = {
  decorators: [
    withThemeByDataAttribute({
      themes: {
        'elationbase light': 'elationbase-light',
        'elationbase dark': 'elationbase-dark',
      },
      defaultTheme: 'elationbase light',
      attributeName: 'data-theme',
    }),
  ],
  parameters: {
    backgrounds: {
      disable: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
