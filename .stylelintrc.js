// https://prettier.io/docs/en/integrating-with-linters.html#stylelint
// https://github.com/stylelint/awesome-stylelint
module.exports = {
	root: true,

	extends: [
		"stylelint-config-recommended",
		"stylelint-config-sass-guidelines",
		"stylelint-prettier/recommended",
	],
};
