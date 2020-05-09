import React, { Component } from 'react';


class  ListGroup extends Component {




      render() {
          
        const items = this.props.items;
        const listIt = items.map((item, index) => {
                  return  <li onClick={() => this.props.handleSelect(item)} key={index} className={item === this.props.selectedItem ? "list-group-item active" : "list-group-item"}> 
                                {item.name}
                          </li> 
                })


        return (

          <div >

                <ul className="list-group">
                    {listIt}
                </ul>
                
        </div>
        );
      
      }
}


export default ListGroup;
