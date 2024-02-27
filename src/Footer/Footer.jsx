import React from 'react';
import './Footer.css'
import FooterLogo from '/src/logos/footer.webp';

function QuickLink(props) {
  return (
    <div className="link">
      <h1>{props.title} Section</h1>
      <ul>
        {props.items.map((item, index) => (
         <li key={index}><a href="#">{item}</a></li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <>
    <div className="links-sections">
      <div className="footer-logo">
        <img src={FooterLogo} alt="Footer Logo" />
      </div>
      <QuickLink title="Men's" items={['Clothing Fashion', 'Winter', 'Summer', 'Formal', 'Casual']} />
      <QuickLink title="Women's" items={['Dresses', 'Tops', 'Bottoms', 'Outerwear', 'Accessories']} />
      <QuickLink title="Baby's" items={['Newborn Essentials', 'Baby Fashion', 'Toys', 'Nursery', 'Feeding']} />
      <QuickLink title="Useful Links" items={['Track Your Orders', 'FAQ', 'Support', 'career', 'About']} />
    </div>
    <div className = "copyright-section">
    <span>Copyright &copy; 2024 All rights reserved</span>
    </div>
    </>
  );
}

export default Footer;