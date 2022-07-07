import React, { useState } from "react";

const Forms = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const submitted = () => {
    alert(username + "" + password + "" + country);
  };
  return (
    <div className="container text-center p-1">
      <h1>*********************************</h1>
      <h1>FORMS EVENTS</h1>
      <form onSubmit={submitted}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username: {username}
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password: {password}
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="country">
            Country : {country}
          </label>
          <select
            className="form-select"
            onChange={(e) => setCountry(e.target.value)}
          >
            <option selected>Select your Country</option>
            <option value="turkey">Turkey</option>
            <option value="germany">Germany</option>
            <option value="usa">Unites States Of America</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Forms;
