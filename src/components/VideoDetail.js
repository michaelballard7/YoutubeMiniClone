import React from 'react'





const VideoDetail = function({video}){

	console.log(video)

	if(!video){
		return <div> Loading... </div>
	}
	
	return (

			<div> 
				<div className="ui embed">
					<iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} frameborder="0" title={video.id.id} />
				</div>

				<div className="ui segment">
					<h4 className="ui header">{video.snippet.title}</h4>
					<p className="">{video.snippet.description}</p>
				</div>
				
			</div>
		)
}


export default VideoDetail;