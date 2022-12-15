import { cat_prod_serv_archivos } from "./cat_prod_serv_archivos"
import { cat_prod_serv_info_ad } from "./cat_prod_serv_info_ad"
import { cat_prod_serv_paquetes } from "./cat_prod_serv_paquetes"
import { cat_prod_serv_presenta_estatus } from "./cat_prod_serv_presenta_estatus"
import { cat_prod_serv_presenta_info_ad } from "./cat_prod_serv_presenta_info_ad"
import { detail_row_reg } from "./detail_row_reg"

export interface cat_prod_serv_presenta{
    IdPresentaBK?                       : String ,
    DesPresenta?                        : String ,
    cat_prod_serv_info_ad?              : Array<cat_prod_serv_info_ad>,
    cat_prod_serv_presenta_estatus?     : Array<cat_prod_serv_presenta_estatus>,
    cat_prod_serv_presenta_info_ad?     : Array<cat_prod_serv_presenta_info_ad>,
    cat_prod_serv_archivos?             : Array<cat_prod_serv_archivos>,
    cat_prod_serv_paquetes?             : Array<cat_prod_serv_paquetes>,
    detail_row? : {
         
         Activo?                        :  String ,
         Borrado?                       :  String ,
         detail_row_reg?                : Array<detail_row_reg>
    }
}