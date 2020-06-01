// https://prettier.io/docs/en/integrating-with-linters.html#stylelint
// https://github.com/hudochenkov/stylelint-order
module.exports = {
	root: true,

	extends: [
		"stylelint-config-standard",
		"stylelint-prettier/recommended",
	],

	plugins: [
		"stylelint-order",
	],

	rules: {
		"order/order": [
			"custom-properties",
			"declarations",
		],
		"order/properties-alphabetical-order": true,
	},
};
