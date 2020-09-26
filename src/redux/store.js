import { createStore, applyMiddleware } from "redux";
import indexReducers from "./reducers";
import createSagaMiddleware from 'redux-saga';
import thunk from "redux-thunk";
import rootSaga from "./saga/saga";

const sagaMiddleware = createSagaMiddleware();



const store = createStore(indexReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)


store.subscribe(() => {
	console.log("store Updated", store.getState());
})
export default store;