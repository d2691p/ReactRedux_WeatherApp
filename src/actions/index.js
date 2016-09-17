import axios from 'axios';

const API_KEY = 'cb42318f91164673bf8182e1209488e7';
const ROUTE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

//Action creator for request to APIs, user submits a city
export function fetchWeather(city) {
	//Add query to URL
	const url = `${ROUTE_URL}&q=${city},gb`;
	
	//AJAX request as a GET, returns a promise (promises do not contain data)
	const request = axios.get(url);

	console.log('Request', request);

	/*return the action to reducer (through the middleware redux-promise)
	redux-promise stops action as payload is a promise, when request is finished
	dispatches the action of same type, and the payload of the resolved request
	It unwraps the promise and then sends to reducers. 
	Reducers only care about data, which redux-promise sends*/
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}