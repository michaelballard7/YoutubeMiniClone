import React from 'react'
import VideoItem from './VideoItem'


const VideoList = ({videos}) => {

	let vids = videos.map( (video) => {

		return <VideoItem key={video.id.videoId} title={video.snippet.title}  description={video.snippet.description} />
	})

	return <div> {vids} </div>

}

export default VideoList;