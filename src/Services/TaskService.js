import axios from "axios";

function getAllTask(){
    return axios.get("http://127.0.0.1:3000/api/task/tasks")
}

function addTask(task){
    return axios.post("http://127.0.0.1:3000/api/task/addTask", task)
}
export default {   
    getAllTask,
    addTask
}