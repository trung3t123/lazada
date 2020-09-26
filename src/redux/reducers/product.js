const initialState = {
	listProducts: [],
	fetchType: 'price_esc',
	keyword: '',
	lst_cate_id: '',
	lst_city_id: '',
	sup_id: '',
	lowPrice: '',
	highPrice: '',
}

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'REQUEST_SUCCESS': {
			console.log('listProducts', action.payload);
			return {
				...state,
				listProducts: action.payload
			}

		}
		case 'FETCH_PRODUCTS': {
			console.log('fetching');
			return {
				...state,
				fetchType: action.payload.fetchType,
				keyword: action.payload.value
			}
		}

		case 'SET_FILTERS': {
			return {
				...state,
				lst_cate_id: action.lst_cate_id,
				lst_city_id: action.lst_city_id,
				sup_id: action.sup_id,
				lowPrice: action.lowPrice,
				highPrice: action.highPrice
			}
		}

		case 'SET_FETCH_TYPE': {
			console.log('fetchType', action.payload);
			return {
				...state,
				fetchType: action.payload
			}
		}

		case 'SET_KEYWORD': {
			console.log('keyword', action.payload);
			return {
				...state,
				keyword: action.payload
			}

		}
		default:
			return state;
	}
}

export default productReducer;