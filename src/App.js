import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('Театр');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className='App'>
      <nav className="navbar">
        <div className="navbar-left">
          <h1 className="madimi-one-regular">Art Neva</h1>
        </div>
        <div className="navbar-right">

          <div
            className={activeTab === 'Театр' ? 'tab active' : 'tab'}
            onClick={() => handleTabClick('Театр')}
          >
            <h3 className='playfair-display-nav'>Театр</h3>
          </div>
          <div
            className={activeTab === 'Опера' ? 'tab active' : 'tab'}
            onClick={() => handleTabClick('Опера')}
          >
            <h3 className='playfair-display-nav'>Опера</h3>
          </div>
          <div
            className={activeTab === 'Балет' ? 'tab active' : 'tab'}
            onClick={() => handleTabClick('Балет')}
          >
            <h3 className='playfair-display-nav'>Балет</h3>
          </div>
          <div
            className={activeTab === 'Стендап' ? 'tab active' : 'tab'}
            onClick={() => handleTabClick('Стендап')}
          >
            <h3 className='playfair-display-nav'>Стендап</h3>
          </div>
          <div
            className={activeTab === 'Выставки' ? 'tab active' : 'tab'}
            onClick={() => handleTabClick('Выставки')}
          >
            <h3 className='playfair-display-nav'>Выставки</h3>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
