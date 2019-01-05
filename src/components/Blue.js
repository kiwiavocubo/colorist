import React from 'react';
import '../App.css';
import blue from '../images/blue.png';
import blue1 from '../images/blue1.jpg';
import blue2 from '../images/blue2.jpg';
import blue3 from '../images/blue3.jpg';
import blue4 from '../images/blue4.jpg';
import blue5 from '../images/blueee.jpg';
import blue6 from '../images/blueeeeeee.jpg';
import blue7 from '../images/bluesues.jpg';

const Blue = props =>{
        return(

       <div className="main-content">
     <div className="gallery">
     <img src={blue} alt="bluepicture" className="inner-image"/>
     <img src={blue1} alt="bluepicture" className="inner-image"/>
     <img src={blue3} alt="bluepicture" className="inner-image"/>
     <img src={blue2} alt="bluepicture" className="inner-image"/>
     <img src={blue4} alt="bluepicture" className="inner-image"/>
     <img src={blue5} alt="bluepicture" className="inner-image"/>
     <img src={blue6} alt="bluepicture" className="inner-image"/>
     <img src={blue7} alt="bluepicture" className="inner-image"/>
</div>
       </div>
        );
}

export default Blue;