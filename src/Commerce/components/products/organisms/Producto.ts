import { cat_prod_serv_estatus } from "./cat_prod_serv_estatus"
import { cat_prod_serv_info_ad } from "./cat_prod_serv_info_ad"
import { cat_prod_serv_negocios } from "./cat_prod_serv_negocios"
import { cat_prod_serv_presenta } from "./cat_prod_serv_presenta"
import { detail_row_reg } from "./detail_row_reg"


interface Producto{
    _id?                      : String                            ,
    IdProdServOK?             : String                            ,
    IdInstitutoOK?            : String                            ,
    IdProdServBK?             : Number                            ,
    CodigoBarras?             : String                            ,
    DesProdServ?              : String                            ,
    cat_prod_serv_estatus?    : Array<cat_prod_serv_estatus>      ,
    cat_prod_serv_info_ad?    : Array<cat_prod_serv_info_ad>      ,
    cat_prod_serv_presenta?   : Array<cat_prod_serv_presenta>     ,
    cat_prod_serv_negocios?   : Array<cat_prod_serv_negocios>     ,
    detail_row? : {
         Activo?  :  String ,
         Borrado? :  String ,
         detail_row_reg? : Array<detail_row_reg>
    }
}

export default Producto