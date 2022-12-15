import { Fragment, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import ProductDetails from '../../../components/products/molecules/ProductDetails';
import axios from 'axios';
import SliderLoading from '@/Commerce/components/products/skeletons/SliderLoading';

//import SliderLoading from '../components/PlaceHolder/SliderLoading'


function DetallesProductos () {

  const [Page1, setPage1] = useState({
    user:'Usuario',
    ProductData:[],
    isLoading:'',
    mainDiv:'d-none'
  });


  useEffect(() => {
    
    axios.get("https://app-rest-e-all-modules.herokuapp.com/api/v1/commerce/products").then(response =>{     
      setPage1({...Page1,ProductData:response.data, isLoading:'d-none', mainDiv:''});
      //console.log("HOLA "+response.data[0]['IdInstitutoOK']);
    })
    
  },[])

  const User = Page1.user;
  const ProductData = Page1.ProductData
  if(Page1.mainDiv == "d-none"){
      return  (<Fragment>
                <SliderLoading></SliderLoading>
              </Fragment>)
  }else{
    
    return  (<Fragment>         
              <ProductDetails data={ProductData} user={User} /> 
            </Fragment>)
  }
  
}


export default DetallesProductos
