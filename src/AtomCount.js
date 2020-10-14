import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./AtomCount.css";

const AtomCount = ({ symbol, count }) => (
  <div className="symbol">
    <span className="atom">{symbol}</span>
    <FontAwesomeIcon className="arrow" icon={faArrowRight} />
    <span className="count">{count}</span>
  </div>
);

export default AtomCount;
