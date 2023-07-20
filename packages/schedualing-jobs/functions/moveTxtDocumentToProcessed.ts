import { PROCESSABLE_DOCS_PATH, PROCESSED_DOCS_PATH } from '../constants';

import fs from 'node:fs';
import path from 'node:path';

export const moveTxtDocumentToProcessed = (fileName: string) => {
  fs.renameSync(
    path.resolve(PROCESSABLE_DOCS_PATH, fileName),
    path.resolve(PROCESSED_DOCS_PATH, fileName)
  );
};
