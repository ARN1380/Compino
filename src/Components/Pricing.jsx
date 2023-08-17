import "./pricing.css";

export default function Pricing() {
  return (
    <div className="pricing">
      <div className="halfcircle"></div>
      <div className="pricing__title">
        <p>A Price To Suit Everyone</p>
      </div>
      <div className="pricing__desc">
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>        
      </div>
      <div className="pricing-price">
        <p className="pricing-price__number">$40</p>
        <p className="pricing-price__desc">UI Design Kit</p>
      </div>
      <div className="pricing-action">
        <div className="pricing-action__desc"><p>See One Price Simple</p></div>
        <button className="btn-primary">Purchase Now</button>
      </div>
    </div>
  );
}
