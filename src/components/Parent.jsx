import React from 'react';
import Chaild from './Chaild';

const Parent = (props) => {
    console.log(props);
    const { width, height, color, title}= props.StyleProps.parent
    return (
        <div style ={{color:`${color}`}}> 
            <h1>Parent</h1>
            <Chaild/>
        </div>
    );
}

export default Parent;
