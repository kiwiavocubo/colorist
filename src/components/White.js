import React from 'react';
import '../App.css';
import white from'../images/white.jpg';
import white3 from '../images/white3.jpg';
import white4 from '../images/white4.jpg';
import white5 from '../images/white5.jpg';
import white2 from '../images/whiteeee.jpg';
import white1 from '../images/whitemoviw.jpg';
import white6 from '../images/whitteeee.jpg';

const White = props =>{
        return(

       <div className="main-content">
     <div className="gallery">
     <img src={white} alt="whitepicture" className="inner-image"/>
     <img src={white1} alt="whitepicture" className="inner-image"/>
     <img src={white3} alt="whitepicture" className="inner-image"/>
     <img src={white2} alt="whitepicture" className="inner-image"/>
     <img src={white4} alt="whitepicture" className="inner-image"/>
     <img src={white5} alt="whitepicture" className="inner-image"/>
     <img src={white6} alt="whitepicture" className="inner-image"/>
</div>
       </div>
        );
}

export default White;