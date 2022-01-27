import { useRoutes } from "react-router-dom";

import { router } from "../utils/routes";

function App() {
  let routes = useRoutes(router);

  return <div className="App">{routes}</div>;
}

export default App;
