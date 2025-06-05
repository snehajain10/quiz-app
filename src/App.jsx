import React, { useState } from "react";
import Login from "./components/Login.jsx";
import Quiz from "./components/Quiz.jsx";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="container">
      {loggedIn ? <Quiz /> : <Login onLogin={() => setLoggedIn(true)} />}
    </div>
  );
}
