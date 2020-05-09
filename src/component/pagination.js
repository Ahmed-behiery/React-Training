import React, { Component } from 'react';
import _ from "lodash";
import PropTypes from "prop-types";


class  Pagination extends Component {

     preventDefault = (e)=>{
      e.preventDefault()
    }


      render() {


        const {itemscounts, pagesize, currentpage, handlePageCh} = this.props;

        const pagescount = Math.ceil(itemscounts / pagesize);

        const  pages = _.range(1, pagescount+1);

         if(pagescount === 1) {return null}
          else {
            var pageList =   pages.map(page => 
                                                 <li key={page} className={currentpage === page ? "page-item active" : "page-item"} onClick={() => handlePageCh(page)}>
                                                     <a onClick={(e) => this.preventDefault(e)} className="page-link" href="/">{page}</a>
                                                 </li>  )
         }

          
        return (

          <div className="container">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        {pageList}
                    </ul>
                </nav>
          </div>
        );
      
      }
}

Pagination.propTypes ={
    pagesize: PropTypes.number.isRequired
}

export default Pagination;
