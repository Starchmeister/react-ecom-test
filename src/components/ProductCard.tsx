import {Link} from "react-router-dom";

interface ProductCardProps {

product:{
    id: number;
    name: string;
    price: number;
    image: string;
}
}

export default function ProductCard({product}: ProductCardProps) {
    return(
        <div className="product-card" key={product.id}>
            <img src={product.image} alt="product" className="product-card-image" />
            <div className="product-card-content">
                <h3 className="product-card-name">{product.name}</h3>
                <p className="product-card-price">{product.price}</p>
                <div className="product-card-actions">
                    <Link className="btn btn-secondary"  to={""}>View Details</Link>
                    <button className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    )
}