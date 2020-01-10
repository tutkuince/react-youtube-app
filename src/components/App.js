import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
    render() {
        return(
            <div className="bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <SearchBar/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;