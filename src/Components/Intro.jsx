import "./intro.css";

export default function Intro({ title, desc, imgUrl, btnText }) {
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
        <div className={`intro-content__action ${btnText?"":"invisible"}`}>
          <button className="btn-primary">{btnText}</button>
        </div>
      </div>
    </div>
  );
}
