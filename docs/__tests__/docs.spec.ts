/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const DOCS_PATH = path.resolve(__dirname, '..');

describe('docs', () => {
  it('should exist processable folder', () => {
    const exist = fs.existsSync(DOCS_PATH);

    expect(exist).toBe(true);
  });

  it('should exist users folder', () => {
    const exist = fs.existsSync(path.join(DOCS_PATH, 'users'));

    expect(exist).toBe(true);
  });

  it('should exist user.json file', () => {
    const exist = fs.existsSync(path.join(DOCS_PATH, 'users', 'users.json'));

    expect(exist).toBe(true);
  });

  it('should exist procesed folder', () => {
    const exist = fs.existsSync(path.join(DOCS_PATH, 'processed'));

    expect(exist).toBe(true);
  });
});
