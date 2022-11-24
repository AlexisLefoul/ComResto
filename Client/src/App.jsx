import Routers from "./routes";
import { setAuthToken } from "./helpers/setAuthToken.jsx";

function App() {
  //check jwt token
  const token = localStorage.getItem("token");
  if (token) {
    setAuthToken(token);
  }

  return (
    <div>
      <Routers />
    </div>
  );
}

export default App;
