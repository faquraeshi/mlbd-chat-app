import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import Router from "./routers/Router";
import "./localization/localization";
import { AppContainer } from "react-hot-loader";
import store from "./redux/store";
import { getPersistor } from "@rematch/persist";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

interface Props {}

const App: React.FC<Props> = () => {

  const persistor = getPersistor();

  const onBeforeLift = async () => {
  };

  return (
    <AppContainer>
      <PersistGate
        onBeforeLift={onBeforeLift}
        persistor={persistor}
      >
        <BrowserRouter>
      <Router />
    </BrowserRouter>
      </PersistGate>
      
    </AppContainer>
    
  );
}

const element = document.getElementById("root");

if (!element) throw new Error("Couldn't find element with id root");

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, 
element);

serviceWorker.unregister();
