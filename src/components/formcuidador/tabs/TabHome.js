import React, { Component } from 'react'

import '../StarScore.css'
import './TabHome.css'
import FormSectionTitle from '../FormSectionTitle'
import StarScore from '../StarScore'

import { cpfMask } from './mask'


class TabHome extends Component {
    constructor(props){
        super(props);
        this.state = {
            cpf: '',
            nome: '',
            email: '',
            rg: '',
            emissao: '',
            orgao: '',
            width_percentual: 4
    };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        const target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;        
        value = name === 'cpf' ? cpfMask(target.value) : target.value;
    
        this.setState({
            [name]: value
        });  

        this.setState({
            width_percentual: this.state.width_percentual + 16
          });
      }
    
      handleSubmit(event) {
        console.log('Um cpf foi enviado: ' + this.state.cpf);
        console.log('Um nome foi enviado: ' + this.state.nome);
        console.log('Um e-mail foi enviado: ' + this.state.email);
        console.log('Um rg foi enviado: ' + this.state.rg);
        console.log('Um emissão foi enviado: ' + this.state.emissao);
        console.log('Um orgão foi enviado: ' + this.state.orgao);
        event.preventDefault();
      }
    render(){
        return (
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <StarScore width_percentual={this.state.width_percentual} />
            <FormSectionTitle title="Informações pessoais" />
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="form-group col-md-2">
                            <label htmlFor="cpf">Cpf</label>                            
                            <input type="text" className="form-control" id="cpf" name="cpf" value={this.state.cpf} onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-md-5">
                            <label htmlFor="nome">Nome</label>
                            <input type="text" className="form-control" id="nome"  name="nome" value={this.state.nome} onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-md-5">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" className="form-control" id="email"  name="email" value={this.state.email} onChange={this.handleChange} />
                        </div>
                    </div>


                    <div className="row">
                        <div className="form-group col-md-4">
                            <label htmlFor="rg">RG</label>
                            <input type="text" className="form-control" id="rg"  name="rg" value={this.state.rg} onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="emissao">Emissão</label>
                            <input type="text" className="form-control" id="emissao"  name="emissao" value={this.state.emissao} onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="orgao">Orgão Emissor</label>
                            <input type="text" className="form-control" id="orgao"  name="orgao" value={this.state.orgao} onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="row">
                        <input className="btn btn-primary" type="submit"  value="Salvar" />
                    </div>
                </form>           
            </div>        
        );
    }
}

export default TabHome