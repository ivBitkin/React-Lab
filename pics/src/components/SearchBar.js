import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSumbit = event => {
    event.preventDefault();
    this.props.onSumbit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSumbit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
