import "./main.css";
import Hero from "./Hero";
import ProductDetail from "./ProductDetail";
import Intro from "./intro";
import Pricing from "./Pricing";

export default function Main() {
  return (
    <>
      <div className="container">
        <Hero />
        <ProductDetail
          title={"Light, Fast & Powerful"}
          desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facere alias sed voluptates laboriosam pariatur, ut culpa fuga assumenda eaque aut cumque doloribus similique. Optio quidem officia non accusantium sequi? cumque non accusantium sequi? non accusantium sequi? cumque doloribus similique. accusantium sequi?uidem officia non accusantium sequi?"
          }
          imgUrl={"/images/productDetail.png"}
        />
        <Intro
          title={"Light, Fast & Powerful"}
          desc={
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequatLorem ipsum dolor sit amet, consectetuer massa quis enim."
          }
          imgUrl={"/images/happy-woman.png"}
        />
        <Intro
          title={"Light, Fast & Powerful"}
          desc={
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequatLorem ipsum dolor sit amet, consectetuer massa quis enim."
          }
          imgUrl={"/images/socialmedia.png"}
        />
        <Intro
          title={"Light, Fast & Powerful"}
          desc={
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequatLorem ipsum dolor sit amet, consectetuer massa quis enim."
          }
          imgUrl={"/images/atsignunder.png"}
          btnText={"Purchase Now"}
        />
      </div>
      <Pricing />
    </>
  );
}
