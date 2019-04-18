module.exports = {
	'env': {
		'commonjs': true,
		'es6': true,
		'node': true
	},
	"plugins": [
		"jsdoc"
	],
	'extends': 'eslint:recommended',
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'parserOptions': {
		'ecmaVersion': 2018
	},
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		],
		"require-jsdoc": ["error", {
			"require": {
				"FunctionDeclaration": true,
				"ArrowFunctionExpression": true,
				"FunctionExpression": true
			}
		}],
		"jsdoc/check-alignment": 1,
		"jsdoc/check-examples": 1,
		"jsdoc/check-indentation": 1,
		"jsdoc/check-param-names": 1,
		"jsdoc/check-syntax": 1,
		"jsdoc/check-tag-names": 1,
		"jsdoc/check-types": 1,
		"jsdoc/newline-after-description": 1,
		"jsdoc/no-undefined-types": 1,
		"jsdoc/require-description": 1,
		"jsdoc/require-description-complete-sentence": 1,
		"jsdoc/require-example": 1,
		"jsdoc/require-hyphen-before-param-description": 1,
		"jsdoc/require-param": 1,
		"jsdoc/require-param-description": 1,
		"jsdoc/require-param-name": 1,
		"jsdoc/require-param-type": 1,
		"jsdoc/require-returns": 1,
		"jsdoc/require-returns-check": 1,
		"jsdoc/require-returns-type": 1,
		"jsdoc/valid-types": 1
	}
}