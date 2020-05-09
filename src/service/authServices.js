import http from "./httpService";
import jwtDecode from "jwt-decode";

const tokenKey = "token";
export  async function login(email, password) {
    const {data} = await http.post("http://localhost:3900/api/auth", {email, password});
    localStorage.setItem(tokenKey, data);

}
export function loginWithJwt(jwt){
    localStorage.setItem(tokenKey, jwt)
}

http.setJwt(getJwt());

export function getJwt(){
    return localStorage.getItem(tokenKey);
}


export function logout(){
    localStorage.removeItem(tokenKey);
    window.location = "/";

}

export function getUser(){
    try {
        const jwt = localStorage.getItem(tokenKey);
        return  jwtDecode(jwt)
        
        
   }
   catch(ex) {}
    return null
}

export default {
    login, 
    logout,
    getUser,
    loginWithJwt,
    getJwt
}