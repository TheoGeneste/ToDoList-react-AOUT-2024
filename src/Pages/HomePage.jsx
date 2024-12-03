import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import TaskService from "../Services/TaskService";
import AuthContext from "../Context/AuthContext";
import AuthService from "../Services/AuthService";

const HomePage = () => {
    const [tasks, setTasks] = useState([]);
    const {isAuthenticated, user} = useContext(AuthContext);

    const fetchTasks = async () => {
        try {
            const response = await TaskService.getAllTask();
            setTasks(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchTasks();
    }, []);

    return <Container className="d-flex flex-column align-items-center">
        <h1>Home Page</h1>
        {isAuthenticated ? "Vous êtes connecté" : "Vous n'êtes pas connecté"}
        {user.email && <p>Email : {user.email}</p>}
        <ul>
           {tasks.map((task) => {
                return <li key={task.idTask}>{task.libelle}</li>
            })} 
        </ul>
        
    </Container>;
}
 
export default HomePage;