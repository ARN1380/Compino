import Card from "./Card";
import "./productdetail.css";

export default function ProductDetail({title, desc, imgUrl}) {
  return (
    <div className="productdetail">
      <div className="productdetail-content">
        <div className="productdetail-content__title">
          <h2>{title}</h2>
        </div>
        <div className="productdetail-content__desc">
          {desc}
        </div>
        <div className="productdetail-content__cards">
            <Card imgUrl={"images/icon.png"} title={"Title goes here"} desc={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. "}/>
            <Card imgUrl={"/images/icon.png"} title={"Title goes here"} desc={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. "}/>
        </div>
      </div>
      <div className="productdetail-image">
        <img src="/images/productDetail.png" alt="productDetail" />
      </div>
    </div>
  );
}
