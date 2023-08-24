import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
    return (
        <div>
            <Link to='/style-props'style={{color:props.temaNavigation ?"#303030":"white",marginRight:"20px"}} >Style-props</Link>
            <Link to='/data-props'style={{color:props.temaNavigation ?"#303030":"white",marginRight:"20px"}} >Data-props</Link>
            <Link to='/state'style={{color:props.temaNavigation ?"#303030":"white",marginRight:"20px"}} >State</Link>
            <Link to='/HomeWork'style={{color:props.temaNavigation ?"#303030":"white",marginRight:"20px"}} >HomeWork</Link>
            <Link to='/Work_list' >list work</Link>
        </div>
    );
}

export default Navigation;
