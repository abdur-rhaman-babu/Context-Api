/* eslint-disable react/prop-types */
import { useState } from "react";
import useUserContext from "../../Hook/useUserContext";

const NewUser = () => {
  const { setUsers } = useUserContext();
  const [username, setUserName] = useState("");
  const [name, setName] = useState("");

  const newUserHandaler = (e) => {
    e.preventDefault();

    // create new user
    const newUser = {
      id: Date.now(),
      username,
      name,
    };
    setUsers((previousUser) => [...previousUser, newUser]);
    setUserName("");
    setName("");
  };

  return (
    <div className="createUser">
      <form onSubmit={newUserHandaler}>
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          placeholder="input newuser"
          value={username}
          required
        />
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="input name"
          value={name}
          required
        />
        <button type="submit">Add user</button>
      </form>
    </div>
  );
};

export default NewUser;
