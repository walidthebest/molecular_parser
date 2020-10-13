import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MoleculeInput from "./MoleculeInput";
import AtomCount from "./AtomCount";
import { parse } from "./api";

class App extends Component {
  state = { atoms: [] };

  parseMolecule = (molecule) => {
    parse(molecule)
      .then((response) => response.json())
      .then((result) => this.setState({ atoms: result.output }));
  };

  render() {
    const { atoms } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <MoleculeInput molecule_parser={this.parseMolecule} />
          {atoms !== [] &&
            atoms.map(function (atom, index) {
              return (
                <AtomCount
                  symbol={atom.symbol}
                  count={atom.count}
                  key={index}
                />
              );
            })}
        </header>
      </div>
    );
  }
}

export default App;
