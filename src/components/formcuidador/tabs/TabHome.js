import React from 'react'

const TabHome = () => {
    return (
        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <form style={{paddingTop: 50}}>
                <h3 className="dark alert-dark">Dados pessoais</h3>
                <div className="row">
                    <div className="form-group col-md-4">
                        <label htmlFor="exampleFormControlInput1">CPF</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" className="form-control" id="nome" placeholder="" />
                    </div>
                    <div className="form-group col-md-4">
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
                    <div className="form-group col-md-4">
                        <label htmlFor="endereco">Endereço</label>
                        <input type="text" className="form-control" id="endereco" placeholder="" />
                    </div>
                    <div className="form-group col-md-4">
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
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Example select</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
                    <select multiple className="form-control" id="exampleFormControlSelect2">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>            
        </div>        
    );
}

export default TabHome