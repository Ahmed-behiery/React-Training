import axios from "axios";
import { toast } from "react-toastify";




axios.interceptors.response.use(null, error => {
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
    
    if( !expectedError ) {
        console.log("Loggin the Error", error);
        toast.warning("UnexpectedError occured !")
    }
    return Promise.reject(error)
})

function setJwt(jwt){
    // d 3lshan eluser lma ye3ml delete aw add aw ay 7aga tanya ykon m3ah eltoken w d yesma7lo ye3ml d 
axios.defaults.headers.common["x-auth-token"] = jwt;

}

export default {
    get: axios.get,
    post: axios.post,
    patch: axios.patch,
    delete: axios.delete,
    setJwt
};