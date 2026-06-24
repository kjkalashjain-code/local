
import React, { useEffect, useState } from "react";
import AddUser from "./user_login/Add_user";



function App() {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");




  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log({
      email,
      password,
    });

    const response = AddUser(email, password);

    console.log("response :- " , response)

  };

  return (
    <>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
        </div>

        <br />

        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
        </div>

        <br />

        <button type="submit">
          Login
        </button>
      </form>

      <div>
        {users.map((user) => {

            <p key={user._id}>{user.email}</p>

        })}
      </div>
    </>
  );
}

export default App;