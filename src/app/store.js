import { applyMiddleware, combineReducers, createStore } from "redux"; //CP tạo middleware, reducer, store có sẵn của Redux
import thunk from "redux-thunk"; //redux thunk giống như 1 middleware
import { composeWithDevTools } from "redux-devtools-extension"; //kết hợp giữa react-redux và middleware khi F12
import bookingReducer from "features/Booking/redux/bookingSlice";

const reducer = combineReducers({
  booking: bookingReducer,
});
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk))); //

export default store;
