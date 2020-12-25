const OFF = 0
const WARN = 1
const ERROR = 2

module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'airbnb',
		'airbnb/hooks',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'prettier/@typescript-eslint',
		'prettier/react',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.tsx', '.ts', '.js', '.json'],
			},
		},
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'@typescript-eslint/no-useless-constructor': ERROR,
		'@typescript-eslint/no-empty-function': WARN,
		'@typescript-eslint/no-var-requires': OFF,
		'@typescript-eslint/explicit-function-return-type': OFF,
		'@typescript-eslint/explicit-module-boundary-types': OFF,
		'@typescript-eslint/no-explicit-any': OFF,
		'no-use-before-define': OFF,
		'@typescript-eslint/no-use-before-define': [ERROR],

		'react/jsx-filename-extension': [ERROR, { extensions: ['.tsx', 'ts', '.jsx', 'js'] }],
		'react/jsx-indent-props': [ERROR, 2],
		'react/jsx-indent': [ERROR, 2],
		'react/jsx-one-expression-per-line': OFF,
		'react/destructuring-assignment': OFF,
		'react/state-in-constructor': OFF,
		'react/jsx-props-no-spreading': OFF,
		'react/prop-types': OFF,

		'jsx-a11y/click-events-have-key-events': OFF,
		'jsx-a11y/no-noninteractive-element-interactions': OFF,

		'lines-between-class-members': [ERROR, 'always'],
		'linebreak-style': [ERROR, 'unix'],
		quotes: [ERROR, 'single'],
		semi: [ERROR, 'never'],
		'no-unused-expressions': WARN,
		'no-plusplus': OFF,
		'no-console': OFF,
		'class-methods-use-this': ERROR,
		'jsx-quotes': [ERROR, 'prefer-single'],
		'global-require': OFF,
	},
}
