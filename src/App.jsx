import { Link } from 'react-router-dom';
import './App.css'

function App() {
  const formHandler = event => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email }
    console.log(user);

    fetch('http://localhost:5000/user',{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.insertedId){
        alert('user create successfully')
        form.reset()
      }
    })
  }
  return (
    <>
    <Link to='/user'>User</Link>
      <h1>Simple Crud Client Side</h1>
      <form onSubmit={formHandler}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="user added" />
      </form>
    </>
  )
}

export default App
