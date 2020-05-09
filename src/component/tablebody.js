import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

class  TableBody extends Component {

    styleP = {
        textAlign: "center"
    }
    button = {
        background: "transparent",
        border: "none"
      }
    
      style = {
          background: "purple",
          padding: "5px 20px",
          color: "white",
          border: "none"
      }
    


      render() {
        const {dataList, activation, removeItem} = this.props;


        const listItem = dataList.length === 0 ?  <tr style={this.styleP}><td>There are no Movies in database</td></tr> : 
        this.props.dataList.map((item, index) =>   
        <tr key={item._id}>
            <th scope="row">{index+1}</th>
            <td><Link to={`name-des/${item._id}`}>{item.title}</Link></td>
            <td>{item.genre.name}</td>
            <td>{item.numberInStock}</td>
            <td>{item.dailyRentalRate}</td>
            <td>
                  <button onClick={() =>  activation(item.id)} style={this.button}>
                     <i className={item.isActive ? "fa fa-heart-o" : "fa fa-heart" } aria-hidden="true"></i> 
                  </button>
            </td>
            <td><button style={this.style} onClick={() => removeItem(index)}> Delete</button></td>

        </tr>

) 



        return (

          <Fragment>

                {listItem}

         </Fragment>
        );
      
      }
}

export default TableBody;
