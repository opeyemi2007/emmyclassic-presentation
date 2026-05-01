import "./WhyChoose.css";

export default function WhyChoose() {
  return (
    <div className="why">
      <h2>
        Why Choose <span>EmmyClassic</span>
      </h2>

      <p className="subtitle">
        We combine quality, trust, and consistency to build beauty brands that
        last.
      </p>

      <div className="grid">
        <div className="card">
          <h3>Trusted Quality</h3>
          <p>
            Every product under our brands goes through strict quality standards
            to ensure customer satisfaction.
          </p>
        </div>

        <div className="card">
          <h3>Strong Brand Ecosystem</h3>
          <p>
            We manage multiple beauty brands under one powerful distribution
            structure.
          </p>
        </div>

        <div className="card">
          <h3>Customer Focused</h3>
          <p>
            Our goal is to always deliver products that meet real beauty and
            skincare needs.
          </p>
        </div>

        <div className="card">
          <h3>Growth Driven</h3>
          <p>
            We help beauty brands scale from local recognition to global
            presence.
          </p>
        </div>
      </div>
    </div>
  );
}