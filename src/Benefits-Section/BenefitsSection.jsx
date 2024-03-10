import React from 'react';
import './BenefitsSection.css';
//import img1 from './path/to/your/image1.png';
//import img2 from './path/to/your/image2.png';
//import img3 from './path/to/your/image3.png';
//import img4 from './path/to/your/image4.png';

function BenefitItem(props) {
  return (
    <div className="benefit-item">
      <img src={props.image} alt={props.title} /> 
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

function BenefitsSection() {
  return (
    <section className="benefits">
      <BenefitItem title="Fast & Free Delivery" image="" description="Free delivery on all orders" />
      <BenefitItem title="Secure Payments" image="" description="Transactions are encrypted and secure." />
      <BenefitItem title="Money Back Guarantee" image="" description="Not satisfied? Get a hassle-free refund." />
      <BenefitItem title="Online Support" image="" description="24/7 help for a smooth shopping experience." />
    </section>
  );
}

export default BenefitsSection;
