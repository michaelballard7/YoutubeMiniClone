import React from 'react'; 
import SearchBar from './components/SearchBar'
import youtubeApi from './api_config/youtube_api'
import VideoList from './components/VideoList'

const PUBLIC_KEY = 'AIzaSyC_vAtA0Klngt-HwaHc68gBvz6hzUtXA-k'

class App extends React.Component {
	

	state = {
		videoList: []
	}



	getSearchTerm = async (term) => {
		let data = await youtubeApi.get('/search', {
				params: {
			        q: term,
			        part: "snippet",
			        type: 'video',
			        maxResults: 5,
			        key: PUBLIC_KEY
				 }
			})
		this.setState({videoList:data.data.items})
	};

	render(){
		
		return (
			<div className="ui container">
				<SearchBar searchTerm={this.getSearchTerm}/>
				<h1>Hello World</h1>
				<VideoList videos={this.state.videoList} />
			</div>
			
			)
	}
}



export default App;