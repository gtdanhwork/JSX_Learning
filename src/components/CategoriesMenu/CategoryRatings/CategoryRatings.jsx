import { Checkbox, Rate } from 'antd';
import React from 'react';

const ratings = [
  {
    rating: 'excellent',
    valRating: 5,
  },
  {
    rating: 'good',
    valRating: 4,
  },
  {
    rating: 'normal',
    valRating: 3,
  },
  {
    rating: 'bad',
    valRating: 2,
  },
  {
    rating: 'terible',
    valRating: 1,
  },
];

function CategoryRatings() {
  return (
    <div className="ratings">
      <h3>Ratings</h3>
      {ratings.map((e) => {
        return (
          <div className="ratingValue" key={e.rating} style={{margin: '1rem 0'}}>
            <Checkbox />
            <Rate disabled defaultValue={e.valRating} style={{paddingLeft: '1rem'}}/>
          </div>
        );
      })}
    </div>
  );
}

export default CategoryRatings;
