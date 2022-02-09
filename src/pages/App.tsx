import { useRoutes } from "react-router-dom";

import { router } from "../utils/routes";
import { useAppSelector } from "../app/redux/hooks";

function App() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  let routes = useRoutes(router(isLoggedIn));

  return <div className="App">{routes}</div>;
}

export default App;
