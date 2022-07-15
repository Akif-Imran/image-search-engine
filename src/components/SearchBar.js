import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };

    //function bindings
    //the this keyword inside the onInputChange function would refer to global/window object
    //in the following R.H.S statement this.onInputChange.bind(this); returns a new function that binds the
    //this reference inside the onInputChange function to the object passed as argument to .bind here it happens to be
    //the this keyword which refers to the current Component object.
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    //writing functions this way is basically shorthand for onInputChange = function(event){};
    //with out bindings in the constructor the this keyword here would not refer to the component.
    this.setState({ term: event.target.value });
  }

  onFormSubmit = (event) => {
    //this function is not bind in constructor because arrow function inherit the this keyword
    event.preventDefault();
    this.props.onSubmit(this.state.term); //being used to communicate the child components state to the parent component.
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          {/* <form onSubmit={(event)=>this.onFormSubmit(event)} className="ui form"> this will fix the this reference*/}
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
