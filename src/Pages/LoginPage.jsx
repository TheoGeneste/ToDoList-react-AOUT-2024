import { Container, Form, InputGroup } from "react-bootstrap";
import UserService from "../Services/UserService";
import { useContext, useState } from "react";
import AuthContext from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import AuthService from "../Services/AuthService";

const LoginPage = () => {
    const [user, setUser] = useState({});
    const {setIsAuthenticated} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await UserService.login(user);
            localStorage.setItem('token', response.data.token);
            setIsAuthenticated(true);
            navigate("/")
        } catch (error) {  
            console.log(error);
        }
            
    }

    return <Container className="d-flex flex-column align-items-center">
     <Form className="col-10 mt-3" onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                <Form.Control
                    
                    type="email"
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="basic-addon1"
                    onChange={handleChange}
                    name="email" required
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon2">Password</InputGroup.Text>
                <Form.Control
                    required={true}
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="basic-addon2"
                    onChange={handleChange}
                    name="password"
                />
            </InputGroup>
            <Form.Control type="submit" value="Connexion" className="btn btn-primary"/>
        </Form>
    </Container>;
}
 
export default LoginPage;