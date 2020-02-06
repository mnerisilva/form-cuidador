import React from 'react'

import TabHome from './tabs/TabHome'
import TabProfile from './tabs/TabProfile'
import TabContact from './tabs/TabContact'


const Form = () => {
    return (
        <div className="container">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true"><i className="fa fa-address-book fa-2x"></i></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <TabHome />
                <TabProfile />
                <TabContact />
            </div>            
        </div>      
    )
}


export default Form
