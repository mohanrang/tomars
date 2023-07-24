import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              class="head"
              subtitle="WELCOME TO TOMARS"
              title="Best Education Expertise"
            />
            <p>
              "At Tomar's, we boast a team of exceptional teachers who are
              passionate about their subjects and committed to inspiring
              students. Our state-of-the-art learning facilities provide a
              conducive environment for immersive and interactive learning
              experiences."
            </p>
            <div className="button">
            <Link to="/courses">
              <button className="primary-btn">
                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              </Link>
              <button>
                VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
