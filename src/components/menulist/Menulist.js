import React,{Component} from "react";
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import styles from "./styles/MenulistStyles";
import MenulistService from "./service/MenulistService";
import { useState,useEffect} from "react";

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

    
    return (
       
        <div className= {classes.menu}>
          <table className={classes.table}>
            <tr>
              <th className={classes.headd}>Category</th>
              <th className={classes.headd}>Item</th>
              <th className={classes.headd}>Price In Rupees Per_Kg</th>
              <th className={classes.headd}></th>
            </tr>
            {menulist.map((val) => {
              return (
                <tr key={val.id}>
                  <td className={classes.data}>{val.category}</td>
                  <td className={classes.data}>{val.item}</td>
                  <td className={classes.data}>{val.price_per_kg}</td>
                  <td className={classes.data}><button>Add to Cart</button></td>
                </tr>
              )
            })}
          </table>
        </div>
        
      )
};
export default Menulist;