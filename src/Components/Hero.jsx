import "./hero.css"

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero-content">
                <div className="hero-content__title">
                    <h1>Introduce Your Product Quickly & Effectively</h1>
                </div>
                <div className="hero-content__desc">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae quisquam autem saepe sequi cupiditate modi ex illum cum perferendis placeat pariatur fugiat <br /> <br /> excepturi ipsam exercitationem culpa ullam tenetur, deleniti obcaecati.</p>
                </div>
                <div className="hero-content__actions">
                    <button className="btn-primary">Purchase UI Kit</button>
                    <button className="btn-secondary">Learn More</button>
                </div>
            </div>
            <div className="hero-image">
                <img src="/images/designer_1.png" alt="" />
            </div>
        </div>
    )
}
