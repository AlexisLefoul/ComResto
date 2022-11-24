import Routers from "./routes";
import useAuth from "./helpers/setAuthToken";

function App() {
  const { authed } = useAuth();

  return (
    <div>
      {authed}
      <Routers />
    </div>
  );
}

export default App;
