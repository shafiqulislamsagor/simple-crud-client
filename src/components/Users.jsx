import { Link, useLoaderData } from "react-router-dom";
import '../App.css'
import { useState } from "react";


const Users = () => {
    const LoaderUsers = useLoaderData()
    const [users, setUsers] = useState(LoaderUsers)
    // console.log(users);
    const buttonHandle = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/user/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    const remaining = users.filter(user => user._id !== id)
                    setUsers(remaining)
                }
            })
    }
    return (
        <div>
            <Link to='/'>Home</Link>
            <h2>All Users - {users.length}</h2>
            {
                users.map(user => <div key={user._id}>Name: {user.name} email: {user.email} { } <button onClick={() => buttonHandle(user._id
                )}>delete</button></div>)
            }
        </div>
    );
};

export default Users;