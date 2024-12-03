import axios from "axios";

function login(user){
    return axios.post('http://localhost:3000/api/user/connexion', user)
}

export default {login}