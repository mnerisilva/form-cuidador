import React from 'react'

import Form from './Form'

let a = 100

const FormCuidador = () => {
    return (  
        <div> 
            <Form />
            <p>O valor de "a" é igual a {a}</p>
        </div>     
    );
}

export default FormCuidador