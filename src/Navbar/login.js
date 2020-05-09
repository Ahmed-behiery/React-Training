import React, { Component } from 'react';
import Input from "./input";
import Joi from "joi-browser";
import  auth  from "../service/authServices";
import { Redirect } from 'react-router';


class  Contact extends Component {

      state={
        account: { password: '', email: ''},
        errors: {}
      }

       schema = {
        password: Joi.string().min(5).required().label("Password"),
        email: Joi.string().email().required().label("E-mail")
      }

      validProp = ( e ) => {
        // const obj = {[e.target.name]: e.target.value};
        // const schema = { [e.target.name]: this.schema[e.target.name]};
        const { error } = Joi.validate(this.state.account, this.schema);
        return error ? error.details[0].meesage : null;


        // if(e.target.name === "username") {
        //   if (e.target.value.trim() === "") return "Username is required !";
        // }
        // if(e.target.name === "password") {
        //   if (e.target.value.trim() === "") return "Password is required !";
        // }
        
        
      }

      validation = () => {

        const {error} = Joi.validate(this.state.account, this.schema, {abortEarly: false});
        
        console.log({error});
        

        if ( !error ) return null;

        const errors = {};
        for (const item of error.details)  errors[item.path[0]] = item.message;
            return errors;


        
        

        // const {account} = this.state;
        // const errors = {};

        // if (account.username.trim() === "")  errors.username = " Username is required !";
        // if (account.password.trim() === "")  errors.password = " Password is required !";

        // return Object.keys(errors).length === 0 ? null : errors;
        

      };

      handleSubmit = async (e) => {
        e.preventDefault();    
        try{
          await auth.login(this.state.account.email, this.state.account.password);
          // console.log(data);
          const { state } =  this.props.location;
          window.location = state ? state.from.pathname : "/";
          // console.log(data);
          
        }
        catch (ex){
          if(ex.response && ex.response.status === 400){
            const errors = {...this.state.errors};
            errors.email = ex.response.data;
            this.setState({ errors})
          }
        }
        return 
        
        // e.preventDefault();        
        // const account = {...this.state.account};

        

        // const errors = this.validation();
        // this.setState({ account, errors : errors || {}})


      } 
      handleChange = (e) => {

        const account = {...this.state.account};
        account[e.target.name] = e.target.value;
        this.setState({ account })


        const errors = {...this.state.errors};
        const errorM = this.validProp(e);
        if (errorM) return errors[e.target.name] === errorM;
        else delete errors[e.target.name]
        this.setState({ errors })

      }



    render() {
        if(auth.getUser()) return <Redirect to="/" />;

      const { account, errors} = this.state;

        return (

          <div className="contact">

             

              <div className="container">
                <h2>Login</h2><br /> <br />
              
                  <form onSubmit={this.handleSubmit}>

                      <Input name="password" label="Password" onChange={this.handleChange} value={account.password} />
                      {errors.password && <div className="alert alert-warning">{errors.password}</div>}<br />
                      <Input name="email" label="E-mail" onChange={this.handleChange} value={account.email} />
                      {errors.email && <div className="alert alert-warning">{errors.email}</div>}<br />


                                            
                      <button   type="submit" className="btn btn-primary">Login</button>
                  </form>
           </div>

       </div>
        );
      
      }
}

export default Contact;
