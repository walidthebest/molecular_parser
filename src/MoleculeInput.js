import { render } from "@testing-library/react";
import React, { Component } from "react";
import { check } from "./api";

class MoleculeInput extends Component {
  state = { valid: true, molecule: "" };

  //Arrow fx for binding
  handleMoleculeState = (event) => {
    var molecule = event.target.value;
    check(molecule)
      .then((response) => {
        var statusCode = response.status;
        var valid = statusCode === 200;
        this.setState({ valid, molecule });
        return response.json();
      })
      .then((data) => console.log(data.message));
  };
  parse = (event) => {
    event.preventDefault();
    this.props.molecule_parser(this.state.molecule);
  };
  render() {
    const { valid } = this.state;
    return (
      <form onSubmit={this.parse}>
        <p>
          <label>
            Please enter a molecule
            <input
              type="text"
              onChange={this.handleMoleculeState}
              value={this.state.molecule}
            />
            {valid ? <span>Valid</span> : <span> Not Valid</span>}
          </label>
          <button type="submit">J’ai gagné !</button>
        </p>
      </form>
    );
  }
}

export default MoleculeInput;
