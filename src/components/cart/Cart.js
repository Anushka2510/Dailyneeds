import React from "react";
import { useState, useEffect } from "react";
import styles from "./styles/CartStyles";
import { InputLabel, FormControl, Select, TextField, RadioGroup, FormControlLabel, Radio, Button } from '@material-ui/core';
import MenulistService from "../menulist/service/MenulistService";
import Menulist from "../menulist/Menulist";
import MenuItem from "@material-ui/core/MenuItem";
import CartService from "./service/CartService";
import Axios from "axios";





const Cart = () => {
    const classes = styles();
    const [menulist, setMenulist] = useState([]);
    const [success, setSuccess] = useState(null);
    const[bill,setbill]=useState([]);
    
    

    useEffect(() => {
        fetchMenulist();
    }, []);
    
    const fetchMenulist = async () => {
        try {

            const response = await MenulistService.getMenulist();

            if(response.data){
            setMenulist(response.data);
            }     
            
        }
        catch (e) { }
    }
    
    const [myCart, setCart] = useState([]);
    
    const fetchAdditems= async () => {
        try {
            const response = await CartService.getCartdata();

            if(response.data){
            setCart([...myCart,response.data]);
    
            console.log({myCart});

         
            }     
            
        }
        catch (e) { }
    }

    

    const [inputs, setInputs] = useState({
        item: "",
        quantity: "",
        unit: ""
    });
    

    
    const handleSubmit = async(event) => {

        event.preventDefault();
        
       
        const payload = {
            item: item,
            quantity: quantity,
            unit:unit
        };

        try {
            const bill = await CartService.create(payload);
            fetchAdditems();     
            
            setSuccess(true);
        }
        catch{
            setSuccess(false);

        }
       
       
        
       
    }

    const handleRemove = async (id) => {  
        
      
           const response= await Axios.delete('http://localhost:8080/CartItems/'+id);
           setCart(myCart.filter(item => item.id !== id));
           
    };
    const[item,setitem]=useState("");
    const handleitems=(event)=>{
        setitem(event.target.value);

    }
    const[quantity,setquantity]=useState();
    const handlequantity=(event)=>{
        setquantity(event.target.value);

    }
    const[unit,setunit]=useState("");
    const handleunit=(event)=>{
        setunit(event.target.value);

    }

    const handleBill = async (event) => {
        event.preventDefault();
        const payload = {
            item: item,
            quantity: quantity,
            unit:unit
        };

        try {
            const bill = await CartService.create(payload);
            
            setbill(bill.data);
            setSuccess(true);
        }
        catch{
            setSuccess(false);

        }
            
    };
    
    
   
    




    return (
        <div>
            <form onSubmit={handleSubmit}>

                <FormControl fullWidth >


                    <InputLabel id="demo-simple-select-label">Item</InputLabel>
                  
                            <Select className="menu"
                                required
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={item}
                                name="item"
                                label="Items"
                                onChange={handleitems}
                                
                                


                            > 
                                {menulist.map(val => (
                                    
                                    <MenuItem
                                        key={val.id}    
                                        value={val.item}
                                        >
                                        {val.item}
                                    </MenuItem>
                                ))}

                            </Select>
                       
                      
                     <br></br>
                    <TextField id="filled-basic" label="Quantity" name="quantity" type="number" required
                        InputProps={{ inputProps: { min: 1.00 } }}
                        value={quantity} onChange={handlequantity} variant="filled" />

                    
                    <RadioGroup aria-label="unit" name="unit" value={unit} onChange={handleunit}> 
                        <FormControlLabel value="kg" control={<Radio required={true}/>} label="kg" />
                        <FormControlLabel value="grams" control={<Radio required={true}/>} label="grams" />
                    </RadioGroup>
                    <br></br>
                    <Button type="submit" variant="contained"  color="secondary" >
                        Add to cart
                    </Button>
                </FormControl>
                
               

            </form>
                 
             
            <div>
                                <th className={classes.data}>Item Name</th>
                                <th className={classes.data}>quantity</th>
                                <th className={classes.data}>unit</th>
                                <th className={classes.data}>cost</th>
                   {
                    myCart.map(curElem => {
                        const {id,item,price, quantity, unit} = curElem;
                        return ( 
                            <div className={classes.showDataStyle} key={id} >
                               
                                <td className={classes.data}>{item}</td>
                                <td className={classes.data}>{quantity}</td>
                                <td className={classes.data}>{unit}</td>
                                <td className={classes.data}>{price}</td>
                                
                                
                                <td className={classes.data}><Button type="button" onClick={()=>{
                                    console.log(id)
                                    handleRemove(id)
                                
                                    }} variant="contained" color="secondary">
                                    Remove
                                </Button></td>
                                
                            </div>
                            

                        )


                    })

                }
               
               <br></br>
                <Button type="button" onClick={handleBill} variant="contained" color="secondary">
                    generate bill
                </Button>
                

            </div>
            

        </div>

    )

};
export default Cart;