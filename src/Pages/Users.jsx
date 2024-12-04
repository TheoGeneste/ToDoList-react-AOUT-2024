import { useContext, useEffect, useState } from "react";
import UserService from "../Services/UserService";
import { Button } from "react-bootstrap";
import AuthContext from "../Context/AuthContext";

const Users = () => {
    const [users, setUsers] = useState([]);
    const {user} = useContext(AuthContext);

    const fetchUsers = async () => {   
        try {
            const response = await UserService.getAllUser();
            setUsers(response.data);
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return <>
        <h1>Users</h1>
        <ul>
            {users.map((us) => {
                return <>
                    <li key={us.id}>{us.email}</li>
                    {user.role == "admin" && <Button >Supprimer</Button>}
                </>
            })}
        </ul>
    </>;
}
 
export default Users;