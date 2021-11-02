import { createStore ,applyMiddleware } from "redux";
import countReducer from "./reducer";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const Store = createStore(countReducer, devTools);

export default Store;
