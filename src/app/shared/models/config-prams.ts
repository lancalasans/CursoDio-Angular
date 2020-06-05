import { CampoGenerico } from "src/app/shared/models/campo-generico";

export interface ConfigPrams {
    pagina?: number;
    limite?: number;
    pesquisa?: string;
    campo?:CampoGenerico;
}


