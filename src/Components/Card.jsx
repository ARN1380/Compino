import "./card.css";

export default function Card({ imgUrl, title, desc }) {
  return (
    <div className="card">
      <div className="card__icon">
        <img src={imgUrl} />
      </div>
      <div className="card__title">
        <h3>{title}</h3>
      </div>
      <div className="card__desc">{desc}</div>
    </div>
  );
}
