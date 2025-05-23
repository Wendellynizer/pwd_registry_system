import { useState } from "react";

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
      });

       const data = await response.json();

      if (response.ok) {
        console.log(data.access);
        console.log(data.refresh);
      } else {
        console.log('error')
      }

    } catch(e) {
      console.log('blahblag');
    }
  }

  return (
    <div>
      {/* title */}
      <p>Welcome Back!</p>

      {/* login container */}
      <div>
        <input type="text" name="username" onChange={e => setUsername(e.target.value)} className="border rounded-xs"/>
          <input type="text" name="password" onChange={e => setPassword(e.target.value)} className="border rounded-xs"/>
          <input type="submit" value="Submit" onClick={login} className="bg-blue-300 p-2 rounded-xs cursor-pointer" />
      </div>
    </div>
  );
}

export default App;
