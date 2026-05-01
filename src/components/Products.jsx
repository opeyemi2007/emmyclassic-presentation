import "./Products.css";

export default function Products() {
  return (
    <div className="products">
      <h2>
        Our <span>Products</span>
      </h2>

      <p className="subtitle">
        A selection of our premium beauty and skincare products.
      </p>

      <div className="carousel">
        <div className="track">
          {/* ORIGINAL */}
          <ProductCard img="/1.png"/>
          <ProductCard img="/CLASSIC MAKEUP DESIGNS.png"/>
          <ProductCard img="/Gemini_Generated_Image_glxdk5glxdk5glxd.png"/>
          <ProductCard img="/Mist-Fix-scaled-1-247x296.jpg" />

          {/* DUPLICATE (MUST MATCH EXACTLY) */}
          <ProductCard img="/1.png" />
          <ProductCard img="/CLASSIC MAKEUP DESIGNS.png" />
          <ProductCard img="/Gemini_Generated_Image_glxdk5glxdk5glxd.png" />
          <ProductCard img="/Mist-Fix-scaled-1-247x296.jpg"/>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ img, name }) {
  return (
    <div className="productCard">
      <img src={img} alt={name} />
    </div>
  );
}