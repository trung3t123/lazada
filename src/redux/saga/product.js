import { takeLatest, call, put, select } from "redux-saga/effects";
import { fetchProducts, requestSuccess, requestFilterSuccess } from "../actions/product";
import Axios from "axios";

function* getData() {
	const sagaState = yield select();
	const { fetchType, keyword, lst_cate_id, lst_city_id, sup_id, lowPrice, highPrice } = sagaState.product
	console.log('sagaState', sagaState);
	const res = yield call(fetchApi, fetchType, keyword, lst_cate_id, lst_city_id, sup_id, lowPrice, highPrice);
	console.log('users res', res);
	const { data, status } = res;
	if (status === 200) {
		yield put(requestSuccess(data));
	}
}

function fetchApi(fetchType, keyword, lst_cate_id, lst_city_id, sup_id, lowPrice, highPrice) {
	return Axios.get(`http://giatotnhat.xyz/services/search.php?range_price=${lowPrice, highPrice}&keyword=${keyword}&lst_cate_id=${lst_cate_id}&lst_city_id=${lst_city_id}&${fetchType}&sup_id=${sup_id}`)

}

export default function* productSagaWatcher() {
	yield takeLatest('FETCH_PRODUCTS', getData)
}