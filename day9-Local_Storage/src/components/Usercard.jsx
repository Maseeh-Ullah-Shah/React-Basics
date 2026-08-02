import React from "react";

const Usercard = ({ users, setToggle, deleteUser, seteditEdUser }) => {
  function update() {
    setToggle((prev) => !prev);
    seteditEdUser(users);
  }
  return (
    <div className="border border-black p-3 flex flex-col gap-3 rounded-xl">
      <div className="h-60 w-50 overflow-hidden rounded-xl">
        <img className="h-full w-full object-cover" src={users.image} />
      </div>
      <div>
        <h1>{users.name}</h1>
        <p className="text-sm">{users.email}</p>
        <p className="text-sm">{users.mobile}</p>
      </div>
      <div className="flex justify-between gap-1 w-full ">
        <button
          onClick={update}
          className="px-3 bg-yellow-500 rounded-xl py-2 cursor-pointer"
        >
          Update
        </button>
        <button
          onClick={() => deleteUser(users.id)}
          className="px-3 bg-red-500 rounded-xl py-2 cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Usercard;
