import React, { Component } from 'react';


class  Title extends Component {


      render() {
        

        return (


            <nav className="">
                <div className="container">
                               <span className="badge  badge-warning bg-lg p-3">Total Counters: {" "}{this.props.totalCounters} </span>
                </div>
            </nav>


        );
      
      }
}

export default Title;
