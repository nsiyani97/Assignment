import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "./firebase";
import { useState } from "react";

function FirebaseAuth() {
  const [user, setUser] = useState(null);

  const login = () => {
    signInWithPopup(auth, provider).then((result) => {
      setUser(result.user);
    });
  };

  const logout = () => {
    signOut(auth);
    setUser(null);
  };

  return (
    <>
      {user ? (
        <>
          <p>Welcome, {user.displayName}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={login}>Login with Google</button>
      )}
    </>
  );
}

export default FirebaseAuth;
