// https://prettier.io/docs/en/integrating-with-linters.html#stylelint
// https://github.com/hudochenkov/stylelint-order
module.exports = {
	root: true,

	extends: [
		"stylelint-config-standard",
		"stylelint-prettier/recommended",
	],

	plugins: [
		"stylelint-scss",
		"stylelint-order",
	],

	rules: {
		"order/order": [
			"custom-properties",
			"declarations",
		],
		"order/properties-alphabetical-order": true,
		'at-rule-no-unknown': null,
		'scss/at-rule-no-unknown': true,
	},
};
