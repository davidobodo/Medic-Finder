import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import * as serviceWorker from './serviceWorker';


//not yet used cause i dont have users but will sure have in the future
//not yet used cause i dont have users but will sure have in the future
//not yet used cause i dont have users but will sure have in the future
//not yet used cause i dont have users but will sure have in the future
//not yet used cause i dont have users but will sure have in the future
//not yet used cause i dont have users but will sure have in the future
//not yet used cause i dont have users but will sure have in the future
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
serviceWorker.unregister();
