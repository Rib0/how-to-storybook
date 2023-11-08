import type { Decorator, Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

import Button from './button';

const decorators: Decorator[] = [
    (Story, { args }) => {
        const { size = 'unidentified', variant = 'unidentified' } = args as Record<string, string>;

        return (
            <div style={{ margin: '5px' }}>
                <div>button story with decorator with <b>{size}</b> size and <b>{variant}</b> variant</div>
                <Story />
            </div>
        )
    }
]

const meta: Meta<typeof Button> = {
    title: 'Design System/Components/Button', // grouping stories by their names
    component: Button,
    // tags: ['autodocs'], // можно включать autodocs, либо написать документация вручную с помощью mdx файлов
    argTypes: {
        variant: {
            description: 'Button variant',
            defaultValue: 'default',
            options: ['warning', 'error', 'default'],
            control: {
                type: 'radio'
            }
        },
        size: {
            description: 'Button size',
            defaultValue: 'medium',
            options: ['small', 'medium', 'large'],
            control: {
                type: 'radio'
            }
        },
        onClick: {
            description: 'Optional click handler',
            defaultValue: () => {}
        }
    }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    name: 'Default button',
    decorators,
    args: {
        variant: 'default',
        size: 'medium',
        children: 'button',
        onClick: () => console.log('button clicked')
    },
    parameters: { // задаем значения возможнох фоновых цветов для всего полотна
        backgrounds: {
            values: [
                { name: 'red', value: '#f00' },
                { name: 'green', value: '#0f0' },
                { name: 'blue', value: '#00f' },
            ]
        },
    },
    play: async ({ canvasElement }) => { // симулирует поведение пользователя после рендера истории
        const canvas = within(canvasElement);

        const button = canvas.getByRole('button');

        await userEvent.click(button, { delay: 1000 })
    }
}

export const Warning: Story = {
    name: 'Warning button',
    args: {
        ...Default.args,
        variant: 'warning',
    }
};

export const Error: Story = {
    name: 'Error button',
    args: {
        ...Default.args,
        variant: 'error',
    }
};

export const Small: Story = {
    args: {
        ...Default.args,
        size: 'small',
    }
};

export const Large: Story = {
    name: 'Large button',
    args: {
        ...Default.args,
        size: 'large',
    }
};