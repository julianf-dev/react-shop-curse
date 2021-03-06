//shortcode: rafce usando la extension (ES7+ React/Redux/React-Native snippets)
import React from 'react';
import '../styles/Login.scss';
import logo from '@logos/logo_yard_sale.svg';

const login = () => {
  return (
    //'class' es una palabra reservada, debemos cambiarla por className que usa react
    //en react todas las etiquetas se cierran (/>)
    <div className="login">
    <div className="form-container">
      <img src={logo} alt="logo" className="logo" />
      <h1 className="title">Create a new password</h1>
      <p className="subtitle">Enter a new passwrd for yue account</p>
      <form action="/" className="form">
        <label for="password" className="label">Password</label>
        <input type="password" id="password" placeholder="*********" className="input input-password" />
        <label for="new-password" className="label">Password</label>
        <input type="password" id="new-password" placeholder="*********" className="input input-password" />
        <input type="submit" value="Confirm" className="primary-button login-button" />
      </form>
    </div>
  </div>
  )
}

export default login