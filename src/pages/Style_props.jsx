import React from 'react';
import Parent from '../components/Parent';

const StyleProps = (props) => {
    console.log(props);
    return (
        <div>
            <Parent StyleProps={props.styleProps}/>
        </div>
    );
}

export default StyleProps;
