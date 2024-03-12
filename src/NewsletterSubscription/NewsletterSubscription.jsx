import React, { useState } from 'react';
// import './NewsletterSubscription.css'; // Make sure to link your CSS file

function NewsletterSubscription() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Integration with your subscription logic
    console.log('Subscribed with email:', email);
    alert(`Thank you for subscribing with ${email}!`);
    setEmail(''); // Reset the email field
  };

  return (
    <div className="newsletter-section">
      <h2>Subscribe Newsletter</h2>
      <p>Subscribe newsletter to get 5% off on all products.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
      </div>
    </div>
  );
}

export default NewsletterSubscription;
