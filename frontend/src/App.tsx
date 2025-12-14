import { useState } from "react";
import Login from "./pages/Login";
import Sweets from "./pages/Sweets";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {loggedIn ? (
        <Sweets />
      ) : (
        <Login onLogin={() => setLoggedIn(true)} />
      )}
    </div>
  );
};

export default App;
