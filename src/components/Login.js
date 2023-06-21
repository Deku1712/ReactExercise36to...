import React, { useRef, useState } from "react";

function Login() {
  const formRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    alert(`Name: ${formData.get("name")}`);
  };
  return (
    <p>
      <form ref={formRef} onSubmit={handleSubmit}>
        <label className="col-lg-6">
          Name:
          <input
            type="text"
            placeholder="Please input your name"
            name="name"
            className="form-control"
          ></input>
        </label>
        <button type="submit" className="btn btn-danger">
          Login
        </button>
      </form>
    </p>
  );
}

export default Login;
