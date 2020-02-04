import React from 'react'

const Form = () => {
    return (
        <div className="container">
            <form className="form-horizontal">
                <fieldset>
                <legend>Candidato</legend>
                <div class="form-group">
                    <label htmlFor="formGroupExampleInput">Example label</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
                </div>
                <div class="form-group">
                    <label htmlFor="formGroupExampleInput2">Another label</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" />
                </div>
                <div class="form-group">
                    <label className="col-md-6 control-label" for="textinput">Nome</label>  
                    <div className="col-md-6">
                        <input id="textinput" name="textinput" type="email" placeholder="nome" className="form-control input-md" required="" />
                        <span className="help-block">Insira seu nome</span>  
                </div>
</div>
                </fieldset>
            </form>
        </div>      
    )
}


export default Form
