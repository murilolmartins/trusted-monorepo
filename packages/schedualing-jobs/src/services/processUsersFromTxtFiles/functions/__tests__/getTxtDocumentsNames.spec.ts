import {
  clearProcessableFolder,
  createMockDocsFolder,
  deleteMockDocsFolder
} from '../../../../../tests/utils';
import { MOCK_DOCS_PATH } from '../../../../../tests/utils/docsPath';
// import { MOCK_DOCS_PATH } from '../../../../../tests/utils/docsPath';
import { getTxtDocumentsNames } from '../getTxtDocumentsNames';

import fs from 'fs';
import path from 'path';

beforeAll(() => {
  createMockDocsFolder();
});

beforeEach(() => {
  clearProcessableFolder();
});

afterAll(() => {
  deleteMockDocsFolder();
});

describe('getTxtDocumentsNames', () => {
  it('should return an array with the txt files names', () => {
    const files = ['file1.txt', 'file2.txt', 'file3.md'];

    files.forEach((file) =>
      fs.writeFileSync(path.join(MOCK_DOCS_PATH, 'processable', file), '')
    );

    const result = getTxtDocumentsNames(
      path.join(MOCK_DOCS_PATH, 'processable')
    );

    expect(result.length).toBe(2);
    expect(result).toEqual(['file1.txt', 'file2.txt']);
  });
});
