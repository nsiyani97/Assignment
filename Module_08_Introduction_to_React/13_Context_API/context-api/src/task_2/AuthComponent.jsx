import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const AuthComponent = () => {
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h3>Welcome User</h3>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <h3>Please Login</h3>
          <button onClick={login}>Login</button>
        </>
      )}
    </div>
  );
};

export default AuthComponent;
