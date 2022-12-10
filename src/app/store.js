import { applyMiddleware, combineReducers, createStore } from "redux"; //CP tạo middleware, reducer, store có sẵn của Redux
import thunk from "redux-thunk"; //redux thunk giống như 1 middleware
import { composeWithDevTools } from "redux-devtools-extension"; //kết hợp giữa react-redux và middleware khi F12

const reducer = combineReducers({});
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk))); //

export default store;
