import React, { useState } from 'react';
import Description from './Description';
import Information from './Information';
import Review from './Review ';
import './Moreinfo.css'

const MoreInfo = () => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className='more-info-section'>
      <div className="moreInfo-container">
        <div className="infos-buttons">
          <button
            className={activeTab === 'description' ? 'active' : ''}
            onClick={() => setActiveTab('description')}
          >
            DESCRIPTION
          </button>
          <button
            className={activeTab === 'information' ? 'active' : ''}
            onClick={() => setActiveTab('information')}
          >
            ADDITIONAL INFORMATION
          </button>
          <button
            className={activeTab === 'review' ? 'active' : ''}
            onClick={() => setActiveTab('review')}
          >
            REVIEWS
          </button>
        </div>

        <div className="tab-contents">
          {activeTab === 'description' && <Description />}
          {activeTab === 'information' && <Information />}
          {activeTab === 'review' && <Review />}
        </div>
      </div>
      
    </div>
  );
};

export default MoreInfo;
