import "./About.css";

export default function About() {
  return (
    <div className="about">
      <div className="left">
        <h2>
          Who is <span>EmmyClassic Makeup?</span>
        </h2>

        <p>
          EmmyClassic Makeup is a premium beauty distribution brand powering
          some of the most trusted skincare, makeup, and haircare brands.
        </p>

        <p>
          We connect quality beauty products to customers through innovation,
          consistency, and a strong commitment to excellence.
        </p>
      </div>

      <div className="right">
        <div className="card">
          <h3>3+</h3>
          <p>Brand Lines</p>
        </div>

        <div className="card">
          <h3>100%</h3>
          <p>Commitment</p>
        </div>

        <div className="card">
          <h3>Global</h3>
          <p>Vision</p>
        </div>
      </div>
    </div>
  );
}