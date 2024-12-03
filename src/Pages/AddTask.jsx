import { useState } from "react";
import { Container, Form, InputGroup } from "react-bootstrap";
import TaskService from "../Services/TaskService";
import { toast } from "react-toastify";

const AddTask = () => {
    const [task, setTask] = useState({});

    const handleChange = (e) => {
        setTask({...task, [e.target.name] : e.target.value});
    }

    const handleSubmit = async (e) => {
        // Bloquer le raffraichissement de la page
        e.preventDefault();
        try {
            const response = await TaskService.addTask(task)
            console.log(response);
            toast.success("Tâche ajoutée avec succès");
        } catch (error) {
            toast.error("Erreur lors de l'ajout de la tâche");
            console.log(error);
        }
        console.log(task);
    }

    return <Container className="d-flex flex-column align-items-center">
        <h1>Ajout d'une tâche</h1>
        <Form className="col-10 mt-3" onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Libelle</InputGroup.Text>
                <Form.Control
                    placeholder="Libelle"
                    aria-label="Libelle"
                    aria-describedby="basic-addon1"
                    onChange={handleChange}
                    name="libelle"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon2">Description</InputGroup.Text>
                <Form.Control
                    placeholder="Description"
                    aria-label="Description"
                    aria-describedby="basic-addon2"
                    onChange={handleChange}
                    name="description"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon3">État</InputGroup.Text>
                <Form.Control
                    placeholder="État"
                    aria-label="État"
                    aria-describedby="basic-addon3"
                    onChange={handleChange}
                    name="etat"
                />
            </InputGroup>
            <Form.Control type="submit" value="Ajouter" className="btn btn-primary"/>
        </Form>
    </Container>;
}
 
export default AddTask;