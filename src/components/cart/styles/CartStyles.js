import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
    // formControl: {
    //     margin: theme.spacing(1),
    //     minWidth: 120,
    // },
    // selectEmpty: {
    //     marginTop: theme.spacing(2),
    // },
    // showDataStyle: {

       
        
    //     width: '100%',
    //     height: '100vh',
       
    //     align:"center"

    // },
    forms:{
       
       margin:"dense",
       justifyContent:"center",
       textAlign:"center",
       display:"flex",
       flexDirection:"row"
    },

    data: {
        textAlign: 'center',
        padding: "50",
        border: '2px solid forestgreen',
        width: '200px',
        height: '30px',
        alignItems:'center',
        
        

    },
    buttons:{
    color: "white",
    backgroundColor: "darkblue",
    top: "300",
    height: "40",
    float: "right",
    position: "relative",
    transform: "translateY(100%)",
    display:"flex",
   
   

    },
    

}))