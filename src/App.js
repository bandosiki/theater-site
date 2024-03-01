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
          <h1 className="madimi-one-regular"><a href="/">Art Neva</a></h1>
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
      <div className='afisha'>
        <span className='playfair-display-nav'>ВСЕ МЕРОПРИЯТИЯ</span>
        <br />
        <span className='playfair-display-nav'>В ОДНОМ МЕСТЕ</span>

        <div className='premier'>
          <h3 className='premier-text'>Премьера</h3>
          <img src="https://raw.githubusercontent.com/bandosiki/bandosiki.github.io/main/%D1%82%D0%B5%D0%B0%D1%82%D1%80/premier-photo.jpg"></img>
        </div>

      </div>
    </div>
  );
}

export default App;
