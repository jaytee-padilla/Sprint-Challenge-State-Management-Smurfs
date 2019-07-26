import axios from 'axios';
import uuid from 'uuid';

// data fetching
export const FETCH_LOADING = "FETCH_LOADING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

//data posting
export const POST_LOADING = "POST_LOADING";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAIL = "POST_FAIL";

export const getSmurfData = () => dispatch => {
	dispatch({type: FETCH_LOADING});
	axios.get("http://localhost:3333/smurfs")
		.then(response => {
			dispatch({type: FETCH_SUCCESS, payload: response.data})
		})
		.catch(error => {
			dispatch({type: FETCH_FAIL, payload: error})
		});
};

export const addSmurf = (newSmurf) => dispatch => {
	axios.post("http://localhost:3333/smurfs", {...newSmurf})
	.then(response => {
		dispatch({type: POST_SUCCESS, payload: response.data})
	})
}