import React from 'react';
// import Products from './Products/Products';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import CategoriesMenu from '../../components/CategoriesMenu/CategoriesMenu';

const ProductScreen = () => {
  return (
    <div className='categoriesMenu'>
      <Header />
      <Search />
      <CategoriesMenu />
    </div>
  );
};

export default ProductScreen;
