import type { Preview } from '@storybook/nextjs-vite'
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import '../src/app/globals.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'gray',
          value: '#f9fafb',
        },
        {
          name: 'dark',
          value: '#0a0a0a',
        },
      ],
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1024px',
            height: '768px',
          },
        },
        large: {
          name: 'Large Desktop',
          styles: {
            width: '1440px',
            height: '900px',
          },
        },
      },
    },
    a11y: {
      // Show a11y violations in the test UI only during development
      test: 'todo'
    }
  },
  decorators: [
          withThemeByDataAttribute({
            defaultTheme: "light",
            themes: {
                light: "light",
                dark: "dark",
            },
            attributeName: "class",
        }),
    ],
};


export default preview;