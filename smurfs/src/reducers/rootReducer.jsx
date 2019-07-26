import {
	FETCH_LOADING,
	FETCH_SUCCESS,
	FETCH_FAIL,
	POST_LOADING,
	POST_SUCCESS,
	POST_FAIL
} from '../actions/actions';

const initialSmurfData = {
	isLoading: false,
	smurfs: []
};

export const rootReducer = (state = initialSmurfData, action) => {
	switch(action.type) {
		case FETCH_LOADING:
			return {
				...state,
				isLoading: true
			};

		case FETCH_SUCCESS:
			return {
				...state,
				isLoading: false,
				error: "",
				smurfs: action.payload
			};
			
		case FETCH_FAIL:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};

			case POST_SUCCESS:
				return {
					...state,
					isLoading: false,
					smurfs: action.payload
				};

		default:
			return state;
	}
};