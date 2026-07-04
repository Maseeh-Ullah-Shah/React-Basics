import React from 'react'

const ProfileCard = ({name,age,profession,city}) => {
  
  return (
    <div>
      <p>-------------------------------</p>
      <h1>Name : {name}</h1>
      <h2>Age : {age}</h2>
      <h3>Profession : {profession}</h3>
      <h4>City : {city}</h4>
      <p>-------------------------------</p>
    </div>
  )
}

export default ProfileCard
