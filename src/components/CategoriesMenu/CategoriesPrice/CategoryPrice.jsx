import { InputNumber, Slider } from 'antd';
import React, { useState } from 'react';

export default function CategoryPrice() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const handleChange = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  return (
    <div className="categoryPrice" style={{ marginTop: '2rem' }}>
      <h3>Price</h3>
      <div className="slider" style={{ margin: '2rem 0' }}>
        <div className="priceSlider">
          <Slider
            range
            defaultValue={[200, 500]}
            min={0}
            max={1000}
            onChange={([min, max]) => {
              handleChange(min, max);
            }}
          />
        </div>
        <div
          className="priceRange"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <div
            className="minPrice"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <span style={{fontWeight: 'bold', fontSize: 12}}>Min</span>
            <InputNumber
              min={0}
              max={1000}
              onChange={(value) => setMinPrice(value)}
              value={minPrice}
              controls={false}
            />
          </div>
          <div
            className="maxPrice"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <span style={{fontWeight: 'bold', fontSize: 12}}>Max</span>
            <InputNumber
              min={0}
              max={1000}
              onChange={(value) => setMaxPrice(value)}
              value={maxPrice}
              controls={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
