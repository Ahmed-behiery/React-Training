import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";


class  Navbar extends Component {



    render() {
        const {user} = this.props;

        return (

          <div className="Navbar ">
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                        <div className="container">
                        <Link className="navbar-brand" to="#">Navbar</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ">
                                <Link className="nav-item nav-link mr-4" to="/">Home <span className="sr-only">(current)</span></Link>
                                <Link className="nav-item nav-link mr-4" to="/features">Features</Link>
                                <Link className="nav-item nav-link mr-4" to="/product">Products</Link>
                                <Link className="nav-item nav-link mr-4" to="/data">Get Data</Link>
                                { !user && 
                                    <Fragment>
                                        <Link className="nav-item nav-link mr-4" to="/login">Login</Link>
                                        <Link className="nav-item nav-link mr-4" to="/contact">Register</Link>
                                    </Fragment>
                                }
                                { user && 
                                    <Fragment>
                                        <Link className="nav-item nav-link mr-4" to="/profile">{user.name}</Link>
                                        <Link className="nav-item nav-link " to="/logout">Logout</Link>
                                    </Fragment>
                                }


                        </div>
                    </div>
                 </div>
             </nav>



            </div>
        );
      
      }
}

export default Navbar;
