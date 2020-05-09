import React, { Component } from 'react';


class  Item extends Component {

  handleBack = () => {
    this.props.history.replace("/features")
  }



    render() {
        

        return (

          <div className="items">
               <h2>item - {this.props.match.params.id} </h2>
               <button onClick={this.handleBack}> Back </button>

            </div>
        );
      
      }
}

export default Item;

