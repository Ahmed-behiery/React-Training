import React, { Component } from 'react';


class  Input extends Component {

      


    render() {
      const { name, label, value, onChange } = this.props;



        return (

          <div className="input">

             

              
                      <div className="form-group">
                          <label htmlFor={name}>{label}</label>
                          <input type={name} className="form-control" name={name}
                                 id={name} placeholder={`Enter Your ${label}`}
                                 onChange={onChange} defaultValue={value} />
                      </div>
                     
                 
           

       </div>
        );
      
      }
}

export default Input;
