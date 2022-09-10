import React from 'react';
import IconStyle from './styles/IconStyle';
import { Image } from '@material-ui/icons';
import billing from './billing.png';
import pricelisticon from './pricelisticon.png';


const icons = ({ }) => {

  const classes = IconStyle();

  const menulist = () => {
    window.location = '/menulist';
    
  }
  const bill = () => {
    window.location = '/cart';
  }
  return (

    <div className={classes.image}>

     <strong>Pricelist</strong>
     <img src={pricelisticon} width="150" height="150" title='pricelist' onClick={menulist}/>
     <strong>Billing</strong>
      <img src={billing} width="150" height="150" title='bill' onClick={bill} />
      



    </div>




  )


}
export default icons;
