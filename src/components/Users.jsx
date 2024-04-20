import { Link, useLoaderData } from "react-router-dom";
import '../App.css'


const Users = () => {
    const users = useLoaderData()
    console.log(users);
    return (
        <div>
            <Link to='/'>Home</Link>
            <h2>All Users</h2>
{
users.map(user=><div key={user._id}>Name: {user.name} email: {user.email}</div>)
}
        </div>
    );
};

export default Users;