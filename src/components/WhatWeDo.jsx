import "./WhatWeDo.css";

export default function WhatWeDo() {
  return (
    <div className="whatWeDo">
      <h2>
        What We <span>Do</span>
      </h2>

      <p className="subtitle">
        We don’t just distribute products — we build beauty brands that grow
        and connect with people.
      </p>

      <div className="cards">
        <div className="card">
          <h3>Distribution</h3>
          <p>
            We supply and distribute high-quality beauty, skincare, and haircare
            products under trusted brands.
          </p>
        </div>

        <div className="card">
          <h3>Brand Development</h3>
          <p>
            We help build strong beauty identities that stand out in a
            competitive market.
          </p>
        </div>

        <div className="card">
          <h3>Market Expansion</h3>
          <p>
            We connect brands to wider audiences and ensure they reach the right
            customers globally.
          </p>
        </div>
      </div>
    </div>
  );
}