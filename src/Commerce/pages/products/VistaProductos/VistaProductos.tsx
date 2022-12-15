import Meta from '@/Commerce/components/Meta';
import ProductoLista from '@/Commerce/components/products/molecules/ProductoLista';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

export default function VistaProductos() {

  const [ListaProductos, setListaProductos] = useState({
    user: 'Usuario',
    ProductData: [],
    isLoading: '',
    mainDiv: 'd-none'
  });

  useEffect(() => {

    axios.get("http://localhost:3020/api/v1/commerce/products/").then(response => {
      setListaProductos({ ...ListaProductos, ProductData: response.data, isLoading: 'd-none', mainDiv: '' });
    })

  }, [])

  function cargarProductos(data: any) {
    if (typeof (data) != typeof ('')) {
      const dataProcesada = JSON.parse(JSON.stringify(data));
      console.log(dataProcesada);

      let resultado = dataProcesada.map((i: { cat_prod_serv_presenta: { cat_prod_serv_archivos: { RutaArchivo: string | undefined; }[]; }[]; }) => (
        <>
          <div className='my-5'>
            <ProductoLista data={i} user={User} />
          </div>
        </>
      ));

      return resultado;
    }
  }


  const User = ListaProductos.user
  const ProductData = ListaProductos.ProductData
  return (
    <>
      <Meta title="Lista de Productos" />

      {cargarProductos(ProductData)}
      <div className='my-5 d-flex justify-content-center'>
        <Button className='btn btn-success'>Agregar</Button>
      </div>

    </>
  );
}

