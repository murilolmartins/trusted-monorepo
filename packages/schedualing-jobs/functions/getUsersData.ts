import path from "path";
import { PROCESSABLE_DOCS_PATH } from "../constants";
import { getTxtDocumentLines } from "./getTxtDocumentLines";
import { getTxtDocumentsNames } from "./getTxtDocumentsNames";

export function getUsersData () {
    try{

        const documentNames = getTxtDocumentsNames(PROCESSABLE_DOCS_PATH)

        console.log("documentNames", documentNames)
    }
    catch(err){
        console.error('Erro ao processar os documentos:', err);

        throw err;
    }
}