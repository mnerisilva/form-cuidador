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
        this.handleFocus = this.handleFocus.bind(this);
        
      }

      handleFocus(event) {
          const arrayFields = ['cpf','nome','email','rg','emissao', 'orgao'];
            let contador = 0;
            arrayFields.map( id => {
                if(this.state[id]){
                    contador++
                }
                this.setState({
                      width_percentual: contador * 16
                    });                
                 return true;
            })
      }
      
      handleChange(event) {
        const target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;        
        value = name === 'cpf' ? cpfMask(target.value) : target.value;
    
        this.setState({
            [name]: value
        });  
      }
    
      handleSubmit(event) {
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
                            <input type="text" className="form-control" id="cpf" name="cpf" value={this.state.cpf} onChange={this.handleChange} onFocus={this.handleFocus} />
                        </div>
                        <div className="form-group col-md-5">
                            <label htmlFor="nome">Nome</label>
                            <input type="text" className="form-control" id="nome"  name="nome" value={this.state.nome} onChange={this.handleChange} onFocus={this.handleFocus} />
                        </div>
                        <div className="form-group col-md-5">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" className="form-control" id="email"  name="email" value={this.state.email} onChange={this.handleChange} onFocus={this.handleFocus} />
                        </div>
                    </div>


                    <div className="row">
                        <div className="form-group col-md-4">
                            <label htmlFor="rg">RG</label>
                            <input type="text" className="form-control" id="rg"  name="rg" value={this.state.rg} onChange={this.handleChange} onFocus={this.handleFocus} />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="emissao">Emissão</label>
                            <input type="text" className="form-control" id="emissao"  name="emissao" value={this.state.emissao} onFocus={this.handleFocus} onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="orgao">Orgão Emissor</label>
                            <input type="text" className="form-control" id="orgao"  name="orgao" value={this.state.orgao} onFocus={this.handleFocus} onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="row">
                        <input className="btn btn-primary" type="submit" onFocus={this.handleFocus} value="Salvar" />
                    </div>
                </form>           
            </div>        
        );
    }
}

export default TabHome