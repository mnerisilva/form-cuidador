import React from 'react'

const TabHome = () => {
    return (
        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <form style={{paddingTop: 50}}>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlSelect1">Example select</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlSelect2">Example multiple select</label>
                    <select multiple className="form-control" id="exampleFormControlSelect2">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>            
        </div>        
    );
}

export default TabHome