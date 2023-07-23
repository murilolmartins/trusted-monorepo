module.exports = {
  // This will lint and format TypeScript and JavaScript files
  './**/*.(ts|tsx|js|jsx)': (filenames) => [
    `yarn prettier --write ${filenames.join(' ')}`,
    `yarn eslint --fix ${filenames.join(' ')} --max-warnings=0`
  ],

  './**/*.(ts|tsx)': (filenames) => [
    `yarn tsc --noEmit ${filenames.join(' ')}`
  ],

  // This will Format MarkDown and JSON
  './**/*.(md|json)': (filenames) =>
    `yarn prettier --write ${filenames.join(' ')}`,

  // This will sort package.json
  '**/package.json': 'npx sort-package-json'
};
