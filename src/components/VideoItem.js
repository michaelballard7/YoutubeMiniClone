import React from 'react'

// I have to get really good at styling:

const VideoItem = props => {

	return (
			<div className="">
				<div>
					{props.title}
				</div>
				<br/>
				<p className="">-----------</p>
				<div className="">
					{props.description}
				</div>
			</div>
		)
}


export default VideoItem;