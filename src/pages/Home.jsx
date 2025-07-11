import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";


const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    
    <div className="home">
      <h1>Featured Products</h1>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
                    
        ))}
      </div>
    </div>
  
    
  );
};

export default Home;
