import fs from "node:fs"

export function getTxtDocumentsNames(path: string) {
  try {
      const files = fs.readdirSync(path);

      const txtFiles = files.filter((file) => file.endsWith(".txt"));

      return txtFiles;

   
    } catch (err) {
      console.error('Erro ao processar os documentos:', err);

      throw err;
    }
}