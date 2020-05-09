import React, { Component } from 'react';
import Input from "../Navbar/input";
import Joi from "joi-browser";


class  New extends Component {

  state = {
    data: {title: "", city: "", number: "", age: ""},
    errors: {}
  }
  schema = {
    title: Joi.string().required(),
    city: Joi.string().required(),
    number: Joi.number().integer().min(0).max(10),
    age : Joi.number().required().min(0).max(100)
  }
  validation = () => {

    const {error} = Joi.validate(this.state.data, this.schema, {abortEarly: false});
    
    console.log({error});
    

    if ( !error ) return null;

    const errors = {};
    for (const item of error.details)  errors[item.path[0]] = item.message;
        return errors;
  }

  handleSubmit = (e) => {
    console.log(this.state.data);
    
    e.preventDefault();        
    const data = {...this.state.data};

    

    const errors = this.validation();
    this.setState({ data, errors : errors || {}})

    this.props.history.push("/")



  } 
  validProp = ( e ) => {
    // const obj = {[e.target.name]: e.target.value};
    // const schema = { [e.target.name]: this.schema[e.target.name]};
    const { error } = Joi.validate(this.state.data, this.schema);
    return error ? error.details[0].meesage : null;
  }

  handleChange = (e) => {

    const data = {...this.state.data};
    data[e.target.name] = e.target.value;
    this.setState({ data })


    const errors = {...this.state.errors};
    const errorM = this.validProp(e);
    if (errorM) return errors[e.target.name] === errorM;
    else delete errors[e.target.name]
    this.setState({ errors })

  }


  handleBack = () => {
  }


      render() {
           const {data, errors} = this.state;        
        return (

          <div>
            
            <div className="container">
              <h2>Movie Form</h2><br /> <br />

              <Input name="title" label="Title" onChange={this.handleChange} value={data.title} />
              {errors.title && <div className="alert alert-danger">{errors.title}</div>}<br />

              <Input name="city" label="City" onChange={this.handleChange} value={data.city}/>
              {errors.city && <div className="alert alert-danger">{errors.city}</div>}<br />

              <Input name="number" label="Number in Stock" onChange={this.handleChange}  value={data.number}/>
              {errors.number && <div className="alert alert-danger">{errors.number}</div>}<br />

              <Input name="age" label="Age" onChange={this.handleChange}  value={data.age}/>
              {errors.age && <div className="alert alert-danger">{errors.age}</div>}<br />

              <button onClick={this.handleSubmit} type="button" className=" newm btn btn-primary">save</button>






            </div>

          </div>
        );
      
      }
}

export default New;
