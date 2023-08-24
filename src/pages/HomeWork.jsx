import React from 'react';

const HomeWork = (props) => {
    console.log(props.infoItStep);
    return (
        
        <div>
            <div>
           
           <h1 style={{color:props.thema?"#303030":"white"}}>{props.infoItStep.title}</h1>
           <p style={{color:props.thema?"#303030":"white"}}>{props.infoItStep.FormStudy}</p>
           <p style={{color:props.thema?"#303030":"white"}}>{props.infoItStep.telefon}</p>
           <p style={{color:props.thema?"#303030":"white"}}>{props.infoItStep.e_mail}</p>
           <img src={props.infoItStep.img} alt=""/>
           
            
           </div>
           

        </div>
        



        
    );
}
      

export default HomeWork;
