import React from 'react';
import {NavLink} from 'react-router-dom';
import "../App.css";

const Navigation = () =>{
  
       return( 
           <div className="container">
           <div className="header"> 
       C  O  L  O  R  I  S  T
       </div>
       <div className="navigation">
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/black"> Black </NavLink>
            <NavLink to="/blue"> Blue </NavLink>
            <NavLink to="/white"> White </NavLink>
            <NavLink to="/red"> Red </NavLink>
            <NavLink to="/contact"> Contact </NavLink>
            </div>
        </div>
       );    
}

export default Navigation;