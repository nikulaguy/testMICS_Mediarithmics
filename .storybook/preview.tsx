import type { Preview } from '@storybook/react-vite';
import { ConfigProvider } from 'antd';
import { micsTheme } from '../src/theme/micsTheme';
import '../src/index.css';

/**
 * Toutes les stories sont rendues dans le thème MICS : ce que l'on voit ici est
 * exactement ce que rend le produit, tokens compris.
 */
const preview: Preview = {
  decorators: [
    (Story) => (
      <ConfigProvider theme={micsTheme}>
        <div style={{ fontFamily: 'Circular, -apple-system, sans-serif', fontSize: 12, padding: 24 }}>
          <Story />
        </div>
      </ConfigProvider>
    ),
  ],
  parameters: {
    options: {
      storySort: {
        order: [
          'Design System',
          [
            'Introduction',
            'Passation',
            'Tokens',
            ['Fondations', 'Semantiques', 'Primitives', 'Echelle', 'Typographie'],
            'Patterns',
          ],
          'Composants',
        ],
      },
    },
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    a11y: { test: 'todo' },
  },
};

export default preview;
