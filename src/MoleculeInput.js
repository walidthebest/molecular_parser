import React, { useState } from "react";
import { check } from "./api";
import "./MoleculeInput.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

function MoleculeInput(props) {
  const [valid, setValid] = useState(true);
  const [molecule, setMolecule] = useState("");

  //Arrow fx for binding
  const handleMoleculeState = (event) => {
    var molecule = event.target.value;
    setMolecule(molecule);
    check(molecule)
      .then((response) => {
        console.log(response.status);
        valid !== (response.status === 200) && setValid(!valid);
        return response.json();
      })
      .then((data) => console.log(data.error));
  };
  const parse = (event) => {
    event.preventDefault();
    if (valid) {
      props.molecule_parser(molecule);
    } else {
      alert("Warning : Invalid Molecule Pattern !");
    }
  };
  return (
    <form onSubmit={parse}>
      <p>
        Please enter a molecule
        <label>
          <input type="text" onChange={handleMoleculeState} value={molecule} />
          {molecule !== "" &&
            (valid ? (
              <FontAwesomeIcon className="checkSign green" icon={faCheck} />
            ) : (
              <FontAwesomeIcon className="checkSign red" icon={faTimes} />
            ))}
        </label>
        <button type="submit">J’ai gagné !</button>
      </p>
    </form>
  );
}

export default MoleculeInput;
