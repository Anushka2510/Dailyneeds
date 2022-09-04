import {makeStyles} from "@material-ui/core";


export default makeStyles((theme) => ({
    toolbar: {
        display: 'flex',
        backgroundColor: 'seagreen',
        justifyContent: "space-between",
        padding: "0 4em"
    },
    headerLink: {
        color: theme.palette.primary.contrastText,
        display: 'flex',
        justifyContent: "flex-start",
        textDecoration: 'none'
    },

}))

