import React from "react";

class SearchBar extends React.Component {
    state = {term: ''};

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="searchTerm">Search</label>
                        <input
                            type="text"
                            className="form-control"
                            id="searchTerm"
                            onChange={(event) => {
                                this.setState({term: event.target.value})
                            }}
                            value={this.state.term}
                        />

                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;