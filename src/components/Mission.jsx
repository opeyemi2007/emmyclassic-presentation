import "./Mission.css";

export default function Mission() {
  return (
    <div className="mission">
      <h2>
        Mission & <span>Vision</span>
      </h2>

      <div className="grid">
        <div className="box">
          <h3>Our Mission</h3>
          <p>
            To deliver high-quality beauty, skincare, and haircare products
            through trusted brands that enhance confidence and natural beauty.
          </p>
        </div>

        <div className="box">
          <h3>Our Vision</h3>
          <p>
            To become a leading global beauty distribution powerhouse, shaping
            the future of beauty brands across Africa and beyond.
          </p>
        </div>
      </div>
    </div>
  );
}