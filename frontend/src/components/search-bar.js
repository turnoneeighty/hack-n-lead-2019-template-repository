import React from "react"

class SearchBar extends React.Component {
    state = { inputText: "" };

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.inputText);


    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Clothes Search</label>
                        <input
                            type="text"
                            value={this.state.inputText}
                            onChange={e => this.setState({ inputText: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;