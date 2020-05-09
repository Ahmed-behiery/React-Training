import React, { Component } from 'react';







class  MovieDes extends Component {

    handleBack =() => {
        this.props.history.push("/")
    }
    

      render() {
        console.log(this.props);



        return (

                  <div className="des">
                     <h2>   key: {this.props.location.key}<br /> </h2>
                      <h4>  id: {this.props.match.params.id}<br /> </h4>
                      <button className="btn btn-danger" onClick={this.handleBack}>Save</button>


                </div>


        );
      
      }
}

export default MovieDes;
