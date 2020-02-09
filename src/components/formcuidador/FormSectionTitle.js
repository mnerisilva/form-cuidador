import React from 'react'

import './FormSectionTitle.css'

const PersonalInfoTitle = (props) => {
    return (
        <div className="row col-md-12 personal-info">                    
            <span className="personal-info-title">{props.title}</span>
        </div>
    );
}

export default PersonalInfoTitle