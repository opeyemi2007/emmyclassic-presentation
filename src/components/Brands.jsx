import "./Brands.css";

export default function Brands() {
  return (
    <div className="brands">
      <h2>
        Our <span>Brands</span>
      </h2>

      <p className="subtitle">
        EmmyClassic Makeup is the parent distributor of premium beauty lines.
      </p>

      <div className="grid">
        <div className="brandCard">
          <h3>Classic Makeup USA</h3>
          <p>Premium makeup & beauty essentials</p>
        </div>

        <div className="brandCard">
          <h3>Classic Skincare</h3>
          <p>Healthy skin solutions & treatments</p>
        </div>

        <div className="brandCard">
          <h3>Classic HairCare</h3>
          <p>Hair nourishment & restoration products</p>
        </div>
      </div>
    </div>
  );
}