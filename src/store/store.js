import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import CartReducer from "./CartReducer";


const rootReducer = combineReducers({
    cart: CartReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;