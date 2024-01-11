import React from "react";
import "./index.scss";

const OurMission = () => {
  return (
    <section id="ourMission">
      <div className="background">
        <div className="sectionContainer">
          <div className="ourMissionBox">
            <div className="textSection">
              <div className="textBox">
                <div className="title">
                  <h5>Our Mission</h5>
                </div>
                <div className="description">
                  <p>
                    Lorem ipsum dolor sit amet, pri omnium verterem id, sit
                    labore dicunt an, ea civibus.
                  </p>
                </div>
                <div className="readMore">
                  <button className="readMoreBtn">Read More</button>
                </div>
              </div>
            </div>
            <div className="imgSection">
              <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/b4.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
