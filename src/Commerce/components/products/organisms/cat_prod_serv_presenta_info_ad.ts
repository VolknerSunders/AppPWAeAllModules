import { detail_row_reg } from "./detail_row_reg"

export interface cat_prod_serv_presenta_info_ad{
    IdEtiquetaOK?        : String ,
    Etiqueta?            : String ,
    Valor?               : String ,
    IdSeccionOK?         : String ,
    Seccion?             : String ,
    Secuencia?           : Number ,
    detail_row? : {    
        Activo?          :  String ,
        Borrado?         :  String ,
        detail_row_reg?  : Array<detail_row_reg>
    }
}