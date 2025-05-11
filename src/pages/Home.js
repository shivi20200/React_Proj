import React from 'react';
import CategoryCard from '../components/CategoryCard';
import Details from './Details';
import './Home.css';
import { useNavigate, useLocation } from 'react-router-dom';

import myLearningIcon from '../assets/My_learning.jpg';
import liveSessionIcon from '../assets/Live_Session.jpg';
import trainingIcon from '../assets/Training.jpg';
import wishlistIcon from '../assets/Wishlist.jpg';

const Home = ({ showDetails }) => {
  const navigate = useNavigate();
   const location = useLocation();
const isDetailsPage = location.pathname === '/details';


  return (
    <div className="home-container">
      <header className="home-header">
        <h2>Hi Somraj Arkeri!</h2>
      <p className="course-info">
   <i className="fa-solid fa-award"></i> 1 course completed
  <span style={{ marginLeft: '15px' }}>
    <i className="fa-solid fa-book-open"></i> 0 courses ongoing
  </span>
</p>


            
             {showDetails && (
        <div style={{ marginTop: '20px' }}>
          <Details />
        </div>
      )}
            {!isDetailsPage && (
        <p
  className="details-link"
  onClick={() => navigate('/details')}
>
  See All Details ▼
</p>
        )}
      </header>

      <div className="category-section">
        <h3>Select category ▼</h3>
        <div className="grid-container">
          <CategoryCard title="My Learning" image={myLearningIcon} />
          <CategoryCard title="Live Session" image={liveSessionIcon} />
          <CategoryCard title="Training" image={trainingIcon} />
          <CategoryCard title="Wishlist" image={wishlistIcon} />
        </div>
      </div>

    
 
    </div>
  );
};

export default Home;


