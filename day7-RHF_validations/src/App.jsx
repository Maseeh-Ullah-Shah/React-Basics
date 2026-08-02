import React from "react";
import Navbar from "./components/Navbar";
import Usercard from "./components/Usercard";
import Form from "./components/Form";
import { useState } from "react";

const App = () => {
  

  console.log("App rendering....");
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState([]);
  return (
    <div className="p-3 h-screen flex flex-col gap-4">
      <Navbar setToggle={setToggle} />
      {toggle ? (
        <div className="flex flex-wrap gap-4">
          {users.map((user, index) => (
            <Usercard
              key={index}
              user={user}
              setToggle={setToggle}
            />
          ))}
        </div>
      ) : (
        <div>
          <Form
            users={users}
            setUsers={setUsers}
            setToggle={setToggle}
          />
        </div>
      )}
    </div>
  );
};

export default App;
