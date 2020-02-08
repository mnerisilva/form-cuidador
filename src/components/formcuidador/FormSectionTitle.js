import React from 'react'


const PersonalInfoTitle = (props) => {
    return (
        <div className="row col-md-12 personal-info" style={{background: "#dadada", marginLeft: 0}}>                    
            <span className="personal-info-title" style={{padding: 8}}>{props.title}</span>
        </div>
    );
}

export default PersonalInfoTitle