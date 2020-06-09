import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import * as serviceWorker from './serviceWorker';


const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

const Root = (
  <React.StrictMode>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <Provider store={store}>
        <App />
      </Provider>
    </ReactReduxFirebaseProvider>
  </React.StrictMode>
)


ReactDOM.render(Root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
