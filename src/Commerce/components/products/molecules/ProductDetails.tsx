import { Component, Fragment } from 'react';
import { Breadcrumb, BreadcrumbItem, Col, Container, Row, Table } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/Products/custom.css';
import '../../../css/Products/fontawesome.css';
import '../../../css/Products/animate.min.css';
import '../../../css/Products/placeholder-loading.min.css';
//--------------------------------------------------------- / Bootstrap /

import { Link, Navigate } from 'react-router-dom';
import ReviewList from './ReviewList';
import cogoToast from 'cogo-toast';
import axios from 'axios';

//--------------------------------------------------------- / Componentes /

interface ProductDetailsState {
     previewImg: string,
     isSize: string | null,
     isColor: string | null,
     color: string,
     size: string,
     quantity: string,
     productCode: string,
     addToCart: string,
     PageRefreshStatus: Boolean,
     addToFav: string,
     OrderNow: string,
     PageRedirectStauts: Boolean
}

class ProductDetails extends Component<any, ProductDetailsState> {

     constructor(props = {}) {
          super(props);
          this.state = {
               previewImg: "0",
               isSize: null,
               isColor: null,
               color: "",
               size: "",
               quantity: "",
               productCode: "",
               addToCart: "Add To Cart",
               PageRefreshStatus: false,
               addToFav: "Favourite",
               OrderNow: "Order Now",
               PageRedirectStauts: false
          }
     }


     imgOnClick = (event: any) => {
          let imgSrc = event.target.getAttribute('src');
          this.setState({ previewImg: imgSrc })
     }




     addToCart = () => {

          let isSize = this.state.isSize;
          let isColor = this.state.isColor;
          let color = this.state.color;
          let size = this.state.size;
          let quantity = this.state.quantity;
          let productCode = this.state.productCode;
          let email = this.props.user.email;

          if (isColor === "YES" && color.length === 0) {
               cogoToast.error('Please Select Color', { position: 'top-right' });
          }
          else if (isSize === "YES" && size.length === 0) {
               cogoToast.error('Please Select Size', { position: 'top-right' });
          }
          else if (quantity.length === 0) {
               cogoToast.error('Please Select Quantity', { position: 'top-right' });
          }
          else if (!localStorage.getItem('token')) {
               cogoToast.warn('Please You have to Login First', { position: 'top-right' });
          }
          else {
               this.setState({ addToCart: "Adding..." })
               let MyFormData = new FormData();
               MyFormData.append("color", color);
               MyFormData.append("size", size);
               MyFormData.append("quantity", quantity);
               MyFormData.append("product_code", productCode);
               MyFormData.append("email", email);

               axios.post("").then(response => {
                    if (response.data === 1) {
                         cogoToast.success("Product Added Successfully", { position: 'top-right' });
                         this.setState({ addToCart: "Add To Cart" })
                         this.setState({ PageRefreshStatus: true })
                    }
                    else {
                         cogoToast.error("Your Request is not done ! Try Aagain", { position: 'top-right' });
                         this.setState({ addToCart: "Add To Cart" })
                    }

               }).catch(() => {
                    cogoToast.error("Your Request is not done ! Try Aagain", { position: 'top-right' });
                    this.setState({ addToCart: "Add To Cart" })

               });

          }


     }  /// End addToCart Mehtod 





     orderNow = () => {

          let isSize = this.state.isSize;
          let isColor = this.state.isColor;
          let color = this.state.color;
          let size = this.state.size;
          let quantity = this.state.quantity;
          let productCode = this.state.productCode;
          let email = this.props.user.email;

          if (isColor === "YES" && color.length === 0) {
               cogoToast.error('Please Select Color', { position: 'top-right' });
          }
          else if (isSize === "YES" && size.length === 0) {
               cogoToast.error('Please Select Size', { position: 'top-right' });
          }
          else if (quantity.length === 0) {
               cogoToast.error('Please Select Quantity', { position: 'top-right' });
          }
          else if (!localStorage.getItem('token')) {
               cogoToast.warn('Please You have to Login First', { position: 'top-right' });
          }
          else {
               this.setState({ addToCart: "Adding..." })
               let MyFormData = new FormData();
               MyFormData.append("color", color);
               MyFormData.append("size", size);
               MyFormData.append("quantity", quantity);
               MyFormData.append("product_code", productCode);
               MyFormData.append("email", email);

               axios.post("").then(response => {
                    if (response.data === 1) {
                         cogoToast.success("Product Added Successfully", { position: 'top-right' });
                         this.setState({ OrderNow: "Order Now" })
                         this.setState({ PageRedirectStauts: true })
                    }
                    else {
                         cogoToast.error("Your Request is not done ! Try Aagain", { position: 'top-right' });
                         this.setState({ addToCart: "Add To Cart" })
                    }

               }).catch(() => {
                    cogoToast.error("Your Request is not done ! Try Aagain", { position: 'top-right' });
                    this.setState({ addToCart: "Add To Cart" })

               });

          }


     }  /// End orderNow Mehtod 


     PageRedirect = () => {
          if (this.state.PageRedirectStauts === true) {


               return (
                    <Navigate to="/cart" />
               )
          }
     }


     addToFav = () => {
          this.setState({ addToFav: "Adding..." })

          if (!localStorage.getItem('token')) {
               cogoToast.warn('Please You have to Login First', { position: 'top-right' });
          }
          else {

               axios.get("").then(response => {
                    if (response.data === 1) {
                         cogoToast.success("Product Is not in Favourite", { position: 'top-right' });
                         this.setState({ addToFav: "Favourite" })

                    }
                    else {
                         cogoToast.error("Your Request is not done ! Try Aagain", { position: 'top-right' });
                         this.setState({ addToFav: "Favourite" })
                    }

               }).catch(() => {
                    cogoToast.error("Your Request is not done ! Try Aagain", { position: 'top-right' });
                    this.setState({ addToFav: "Favourite" })

               });

          }

     }  // end ADD TO FAV 




     colorOnChange = (event: any) => {
          let color = event.target.value;
          // alert(color);
          this.setState({ color: color })
     }

     sizeOnChange = (event: any) => {
          let size = event.target.value;
          // alert(size);
          this.setState({ size: size })
     }

     quantityOnChange = (event: any) => {
          let quantity = event.target.value;
          this.setState({ quantity: quantity })
     }

     PageRefresh = () => {
          if (this.state.PageRefreshStatus === true) {
               let URL = window.location;
               return (
                    <Navigate to={URL} />
               )
          }
     }

     /* CargarImagen(data: any) {
          if (typeof (data) != typeof ('')) {
               const x = JSON.parse(JSON.stringify(data))
               console.log("typeof: " + typeof (x) + "valor: " + x)
               console.log("typeof: " + typeof (data) + "valor: " + data)
               let f = "prueba2()"
               f = x[0].cat_prod_serv_presenta[0].cat_prod_serv_archivos[0].RutaArchivo;
               console.log(f);
               return (
                    <InnerImageZoom className="detailimage" zoomScale={1.8} zoomType={"hover"} src={f} zoomSrc={f} />
               )
          } else {
               return (
                    <InnerImageZoom className="detailimage" zoomScale={1.8} zoomType={"hover"} src={""} zoomSrc={""} />
               )
          }
     } */


     CargarArrayImagen(data: any, producto: number) {
          if (typeof (data) != typeof ('')) {
               const dataProcesada = JSON.parse(JSON.stringify(data))
               //console.log("typeof: " + typeof (dataProcesada) + "valor: " + dataProcesada)
               //console.log("typeof: " + typeof (data) + "valor: " + data)
               let f = dataProcesada[producto].cat_prod_serv_presenta[producto].cat_prod_serv_archivos;



               //console.log(f);
               let resultado = f.map((i: { RutaArchivo: string | undefined; }) => (
                    <div style={{ width: '100%', height: '100%' }}>
                         <img onClick={this.imgOnClick} className="w-75 h-50 product-sm-img" src={i.RutaArchivo} />
                    </div>

               ))
               return resultado
          } else {
               return (
                    <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                         <img className="w-100 smallimage product-sm-img" src={''} />
                    </Col>
               )
          }
     }

     agregarRenglon(Etiqueta: string, Valor: string) {
          var table = document.getElementById("Table61-1") as HTMLTableElement;
          if (table != null) {
               console.log('entro al if table null');
               var row = table.insertRow(-1);
               var celda1 = row.insertCell(-1);
               var celda2 = row.insertCell(-1);
               celda1.innerHTML = Etiqueta
               celda2.innerHTML = Valor
          }
     }

     CargarCaracteristicas(data: any, producto: number) {
          if (typeof (data) != typeof ('')) {
               const dataProcesada = JSON.parse(JSON.stringify(data))
               console.log("typeof: " + typeof (dataProcesada) + "valor: " + dataProcesada)
               console.log("typeof: " + typeof (data) + "valor: " + data)
               let f = dataProcesada[producto].cat_prod_serv_info_ad;
               let g = dataProcesada[producto].cat_prod_serv_presenta[producto].cat_prod_serv_info_ad;
               console.log(f);
               let resultado: any = []
               resultado = f.map((i: any) => (
                    <Col className='w-25' >
                         {(i.Seccion == 'Principal' && (i.Etiqueta != 'Categoria' && i.Etiqueta != 'Subcategoria')) ? (
                              (document.getElementById("Table61-1") == null) ? (
                                   <><h6>{i.Seccion}</h6><Table id={'Table' + i.IdSeccionOK} responsive striped bordered hover size="sm">
                                        <tbody>
                                             <tr>
                                                  <th>{i.Etiqueta}</th>
                                                  <td>{i.Valor}</td>
                                             </tr>
                                        </tbody>
                                   </Table></>
                              ) : (<>{this.agregarRenglon(i.Etiqueta, i.Valor)}</>)
                         ) : (<>{this.agregarRenglon(i.Etiqueta, i.Valor)}</>)}
                    </Col>
               ))

               resultado = new Map([resultado, g.map((i: any) => (
                    <Col className='w-25' >
                         {(i.Seccion == 'Principal' && (i.Etiqueta != 'Categoria' && i.Etiqueta != 'Subcategoria')) ? (
                              (!document.body.contains(document.getElementById('Table61-1'))) ? (

                                   <><h6 id={i.IdSeccionOK}>{i.Seccion}</h6><Table id={'Table' + i.IdSeccionOK} responsive striped bordered hover size="sm">
                                        <tbody>
                                             <tr>
                                                  <th>{i.Etiqueta}</th>
                                                  <td>{i.Valor}</td>
                                             </tr>
                                        </tbody>
                                   </Table></>


                              ) : (<></>)
                         ) : (
                              <>{this.agregarRenglon(i.Etiqueta, i.Valor)}</>
                         )}

                    </Col>
               ))])
               return resultado
          } else {
               return (
                    <Table className='responsive' striped bordered hover size='sm'>
                         <tbody>
                              <tr>
                                   <td>No hay registros</td>
                              </tr>
                         </tbody>
                    </Table>
               )
          }
     }

     CargarBreadcrumb(data: any, producto: number) {
          if (typeof (data) != typeof ('')) {
               const dataProcesada = JSON.parse(JSON.stringify(data))
               console.log("typeof: " + typeof (dataProcesada) + "valor: " + dataProcesada)
               console.log("typeof: " + typeof (data) + "valor: " + data)
               let f = dataProcesada[producto].cat_prod_serv_info_ad;
               console.log(f);

               let resultado = f.map((i: any) => (
                    <>
                         {(i.IdEtiquetaOK == 'IDCATEGORIA') ? (
                              <>
                                   <Breadcrumb.Item>
                                        <Link to="/">
                                             {i.Valor}
                                        </Link>
                                   </Breadcrumb.Item>
                              </>
                         ) : ((i.IdEtiquetaOK == 'IDSUBCATEGORIA') ? (
                              <>
                                   <Breadcrumb.Item>
                                        <Link to="/">
                                             {i.Valor}
                                        </Link>
                                   </Breadcrumb.Item>
                              </>
                         ) : (<></>))}
                    </>
               ))
               return resultado
          } else {
               return ({})
          }
     }

     render() {

          let ProductAllData = this.props.data;
          let IdProdServOK = ProductAllData[0]['IdProdServOK']
          //ProductAllData[0]['cat_prod_serv_presenta'][0]['cat_prod_serv_presenta_info_ad'][0]['Etiqueta'];
          let IdInstitutoOK = ProductAllData[0]['IdInstitutoOK']
          let IdProdServBK = ProductAllData[0]['IdProdServBK'];
          let CodigoBarras = ProductAllData[0]['CodigoBarras'];


          let product_code = "CODIGO DE PRODUCTO"//ProductAllData['productList'][0]['product_code'];
          let DesProdServ = ProductAllData[0]['DesProdServ'];

          let size = "TAMAÑO"//ProductAllData['productDetails'][0]['size'];


          let short_description =  ProductAllData[0]['cat_prod_serv_presenta'][0]['DesPresenta']





          var SizeDiv = "d-none"
          if (size != "na") {
               SizeDiv = ""
          }
          else {
               SizeDiv = "d-none"
          }

          if (this.state.isSize === null) {
               if (size != "na") {
                    this.setState({ isSize: "YES" })
               } else {
                    this.setState({ isSize: "NO" })
               }
          }

          if (this.state.productCode === null) {
               this.setState({ productCode: product_code })
          }


          return (
               <Fragment>
                    <Container fluid={true} className="mt-3 p-3">

                         <div className="breadbody">
                              <Breadcrumb>
                                   <BreadcrumbItem><Link to="/">Inicio</Link></BreadcrumbItem>
                                   <>{this.CargarBreadcrumb(ProductAllData, 0)}</>
                              </Breadcrumb>

                         </div>



                         <Row className="p-2">
                              <Col className="shadow-sm bg-white pb-3 mt-4" md={12} lg={12} sm={12} xs={12}>
                                   <Row>
                                        <Col className="p-3" md={6} lg={6} sm={12} xs={12}>

                                             <Container className="my-3">
                                                  <Row>
                                                       <Carousel showArrows={false} showIndicators={false} dynamicHeight={true} >
                                                            {this.CargarArrayImagen(ProductAllData, 1)}
                                                       </Carousel>
                                                  </Row>
                                             </Container>
                                        </Col>
                                        <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                                             {/*<h5 className="Product-Name"> {title} </h5>*/}
                                             <h6 className="section-sub-title"> {short_description} </h6>
                                             <h6 className="mt-2">IdProdServOK : <b>{IdProdServOK}</b>  </h6>
                                             <h6 className="mt-2">IdInstitutoOK : <b>{IdInstitutoOK}</b></h6>
                                             <h6 className="mt-2">IdProdServBK : <b>{IdProdServBK}</b></h6>
                                             <h6 className="mt-2">Codigo de Barras : <b>{CodigoBarras}</b></h6>

                                             <div>
                                                  <h6 className="mt-2"> Choose Color  </h6>
                                                  <select onChange={this.colorOnChange} className="form-control form-select">
                                                       <option>Choose Color</option>

                                                  </select>
                                             </div>


                                             <div className={SizeDiv}>
                                                  <h6 className="mt-2"> Choose Size  </h6>
                                                  <select onChange={this.sizeOnChange} className="form-control form-select">
                                                       <option>Choose Size</option>

                                                  </select>
                                             </div>

                                             <div className="" >
                                                  <h6 className="mt-2"> Choose Quantity  </h6>
                                                  <select onChange={this.quantityOnChange} className="form-control form-select">
                                                       <option>Choose Quantity</option>
                                                       <option value="01">01</option>
                                                       <option value="02">02</option>
                                                       <option value="03">03</option>
                                                       <option value="04">04</option>
                                                       <option value="05">05</option>
                                                       <option value="06">06</option>
                                                       <option value="07">07</option>
                                                       <option value="08">08</option>
                                                       <option value="09">09</option>
                                                       <option value="10">10</option>

                                                  </select>
                                             </div>


                                             <div className="input-group mt-3">

                                                  <button onClick={this.addToCart} className="btn site-btn m-1 "> <i className="fa fa-shopping-cart"></i>  {this.state.addToCart} </button>

                                                  <button onClick={this.orderNow} className="btn btn-primary m-1"> <i className="fa fa-car"></i> {this.state.OrderNow} </button>

                                                  <button onClick={this.addToFav} className="btn btn-primary m-1"> <i className="fa fa-heart"></i> {this.state.addToFav} </button>
                                             </div>
                                        </Col>
                                   </Row>

                                   <Row>
                                        <Col className="" md={6} lg={6} sm={12} xs={12}>
                                             <h6 className="mt-2">Descripción</h6>
                                             <p> {DesProdServ} </p>
                                        </Col>

                                        <Col className="" md={6} lg={6} sm={12} xs={12}>

                                             <ReviewList code={product_code} />

                                        </Col>
                                   </Row>
                                   <Row className='w-50'>
                                        {this.CargarCaracteristicas(ProductAllData, 0     )}
                                   </Row>


                              </Col>
                         </Row>
                    </Container>


                    {/*<SuggestedProduct subcategory={subcategory} />*/}

                    {this.PageRefresh()}

                    {this.PageRedirect()}

               </Fragment>
          )
     }
}

export default ProductDetails


