import React from 'react';

import './Button.css';



const Button = ({text, height, width, size, background, color, weight, margin}) => {

    let styles = {
        "height" : height,
        "width" : width,
        "fontSize" : size,
        "backgroundColor": background,
        "color": color,
        "fontWeight": weight,
        "margin": margin
    }
    return (
        <div className="button" style={styles}>
            {text}
        </div>
    )
}

export default Button;
