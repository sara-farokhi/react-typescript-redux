import { createStore, compose } from "redux"
import thunk from "redux-thunk"
import { applyMiddleware } from "redux"
import rootReducer from "./reducers/reducer/rootReducer";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(thunk)))
export default store
export type RootState = ReturnType<typeof rootReducer>