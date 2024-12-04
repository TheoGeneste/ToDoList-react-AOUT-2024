import axios from "axios";

function login(user){
    return axios.post('http://localhost:3000/api/user/connexion', user)
}

function getAllUser(){
    return axios.get('http://localhost:3000/api/user/getAllUsers')
}

export default {login, getAllUser}