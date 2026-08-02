import { useRef } from "react";
import { useState } from "react";

function Login() {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  console.log("Rendering....");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input ref={emailRef} type="text" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <input ref={(element) => console.log(element, "Hello")} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default Login;
