import React, { Component } from 'react';
import Navbar from "./Navbar/navbar";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./Navbar/home";
import Features from "./Navbar/features";
import Login from "./Navbar/login";
import Item from "./Navbar/featuresitem";
import Products from "./Navbar/product";
import Contact from "./Navbar/contact";
import NotFound from "./Navbar/not-found";
import MovieDes from "./component/movie-des";
import New from "./component/New";
import GetData from "./component/getdata";
import Logout from "./Navbar/logout";
import auth from "./service/authServices";
import ProtectedRoute from './component/protectedRoute';
import "./App.css";












class  App extends Component {
        state = {}


        componentDidMount(){
                const user = auth.getUser();
                this.setState({ user })

        }

      render() {

        const {user} = this.state;

        return (

                  <div className="App">

                    <Navbar user={this.state.user} /><br />

                        <Switch>
                                  <ProtectedRoute exact path="/" render={props => <Home user={user} {...props} />} /> 
                                  <ProtectedRoute exact path="/movie/new" component={New} />
                                  <ProtectedRoute exact path="/features" component={Features}  />
                                  <ProtectedRoute exact path="/features/:id" component={Item} />
                                  <Route exact path="/login" component={Login} />
                                  <Route exact path="/logout" component={Logout} />
                                  <ProtectedRoute exact path="/product" render={() => <Products /> } />
                                  <Route exact path="/contact" component={Contact} />
                                  <Redirect exact from="/message" to="/product" />
                                  <Route exact path="/name-des/:id" component={MovieDes} />
                                  <Route exact path="/not-found" component={NotFound} />
                                  <ProtectedRoute exact path="/data" component={GetData }  />
                                  
                                  <Redirect to="/not-found" />
                        </Switch>
                        
                </div>


        );
      
      }
}

export default App;
