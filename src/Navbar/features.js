import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import Items from "./featuresitem";



class  Features extends Component {

    state = {
        items: [
            {id: 1, name: "item-1"},
            {id: 2, name: "item-2"},
            {id: 3, name: "item-3"},

        ]
    }



    render() {
        console.log(this.props);
        
        

        return (

          <div className="features">
                <h2>Features Section</h2>
                <ul>
                    {this.state.items.map(item => <li key={item.id}> <Link   to={`/features/${item.id}`}>{item.name} </Link></li>)}
                </ul>
            </div>
        );
      
      }
}

export default Features;
