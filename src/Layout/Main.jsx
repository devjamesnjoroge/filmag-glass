import React from 'react';
import './Main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBellConcierge, faPersonMilitaryPointing, faRankingStar } from '@fortawesome/free-solid-svg-icons';


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

      <div className="container">
        <div className="row">
        <FontAwesomeIcon fontSize={'4rem'} color='var(--color-primary-6)' icon={faRankingStar} />
        <div className="text">
        <h2>Quality Assurance:</h2>
        <p>
        At Filmag Glass Limited, quality is paramount. We source premium materials and utilize advanced manufacturing techniques to ensure the durability, functionality, and visual appeal of our products. Each item undergoes rigorous quality control checks to maintain the highest standards.

        </p>
        </div>
        </div>
        <div className="row">
        <FontAwesomeIcon fontSize={'4rem'} color='var(--color-primary-6)' icon={faPersonMilitaryPointing} />
        <div className="text">
        <h2>Customization:</h2>
        <p>Recognizing that every space is unique, we offer customization options to tailor our products to specific dimensions, designs, and finishes. Our experienced team works closely with clients to bring their visions to life, providing personalized solutions that exceed expectations.
        </p>
        </div>
        </div>
        <div className="row">
        <FontAwesomeIcon fontSize={'4rem'} color='var(--color-primary-6)' icon={faBellConcierge} />
        <div className="text">
        <h2>Customer Service:</h2>
        <p>Our dedicated customer service team is committed to providing exceptional support at every stage of the purchasing process. From product inquiries and customization requests to order fulfillment and after-sales service, we strive to deliver a seamless and satisfying experience for our valued customers.
        </p>
        </div>
        </div>
      </div>
        
        
        
    </main>
   </>
  )
}

export default Main