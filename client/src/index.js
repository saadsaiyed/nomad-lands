//CSS imports
import "materialize-css/dist/css/materialize.min.css";
//React imports
import React from "react";
import ReactDOM from "react-dom";
//Redxu imports
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

//React Main Component
import App from "./components/App";

//Reducer Component form Redux
import reducers from "./reducers";



const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.querySelector("#root"),
);