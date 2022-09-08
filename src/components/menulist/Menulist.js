import React,{Component} from "react";
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import styles from "./styles/MenulistStyles";
import MenulistService from "./service/MenulistService";
import { useState,useEffect} from "react";
import Cart from "../cart/Cart";

const Menulist = () => {
    const classes = styles();
    const [menulist, setMenulist] = useState([]);

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
    const addToCart=()=>{
        window.location='/cart';

    }

    
    return (
       
        <div className= {classes.menu}>
            <div className={classes.row}>
                <button className={classes.primarykey} onClick ={addToCart}>Add To Cart</button>
            </div>
          <table className={classes.table}>
            <tr>
              <th className={classes.headd}>Category</th>
              <th className={classes.headd}>Item</th>
              <th className={classes.headd}>Price In Rupees Per_Kg</th>
            </tr>
            {menulist.map((val) => {
              return (
                <tr key={val.id}>
                  <td className={classes.data}>{val.category}</td>
                  <td className={classes.data}>{val.item}</td>
                  <td className={classes.data}>{val.price_per_kg}</td>
                </tr>
              )
            })}
          </table>
        </div>
        
      )
};
export default Menulist;