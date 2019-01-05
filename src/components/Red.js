import React from 'react';
import '../App.css';
import red from '../images/red.jpg';
import red1 from '../images/red1.jpg';
import red2 from '../images/red2.jpg';
import red3 from '../images/red3.jpg';
import red4 from '../images/red4.jpg';
import red5 from '../images/red5.jpg';
import red6 from '../images/red6.jpg';
import red7 from '../images/red7.jpg';

const Red = props =>{
        return(

       <div className="main-content">
     <div className="gallery">
     <img src={red7} alt="redpicture" className="inner-image"/>
     <img src={red1} alt="redpicture" className="inner-image"/>
     <img src={red6} alt="redpicture" className="inner-image"/>
     <img src={red2} alt="redpicture" className="inner-image"/>
     <img src={red4} alt="redpicture" className="inner-image"/>
     <img src={red5} alt="redpicture" className="inner-image"/>
     <img src={red3} alt="redpicture" className="inner-image"/>
     <img src={red} alt="redpicture" className="inner-image"/>
</div>
       </div>
        );
}

export default Red;