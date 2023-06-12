import { useState, FormEvent } from 'react';
import GustLayout  from '../layout/gustLayout'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Perform login request to retrieve bearer token
    try {
      const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const { token } = await response.json();
        // Store the token in local storage or a state management solution
        // console.log('Bearer token:', token);
        localStorage.setItem('skillAuth', token);
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
  };

  return (
    <>
     <GustLayout>
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
    </GustLayout>
    </>
  );
};

export default Login;
