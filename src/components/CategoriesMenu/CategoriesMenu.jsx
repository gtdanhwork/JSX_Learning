import React from 'react';
import data from '../../data';
import CategoryTotals from './CagetoryTotals/CategoryTotals';
import CategoryBrands from './CategoryBrands/CategoryBrands';
import CategoryRatings from './CategoryRatings/CategoryRatings';
import CategoryPrice from './CategoriesPrice/CategoryPrice';

function CategoriesMenu() {
  return (
    <div className="categoriesMenu" style={{width: '15%', padding: '1rem'}}>
      <CategoryTotals brands={data.brands} />
      <CategoryBrands brands={data.brands} />
      <CategoryRatings />
      <CategoryPrice />
    </div>
  );
}

export default CategoriesMenu;
