import { detail_row_reg } from "./detail_row_reg"

export interface cat_prod_serv_archivos{
    IdArchivoBK?            : String ,
    DesArchivo?             : String ,
    RutaArchivo?            : String ,
    IdTipoArchivoOK?        : String ,
    Archivo?                : String ,
    IdSeccionOK?            : String ,
    Seccion?                : String ,
    Secuencia?              : Number ,
    Principal?              : String ,
    detail_row? : {
        Activo?             : String ,
        Borrado?            : String ,
        detail_row_reg?     : Array<detail_row_reg>
    }
}