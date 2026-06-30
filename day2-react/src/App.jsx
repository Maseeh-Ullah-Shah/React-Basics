import React from "react";
import About from "./About";
let App = ()=>{
  // let h1 = React.createElement("div",{},[
  //   React.createElement("h1",{},"Hello"),
  //   React.createElement("h2",{},"bye"),
  //   React.createElement("h3",{},"vapus ao")
  // ])
  return (<div>
    <h1>Hello</h1>
    <h2>bye</h2>    
    <h3>vapus aoo</h3>
    {/* If you don't pass any props to a React component, React still passes a props object, but it's an empty object. */}
    <About width = "300px" name = "ragav"/>
    {/* {About("Maseeh Ullah Shah")} */}

  </div>) ;
}

export default  App