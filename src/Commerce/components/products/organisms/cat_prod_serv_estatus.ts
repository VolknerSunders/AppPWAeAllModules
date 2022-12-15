import { detail_row_reg } from "./detail_row_reg"

export interface cat_prod_serv_estatus {
    IdEstatusOK?            : String ,
    Estatus?                : String ,
    Actual?                 : String ,
    Observacion?            : String ,
    detail_row? : {  
         Activo?            : String ,
         Borrado?           : String ,
         detail_row_reg?    : Array<detail_row_reg>
    }
}