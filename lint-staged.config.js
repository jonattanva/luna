module.exports = {
  '*.{mjs,ts,tsx}': [
    'prettier --write',
    'eslint --config eslint.config.mjs --fix',
  ],
  '*.{json,md,css,html,yml}': ['prettier --write'],
}
