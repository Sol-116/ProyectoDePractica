module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	settings: { react: { version: '18.2' } },
	plugins: ['react-refresh'],
	rules: {
		"space-before-function-paren": "off",
		"no-unused-vars": "warn",
		"no-multiple-empty-lines": "off",
		"no-tabs": "off",
		"indent": [
			"warn",
			"tab"
		],
		"quotes": [
			"warn",
			"single"
		],
		"jsx-quotes": [
			"warn",
			"prefer-single"
		],
		"eol-last": "off"
	}
}
