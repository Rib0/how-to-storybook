import type { Meta, StoryObj } from '@storybook/react';

import HomePage from './home';

const meta: Meta<typeof HomePage> = {
    title: 'Design System/Pages/Home', // grouping stories by their names
    component: HomePage,
};

export default meta;
type Story = StoryObj<typeof HomePage>;

export const Home: Story = {
    args: {
        text: 'This is page text',
    },
}