import "./components.css";
const AreaOfTriangle = () => {
  let sideA = 0.0;
  let sideB = 0.0;
  let sideC = 0.0;

  function calculateArea() {
    let s = parseFloat((sideA + sideB + sideC) / 2);
    console.log("s is " + s);
    let isValidTriangle =
      sideA + sideB > sideC && sideB + sideC > sideA && sideA + sideC > sideB;
    let result = "";
    if (isValidTriangle) {
      let area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));
      result = "Area of triangle is " + area;
    } else {
      result = "Enter valid side lengths for the triangle.";
    }

    document.getElementById("area-result").innerHTML = result;
  }

  return (
    <>
      <div className="area-of-triangle hero-body">
        <p className="primary-label">Calculate Area of a triangle</p>

        <p className="secondary-label"> Enter first side of a triangle (a) =</p>
        <input
          type="number"
          id="hyp-input-1"
          onChange={(e) => {
            sideA = parseFloat(e.target.value);
          }}
        />

        <p className="secondary-label"> Enter second side of a triangle =</p>
        <input
          type="number"
          id="hyp-input-2"
          onChange={(e) => {
            sideB = parseFloat(e.target.value);
          }}
        />

        <p className="secondary-label"> Enter third side of a triangle =</p>
        <input
          type="number"
          id="hyp-input-3"
          onChange={(e) => {
            sideC = parseFloat(e.target.value);
          }}
        />

        <button className="primary-button" onClick={calculateArea}>
          Calculate
        </button>

        <p
          id="area-result"
          style={{
            fontWeight: "600",
            fontSize: "25px",
            marginTop: "10px",
          }}></p>
      </div>
    </>
  );
};

export default AreaOfTriangle;
