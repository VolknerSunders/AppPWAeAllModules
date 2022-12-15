import { detail_row_reg } from "./detail_row_reg"


export interface cat_prod_serv_paquetes{
    IdPresentaBK?        : String ,
    DesPresenta?         : String ,
    Cantidad?            : Number ,
    detail_row? : {
         
        Activo?  :  String ,
        Borrado? :  String ,
        detail_row_reg? : Array<detail_row_reg>
    }
}