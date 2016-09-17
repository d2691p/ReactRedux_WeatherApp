import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props){
		super(props);

		this.state = { term: '' };

		/*Binding the function to 'this', replace existing function with 
			bound function
			When we have a acallback, passed to a DOM element, referencing this
			You must bind 'this'.*/
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event){
		this.setState({ term: event.target.value});
	}

	onFormSubmit(event){
		//Prevent the form from trying to make a POST request
		event.preventDefault();

		//Fetch weather data
		this.props.fetchWeather(this.state.term);
		//clear input after submit
		this.setState({ term: ''});
	}

	render(){
		return(
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
					placeholder="Get a 5 day forecast in your favourite cities"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">
					Search
					</button>
				</span>
			</form>
		);
	}
}


function mapDispatchToProps(dispatch){
	// Pass action to middleware and reducers
	//this.props.fetchWeather now available
	return bindActionCreators({ fetchWeather }, dispatch);
}

//Null where state will be. mapDispatch ALWAYS goes second, null because this
//container does not care about state
export default connect(null, mapDispatchToProps)(SearchBar);