import React from 'react';
import './Login.css';
const Login = () => {
  return <div className="container">
  <div className="card-login">
      <h1>Login</h1>
      <button>Login com Google</button>
      
      <input placeholder='E-mail'></input>
      <input placeholder='Senha'></input>

      <button class="Entrar">Entrar</button>
      
  </div>
</div>
};

export default Login;
