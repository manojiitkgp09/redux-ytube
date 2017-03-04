import React from 'react';
import VideoListItem from './video_list_item';
//in functional component props are present in args
//in class based component props are part of this
//so while refactoring convert all references to props to
//this.props
const VideoList = (props) => {
	const videos = props.videos.map((video) => {
		return <VideoListItem changeSelectedVideo={props.changeSelectedVideo} key={video.id.videoId} video={video} />
	});

	return (
		<ul className="col-md-4 list-group">
			{videos}
		</ul>
	);
}

export default VideoList;