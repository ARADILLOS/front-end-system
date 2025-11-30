import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const destinations = [
    {
      id: 1,
      name: 'Parola',
      category: 'Restaurant',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80'
    },
    {
      id: 2,
      name: '10K Roses',
      category: 'Cafe',
      image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80'
    },
    {
      id: 3,
      name: 'Bric Food Park',
      category: 'Food and Dining',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80'
    },
    {
      id: 4,
      name: 'Beach Paradise',
      category: 'Beach Resort',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80'
    },
    {
      id: 5,
      name: 'Mountain View Cafe',
      category: 'Cafe',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80'
    },
    {
      id: 6,
      name: 'Heritage Museum',
      category: 'Museum',
      image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&q=80'
    },
    {
      id: 7,
      name: 'Sunset Grill',
      category: 'Restaurant',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80'
    },
    {
      id: 8,
      name: 'Adventure Park',
      category: 'Recreation',
      image: 'https://images.unsplash.com/photo-1594818379496-da1e345b0ded?w=800&q=80'
    },
    {
      id: 9,
      name: 'Night Market',
      category: 'Shopping',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80'
    },
    {
      id: 10,
      name: 'Spa Retreat',
      category: 'Wellness',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80'
    },
    {
      id: 11,
      name: 'Harbor View',
      category: 'Waterfront Dining',
      image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&q=80'
    },
    {
      id: 12,
      name: 'Artisan Gallery',
      category: 'Art & Culture',
      image: 'https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=800&q=80'
    }
  ];

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(destinations.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentDestinations = () => {
    const start = currentSlide * itemsPerSlide;
    return destinations.slice(start, start + itemsPerSlide);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const handleLogout = () => {
    navigate('/');
  };

  const handleListings = () => {
    console.log('Listings clicked');
    // Add navigation to listings page
  };

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="nav-left">
          <img src="logo.jpg" alt="Logo" className="nav-logo" />
          <h3 className="nav-title">LOCAFY</h3>
        </div>
        <button 
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <button className="nav-icon-btn" onClick={handleListings} title="Listings">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
              <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
            </svg>
          </button>
          <button className="nav-icon-btn" onClick={handleLogout} title="Logout">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
              <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
            </svg>
          </button>
        </div>
      </nav>

      <div className="hero-section">
        <img src="/Parola.jpg" alt="Background" className="hero-background" />
        <div className="hero-content">
          <h1 className="hero-title">EXPLORE CORDOVA</h1>
          <p className="hero-subtitle">
            Find great places to stay, eat, shop, or visit from local experts.
          </p>
          
          <form className="search-bar" onSubmit={handleSearch}>
            <div className="search-input-wrapper">
              <svg 
                className="search-icon"
                viewBox="0 0 24 24" 
                width="24" 
                height="24" 
                fill="none" 
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
              <input
                type="text"
                placeholder="Looking For..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
            <button type="submit" className="search-btn">
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="recommendations-section">
        <div className="section-header">
          <h2 className="section-title">DESTINATION RECOMMENDATION</h2>
          <button className="view-all-btn">
            View All
            <svg 
              viewBox="0 0 24 24" 
              width="20" 
              height="20" 
              fill="currentColor"
            >
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </button>
        </div>

        <div className="carousel-container">
          <button className="carousel-btn prev-btn" onClick={prevSlide}>
            <svg viewBox="0 0 24 24" width="30" height="30" fill="white">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>

          <div className="destinations-grid">
            {getCurrentDestinations().map((destination) => (
              <div key={destination.id} className="destination-card">
                <div 
                  className="destination-image"
                  style={{ backgroundImage: `url(${destination.image})` }}
                >
                  <div className="destination-overlay">
                    <h3 className="destination-name">{destination.name}</h3>
                    <p className="destination-category">{destination.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-btn next-btn" onClick={nextSlide}>
            <svg viewBox="0 0 24 24" width="30" height="30" fill="white">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </button>
        </div>

        <div className="carousel-dots">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      <footer className="home-footer">
        <p className="footer-copyright">@2025 HCI all right reserved</p>
      </footer>
    </div>
  );
}

export default Home;
