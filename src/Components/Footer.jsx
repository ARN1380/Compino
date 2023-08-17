import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="first-part">
          <div className="footer-copyright">
            <p>©2023 Compino by Alireza Naghavi</p>
          </div>
          <div className="footer-logo">
            <img src="/images/Landie.png" alt="logo" />
          </div>
          <div className="footer-action">
            <button className="btn-primary">
            <a href="https://www.figma.com/file/VKVPVq0rq4SqSCx1Y6BYEr/Figma-Website-Template---Landing-Page-(Free)-(Community)?type=design&node-id=0-88&mode=design&t=nuTisAeWRTj6jJMn-0">Figam Design</a>
            </button>
          </div>
        </div>
        <div className="line" />
        <div className="second-part">
          <nav>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
          <div className="footer-social">
            <ul>
              <li><img src="/images/linkedin.png" alt="linkedin link" /></li>
              <li><img src="/images/instagram.png" alt="instagram link" /></li>
              <li><img src="/images/facebook.png" alt="facebook link" /></li>
              <li><img src="/images/twitter.png" alt="twitter link" /></li>
              <li><img src="/images/youtube.png" alt="youtube link" /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
