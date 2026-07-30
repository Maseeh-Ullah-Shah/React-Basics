import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import { useState } from "react";
import UserCard from "./components/UserCard";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [studentsData, setStudentsData] = useState([]);

  return (
    <div className="bg-gray-300 h-screen">
      <Register setStudentsData={setStudentsData} />
      <div className="flex flex-wrap gap-4">
        {studentsData.map((student) => (
          <UserCard student={student} />
        ))}
      </div>
    </div>
  );
};

export default App;
