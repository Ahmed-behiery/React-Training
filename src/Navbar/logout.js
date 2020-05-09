import React, { Component } from 'react';
import auth from "../service/authServices";


class  Logout extends Component {

    componentDidMount(){
        auth.logout()
    }



    render() {

        return null
      
      }
}

export default Logout;
