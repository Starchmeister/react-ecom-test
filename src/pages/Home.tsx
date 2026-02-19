import {getProducts} from "../data/products.ts";
import ProductCard from "../components/ProductCard.tsx";

export default function HomePage() {

    const products = getProducts()

    return (
        <div className="page">
          <div className="home-hero">
              <h1 className="home-title">Welcome to HopGo!</h1>
              <p className="home-subtitle">Discover amazing products at amazing prices</p>
          </div>
          <div className="container">
              <h2 className="page-title">Our products</h2>
              <div className="product-grid">
                  {products.map((product)=>(
                     <ProductCard key={product.id} product={product} />
                  ))}
              </div>
          </div>
        </div>
    )
}