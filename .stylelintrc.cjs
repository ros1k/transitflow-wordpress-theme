module.exports = {
    extends: [
        '@roots/bud-sass/config/stylelint',
    ],
    rules: {
      'import-notation': null,
      'no-empty-source': null,
      "media-feature-name-no-unknown": [true, {
        "ignoreMediaFeatureNames": ["min-width"]
      }]
    },
  };