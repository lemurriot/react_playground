import React from 'react';
import './Split.css';

function Split(props){
    const combinedClassnName = `split ${props.className}`;
    const newStyles = { flex: props.flexBasis };
    return(
        <div 
            className={combinedClassnName}
            style={newStyles}
        > 
            {props.children}
        </div>
    )
}

export default Split;