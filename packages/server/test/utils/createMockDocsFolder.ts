import { MOCK_PATH } from './docsPath';

import fs from 'fs';
import path from 'path';

export const createMockDocsFolder = () => {
  const folderDocs = path.join(MOCK_PATH, 'docs');
  const folderProcessable = path.join(MOCK_PATH, 'docs', 'processable');
  const folderUsers = path.join(MOCK_PATH, 'docs', 'users');
  const fileUsers = path.join(MOCK_PATH, 'docs', 'users', 'user.json');

  if (!fs.existsSync(folderDocs)) {
    fs.mkdirSync(folderDocs);
  }

  if (!fs.existsSync(folderProcessable)) {
    fs.mkdirSync(folderProcessable);
  }

  if (!fs.existsSync(folderUsers)) {
    fs.mkdirSync(folderUsers);
  }

  if (!fs.existsSync(fileUsers)) {
    const usersContent = { users: [] };
    fs.writeFileSync(fileUsers, JSON.stringify(usersContent, null, 2));
  }
};
