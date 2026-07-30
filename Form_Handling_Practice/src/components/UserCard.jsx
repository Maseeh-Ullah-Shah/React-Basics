import React from "react";

const UserCard = ({ student }) => {
  return (
    <div className="p-1 border-gray-600 rounded-lg border flex flex-col gap-4 h-fit w-fit bg-white">
      <div className="w-50 h-50 rounded overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={student.imageUrl}
          alt=""
        />
      </div>
      <div>
        <h1 className="text-semibold">{student.name}</h1>
        <p>{student.email}</p>
      </div>
      <button className="p-2 bg-red-500 rounded-lg">Delete</button>
    </div>
  );
};

export default UserCard;
