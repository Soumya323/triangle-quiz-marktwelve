import { useState } from "react";
import "./components.css";

const TriangleCheck = () => {
  let angles = [0, 0, 0];
  let sum = 0;

  function onInputValueChanged(value, index) {
    angles[index] = value;
    console.log(value + "    " + index + "      " + angles);
  }

  function checkIfTriangle() {
    sum = 0;
    angles.map((val) => {
      sum += parseInt(val);
    });

    let result = "";
    if (sum == 180) {
      result = "Yes the angles form a triangle!!";
    } else {
      result = "Oh Oh! No the angles don't form a triangle.";
    }

    document.getElementById("triangle-result").innerHTML = result;
  }

  return (
    <>
      <div className="triangle-check hero-body">
        <p className="primary-label">Angle of traingle</p>

        <p className="secondary-label">Angle 1</p>
        <input
          type="number"
          id="tri-input-1"
          onChange={(e) => onInputValueChanged(e.target.value, 0)}
        />

        <p className="secondary-label">Angle 2</p>
        <input
          type="number"
          id="tri-input-2"
          onChange={(e) => onInputValueChanged(e.target.value, 1)}
        />

        <p className="secondary-label">Angle 3</p>
        <input
          type="number"
          id="tri-input-3"
          onChange={(e) => onInputValueChanged(e.target.value, 2)}
        />

        <button className="primary-button" onClick={checkIfTriangle}>
          Is Triangle?
        </button>

        <p
          id="triangle-result"
          style={{
            fontWeight: "600",
            fontSize: "25px",
            marginTop: "10px",
          }}></p>
      </div>
    </>
  );
};

export default TriangleCheck;
