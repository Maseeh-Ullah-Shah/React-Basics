import React from "react";
import Navbar from "./components/Navbar";
import Usercard from "./components/Usercard";
import Form from "./components/Form";
import { useState } from "react";

const App = () => {
  console.log("App rendering....");
  const [toggle, setToggle] = useState(true);
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });
  const [editedUser, seteditEdUser] = useState(null);

  function deleteUser(id) {
    let filterdUser = users.filter((user) => user.id !== id);
    localStorage.setItem("users", JSON.stringify(filterdUser));
    setUsers(filterdUser);
  }
  return (
    <div className="p-3 h-screen flex flex-col gap-4">
      <Navbar setToggle={setToggle} />
      {toggle ? (
        <div className="flex flex-wrap gap-4">
          {users.map((user, index) => (
            <Usercard
              key={index}
              users={user}
              setToggle={setToggle}
              deleteUser={deleteUser}
              seteditEdUser={seteditEdUser}
            />
          ))}
        </div>
      ) : (
        <div>
          <Form
            users={users}
            setUsers={setUsers}
            setToggle={setToggle}
            editedUser={editedUser}
          />
        </div>
      )}
    </div>
  );
};

export default App;
