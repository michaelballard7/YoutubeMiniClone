import React from 'react'
import './VideoItem.css'

// I have to get really good at styling:

const VideoItem = ({video, select}) => {

	

	return (
			<div onClick={() => select(video)}className="video-item item">
				<img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.id.id} />
				<div className="content">
					<div className="header">
						{video.snippet.title}
					</div>
				</div>
			</div>
		)
}


export default VideoItem;