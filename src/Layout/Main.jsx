import React from 'react';
import './Main.css';

function Main() {
  return (
   <>
    <main>
      <div className="hero">
        <div className="hero-content">
        <img src="https://images.pexels.com/photos/7061663/pexels-photo-7061663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={1260} height={750} alt="hero" />
        <h1>Welcome to Filmag Glass Limited</h1>
            <p>
                Elevate your space with our exquisite metallic decors. Whether for windows, doors, gates, or stairs, our high-quality designs bring elegance and innovation to your home or business. Experience unparalleled craftsmanship and personalized solutions that transform your vision into reality.
            </p>
            <button class="hero-button">Explore Our Products</button>

      </div>
        </div>
    </main>
   </>
  )
}

export default Main