import React, { Component } from 'react';
import {BtnInc, Btndec, Btndel} from "../Appstyle";



class  Counter extends Component {

    style = {
        fontSize: 22,
        background: "gray",
        color: "white",
        fontWeight: 600,
        width: "100px",
        padding: "6px 9px",
        borderRadius: "10px"

      }
      styles = {
        fontSize: 22,
        padding: "6px 26px",
        background: "black",
        color: "white",
        fontWeight: 600,
        width: "100px",
        borderRadius: "12px"


      }


      render() {
        return (

          <div className="container">
              <span style={this.props.value <= 0 ? this.style : this.styles }>{this.props.value <= 0 ? "Zero" : this.props.value } </span>
              <BtnInc onClick={() => this.props.increament(this.props.count)} className="m-2"> + </BtnInc>
              <Btndec  onClick={() => this.props.decreament(this.props.count)} disabled={this.props.value === 0 ? "disabled" : ""}> - </Btndec>
              <Btndel onClick={() => this.props.delete(this.props.count)}> x </Btndel>

              <br /> <br />

          </div>
        );
      
      }
}

export default Counter;
