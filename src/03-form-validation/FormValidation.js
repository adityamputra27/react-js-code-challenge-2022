import React, { useState } from "react";

export default function FormValidation() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [message, setMessage] = useState("");

  const findErrors = () => {
    const errors = [];

    if (!email || !password || !passwordConfirm)
      errors.push("All field must be filled in");
    if ([...email].filter((e) => e === "@").length !== 1)
      errors.push("An email must have exactly one @ sign");
    if (password.length < 8)
      errors.push("Password must be 8 characters or longer");
    if (password !== passwordConfirm) errors.push("Password must match");

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = findErrors();

    setMessage(errors.length ? errors.join(", ") : "User created!");
  };

  return (
    <div className="container">
      <h2>Form Validation</h2>
      <div className="card">
        <form className="login" onSubmit={handleSubmit}>
          <h2>Sign Up!</h2>

          <label>Email : </label>
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password : </label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Confirm Password : </label>
          <input
            type="password"
            name="password_confirm"
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />

          <span className="errors">{message}</span>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
