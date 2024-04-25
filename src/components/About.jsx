import "../scss/about.scss";
const AboutSection = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-container">
        <div className="about-content">
          <h3 className="about-title">
            Web Developer based in Hanoi, Vietnam
            <img
              style={{
                translate: "0.5rem 0.2rem",
                width: "25px",
                height: "25px",
              }}
              src="https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/128px/1f1fb-1f1f3.png"
              alt="Vietnam flag"
            />
          </h3>
          <p className="about-text">
            Hello! My name is Vu Ngoc Chinh, and I enjoy creating clean and
            smooth website that live on the internet.
            <br />I am currently studying at the Hanoi University of Civil
            Engineering, majoring in Software Engineering. I am passionate about
            building excellent website that users feel comfort to use.
          </p>
        </div>
        <div className="hero-img-container">
          <img
            // src="https://i.imgur.com/dsFKDfU.jpeg"
            src="https://via.placeholder.com/400"
            alt="hero"
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
