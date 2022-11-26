// // React
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// NEAR
import { Wallet } from "./near-wallet";

// const CONTRACT_ADDRESS = process.env.CONTRACT_NAME

// // When creating the wallet you can optionally ask to create an access key
// // Having the key enables to call non-payable methods without interrupting the user to sign
// const wallet = new Wallet({ createAccessKeyFor: CONTRACT_ADDRESS })

// // Setup on page load
// window.onload = async () => {
//   const isSignedIn = await wallet.startUp()

//   ReactDOM.render(
//     <App isSignedIn={isSignedIn} contractId={CONTRACT_ADDRESS} wallet={wallet} />,
//     document.getElementById('root')
//   );
// }
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootReducer, { rootSaga } from "./modules";
import { tempSetUser, check } from "./modules/user";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

function loadUser() {
  try {
    const user = localStorage.getItem("user");
    if (!user) return; // 로그인 상태가 아니라면 아무것도 안함

    store.dispatch(tempSetUser(user));
    store.dispatch(check());
  } catch (e) {
    console.log("localStorage is not working");
  }
}

window.onload = async () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );
};
