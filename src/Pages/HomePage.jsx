import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import TaskService from "../Services/TaskService";

const HomePage = () => {
    const [tasks, setTasks] = useState([]);

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
        <ul>
           {tasks.map((task) => {
                return <li key={task.idTask}>{task.libelle}</li>
            })} 
        </ul>
        
    </Container>;
}
 
export default HomePage;