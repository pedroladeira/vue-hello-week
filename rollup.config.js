import cjs from 'rollup-plugin-commonjs'; // Convert CommonJS modules to ES6
import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import node from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import fs from 'fs';

export default [
	{
		input: 'src/plugin.js',
		output: {
			format: 'umd',
			file: 'dist/vue-hello-week.min.js'
		},
		plugins: [
			cjs(),
			node(),
			postcss({
				extensions: ['.css'],
			}),
			vue({
				css: true,
			}),
		]
	},
	{
		input: 'src/plugin.js',
		output: {
			format: 'umd',
			file: 'dist/vue-hello-week.js'
		},
		plugins: [
			cjs(),
			node(),
			postcss({
				extensions: ['.css'],
			}),
			vue({
				css: true,
			}),
		]
	},
	{
		input: 'src/plugin.js',
		output: {
			format: 'cjs',
			file: 'dist/vue-hello-week.common.js'
		},
		plugins: [
			cjs(),
			node(),
			postcss({
				extensions: ['.css'],
			}),
			vue({
				css: true,
			}),
		]
	},
	{
		input: 'src/plugin.js',
		output: {
			format: 'es',
			file: 'dist/vue-hello-week.esm.js'
		},
		plugins: [
			cjs(),
			node(),
			postcss({
				extensions: ['.css'],
			}),
			vue({
				css: true,
			}),
		]
	},
	// copy all hello-week languages
	{
		input: fs.readdirSync('node_modules/hello-week/src/langs').map(e => 'node_modules/hello-week/src/langs/' + e),
		output: {
			format: 'es',
			dir: 'dist/langs/'
		},
		plugins: [
			typescript({}),
			resolve({
				jsnext: true,
				main: true,
				browser: true
			}),
			json(),
			cjs(),
			terser()
		]
	}
];
