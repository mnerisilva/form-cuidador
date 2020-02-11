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
            width_percentual: 1+"%"
    };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
          if(event.target.name === 'cpf'){
            this.setState({cpf: cpfMask(event.target.value)});
            this.setState({width_percentual: 30+"%"});
          }else{
              if(event.target.name === 'nome'){
                this.setState({nome: event.target.value});
                this.setState({width_percentual: 60+"%"}); 
              }else{
                this.setState({email: event.target.value});
                this.setState({width_percentual: 100+"%"}); 
              }
          }
      }
    
      handleSubmit(event) {
        console.log('Um cpf foi enviado: ' + this.state.cpf);
        console.log('Um nome foi enviado: ' + this.state.nome);
        console.log('Um e-mail foi enviado: ' + this.state.email);
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
                        <input className="btn btn-primary" type="submit"  value="Enviar" />
                    </div>
                </form>           
            </div>        
        );
    }
}

export default TabHome