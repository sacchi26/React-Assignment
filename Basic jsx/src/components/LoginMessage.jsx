// src/components/LoginMessage.jsx

import React from "react";

function LoginMessage({ isLoggedIn }) {
  return <div>{isLoggedIn ? <p>Welcome Back!</p>: <p> Please Log in... </p>}</div>;
}

export default LoginMessage;
