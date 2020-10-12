import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MoleculeInput from "./MoleculeInput";
import AtomCount from "./AtomCount";
import { parse } from "./api";

class App extends Component {
  state = {
    atoms: [],
  };

  parse = (molecule) => {
    var new_atoms = [];
    parse(molecule)
      .then((response) => response.json())
      .then((result) => {
        const output = result.output;
        for (var key in result.output) {
          new_atoms.push({ symbol: key, count: output[key] });
        }
        return new_atoms;
      })
      .then((atoms) => this.setState({ atoms }));
  };

  render() {
    const { atoms } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <MoleculeInput molecule_parser={this.parse} />
          {atoms != [] &&
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
