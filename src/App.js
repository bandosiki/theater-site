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

        <div className='scene-container'>
          <div className='premier'>
            <h3 className='premier-text'>Премьера</h3>
            <img src="https://raw.githubusercontent.com/bandosiki/bandosiki.github.io/main/%D1%82%D0%B5%D0%B0%D1%82%D1%80/premier-photo.jpg" className='premier-img' alt="Иммерсивное Арт-шоу" />
            <h3 className='premier-desc'>Иммерсивное Арт-шоу</h3>
          </div>

          <div className='ballet-and-standup'>
            <div className='ballet'>
              <div className='ballet-title'>
                <h3 className='ballet-text'>Балет</h3>
                <h3 className='ballet-desc'>Вечная<br />классика</h3>
              </div>
              <div className='ballet-img'>
                <img src='https://raw.githubusercontent.com/bandosiki/bandosiki.github.io/main/%D1%82%D0%B5%D0%B0%D1%82%D1%80/ballet-logo.png' alt="Вечная классика" />
              </div>
            </div>

            <div className='standup'>
              <div className='standup-img'>
                <img src='https://raw.githubusercontent.com/bandosiki/bandosiki.github.io/main/%D1%82%D0%B5%D0%B0%D1%82%D1%80/standup-logo.png' alt="Стендап" />
              </div>
              <div className='standup-title'>
                <h3 className='standup-text'>Стендап</h3>
                <h3 className='standup-desc'>Смешно<br />о важном</h3>
              </div>
            </div>
          </div>
        </div>

        <span className='playfair-display-nav'>НОВИНКИ ТЕАТРА</span>
        <div className='rain-in-noikeln'>
          <img src="https://raw.githubusercontent.com/bandosiki/bandosiki.github.io/main/%D1%82%D0%B5%D0%B0%D1%82%D1%80/rain.jpg" alt="Дождь в Нойкельне" />
          <div className='rain-in-noikeln-title'>
            <h3 className='rain-in-noikeln-text'>Дождь в Нойкельне</h3>
            <h5 className='rain-in-noikeln-desc'>Драматический</h5>
            <h5 className='rain-in-noikeln-desc'>18+</h5>
          </div>
        </div>

        <div className='rain-in-noikeln'>
          <img src="https://raw.githubusercontent.com/bandosiki/bandosiki.github.io/main/%D1%82%D0%B5%D0%B0%D1%82%D1%80/rain.jpg" alt="Дождь в Нойкельне" />
          <div className='rain-in-noikeln-title'>
            <h3 className='rain-in-noikeln-text'>Дождь в Нойкельне</h3>
            <h5 className='rain-in-noikeln-desc'>Драматический</h5>
            <h5 className='rain-in-noikeln-desc'>18+</h5>
          </div>
        </div>

        <div className='rain-in-noikeln'>
          <img src="https://raw.githubusercontent.com/bandosiki/bandosiki.github.io/main/%D1%82%D0%B5%D0%B0%D1%82%D1%80/rain.jpg" alt="Дождь в Нойкельне" />
          <div className='rain-in-noikeln-title'>
            <h3 className='rain-in-noikeln-text'>Дождь в Нойкельне</h3>
            <h5 className='rain-in-noikeln-desc'>Драматический</h5>
            <h5 className='rain-in-noikeln-desc'>18+</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
