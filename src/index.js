import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./container/App.js";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "react-redux";

import store from "./store/index.js";

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
