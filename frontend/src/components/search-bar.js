import React from "react"

class SearchBar extends React.Component {
    state = { inputText: "" };

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.inputText);
    };

    render() {
        return (
            <header>
                <div className="search-bar input-group mb-3">
                    <form onSubmit={this.onFormSubmit}>
                        <input
                            className="form-control"
                            type="text"
                            aria-label="Type URL" aria-describedby="basic-addon2"
                            placeholder="Type URL"
                            value={this.state.inputText}
                            onChange={e => this.setState({ inputText: e.target.value })}
                        />
                    </form>
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button"><i className="fas fa-search" aria-hidden="true"></i></button>
                    </div>
                    <button className="btn btn-primary fas fa-camera" type="submit"><i aria-hidden="true"></i></button>
                </div>
            </header>
        );
    }
}

export default SearchBar;