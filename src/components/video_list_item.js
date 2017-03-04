import React from 'react';
//get key from argument array and use object concise when key and value has same name 
const VideoItemList = ({video, changeSelectedVideo}) => {
	return (
		<li onClick={() => {changeSelectedVideo(video)}} className="list-group-item video-list-item">
			<div className="media-left">
				<img className="media-reponsive" src={video.snippet.thumbnails.default.url} />
			</div>
			<div className="media-body">
				<span className="media-heading">{video.snippet.title}</span>
			</div>
		</li>
		)
};

export default VideoItemList;