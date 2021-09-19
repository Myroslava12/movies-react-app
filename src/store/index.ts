import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./rootReducer";
import { rootSaga } from "./rootSaga";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
    }
}

const middleware = [
    applyMiddleware(sagaMiddleware),
    ...(window.__REDUX_DEVTOOLS_EXTENSION__ ? [window.__REDUX_DEVTOOLS_EXTENSION__()] : [])
]

// Mount it on the Store
const store = createStore(
    rootReducer,
    compose(
        ...middleware
    )
);

// Run the saga
sagaMiddleware.run(rootSaga);

export default store;