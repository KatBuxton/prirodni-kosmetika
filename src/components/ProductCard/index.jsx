import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const ProductCard = ({ item }) => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch('https://apps.kodim.cz/react-2/xxxmuck/products')
  //     .then((response) => response.json())
  //     .then((displayProduct) => setData(displayProduct));
  // }, []);

  return (
    <>
      <Link
        to={`/product/${item.index}`}
        className="product-preview"
        key={item.index}
        onClick={() => {
          window.scroll(0, 0);
        }}
      >
        <div
          className="preview-image"
          style={{
            backgroundImage: `url(${item.image})`,
            width: '300px',
            height: '300px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          alt={item.name}
        ></div>
        <div className="preview-name">{item.name}</div>
      </Link>
    </>
  );
};
