import { createStore } from "redux";

import todoReducer from "./todosreducer.js";

export default createStore(todoReducer);
