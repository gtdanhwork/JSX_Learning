import React from 'react';
import '../CagetoryTotals/CategoryTotals.scss';

function CagegoryTotals(props) {
  return (
    <div className="categoryTotals">
      <h3>Categories</h3>
      {props.brands.map((e) => {
        return (
          <div
            className="categoryBrand"
            key={e.brand}
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: '1rem 0',
              alignContent: 'center'
            }}
          >
            <span style={{fontStyle: 'Lato'}}>{e.brand}</span>
            <span
              style={{
                color: '#6A983C',
                background: '#F4F8EC',
                padding: '0 5px',
                borderRadius: '10px',
              }}
            >
              {e.countInStocks}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default CagegoryTotals;
