import path from 'path';

import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
	stories: ['../**/*.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
	webpackFinal: (config) => {
		config.resolve!.alias = {
			...(config.resolve?.alias || {}),
			'@': path.resolve(__dirname, '../src'),
		};

		return config
	},
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@storybook/addon-interactions',
	],
	framework: {
		name: '@storybook/react-webpack5',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
};
export default config;
