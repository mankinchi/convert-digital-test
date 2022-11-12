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
		project: './src/tsconfig.json',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'import/prefer-default-export': 'off',
		'linebreak-style': 'off',
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'react/react-in-jsx-scope': 'off',
		'react/jsx-indent': ['error', 'tab'],
		'@typescript-eslint/indent': ['error', 'tab'],
	},
};
