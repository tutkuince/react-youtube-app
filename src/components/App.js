import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends React.Component {

    state = {
        videos: []
    };

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({
            videos: response
        });
    };

    render() {
        return(
            <div className="bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <SearchBar onFormSubmit={this.onTermSubmit}/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;