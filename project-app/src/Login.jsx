import { useState } from 'react';
import "./App.css";

function Login({onLogin}) {
  const [username, setUsername] = useState('');

  function onChange(e) {
    setUsername(e.target.value);
  }

  function onSubmit(e){
    e.preventDefault(); 
    if(username){
      onLogin(username);
    }
  }

  return (
    <div className="login">
      <form className="login" action="#/login" onSubmit={onSubmit}>
        <label>
          <span>Username:</span>
          <input className="username" value={username} onChange={onChange}/>
        </label>
        <button className="loginbutton" type="submit">Login</button>
      </form>
    </div>
);

}

export default Login;