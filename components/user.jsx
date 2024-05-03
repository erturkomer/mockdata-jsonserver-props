import { useEffect, useState } from 'react'
import axios from 'axios'
import Stepper from './stepper'


function User() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <>
            {users.map((user, index) => (
                <div className="user" key={index}>
                    <Stepper />
                    <img src={user.avatarUrl} alt="" />
                    <div className="user-in-text">
                        <div className="top">
                            <h2>{user.name}</h2>
                            <span>{user.birthday}</span>
                        </div>
                        <p>{user.message}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default User
