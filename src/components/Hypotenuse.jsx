import "./components.css";
const Hypotenuse = () => {
  let base = 0;
  let height = 0;

  function calculateHypotaneous() {
    console.log(base + "   " + height);
    let result = Math.sqrt(Math.pow(base, 2) + Math.pow(height, 2));
    document.getElementById("hypotenuse-result").innerHTML =
      "Hypotenuse of triangle is " + result;
  }

  return (
    <>
      <div className="hypotenuse hero-body">
        <p className="primary-label">Calculate Hypotenuse of a triangle</p>

        <p className="secondary-label"> Enter base value (a) =</p>
        <input
          type="number"
          id="hyp-input-1"
          onChange={(e) => {
            base = e.target.value;
          }}
        />

        <p className="secondary-label"> Enter height value (a) =</p>
        <input
          type="number"
          id="hyp-input-2"
          onChange={(e) => {
            height = e.target.value;
          }}
        />

        <button className="primary-button" onClick={calculateHypotaneous}>
          Calculate hypotenuse
        </button>

        <p className="primary-label">Hypotenuse formula</p>
        <p>√(base² + height²)</p>

        <p
          id="hypotenuse-result"
          style={{
            fontWeight: "600",
            fontSize: "25px",
            marginTop: "10px",
          }}></p>
      </div>
    </>
  );
};

export default Hypotenuse;
