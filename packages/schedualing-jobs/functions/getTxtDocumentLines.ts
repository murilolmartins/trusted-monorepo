import fs from "node:fs"


export function getTxtDocumentLines(path: string) {
    try {
        
        const file = fs.readFileSync(path);
        const lines = file.toString().split("\n");
        return lines;

    }
    catch (err) {

        console.error('Erro ao ler linhas do documento:', err);

        throw err;

    }
}

