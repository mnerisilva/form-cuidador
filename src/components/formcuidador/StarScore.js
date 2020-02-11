import React from 'react'

import './StarScore.css'

const StarScore = (prop) => {
    return (
            <div className="float-right">
                <div className="fundo">
                    <div className="primeiro-plano" style={{width: prop.width_percentual, transition: "width "+2+"s"}}>
                    </div>
                </div>          
            </div>    
    );
}



export default StarScore