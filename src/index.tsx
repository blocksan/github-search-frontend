import React from "react";
import ReactDOM from "react-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import middleware from "redux-thunk";
import { persistedReducer } from "./store/rootReducer";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import { Content } from "./containers/Content/Content";
import { Provider } from "react-redux";
import logger from 'redux-logger';

const middlewares = [logger, middleware]

/**
 * Store without persistence
 */
const RStore = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

/**
 * Persisted version of store
 */
const PersistStore = persistStore(RStore);

const BaseRenderer = <Content />;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={RStore}>
      <PersistGate loading={null} persistor={PersistStore}>
        {BaseRenderer}
      </PersistGate>
      </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();