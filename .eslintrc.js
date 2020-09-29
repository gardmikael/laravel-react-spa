module.exports = {
	extends: "eslint:recommended",
	env: {
		"browser": true,
		"node": true,
		"es6": true
	},
	ecmaFeatures: {
		jsx: true
	},
	globals: {
		"$": false
	},
	plugins: ["react"],
	rules: {
		"brace-style": [2, "1tbs"],
		"comma-style": 2,
		"eol-last": 0,
		"indent": [2, "tab", {"SwitchCase": 1}],
		"jsx-quotes": 2,
		"no-console": 0,
		"no-else-return": 2,
		"no-mixed-spaces-and-tabs": [2, "smart-tabs"],
		"no-multi-spaces": 0,
		"no-throw-literal": 2,
		"no-underscore-dangle": 0,
		"react/jsx-boolean-value": 2,
		"react/jsx-curly-spacing": 2,
		"react/jsx-indent-props": [2, "tab"],
		"react/jsx-no-bind": 2,
		"react/jsx-no-duplicate-props": 2,
		"react/jsx-no-undef": 2,
		"react/jsx-uses-react": 2,
		"react/jsx-uses-vars": 2,
		"react/no-danger": 2,
		"react/no-did-mount-set-state": 2,
		"react/no-did-update-set-state": 2,
		"react/no-direct-mutation-state": 2,
		"react/no-multi-comp": 2,
		"react/no-unknown-property": 2,
		"react/react-in-jsx-scope": 2,
		"react/require-extension": [2, { "extensions": [".js", ".jsx"] }],
		"react/self-closing-comp": 2,
		"react/wrap-multilines": 2,
		"strict": [2, "global"]
	}
}
