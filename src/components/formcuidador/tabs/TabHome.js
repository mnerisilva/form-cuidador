import React from 'react'

const TabHome = () => {
    return (
        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <form style={{paddingTop: 50}}>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">CPF</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="cpf" />
                </div>
                <div className="form-group">
                    <label htmlFor="nome">Nome</label>
                    <input type="text" className="form-control" id="nome" placeholder="nome e sobrenome" />
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