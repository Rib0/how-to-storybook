import React from 'react';
import type { Preview } from '@storybook/react';
import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			expanded: true,
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		docs: {
			toc: true, // Добавляет на страницу документации справа навигацию по историям
			page: () => ( // можно настраивать структуру страницы документации
				<>
				  <Title />
				  <Subtitle />
				  <Description />
				  <Primary />
				  <Controls />
				  <Stories />
				</>
			  ),
		},
	},
};

export default preview;
