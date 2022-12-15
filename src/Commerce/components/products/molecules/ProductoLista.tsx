import {
  ButtonBase,
  styled,
  Grid,
  Paper,
} from '@mui/material';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductoListaItem from '../organisms/ProductoListaItem';


class ProductoLista extends Component<any, any>{
  constructor(props = {}) {
    super(props)
    this.state = {
      theme: "dark",
      urlImgProd: 'https://http2.mlstatic.com/D_NQ_NP_2X_701798-MLA43059089824_082020-V.webp'
    }
  }

  ImgProd = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

  render() {

    return (
      <div className='my-5'>
        <Paper sx={{ p: 2, margin: 'auto', maxWidth: 800, flexGrow: 1, backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'), }}>
          <Grid container spacing={2} direction="row" justifyContent="flex-start" alignItems="center">
            <Grid item>
              <>{(typeof (this.props.data.cat_prod_serv_presenta[0]) != 'undefined') ?
                (<ButtonBase sx={{ width: 75, height: 75 }}>
                  <this.ImgProd alt="Imagen del producto" src={this.props.data.cat_prod_serv_presenta[0].cat_prod_serv_archivos[0].RutaArchivo} />
                </ButtonBase>) :(<ButtonBase sx={{ width: 75, height: 75 }}>
                  <this.ImgProd alt="Imagen del producto" src="" />
                </ButtonBase>)
                /* (console.log("ABC" + typeof (this.props.data.cat_prod_serv_presenta[0])))*/
                }
                </>

            </Grid>
            <Grid item xs={10} sm container>
              <ProductoListaItem data={this.props.data} />
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default ProductoLista;
