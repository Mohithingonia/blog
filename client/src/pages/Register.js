import {useState} from 'react'

function App() {
  const [name,setName]=useState('');
  const [lastname,setLastName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  async function registerUser(event){
      event.preventDefault() 
      const response = await fetch('http://localhost:1337/api/register' ,{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body: JSON.stringify({
          name,
          lastname,
          email,
          password,
        }),
      })

      const data = await response.json();

      console.log(data);
  }


  return (
    <>
    <h1>Register</h1>
    <form onSubmit={registerUser}>
      <input 
      value={name}
      onChange={(e) => setName(e.target.value)}
      type="text" 
      placeholder="First Name" />
      <input 
      value={lastname}
      onChange={(e) => setLastName(e.target.value)}
      type="text" 
      placeholder="Last Name" />
      <input 
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      type="email"
      placeholder="Email" />
      <input
      value={password}
      onChange={(e) => setPassword(e.target.value)} 
      type="password" 
      placeholder="Password" />
      <br />
      <input type="submit" value="Register" />
    </form>

    </>
  );
}

export default App;
