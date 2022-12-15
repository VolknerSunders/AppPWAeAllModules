import React, { ChangeEvent, FormEvent, useState } from 'react';
// Import our custom CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/Page_Inventories.scss'
import Collapsible from 'react-collapsible';
import {
  Modal,
  ModalHeader,
  ModalBody,
  Container,
  Table,
  Button,
} from 'react-bootstrap';

import Meta from '@/Commerce/components/Meta';
import { cat_prod_serv_info_ad } from '../organisms/cat_prod_serv_info_ad';
import { cat_prod_serv_estatus } from '../organisms/cat_prod_serv_estatus';
import { cat_prod_serv_presenta } from '../organisms/cat_prod_serv_presenta';
import { crearProducto } from '../organisms/ProductoServices';
import { cat_prod_serv_negocios } from '../organisms/cat_prod_serv_negocios';
import { cat_prod_serv_presenta_info_ad } from '../organisms/cat_prod_serv_presenta_info_ad';
import { cat_prod_serv_presenta_estatus } from '../organisms/cat_prod_serv_presenta_estatus';
import { cat_prod_serv_archivos } from '../organisms/cat_prod_serv_archivos';
import { cat_prod_serv_paquetes } from '../organisms/cat_prod_serv_paquetes';
import Producto from '../organisms/Producto';

function Page_Inventories() {
  const [queBoton, setQueBoton] = useState('');
  //Modal
  const [isOpen, setIsOpen] = useState(false);

  const [cat_prod_serv_info_ad, setCat_prod_serv_info_ad] = useState<cat_prod_serv_info_ad>({})
  var arreglo_cat_prod_serv_info_ad: cat_prod_serv_info_ad[] = []

  const [cat_prod_serv_estatus, setCat_prod_serv_estatus] = useState<cat_prod_serv_estatus>({})
  var arreglo_cat_prod_serv_estatus: cat_prod_serv_estatus[] = []

  const [cat_prod_serv_presenta, setCat_prod_serv_presenta] = useState<cat_prod_serv_presenta>({})
  var arreglo_cat_prod_serv_presenta: cat_prod_serv_presenta[] = []

  const [cat_prod_serv_negocios, setCat_prod_serv_negocios] = useState<cat_prod_serv_negocios>({})
  var arreglo_cat_prod_serv_negocios: cat_prod_serv_negocios[] = []

  const [cat_prod_serv_presenta_info_ad, setCat_prod_serv_presenta_info_ad] = useState<cat_prod_serv_presenta_info_ad>({})
  var arreglo_cat_prod_serv_presenta_info_ad: cat_prod_serv_presenta_info_ad[] = []

  const [cat_prod_serv_presenta_estatus, setCat_prod_serv_presenta_estatus] = useState<cat_prod_serv_presenta_estatus>({})
  var arreglo_cat_prod_serv_presenta_presenta_estatus: cat_prod_serv_presenta_estatus[] = []

  const [cat_prod_serv_archivos, setCat_prod_serv_archivos] = useState<cat_prod_serv_archivos>({})
  var arreglo_cat_prod_serv_archivos: cat_prod_serv_archivos[] = []

  const [cat_prod_serv_paquetes, setCat_prod_serv_paquetes] = useState<cat_prod_serv_paquetes>({})
  var arreglo_cat_prod_serv_paquetes: cat_prod_serv_paquetes[] = []

  const [producto, setProducto] = useState<Producto>({})
  //---------
  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.id);

    switch (e.currentTarget.id) {
      case 'cat_prod_serv_estatus':
        setCat_prod_serv_estatus({ ...cat_prod_serv_estatus, [e.target.name]: e.target.value })
        break;
      case 'cat_prod_serv_info_ad':
        setCat_prod_serv_info_ad({ ...cat_prod_serv_info_ad, [e.target.name]: e.target.value })
        break;
      case 'cat_prod_serv_presenta':
        setCat_prod_serv_presenta({ ...cat_prod_serv_presenta, [e.target.name]: e.target.value })
        break;
      case 'cat_prod_serv_negocios':
        setCat_prod_serv_negocios({ ...cat_prod_serv_negocios, [e.target.name]: e.target.value })
        break;
      case 'cat_prod_serv_presenta_info_ad':
        setCat_prod_serv_presenta_info_ad({ ...cat_prod_serv_presenta_info_ad, [e.target.name]: e.target.value })
        break;
      case 'cat_prod_serv_presenta_estatus':
        setCat_prod_serv_presenta_estatus({ ...cat_prod_serv_presenta_estatus, [e.target.name]: e.target.value })
        break;
      case 'cat_prod_serv_archivos':
        setCat_prod_serv_archivos({ ...cat_prod_serv_archivos, [e.target.name]: e.target.value })
        break;
      case 'cat_prod_serv_paquetes':
        setCat_prod_serv_paquetes({ ...cat_prod_serv_paquetes, [e.target.name]: e.target.value })
        break;
      case 'producto':
        setProducto({ ...producto, [e.target.name]: e.target.value })
        break;
      default:
        console.log('ninguno');

        break;
    }
    setCat_prod_serv_info_ad({ ...cat_prod_serv_info_ad, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    //const res = await crearCat_prod_serv_info_ad(cat_prod_serv_info_ad)
    switch (e.currentTarget.id) {
      case 'formulario-cat_prod_serv_info_ad':
        e.preventDefault()
        console.log(cat_prod_serv_info_ad);
        arreglo_cat_prod_serv_info_ad.push(cat_prod_serv_info_ad)


        var tbody = document.getElementById('table-tbody-cat_prod_serv_info_ad') as HTMLTableElement

        var tr = tbody.insertRow(-1)
        tr.id = `table-trow-${cat_prod_serv_info_ad.IdEtiquetaOK}`
        tr.insertCell(0).outerHTML = `<th>${cat_prod_serv_info_ad.IdEtiquetaOK}</th>
                                      <th>${cat_prod_serv_info_ad.Etiqueta}</th>
                                      <th>${cat_prod_serv_info_ad.Valor}</th>
                                      <th>
                                        <Button type='button' class='btn btn-success btn-sm'>Actualizar</Button>
                                        <Button type='button' onClick={handleDeleteRow} class='btn btn-danger btn-sm'>Eliminar</button>
                                      </th>`

        break;
      case 'formulario-cat_prod_serv_estatus':
        e.preventDefault()
        console.log(cat_prod_serv_estatus);
        arreglo_cat_prod_serv_estatus.push(cat_prod_serv_estatus)
        var tbody = document.getElementById('table-tbody-cat_prod_serv_estatus') as HTMLTableElement
        var tr = tbody.insertRow(-1)
        tr.id = `table-trow-${cat_prod_serv_estatus.IdEstatusOK}`
        tr.insertCell(0).outerHTML = `<th>${cat_prod_serv_estatus.IdEstatusOK}</th>
                                      <th>${cat_prod_serv_estatus.Estatus}</th>
                                      <th>
                                        <button type='button' class='btn btn-success btn-sm'>Actualizar</button>
                                        <button type='button' class='btn btn-danger btn-sm'>Eliminar</button>
                                      </th>`
        break;
      case 'formulario-cat_prod_serv_presenta':
        e.preventDefault()
        console.log(cat_prod_serv_presenta)
        arreglo_cat_prod_serv_presenta.push(cat_prod_serv_presenta)
        var tbody = document.getElementById('table-tbody-cat_prod_serv_presenta') as HTMLTableElement
        var tr = tbody.insertRow(-1)
        tr.id = `table-trow-${cat_prod_serv_presenta.IdPresentaBK}`
        tr.insertCell(0).outerHTML = `<th>${cat_prod_serv_presenta.IdPresentaBK}</th>
                                      <th>${cat_prod_serv_presenta.DesPresenta}</th>
                                      <th>
                                        <button type='button' class='btn btn-success btn-sm'>Actualizar</button>
                                        <button type='button' class='btn btn-danger btn-sm'>Eliminar</button>
                                      </th>`
        break;
      case 'formulario-cat_prod_serv_presenta_info_ad':
        e.preventDefault()
        console.log(cat_prod_serv_presenta_info_ad)
        arreglo_cat_prod_serv_presenta_info_ad.push(cat_prod_serv_presenta_info_ad)
        var tbody = document.getElementById('table-tbody-cat_prod_serv_presenta_info_ad') as HTMLTableElement
        var tr = tbody.insertRow(-1)
        tr.id = `${cat_prod_serv_presenta_info_ad.IdEtiquetaOK}`
        tr.insertCell(0).outerHTML = `<th>${cat_prod_serv_presenta_info_ad.IdEtiquetaOK}</th>
                                      <th>${cat_prod_serv_presenta_info_ad.Etiqueta}</th>
                                      <th>${cat_prod_serv_presenta_info_ad.Valor}</th>
                                      <th>
                                        <button type='button' class='btn btn-success btn-sm'>Actualizar</button>
                                        <button type='button' class='btn btn-danger btn-sm'>Eliminar</button>
                                      </th>`
        break;
      case 'formulario-cat_prod_serv_negocios':
        e.preventDefault()
        console.log(cat_prod_serv_negocios)
        arreglo_cat_prod_serv_negocios.push(cat_prod_serv_negocios)
        var tbody = document.getElementById('table-tbody-cat_prod_serv_negocios') as HTMLTableElement
        var tr = tbody.insertRow(-1)
        tr.id = `table-trow-${cat_prod_serv_negocios.IdNegocioOK}`
        tr.insertCell(0).outerHTML = `<th>${cat_prod_serv_negocios.IdNegocioOK}</th>
                                      <th>
                                        <button type='button' class='btn btn-success btn-sm'>Actualizar</button>
                                        <button type='button' class='btn btn-danger btn-sm'>Eliminar</button>
                                      </th>`
        break;
      case 'formulario-cat_prod_serv_paquetes':
        e.preventDefault()
        console.log(cat_prod_serv_paquetes)
        arreglo_cat_prod_serv_paquetes.push(cat_prod_serv_paquetes)
        var tbody = document.getElementById('table-tbody-cat_prod_serv_paquetes') as HTMLTableElement
        var tr = tbody.insertRow(-1)
        tr.id = `table-trow-${cat_prod_serv_paquetes.IdPresentaBK}`
        tr.insertCell(0).outerHTML = `<th>${cat_prod_serv_paquetes.IdPresentaBK}</th>
                                        <th>
                                          <button type='button' class='btn btn-success btn-sm'>Actualizar</button>
                                          <button type='button' class='btn btn-danger btn-sm'>Eliminar</button>
                                        </th>`
        break;
      case 'formulario-cat_prod_serv_archivos':
        e.preventDefault()
        console.log(cat_prod_serv_archivos)
        arreglo_cat_prod_serv_archivos.push(cat_prod_serv_archivos)
        var tbody = document.getElementById('table-tbody-cat_prod_serv_archivos') as HTMLTableElement
        var tr = tbody.insertRow(-1)
        tr.id = `table-trow-${cat_prod_serv_archivos.IdArchivoBK}`
        tr.insertCell(0).outerHTML = `<th>${cat_prod_serv_archivos.IdArchivoBK}</th>
                                        <th>
                                          <button type='button' class='btn btn-success btn-sm'>Actualizar</button>
                                          <button type='button' class='btn btn-danger btn-sm'>Eliminar</button>
                                        </th>`
        break;
      case 'formulario-cat_prod_serv_presenta_estatus':
        e.preventDefault()
        console.log(cat_prod_serv_presenta_estatus)
        arreglo_cat_prod_serv_presenta_presenta_estatus.push(cat_prod_serv_presenta_estatus)
        var tbody = document.getElementById('table-tbody-cat_prod_serv_presenta_estatus') as HTMLTableElement
        var tr = tbody.insertRow(-1)
        tr.id = `table-trow-${cat_prod_serv_presenta_estatus.IdEstatusOK}`
        tr.insertCell(0).outerHTML = `<th>${cat_prod_serv_presenta_estatus.IdEstatusOK}</th>
                                        <th>
                                          <button type='button' class='btn btn-success btn-sm'>Actualizar</button>
                                          <button type='button' class='btn btn-danger btn-sm'>Eliminar</button>
                                        </th>`
        break;
      case 'formulario-producto':
        console.log(producto)
        setProducto({
          cat_prod_serv_estatus: arreglo_cat_prod_serv_estatus,
          cat_prod_serv_info_ad: arreglo_cat_prod_serv_info_ad,
          cat_prod_serv_negocios: arreglo_cat_prod_serv_negocios,
          cat_prod_serv_presenta: arreglo_cat_prod_serv_presenta,
        })
        crearProducto(producto)
        break;
      default:
        console.log('este no es ningun formulario');
    }
  }

  const handleDeleteRow = function (e: React.MouseEvent<HTMLElement>) {
    e.preventDefault()
    var registro = document.getElementById(e.currentTarget.parentElement!.parentElement!.id) as HTMLTableRowElement
    console.log(registro.rowIndex)
    console.log(arreglo_cat_prod_serv_info_ad)
  }


  return (
    <>
      <Meta title="Registro de Producto" />
      <Container className="container" >

        <div className="caja mx-auto">
          <h3 className='text-center'>Producto nuevo</h3>
          <hr />
          <form id='formulario-producto' onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <span className="input-group-text">IdInstitutoOK</span>
              <input type="text" name='IdInstitutoOK' aria-label="First name" className="form-control" id='producto' onChange={handleInputChange}></input>
              <span className="input-group-text">IdProdServOK</span>
              <input type="text" name='IdProdServOK' className="form-control" id='producto' onChange={handleInputChange}></input>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">IdProdServBK</span>
              <input type="number" name='IdProdServBK' aria-label="First name" className="form-control" id='producto' onChange={handleInputChange}></input>
              <span className="input-group-text">Codigo de Barras</span>
              <input type="text" name='CodigoBarras' aria-label="Codigo de Barras" className="form-control" id='producto' onChange={handleInputChange}></input>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">Descripcion del Producto</span>
              <input type="text" name='DesProdServ' aria-label="Descripcion del Producto" className="form-control" id='producto' onChange={handleInputChange}></input>
            </div>
            <Collapsible trigger="Estatus de Producto:">
              <div className="div-cat_prod_serv_estatus">
                <Table id='table-cat_prod_serv_estatus' className="table table-sm">
                  <thead className="table-info">
                    <tr>
                      <th>IdEstatus</th>
                      <th>Estatus</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody id='table-tbody-cat_prod_serv_estatus'>
                    <tr>
                      <th>Prueba 1</th>
                      <th>Prueba 2</th>
                      <th>
                        <Button type="button" className="btn btn-success btn-sm">Actualizar</Button>
                        <Button type="button" className="btn btn-danger btn-sm">Eliminar</Button>
                      </th>
                    </tr>
                  </tbody>
                </Table>
                <div className='text-center'>
                  <Button
                    type="button"
                    className="btn btn-info btn-sm"
                    id="cat_prod_serv_estatus"
                    onClick={() => {
                      setQueBoton('cat_prod_serv_estatus');
                      showModal();
                    }}
                  >
                    Crear nuevo
                  </Button>
                </div>
              </div>
            </Collapsible>
            <hr />
            <Collapsible trigger="Información Adicional:">
              <div className="div-cat_prod_serv_info_ad">
                <Table id='table-cat_prod_serv_info_ad' className="table table-sm">
                  <thead className="table-info">
                    <tr>
                      <th>IdEtiquetaOK</th>
                      <th>Etiqueta</th>
                      <th>Valor</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody id='table-tbody-cat_prod_serv_info_ad'>
                  </tbody>
                </Table>
                <div className='text-center'>
                  <Button
                    type="button"
                    className="btn btn-info btn-sm"
                    id="cat_prod_serv_info_ad"
                    onClick={() => {
                      setQueBoton('cat_prod_serv_info_ad');
                      showModal();
                    }}
                  >
                    Crear nuevo
                  </Button>
                </div>
              </div>
            </Collapsible>
            <hr />
            <Collapsible trigger="Presentacion:">
              <div className="div-cat_prod_serv_presenta">
                <Table id='table-cat_prod_serv_presenta' className="table table-sm">
                  <thead className="table-info">
                    <tr>
                      <th>IdPresentaBK</th>
                      <th>DesPresenta</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody id='table-tbody-cat_prod_serv_presenta'>
                    <tr id="table-trow-Prueba">
                      <th>Prueba 1123</th>
                      <th>Prueba 2</th>
                      <th>
                        <Button type="button" className="btn btn-success btn-sm">Actualizar</Button>
                        <Button type="button" onClick={handleDeleteRow} className="btn btn-danger btn-sm">Eliminar</Button>
                      </th>
                    </tr>
                  </tbody>
                </Table>
                <div className='text-center'>
                  <Button
                    type="button"
                    className="btn btn-info btn-sm"
                    id="cat_prod_serv_presenta"
                    onClick={() => {
                      setQueBoton('cat_prod_serv_presenta');
                      showModal();
                    }}
                  >
                    Crear nuevo
                  </Button>
                </div>
              </div>
            </Collapsible>
            <hr />
            <Collapsible trigger="Negocios:">
              <div className="div-cat_prod_serv_negocios">
                <table id='table-cat_prod_serv_negocios' className="table table-sm">
                  <thead className="table-info">
                    <tr>
                      <th>IdNegocioOK</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody id='table-tbody-cat_prod_serv_negocios'>
                    <tr>
                      <th>Prueba 1</th>
                      <th>
                        <button type="button" className="btn btn-success btn-sm">Actualizar</button>
                        <button type="button" className="btn btn-danger btn-sm">Eliminar</button>
                      </th>
                    </tr>
                  </tbody>
                </table>
                <div className='text-center'>
                  <button
                    type="button"
                    className="btn btn-info btn-sm"
                    id="cat_prod_serv_negocios"
                    onClick={() => {
                      setQueBoton('cat_prod_serv_negocios');
                      showModal();
                    }}
                  >
                    Crear nuevo
                  </button>
                </div>
              </div>
            </Collapsible>
            <hr />
            <Collapsible trigger="detail_row:">
              <div className="detail_row:">
                <div className="input-group mb-3">
                  <span className="input-group-text">Activo</span>
                  <input type="text" name='Activo' aria-label="First name" className="form-control" id='producto' onChange={handleInputChange} ></input>
                  <span className="input-group-text">Borrado</span>
                  <input type="text" name='Borrado' className="form-control" id='producto' onChange={handleInputChange} ></input>
                </div>
                <label>detail_row_reg</label>
                <div className="input-group mb-3">
                  <span className="input-group-text">FechaReg</span>
                  <input type="text" name='FechaReg' aria-label="First name" className="form-control" id='producto' onChange={handleInputChange} ></input>
                  <span className="input-group-text">UsuarioReg</span>
                  <input type="text" name='UsuarioReg' className="form-control" id='producto' onChange={handleInputChange} ></input>
                </div>
              </div>
            </Collapsible>
            <div className='container d-flex '>
              <Button type='submit' className='btn btn-success'>Insertar</Button>
            </div>
          </form>
        </div>



      </Container>


      <Modal show={isOpen} onHide={hideModal}>
        <ModalHeader closeButton>
          <Modal.Title>Detalles</Modal.Title>
        </ModalHeader>
        <ModalBody>
          {queBoton == 'cat_prod_serv_estatus' ? (
            <React.Fragment>
              <h5 className='text-center'>cat_prod_serv_estatus</h5>
              <hr />
              <form id='formulario-cat_prod_serv_estatus' onSubmit={handleSubmit}>
                <><div className="input-group mb-3">
                  <span className="input-group-text">IdEstatusOK</span>
                  <input type="text" name='IdEstatusOK' aria-label="First name" onChange={handleInputChange} className="form-control" id='cat_prod_serv_estatus'></input>
                </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text">Actual</span>
                    <input type="text" name='Actual' aria-label="First name" onChange={handleInputChange} className="form-control" id='cat_prod_serv_estatus'></input>
                    <span className="input-group-text">Estatus</span>
                    <input type="text" name='Estatus' aria-label="First name" onChange={handleInputChange} className="form-control" id='cat_prod_serv_estatus'></input>
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text">Observacion</span>
                    <input type="text" name='Observacion' aria-label="First name" onChange={handleInputChange} className="form-control" id='cat_prod_serv_estatus'></input>
                  </div>
                  <h6>detail_row</h6>
                  <div className="input-group mb-3">
                    <span className="input-group-text">Activo</span>
                    <input type="text" name='Activo' aria-label="First name" onChange={handleInputChange} className="form-control" id='cat_prod_serv_estatus'></input>
                    <span className="input-group-text">Borrado</span>
                    <input type="text" name='Borrado' aria-label="First name" onChange={handleInputChange} className="form-control" id='cat_prod_serv_estatus'></input>
                  </div>
                  <h6>detail_row_reg</h6>
                  <div className="input-group mb-3">
                    <span className="input-group-text">FechaReg</span>
                    <input type="text" name='FechaReg' aria-label="First name" onChange={handleInputChange} className="form-control" id='cat_prod_serv_estatus'></input>
                    <span className="input-group-text">UsuarioReg</span>
                    <input type="text" name='UsuarioReg' aria-label="First name" onChange={handleInputChange} className="form-control" id='cat_prod_serv_estatus'></input>
                  </div>
                  <hr />
                  <div className='text-center'>
                    <button type="submit" className="btn btn-primary" onClick={() => { hideModal() }}>Insertar</button>
                  </div></>
              </form>
            </React.Fragment>
          ) : queBoton == 'cat_prod_serv_info_ad' ? (
            <React.Fragment>
              <h5 className='text-center'>cat_prod_serv_info_ad</h5>
              <hr />
              <form id='formulario-cat_prod_serv_info_ad' onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                  <span className="input-group-text">IdEtiqueta</span>
                  <input type="text" name='IdEtiquetaOK' aria-label="First name" onChange={handleInputChange} className="form-control" id='cat_prod_serv_info_ad'></input>
                  <span className="input-group-text">Etiqueta</span>
                  <input type="text" name='Etiqueta' aria-label="First name" onChange={handleInputChange} className="form-control" id='cat_prod_serv_info_ad'></input>
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">Valor</span>
                  <input type="text" name='Valor' aria-label="First name" onChange={handleInputChange} className="form-control" id='cat_prod_serv_info_ad'></input>
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">IdSeccionOK</span>
                  <input type="text" name='IdSeccionOK' aria-label="First name" onChange={handleInputChange} className="form-control" id='cat_prod_serv_info_ad'></input>
                  <span className="input-group-text">Seccion</span>
                  <input type="text" name='Seccion' aria-label="First name" onChange={handleInputChange} className="form-control" id='cat_prod_serv_info_ad'></input>
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">Secuencia</span>
                  <input type="number" name='Secuencia' aria-label="First name" onChange={handleInputChange} className="form-control" id='cat_prod_serv_info_ad'></input>
                </div>
                <h6>detail_row</h6>
                <div className="input-group mb-3">
                  <span className="input-group-text">Activo</span>
                  <input type="text" name='Activo' aria-label="First name" onChange={handleInputChange} className="form-control" id='cat_prod_serv_info_ad'></input>
                  <span className="input-group-text">Borrado</span>
                  <input type="text" name='Borrado' aria-label="Borrado" onChange={handleInputChange} className="form-control" id='cat_prod_serv_info_ad'></input>
                </div>
                <h6>detail_row_reg</h6>
                <div className="input-group mb-3">
                  <span className="input-group-text">FechaReg</span>
                  <input type="text" name='FechaReg' aria-label="FechaReg" onChange={handleInputChange} className="form-control" id='cat_prod_serv_info_ad'></input>
                  <span className="input-group-text">UsuarioReg</span>
                  <input type="text" name='UsuarioReg' aria-label="UsuarioReg" onChange={handleInputChange} className="form-control" id='cat_prod_serv_info_ad'></input>
                </div>
                <hr />
                <div className='text-center'>
                  <button type="submit" className="btn btn-primary" onClick={() => { hideModal() }}>Insertar</button>
                </div>
              </form>
            </React.Fragment>
          ) : queBoton == 'cat_prod_serv_presenta' ? (
            <React.Fragment>
              <h5 className='text-center'>cat_prod_serv_presenta</h5>
              <hr />
              <form id='formulario-cat_prod_serv_presenta' onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                  <span className="input-group-text">IdPresentaBK</span>
                  <input type="text" name='IdPresentaBK' aria-label="First name" onChange={handleInputChange} className="form-control" id='cat_prod_serv_presenta'></input>
                  <span className="input-group-text">DesPresenta</span>
                  <input type="text" name='DesPresenta' aria-label="First name" onChange={handleInputChange} className="form-control" id='cat_prod_serv_presenta'></input>
                </div>


                <Collapsible trigger="Información Adicional:">
                  <div className="div-cat_prod_serv_presenta_info_ad">
                    <table id='table-cat_prod_serv_presenta_info_ad' className="table table-sm">
                      <thead className="table-info">
                        <tr>
                          <th>IdEtiquetaOK</th>
                          <th>Etiqueta</th>
                          <th>Valor</th>
                          <th>Acciones</th>
                        </tr>
                      </thead>
                      <tbody id='table-tbody-cat_prod_serv_presenta_info_ad'>
                        <tr>
                          <th>Prueba 1</th>
                          <th>Prueba 2</th>
                          <th>Prueba 3</th>
                          <th>
                            <button type="button" className="btn btn-success">Actualizar</button>
                            <button type="button" className="btn btn-danger">Eliminar</button>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                    <div className='text-center'>
                      <button
                        type="button"
                        className="btn btn-info btn-sm"
                        id="cat_prod_serv_info_ad"
                        onClick={() => {
                          setQueBoton('cat_prod_serv_presenta_info_ad');
                          showModal();
                        }}
                      >
                        Crear nuevo
                      </button>
                    </div>
                  </div>
                </Collapsible>
                <hr />
                <Collapsible trigger="Estatus de la Presentacion del Producto:">
                  <div className="div-cat_prod_serv_presenta_estatus">
                    <table id='table-cat_prod_serv_presenta_estatus' className="table table-sm">
                      <thead className="table-info">
                        <tr>
                          <th>IdEstatus</th>
                          <th>Estatus</th>
                          <th>Acciones</th>
                        </tr>
                      </thead>
                      <tbody id='table-tbody-cat_prod_serv_presenta_estatus'>
                        <tr>
                          <th>Prueba 1</th>
                          <th>Prueba 2</th>
                          <th>
                            <button type="button" className="btn btn-success btn-sm">Actualizar</button>
                            <button type="button" className="btn btn-danger btn-sm">Eliminar</button>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                    <div className='text-center'>
                      <button
                        type="button"
                        className="btn btn-info btn-sm"
                        id="cat_prod_serv_presenta_estatus"
                        onClick={() => {
                          setQueBoton('cat_prod_serv_presenta_estatus');
                          showModal();
                        }}
                      >
                        Crear nuevo
                      </button>
                    </div>
                  </div>
                </Collapsible>
                <hr />
                <Collapsible trigger="Archivos:">
                  <div className="div-cat_prod_serv_presenta_archivos">
                    <table id='table-cat_prod_serv_presenta_archivos' className="table table-sm">
                      <thead className="table-info">
                        <tr>
                          <th>IdArchivoBK</th>
                          <th>DesArchivo</th>
                          <th>Acciones</th>
                        </tr>
                      </thead>
                      <tbody id='table-tbody-cat_prod_serv_presenta_archivos'>
                        <tr>
                          <th>Prueba 1</th>
                          <th>Prueba 2</th>
                          <th>
                            <button type="button" className="btn btn-success btn-sm">Actualizar</button>
                            <button type="button" className="btn btn-danger btn-sm">Eliminar</button>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                    <div className='text-center'>
                      <button
                        type="button"
                        className="btn btn-info btn-sm"
                        id="cat_prod_serv_presenta_archivos"
                        onClick={() => {
                          setQueBoton('cat_prod_serv_presenta_archivos');
                          showModal();
                        }}
                      >
                        Crear nuevo
                      </button>
                    </div>
                  </div>
                </Collapsible>
                <hr />
                <Collapsible trigger="Paquetes:">

                </Collapsible>
                <hr />
                <div className='text-center'>
                  <button type="submit" className="btn btn-primary" onClick={() => { hideModal() }}>Insertar</button>
                </div>
              </form>
            </React.Fragment>
          ) : queBoton == 'cat_prod_serv_negocios' ? (
            <React.Fragment>
              <h5 className='text-center'>cat_prod_serv_negocios</h5>
              <hr />
              <form id='formulario-cat_prod_serv_negocios' onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                  <span className="input-group-text">IdNegocioOK</span>
                  <input type="text" name='IdNegocioOK' aria-label="First name" onChange={handleInputChange} className="form-control" id='cat_prod_serv_negocios'></input>
                </div>
                <div className='text-center'>
                  <button type="submit" className="btn btn-primary" onClick={() => { hideModal() }}>Insertar</button>
                </div>
              </form>

            </React.Fragment>
          ) : queBoton == 'cat_prod_serv_presenta_info_ad' ? (
            <React.Fragment>
              <h5 className='text-center'>cat_prod_serv_info_ad</h5>
              <hr />
              <form id='formulario-cat_prod_serv_presenta_info_ad' onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                  <span className="input-group-text">IdEtiqueta</span>
                  <input type="text" name='IdEtiquetaOK' aria-label="First name" onChange={handleInputChange} className="form-control" id='cat_prod_serv_presenta_info_ad'></input>
                  <span className="input-group-text">Etiqueta</span>
                  <input type="text" name='Etiqueta' aria-label="First name" onChange={handleInputChange} className="form-control" id='cat_prod_serv_presenta_info_ad'></input>
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">Valor</span>
                  <input type="text" name='Valor' aria-label="First name" onChange={handleInputChange} className="form-control" id='cat_prod_serv_presenta_info_ad'></input>
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">IdSeccionOK</span>
                  <input type="text" name='IdSeccionOK' aria-label="First name" onChange={handleInputChange} className="form-control" id='cat_prod_serv_presenta_info_ad'></input>
                  <span className="input-group-text">Seccion</span>
                  <input type="text" name='Seccion' aria-label="First name" onChange={handleInputChange} className="form-control" id='cat_prod_serv_presenta_info_ad'></input>
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">Secuencia</span>
                  <input type="number" name='Secuencia' aria-label="First name" onChange={handleInputChange} className="form-control" id='cat_prod_serv_presenta_info_ad'></input>
                </div>
                <h6>detail_row</h6>
                <div className="input-group mb-3">
                  <span className="input-group-text">Activo</span>
                  <input type="text" name='Activo' aria-label="First name" onChange={handleInputChange} className="form-control" id='cat_prod_serv_presenta_info_ad'></input>
                  <span className="input-group-text">Borrado</span>
                  <input type="text" name='Borrado' aria-label="First name" onChange={handleInputChange} className="form-control" id='cat_prod_serv_presenta_info_ad'></input>
                </div>
                <h6>detail_row_reg</h6>
                <div className="input-group mb-3">
                  <span className="input-group-text">FechaReg</span>
                  <input type="text" name='FechaReg' aria-label="First name" onChange={handleInputChange} className="form-control" id='cat_prod_serv_presenta_info_ad'></input>
                  <span className="input-group-text">UsuarioReg</span>
                  <input type="text" name='UsuarioReg' aria-label="First name" onChange={handleInputChange} className="form-control" id='cat_prod_serv_presenta_info_ad'></input>
                </div>
                <div className='text-center'>
                  <button type="submit" className="btn btn-primary" onClick={() => { hideModal() }}>Insertar</button>
                </div>
              </form>

            </React.Fragment>
          ) : queBoton == 'detail_row' ? (
            <React.Fragment>

            </React.Fragment>
          ) : ""}
        </ModalBody>
      </Modal>

    </>
  );
}

export default Page_Inventories;
