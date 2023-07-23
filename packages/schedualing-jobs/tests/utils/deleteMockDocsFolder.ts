import { MOCK_DOCS_PATH } from './docsPath';

import fs from 'fs';

export const deleteMockDocsFolder = () => {
  // Verifica se a pasta 'docs' existe antes de tentar excluí-la
  if (fs.existsSync(MOCK_DOCS_PATH)) {
    // Remove a pasta 'docs' e todo o seu conteúdo recursivamente
    fs.rmdirSync(MOCK_DOCS_PATH, { recursive: true });
  } else {
    // eslint-disable-next-line no-console
    console.log("Docs folder doesn't exist");
  }
};
