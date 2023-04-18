import React from 'react';
// import Products from './Products/Products';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import CategoriesMenu from '../../components/CategoriesMenu/CategoriesMenu';
import Products from './Products/Products';

const ProductScreen = () => {
  return (
    <div className="categoriesMenu">
      <div className="header">
        <Header />
        <Search />
      </div>
      <div className='body' style={{display: 'flex', flexDirection: 'row'}}>
      
      <CategoriesMenu />
      <Products />
      </div>
    </div>
  );
};

export default ProductScreen;
