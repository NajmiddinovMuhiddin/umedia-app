import {combineReducers} from 'redux';
import OrdersReducer from "./OrdersReducer";
import ServiceReducer from "./ServiceReducer"

const reducer = combineReducers({
    serve: ServiceReducer,
    img: OrdersReducer
})

export  default  reducer;