import React, { Component } from 'react';
// import axios from "axios";
import http from "../service/httpService";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import getMovies from "../service/httpService";



class  GetData extends Component {

    state = {
        posts: []
    }
    


    async componentDidMount(){
       const {data} = await http.get("https://jsonplaceholder.typicode.com/posts");
        this.setState({posts: data})
    }

    handleAdd = async () => {
       const obj = {title: "This is a new Post",body: "body"};
       const { data: post } = await http.post("https://jsonplaceholder.typicode.com/posts", obj);
       

       const posts = [post, ...this.state.posts];
       this.setState({posts})  
    }

    handleUpdate = item => {
        item.title = "Updated";
        http.patch(`https://jsonplaceholder.typicode.com/posts/${item.id}`, item.title)
        const  posts = [...this.state.posts];
        const index = posts.indexOf(item);
        posts[index] = item 
        this.setState({ posts })     
    }

    handleDelete = async item => {
        const currentPosts = this.state.posts;
        const posts = this.state.posts.filter(p => p.id !== item.id);
        this.setState({ posts })

        try{
            await http.delete(`https://jsonplaceholder.typicode.com/posts/${item.id}`);
            // throw new Error (" ")

        }catch (err) {
            alert("Error")
            this.setState({ posts: currentPosts })
        }
    }

      


    render() {

        const {posts} = this.state;
        const dataList = posts.map((item, index) => {
            return(
                <tr key={index+1}>
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td><button onClick={() => this.handleUpdate(item)} type="button" className="btn btn-danger">Update</button></td>
                <td><button onClick={() => this.handleDelete(item)} type="button" className="btn btn-info">Delete</button></td>
            </tr>
            )
        })



        return (

          <div className="data">

                    <div className="container">
                        <ToastContainer />
                        <h2>Axios</h2><br /> <br />

                                  <button onClick={this.handleAdd} type="button" className="btn btn-primary">Add</button><br /><br />
                                  <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Title</th>
                                                    <th scope="col">Update</th>
                                                    <th scope="col">Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                { dataList }
                                            </tbody>
                                  </table>
                        
                    </div>
        </div>
                     
                 
           

        );
      
      }
}

export default GetData;
