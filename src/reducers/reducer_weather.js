import { FETCH_WEATHER } from '../actions/index';

//Reducers are only functions, always state and then action
// Set initial state as an array
export default function(state = [], action){
	console.log("Action received,", action);

	switch(action.type){
		case FETCH_WEATHER:
			//Return an array of the data (without mutating state)
			//NOT state.push
			//Return a new version of our state
			return state.concat([ action.payload.data ]);

			//ES6
			//return [ action.payload.data , ...state ];
	}

	return state;
}