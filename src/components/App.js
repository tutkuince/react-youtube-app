import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null
    };

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({
            videos: response.data.items
        });
    };

    onVideoSelect = (video) => {
      this.setState({selectedVideo: video});
    };

    render() {
        return(
            <div className="bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <SearchBar onFormSubmit={this.onTermSubmit}/>
                            <small id="searchTerm" className="form-text text-muted">
                                I have {this.state.videos.length} videos
                            </small>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">

                        </div>
                        <div className="col-md-4">
                            <VideoList
                                videos={this.state.videos}
                                onVideoSelect={this.onVideoSelect}
                            />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;