import React from 'react';
import './App.css';

import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';
import HeaderTitle from './components/HeaderComponents/HeaderTitle';
import HeaderContent from './components/HeaderComponents/HeaderContent';


const App = () => {
  return (
    <div>
      <div className="container">
        <div className="headerFlex">
          <ImageThumbnail />
          <div>
            <div className="headerTC">
              <HeaderTitle />
              <HeaderContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
