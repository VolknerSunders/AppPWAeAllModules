import axios from "axios";
import Producto from "./Producto";

export const crearProducto = async (producto: Producto) => {
    return await axios.post('http://localhost:3020/api/v1/commerce/products/', producto)
        .then(() => console.log('Se añadió correctamente.'))
}

export const eliminarProducto = async (IdProdServOK: string) => {
    return await axios.delete('http://localhost:3020/api/v1/commerce/products/' + IdProdServOK)
        .then(() => console.log('Se eliminó correctamente.'))
}

export const obtenerProductos = async () => {
    return await axios.get('http://localhost:3020/api/v1/commerce/products/')
}

export const obtenerProducto = async (IdProdServOK: string) => {
    return await axios.get(`http://localhost:3020/api/v1/commerce/products/${IdProdServOK}`)
}