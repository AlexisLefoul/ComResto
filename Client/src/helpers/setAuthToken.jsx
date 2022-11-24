import * as React from "react";

const authContext = React.createContext();

function useAuth() {
  const [authed, setAuthed] = React.useState(false);
  const localStorageToken = localStorage.getItem("token");
  const [token, setToken] = React.useState(localStorageToken);

  return {
    token,
    authed,
    setLoginToken(token) {
      setAuthed(true);
      setToken(token);
      localStorage.setItem("token", token);
    },
    setLogoutToken() {
      setAuthed(false);
      setToken(false);
      localStorage.delete("token");
    },
  };
}

export function AuthProvider({ children }) {
  const auth = useAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function AuthConsumer() {
  return React.useContext(authContext);
}
