import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import config from '../config.js';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';
const API_KEY = config.API_KEY;



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearchTerm('lebron');
  }
  videoSearchTerm(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    })

  }
  render() {
    const videoSearch = _.debounce((term) => { this.videoSearchTerm(term) }, 300);
    //debounce takes the inner function and returns new function every 300 as above example.
    return(
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
