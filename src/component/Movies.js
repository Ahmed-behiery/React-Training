import React, { Component } from 'react';
import Pagination from './pagination';
import {Paginate} from "./paginate";
import ListGroup from './listgroup';
import TableBody from "./tablebody";
import TableHead from './tablehead';
import {Link} from "react-router-dom";
import {getMovies} from "../service/getMovies";
import {getGenres} from "../service/getGenres";

import _ from "lodash";


class  Movies extends Component {

  state = {

    columnSort: {path: "", order: ""},
    
    data: [
      // {title: "Airplane",  numberInStock: 5,dailyRentalRate: 2,id: "5e84a554be6f1a1fb0cdac9b",  genre:{ _id: "5e84a554be6f1a1fb0cdac9a", name: "Comedy"}},
      // {title: "The Hangover",  numberInStock: 10,dailyRentalRate: 2,id: "5e84a554be6f1a1fb0cdac9d", isActive: true , genre:{ _id: "5e84a554be6f1a1fb0cdac9a", name: "Comedy"}},
      // {title: "Wedding Crashers",  numberInStock: 15,dailyRentalRate: 2,id: "5e84a554be6f1a1fb0cdac9f",  genre:{ _id: "5e84a554be6f1a1fb0cdac9a", name: "Comedy"}},
      // {title: "Die Hard",  numberInStock: 5,dailyRentalRate: 2,id: "5e84a554be6f1a1fb0cdaca2",  genre:{ _id: "5e84a554be6f1a1fb0cdaca1", name: "Action"}},
      // {title: "Terminator",  numberInStock: 10,dailyRentalRate: 2,id: "5e84a554be6f1a1fb0cdaca4",  genre:{ _id: "5e84a554be6f1a1fb0cdaca1", name: "Action"}},
      // {title: "The Avengers",  numberInStock: 15,dailyRentalRate: 2,id: "5e84a554be6f1a1fb0cdaca6",  genre:{ _id: "5e84a554be6f1a1fb0cdaca1", name: "Action"}},
      // {title: "The Notebook",  numberInStock: 5,dailyRentalRate: 2,id: "5e84a554be6f1a1fb0cdaca9",  genre:{ _id: "5e84a554be6f1a1fb0cdaca8", name: "Romance"}},
      // {title: "When Harry Met Sally",  numberInStock: 10,dailyRentalRate: 2,id: "5e84a554be6f1a1fb0cdacab",  genre:{ _id: "5e84a554be6f1a1fb0cdaca8", name: "Romance"}},
      // {title: "Pretty Woman",  numberInStock: 15,dailyRentalRate: 2,id: "5e84a554be6f1a1fb0cdacad",  genre:{ _id: "5e84a554be6f1a1fb0cdaca8", name: "Romance"}},
      // {title: "The Sixth Sense",  numberInStock: 10,dailyRentalRate: 2,id: "5e84a554be6f1a1fb0cdacb0",  genre:{ _id: "5e84a554be6f1a1fb0cdacaf", name: "Thriller"}},
      // {title: "Gone Girl",  numberInStock: 10,dailyRentalRate: 2,id: "5e84a554be6f1a1fb0cdacb2",  genre:{ _id: "5e84a554be6f1a1fb0cdacaf", name: "Thriller"}},
      // {title: "The Others",  numberInStock: 15,dailyRentalRate: 2,id: "5e84a554be6f1a1fb0cdacb4",  genre:{ _id: "5e84a554be6f1a1fb0cdacaf", name: "Thriller"}}

    ],
    selectedItem : false,
    allGenres : [
      // {name: "Action" , id : "5e84a554be6f1a1fb0cdaca1"},
      // {name: "Comedy", id : "5e84a554be6f1a1fb0cdac9a"},
      // {name: "Romance", id : "5e84a554be6f1a1fb0cdaca8"},
      // {name: "Thriller", id : "5e84a554be6f1a1fb0cdacaf"}

    ],
    pagesize: 4,
    currentpage: 1
  }

     componentDidMount() {
      getGenres().then((res) => {
                 const data = res.data;
                 
                 
                 const genres = [{name: "All Genres", _id: ""}, ...data];
     
                  this.setState({ allGenres: genres })
    });
    getMovies().then((res) => {
      const data = res.data;
        

       this.setState({ data: data })
});



  }



  
  removeItem = (index) => {

    const data = this.state.data;
    data.splice(index, 1)
    this.setState({data})

  //   try{
  //     deleteMovies(index).then((res) => {
  //       const data = res.data;
  //         console.log(data);
          
  
  //        this.setState({ data: data })
  // });
  
  //   }
  //   catch (ex) {
  //     if (ex.response && ex.response.status === 404 )
  //     toast.error("this.is already removed")
  //   }
  }











  activation = (Id) => {
      const data = this.state.data;
      data.map(ind => { return(
         ind.id === Id ?   ind.isActive = !ind.isActive : false )}
         
      )
      this.setState({data})  
      }

  handlePageCh = (page) => {
    this.setState({
      currentpage: page
    })
  }
  handleSelect = (item) => {
    this.setState({ selectedItem: item, currentpage: 1})  
      
  }

  handleSort = (path) => {
    const columnSort = {...this.state.columnSort};
    if (columnSort.path === path) {
      columnSort.order = columnSort.order === "asc" ? "desc" : "asc";
    }else {
      columnSort.path = path;
      columnSort.order = "asc";
    }
    this.setState({columnSort: columnSort});
  }

      render() {
        
          // const user  = this.props.user;
        
          
          const datas = this.state.data;

          const selectedItem = this.state.selectedItem;
          
          
          const selectedData = (selectedItem && selectedItem._id !== "")  ? datas.filter(i => i.genre._id === selectedItem._id ) : datas;


          const Sorted = _.orderBy(selectedData, [this.state.columnSort.path], [this.state.columnSort.order]);
          


          const dataList = Paginate(Sorted, this.state.currentpage, this.state.pagesize);

          
        return (

          <div className="container">
            <div className="row">

                <div className="col-3">
                                <ListGroup items={this.state.allGenres}
                                           handleSelect={this.handleSelect}
                                           selectedItem={this.state.selectedItem} />
                </div>

                <div className="col">
                <button type="button" className=" newm btn btn-primary"><Link to="/movie/new">New Movie</Link></button>
                  <p>Show {selectedData.length} Movies in Database</p>

                      <table className="table table-dark table-striped">

                            <thead>
                                <TableHead handleSort={this.handleSort}
                                           data={this.state.data}
                                           columnSort={this.state.columnSort} />
                            </thead>

                            <tbody>
                                <TableBody dataList={dataList}
                                           activation={this.activation}
                                           removeItem={this.removeItem}/>
                            </tbody>

                      </table>

                                <Pagination itemscounts={selectedData.length}
                                            pagesize={this.state.pagesize} 
                                            currentpage={this.state.currentpage}
                                            handlePageCh={this.handlePageCh}     />

               </div>

             </div>

          </div>
        );
      
      }
}

export default Movies;
