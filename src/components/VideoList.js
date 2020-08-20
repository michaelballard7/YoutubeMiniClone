import React from 'react'
import VideoItem from './VideoItem'


const VideoList = ({videos, select}) => {

	let vids = videos.map( (video) => {

		return <VideoItem key={video.id.videoId} video={video} select={select} />
	})

	return <div className="ui relaxed divided list"> {vids} </div>

}

export default VideoList;