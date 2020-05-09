import React, { Component } from 'react';
// import queryString from "query-string";
import { Link, Route } from "react-router-dom";
import Vegtable from "./vegetable";
import Froot from "./froot";


class  Product extends Component {

    

    render() {
    
        
      

        return (

          <div className="product">
               <h2> Product Section</h2>
                    <ul>
                        <li><Link to="/product/vegt" >Vegtable</Link></li>
                        <li><Link to="/product/froot" >Froot</Link></li>

                    </ul>

                    <Route path="/product/vegt" component={Vegtable} />
                    <Route path="/product/froot" component={Froot} />


            </div>
        );
      
      }
}

export default Product;
