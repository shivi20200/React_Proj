import React from 'react';
import './Details.css';
import { useNavigate } from 'react-router-dom';

const Details = () => {
  const navigate = useNavigate();

  return (
    <div className="details-container">
      <div className="details-grid">
        <div>
          <div><span className="label">Performance Metrics in LMS</span></div>
          <div className="value">0.00%</div>
        </div>
        <div>
          <div><span className="label">Total time spent</span></div>
          <div className="value">10min</div>
        </div>
        <div>
          <div><span className="label">Last Accessed On</span></div>
          <div className="value">15-Oct-2024</div>
        </div>
        <div>
          <div><span className="label">Joined On</span></div>
          <div className="value">15-Oct-2024</div>
        </div>
        <div>
          <div><span className="label">Avg. Test Score Pts</span></div>
          <div className="value">0.00</div>
        </div>

        {/* Section Header — spans both columns */}
        <h3>In Last 12 months</h3>

        <div>
          <div><span className="label">Total No of certifications</span></div>
          <div className="value">0</div>
        </div>
        <div>
          <div><span className="label">Total No of Training Related</span></div>
          <div className="value">1</div>
        </div>
        <div>
          <div><span className="label">Learning Plan Related</span></div>
          <div className="value">0</div>
        </div>
      </div>

      <button
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '20px',
           fontSize: '20px',  
          border: 'none',
          cursor: 'pointer',
          marginTop: '20px',
        }}
      >
        See All Statistics
      </button>

      <p
        style={{
          cursor: 'pointer',
          color: 'orange',
           fontSize: '20px', 
          fontWeight: 'bold',
          marginTop: '10px',
        }}
        onClick={() => navigate('/')}
      >
        Hide All Details ▲
      </p>
    </div>
  );
};

export default Details;


