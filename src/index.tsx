import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SWRConfig } from "swr";

import "./index.css";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";
import { store, persistor } from "./app/redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SWRConfig>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SWRConfig>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
