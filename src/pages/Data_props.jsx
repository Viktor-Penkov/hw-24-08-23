import React from 'react';

const DataProps = (props) => {
    console.log(props.mavka.title);
    return (
        <div>
           
           <h1 style={{color:props.thema?"#303030":"white"}}>{props.mavka.title}</h1>
           <img src={props.mavka.img} alt=""/>
           <p  style={{color:props.thema?"#303030":"white"}}>{props.mavka.article}</p>
           <div 
        style={{ 
          display: "flex", 
          marginLeft: "35vw", 
          alignItems: "center", 
          justifyContent: "center", 
        }} 
      > 
        {" "} 
        <img 
          src="https://cdn-icons-png.flaticon.com/512/4926/4926585.png" 
          alt="" 
          style={{ 
            width: "30px", 
            marginRight: "30px", 
            cursor: "pointer", 
          }} 
        /> 
        <p 
          style={{ 
            border: "1px solid grey", 
            borderRadius: "10px", 
            width: "50px", 
            height: "20px", 
            margin: "0", 
          }} 
        ></p> 
      </div>
           

        </div>
        



        
    );
}

export default DataProps;
