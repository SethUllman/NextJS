'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

function SearchBar() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            
            <Image
              src={product.image}
              alt={product.title}
              width={100}
              height={100}
            />
            <h3>{product.title}</h3>
            <p className="ProductDescription">Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;