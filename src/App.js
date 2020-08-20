import React from 'react'; 
import SearchBar from './components/SearchBar'
import youtubeApi from './api_config/youtube_api'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail';

const PUBLIC_KEY = 'AIzaSyC_vAtA0Klngt-HwaHc68gBvz6hzUtXA-k'

class App extends React.Component {
	

	state = {
		videoList: [],
		selectedVideo: null
	}


	componentDidMount(){

		const terms = ["Jay Z", "Machine Learning", "Quant Finance", "Carmelo Anthony", "Gervonta Davis", "Fencing", "Linear Algebra"];

		const random = Math.floor(Math.random() * terms.length)

		this.getSearchTerm(terms[random])
	}


	getSearchTerm = async (term) => {
		let data = await youtubeApi.get('/search', {
				params: {
			        q: term,
			        part: "snippet",
			        type: 'video',
			        maxResults: 6,
			        key: PUBLIC_KEY
				 }
			})
		this.setState({
			videoList:data.data.items,
			selectedVideo: data.data.items[0]
		})
	};


	onVideoSelect = (video) => {
		this.setState({
			selectedVideo:video
		})
	}



	render(){

		console.log(this.state.selectedVideo)
		
		return (
			<div className="ui container" style={{marginTop:'2em'}}>
				<SearchBar searchTerm={this.getSearchTerm} />
				<h1>Welcome to Youtube Mini</h1>
				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetail video={this.state.selectedVideo} />
						</div>
						<div className="five wide column">
							<VideoList videos={this.state.videoList} select={this.onVideoSelect} />
						</div>
					</div>	
				</div>
			</div>
			
			)
	}
}



export default App;