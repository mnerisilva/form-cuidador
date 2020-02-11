import React from 'react'

import '../StarScore.css'
import './TabHome.css'
import FormSectionTitle from '../FormSectionTitle'
import StarScore from '../StarScore'

const TabProfile = () => {
    return (
        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <StarScore />
            <FormSectionTitle title="Informações profissionais" />
        </div>    
    );
}

export default TabProfile