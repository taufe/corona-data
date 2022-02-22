import { createStore,applyMiddleware } from "redux";
import fetchalldata from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

export const store = createStore(fetchalldata,composeWithDevTools(applyMiddleware(thunk)))


