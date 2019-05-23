import React from 'react';
import './Split.css';

function Split(props){
    const combinedClassnName = `split ${props.className}`
    return(
        <div className={combinedClassnName}> 
            {props.children}
        </div>
    )
}

export default Split;