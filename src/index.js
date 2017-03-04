//Create a new component. This component should produce
//some html
//const is similar to var except that its value cannot be changed (it cannot be reassigned) and its block scoped

import React, {Component} from 'react'; //es6 syntax
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'; //File reference needed to be relative to the current file
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';

const API_KEY = 'AIzaSyDjcV2GbIEkJes_JlXEVJNgNW1PdPLCcrY';

// YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
// 	console.log(data);
// })
// const App = () => {
// 	return <div>Hi!</div>; //how can we write html in js. Its JSX and transpiled by babel into js
// }

//this data from api needs to be part of state so that it can be used in other components
//so we refactor the functional component into class based component

// const App = () => {
// 	return (
// 	<div>
// 		<SearchBar />
// 	</div>
// 	); //how can we write html in js. Its JSX and transpiled by babel into js
// 	//multi line expression are wrapped in parentheses or div should be in the same line as return statement
// }

class App extends React.Component {
	constructor(props){
		super(props);

		this.state = {videos: []};
		
		// YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
		// 	// this.state.videos = data; //dont do this
		// 	// this.setState({videos: data});
		// });
		// YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
		// 	// this.state.videos = data; //dont do this
		// 	this.setState({videos: data});
		// });
		this.searchVideos('surfboards');
	}

	changeSelectedVideo(selectedVideo) {
		this.setState({
			selectedVideo: selectedVideo
		});
	}

	searchVideos(term){
		YTSearch({key: API_KEY, term: term}, (videos) => {
			// this.state.videos = data; //dont do this
			// this.setState({videos: videos});
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			}); //es6 when key and value are same
		});				
	}
	//we are passing prop videos to VideoList component
	//curley braces are used because we referring to js variable
	//NOTE: In video list changeselectedvideo Binding is necessary to this otherwise this will be undefined
	render() {
		// const firstVideo = this.videos[0];
		const videoSearch = _.debounce((term) => {this.searchVideos(term)}, 300);
		return (
		<div>
			<SearchBar searchVideos={videoSearch}/>
			<div className="row" >
			<VideoDetail selectedVideo={this.state.selectedVideo} />
			 <VideoList changeSelectedVideo={this.changeSelectedVideo.bind(this)} videos={this.state.videos} /> 
			{/*<VideoList changeSelectedVideo={(selectedVideo) => this.setState({selectedVideo})} videos={this.state.videos} /> */}
			</div>
		</div>
		);
	}
}

//App = 5 is invalid because app is declared as const

//Take this component's generated HTML and put it 
//on the page in DOM

ReactDOM.render(<App />, document.querySelector('.container'));