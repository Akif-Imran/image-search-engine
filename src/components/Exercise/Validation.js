import React, { Component } from "react";

class Validation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: {
        value: "",
        isValid: true,
        validMessage: "Password seems ok.",
        invalidMessage: "Password must be at least 4 characters.",
        validColor: "green",
        invalidColor: "red",
      },
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange = (event) => {
    if (event.target.value.length < 4) {
      this.setState({
        password: {
          ...this.state.password,
          isValid: false,
          value: event.target.value,
        },
      });
    } else {
      this.setState({
        password: {
          ...this.state.password,
          isValid: true,
          value: event.target.value,
        },
      });
    }
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui fluid form">
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={this.state.password.value}
              onChange={this.onInputChange}
            />
            {!this.state.password.isValid ? (
              <div className="ui pointing red basic label">
                {this.state.password.invalidMessage}
              </div>
            ) : (
              <></>
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default Validation;
