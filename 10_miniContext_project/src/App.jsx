import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContaxtProvider from "./context/userContextProvider";

import "./App.css";

function App() {
  return (
    <UserContaxtProvider>
      <Login />
      <Profile />
    </UserContaxtProvider>
  );
}

export default App;
