import React from 'react';
import black from '../images/black.jpg';
import blackmovie from'../images/blackmovie.jpg';
import black3 from '../images/black3.jpeg';
import black4 from'../images/blackk.jpg';
import black5 from'../images/blackkkkk.jpg';
import black2 from '../images/blacklo.jpg';
import black1 from '../images/blackshoes.jpg';
import '../App.css';

const Black = props =>{
        return(

       <div className="main-content">
     <div className="gallery">
     <img src={black} alt="blackpicture" className="inner-image"/>
     <img src={blackmovie} alt="blackpicture" className="inner-image"/>
     <img src={black3} alt="blackpicture" className="inner-image"/>
     <img src={black2} alt="blackpicture" className="inner-image"/>
     <img src={black4} alt="blackpicture" className="inner-image"/>
     <img src={black5} alt="blackpicture" className="inner-image"/>
     <img src={black1} alt="blackpicture" className="inner-image"/>
</div>
       </div>
        );
}

export default Black;