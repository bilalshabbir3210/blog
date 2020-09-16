import React, { Component } from "react";

const LoginForm = () => {
  return (
    <div className="login-wrapper">
      <form className="form my-5" autoComplete="off">
          <h2 className="text-center my-3">Login</h2>
        <div className="form-group">
          <input type="email" className="form-control rounded-2" placeholder="Email"/>
        </div>
        <div className="form-group">
          <input type="password" className="form-control rounded-2" placeholder="Password" />
        </div>
        <div className="form-group text-center">
          <button className="btn btn-warning">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
