// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://streletskiy.github.io',
	integrations: [
		starlight({
			title: 'streletskiy/docs',
			locales: {
				root: {
					label: 'Русский',
					lang: 'ru-RU',
				},
			},
			customCss: [
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Главная',
					link: '/'
				},
				{
					label: 'Архитектурная визуализация',
					autogenerate: { directory: 'archviz' },
				},
			],
		}),
	],
	redirects: {
	  '/archviz-cams/': '/archviz/cams/',
	  'archviz-export-import/': '/archviz/export-import/',
	  '/archviz-natural-light/': '/archviz/natural-light/',
	  '/archviz-materials/': '/archviz/materials/',
	  '/archviz-dof/': '/archviz/dof/',
	}
});
