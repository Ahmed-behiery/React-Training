import React, { Component, Fragment } from 'react';

class  TableHead extends Component {

    

      render() {



        return (

          <Fragment>
                                <tr>
                                    <th  onClick={() => this.props.handleSort("id")} scope="col">#</th>
                                    <th  onClick={() => this.props.handleSort("title")} scope="col">title</th>
                                    <th  onClick={() => this.props.handleSort("genre")} scope="col">genre</th>
                                    <th  onClick={() => this.props.handleSort("numberInStock")} scope="col">Stoke</th>
                                    <th  onClick={() => this.props.handleSort("dailyRentalRate")} scope="col">Rate</th>
                                    <th  scope="col">Licked</th>
                                    <th  scope="col">Action</th>
                                </tr>

                

         </Fragment>
        );
      
      }
}

export default TableHead;
