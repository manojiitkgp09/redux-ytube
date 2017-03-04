import React from 'react';
//get key from argument array and use object concise when key and value has same name 
const VideoDetail = ({selectedVideo}) => {
 	if (!selectedVideo) { // evaluates to true if selectedVideo is null
    	return <div>Loading...</div>; 
  	}	
	const url = "https://youtube.com/embed/"+selectedVideo.id.videoId;
	return (
		<div className="col-md-8 video-detail">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="media-details">
				<div className="media-title">
				{selectedVideo.snippet.title}
				</div>
				<div className="media-description">
				{selectedVideo.snippet.description}
				</div>		
			</div>
		</div>
		)
};

export default VideoDetail;