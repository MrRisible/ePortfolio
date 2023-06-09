import { TypeAnimation } from "react-type-animation";

export const Home = () => {
  return (
    <>
      <div id="home" className="home">
        <div className="home-container">
          <div className="home-intro">
            <h1>Raymond John Managuit</h1>
            <p className="home-typeanimation">
              <TypeAnimation
                sequence={[
                  "Software Developer",
                  2000,
                  "Back-end Developer",
                  2000,
                  "Front-end Developer",
                  2000,
                  () => {
                    console.log("Sequence completed"); // Place optional callbacks anywhere in the array
                  },
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "2em", display: "inline-block" }}
              />
            </p>
            <div className="home-introduction">
              Using my expertise in programming languages like Python, Java, or
              PHP, along with frameworks like Node.js, Next.js, or Laravel, I
              bring life to the server-side components of applications. I
              design, develop, and deploy the core logic that enables the
              application to handle data, perform complex operations, and
              interact with databases.
            </div>
            <div className="home-btn-box">
              <a href="/files/Managuit_Resume.docx" download="Managuit Resume.docx"><button className="section-btn-resume">Resume</button></a>
              <button className="section-btn-hire">Hire Me</button>
            </div>
          </div>
          <img
            className="model-image"
            src="/images/model-imgs.png"
            alt="Example"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
