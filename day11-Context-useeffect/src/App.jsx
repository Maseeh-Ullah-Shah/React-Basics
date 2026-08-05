import React, { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState([]);
  const [value, setValue] = useState("")
  async function GithubProfile() {
    const response = await fetch("https://fakestoreapi.com/products/");
    let data = await response.json();
    console.log(data);
    setUser(data);

  }
  useEffect(() => {
    GithubProfile();
  }, []);
  // GithubProfile()
  return (
    <div>
      <h1>GitHub User :----</h1>
      <input
      value={value}
       onChange={(e)=>setValue(e.target.value.toUpperCase())} type="text" name="" id="" />
      <div className="flex flex-wrap gap-4">

        {
          user.map((elem)=><img
        className="w-30 h-20 object-cover rounded-lg"
        src={elem.image} alt="" />)
        }
        
      </div>
    </div>
  );
};

export default App;
