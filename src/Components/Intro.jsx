import "./intro.css";

export default function Intro({ title, desc, imgUrl }) {
  return (
    <div className="intro">
      <div className="intro-image">
        <img src={imgUrl} alt="" />
      </div>
      <div className="intro-content">
        <div className="intro-content__title">
          <h3>{title}</h3>
        </div>
        <div className="intro-content__desc">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}
