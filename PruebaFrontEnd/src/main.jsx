import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from "react-redux";
import {generateStore} from "../reducers/index";
import './controller/button/style/button.css'
import './controller/quiero/style/quiero.css'
import './controller/publicaciones/style/publicaciones.css'


function AppRender() {
  const store = generateStore()
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
      <AppRender />
  </React.StrictMode>,
  document.getElementById("root")
);