import { createStore, applyMiddleware, combineReducers,  Store } from "redux"
import thunk from "redux-thunk"
import categoryReducer from "./reducers/categoryReducer"
import imageReducer from "./reducers/imageReducer"

const store: Store<StoreType> & {
    dispatch: DispatchType
} = createStore(combineReducers(
    {
        category:categoryReducer,
        image:imageReducer
    }),
    applyMiddleware(thunk))


export default store