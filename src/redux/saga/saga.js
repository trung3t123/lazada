import { put, all, takeEvery, call, fork } from 'redux-saga/effects';
import Axios from 'axios';
import productSagaWatcher from './product';


export default function* rootSaga() {
	yield call(productSagaWatcher);
}