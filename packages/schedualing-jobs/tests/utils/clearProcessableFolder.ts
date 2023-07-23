import { MOCK_DOCS_PATH } from './docsPath';

import fs from 'fs';
import path from 'path';

export const clearProcessableFolder = () => {
  // function to delete txt files from processable folder
  // get txt files from processable folder
  const txtFiles = fs
    .readdirSync(path.join(MOCK_DOCS_PATH, 'processable'))
    .filter((file) => file.endsWith('.txt'));
  // delete txt files from processable folder
  txtFiles.forEach((file) => {
    fs.unlinkSync(path.join(MOCK_DOCS_PATH, file));
  });
};
