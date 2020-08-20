import React, { Component } from 'react';


class SearchBar extends Component {
	
	state = {
		searchTerm: ''
	}

	submitHandler = (e) => {

		e.preventDefault()

		this.props.searchTerm(this.state.searchTerm)

	}

	formChangeHandler = (e) => {
		this.setState({
			searchTerm: e.target.value
		})
	}

	render() {

		return (
			<div className="search-bar ui segment">
				<form className="ui form" onSubmit={this.submitHandler}> 
					<div className="field">
						<label htmlFor="video-search">Find A Video</label>
						<input 
							value={this.state.searchTerm} 
							onChange={this.formChangeHandler} 
							type="text"
							placeholder="Search MiniTube...."
						 />
					</div>
				</form>
			</div>
		);
	}
}


export default SearchBar;