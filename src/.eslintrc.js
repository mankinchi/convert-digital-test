module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['airbnb', 'airbnb/hooks', 'airbnb-typescript'],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'@typescript-eslint/indent': ['error', 'tab'],
		'import/prefer-default-export': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		'linebreak-style': 'off',
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'react/function-component-definition': 'off',
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-indent': ['error', 'tab'],
		'react/react-in-jsx-scope': 'off',
		'react/require-default-props': 'off',
	},
};
