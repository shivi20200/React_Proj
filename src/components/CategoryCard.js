import React from 'react';
import './CategoryCard.css';

const CategoryCard = ({ title, image }) => {
  return (
    <div className="category-card">
      <img src={image} alt={title} className="category-img" />
         <div className="card-content">
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default CategoryCard;

