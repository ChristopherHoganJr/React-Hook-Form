import React, { useState } from "react";

const UserForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  let newUser = { firstName, lastName, email, password, confirmPassword };
  const createNewUser = (e) => {
    e.preventDefault();
    newUser = { firstName, lastName, email, password, confirmPassword };
    console.log(newUser);
  };

  return (
    <>
      <fieldset>
        <legend>Form</legend>
        <form onSubmit={createNewUser}>
          <div>
            <label htmlFor="firstName">First name:</label>
            <input
              type="text"
              name="firstName"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last name:</label>
            <input
              type="text"
              name="lastName"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">First name:</label>
            <input
              type="password"
              name="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <input type="submit" value="Create User" />
        </form>
      </fieldset>
      <fieldset>
        <legend>Form Data</legend>
        <p>First name: {newUser.firstName}</p>
        <p>Last name: {newUser.lastName}</p>
        <p>Email: {newUser.email}</p>
        <p>Password: {newUser.password}</p>
        <p>Confirm Password: {newUser.confirmPassword}</p>
      </fieldset>
    </>
  );
};

export default UserForm;
