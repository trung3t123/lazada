import Axios from 'axios';


export const requestSuccess = (responseData) => {
	return {
		type: 'REQUEST_SUCCESS',
		payload: responseData
	}
}

export const requestFilterSuccess = (responseData) => {
	return {
		type: 'REQUEST_FILTER_SUCCESS',
		payload: responseData
	}
}


export const fetchProducts = (fetchType, value) => {
	return {
		type: 'FETCH_PRODUCTS',
		payload: {
			fetchType: fetchType,
			value: value,
		}
	}
}

export const setFilters = ({ lst_cate_id, lst_city_id, sup_id, lowPrice, highPrice }) => {
	return {
		type: 'SET_FILTERS',
		lst_cate_id, lst_city_id, sup_id, lowPrice, highPrice,
	}
}

export const requestFail = (responseError) => {
	return {
		type: 'REQUEST_FAIL',
		payload: responseError
	}
}


export const setFetchType = (fetchType) => {
	return {
		type: 'SET_FETCH_TYPE',
		payload: fetchType
	}
}

export const setKeyWord = (keyWord) => {
	return {
		type: 'SET_KEYWORD',
		payload: keyWord
	}
}

export const fetchFilters = (keyWord) => {
	return function (dispatch) {
		return Axios.get(`http://giatotnhat.xyz/services/get_filter.php?keyword=${keyWord}`).then((response) => {
			console.log('data', response.data);
			dispatch(requestFilterSuccess(response.data));
		}
		).catch((error) => {
			dispatch(requestError(error));
		})
	}
}

