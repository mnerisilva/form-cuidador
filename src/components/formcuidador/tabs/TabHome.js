import React from 'react'

const TabHome = () => {
    return (
        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <form style={{paddingTop: 50}}>
                <h3 className="dark alert-dark">Dados pessoais</h3>
                <div className="row">
                    <div className="form-group col-md-2">
                        <label htmlFor="exampleFormControlInput1">CPF</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" />
                    </div>
                    <div className="form-group col-md-5">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" className="form-control" id="nome" placeholder="" />
                    </div>
                    <div className="form-group col-md-5">
                        <label htmlFor="nome">Email</label>
                        <input type="email" className="form-control" id="nome" placeholder="" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-4">
                        <label htmlFor="rg">RG</label>
                        <input type="text" className="form-control" id="rg" placeholder="" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="emissao">Emissão</label>
                        <input type="text" className="form-control" id="emissao" placeholder="" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="orgao">Orgão Emissor</label>
                        <input type="text" className="form-control" id="orgao" placeholder="" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="endereco">Endereço</label>
                        <input type="text" className="form-control" id="endereco" placeholder="" />
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="numero">Número</label>
                        <input type="text" className="form-control" id="numero" placeholder="" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="complemento">Complemento</label>
                        <input type="text" className="form-control" id="complemento" placeholder="" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-4">
                        <label htmlFor="bairro">Bairro</label>
                        <input type="text" className="form-control" id="bairro" placeholder="" />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="cep">Cep</label>
                        <input type="text" className="form-control" id="cep" placeholder="" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="municipio">Município</label>
                        <input type="text" className="form-control" id="municipio" placeholder="" />
                    </div>
                    <div className="form-group col-md-1">
                        <label htmlFor="uf">UF</label>
                        <input type="text" className="form-control" id="uf" placeholder="" />
                    </div>
                </div>



                <div className="row">
                    <div className="form-group col-md-6">
                      <div className="sex-wrapper" style={{border: "solid thin"}}>
                        <div className="form-check form-check-inline">
                            <span style={{paddingRight: 25}}>Sexo:</span>
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="masculino" value="option1" />
                            <label className="form-check-label" htmlFor="masculino">Masculino</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="feminino" value="option2" />
                            <label className="form-check-label" htmlFor="feminino">Feminino</label>
                        </div>  
                       </div>                                             
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="orientacao">Orientação sexual</label>
                        <select className="form-control" id="orientacao">
                        <option>Omitir</option>
                        <option>Heterossexual</option>
                        <option>Homossexual</option>
                        <option>Transgênero</option>
                        <option>Bissexual</option>
                        </select>
                    </div>
                </div>
            </form>            
        </div>        
    );
}

export default TabHome