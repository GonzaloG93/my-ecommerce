import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles({
    root: {
      background: 'green',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      '&:hover': {
        backgroundColor: '#fff',
        color: '#3c52b2',
      },
      height: 48,
      padding: '0 30px',
    },
    containers: {
       height: 64, 
       background: 'linear-gradient(90deg, rgba(55,104,152,1) 35%, rgba(0,142,255,1) 100%);',
       display: 'flex',
       flexDirection: "row",
       justifyContent:"center",
       alignItems:"center",
        position: "fixed",
        

    },
    nav: {
        textDecoration: "none",
        color: "black",
        '&:hover': {
           color: '#fff',
          },
    },
    textHead:{
        color: "darkseagreen",
    },
  });

export default function Hook() {
  const classes = useStyles();
  return (  
    <>  
           
    <Grid container className={classes.containers}>
    
        <h1 className={classes.textHead}>Tortas personalizables</h1>

            <div className="container-links">
                <Router>
                <Link to="/#" className={classes.nav}>Mis tortas</Link>
                <Link to="/#" className={classes.nav}>Precios</Link>
                <Link to="/#" className={classes.nav}>Contacto</Link>
                </Router>
            </div>
            
        <Button className={classes.root}>Login</Button>
    </Grid>


    </>
 
  );
}