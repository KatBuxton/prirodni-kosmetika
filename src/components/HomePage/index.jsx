import React from 'react';
import './style.css';
import { ProductCard } from '../ProductCard';
import { useCategory } from '../../category-context';
// import filters from './filters.js';

export const HomePage = ({ filteredItems }) => {
  const {
    category,
    changeCategory,
    filterByCategory,
    resetCategory,
  } = useCategory();

  const handleChange = (e) => {
    if (e.target.value === '') {
      resetCategory();
    } else {
      changeCategory(e.target.value);
      filterByCategory(e.target.value);
    }
  };
  console.log(category);

  return (
    <>
      <div className="site-content">
        <div className="navigation">
          <h2>Vyberte kategorii: </h2>
          <select value={category} onChange={handleChange}>
            <option value=""> Vše</option>
            <option value="kosmetika"> Kosmetika</option>
            <option value="drogerie"> Drogerie</option>
            <option value="darkove-sady"> Dárkové sady</option>
          </select>
        </div>
        <div className="product-list">
          {filteredItems.map((item) => (
            <ProductCard key={item.index} content={filteredItems} item={item} />
          ))}
        </div>
      </div>
      <div className="footer">Created by Katerina Buxton, 2022</div>
    </>
  );
};

// const [filteredProducts, setFilteredProducts] = useState([]);
// const [category, setCategory] = useState();

// useEffect(() => {
//   setFilteredProducts();
// }, []);

// const handleCategoryChange = (e) => {
//   setCategory(e.target.value);
// };

// const getFilteredList = () => {
//   if (!category) {
//     return filteredProducts;
//   }
//   return filteredProducts.filter((item) => item.category === category);
// };

// const filteredList = useMemo(getFilteredList, [category, filteredProducts]);

// const options = [
//   { value: 'vsechny-produkty', label: 'Všechny produkty' },
//   { value: 'kosmetika', label: 'Kosmetika' },
//   { value: 'drogerie', label: 'Drogerie' },
//   { value: 'darkove-sady', label: 'Dárkové sady' },
// ];
