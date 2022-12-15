import {
    Typography,
    Button,
    Grid,
} from '@mui/material';
import { Component } from 'react';
import { eliminarProducto } from './ProductoServices';
  
class ProductoListaItem extends Component<any, any>{
  render(){
    return (
      <>
        <Grid item xs container direction="column" spacing={1}>
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1" component="div">
              <b>{this.props.data.DesProdServ}</b>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {this.props.data.IdProdServOK}
            </Typography>
        </Grid>
        </Grid><Grid item xs container direction="column" spacing={1}>
          <Button size="small"> Actualizar</Button>
          <Button onClick={() => eliminarProducto(this.props.data.IdProdServOK)} size="small" color="error">Eliminar</Button>
        </Grid>
      </>
    )
  }
}

export default ProductoListaItem;
  