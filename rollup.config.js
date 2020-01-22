import cjs from 'rollup-plugin-commonjs'; // Convert CommonJS modules to ES6
import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import babel from 'rollup-plugin-babel';
import node from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';

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
	}
];
