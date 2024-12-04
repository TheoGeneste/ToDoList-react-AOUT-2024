import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

function setAxiosToken(){
    const token = localStorage.getItem('token');
    if(token){
        axios.defaults.headers["Authorization"] = "Bearer " + token;
    }else{
        delete axios.defaults.headers["Authorization"];
    }
}

function logout() {
    delete axios.defaults.headers["Authorization"];
    localStorage.removeItem('token');
}

function getUser(){
    const token = localStorage.getItem('token');
    if(token && isValid()){
        const decodedToken = jwtDecode(token);  
        return {
            id: decodedToken.id,
            email : decodedToken.email,
            role : decodedToken.role
        }
    }else{
       return {}; 
    }
}

function isValid() {
    const token = localStorage.getItem('token');
    if(token){
        const decodedToken = jwtDecode(token);
        if (decodedToken.exp * 1000 < new Date().getTime()){
            logout();
            return false;
        }else{
            setAxiosToken();
            return true;
        }
        // Vérifier si le token est valide
    }else{
        logout();
        return false;
    }
}

export default {isValid,setAxiosToken,getUser}