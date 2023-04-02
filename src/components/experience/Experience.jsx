import React from "react";
import "./experience.css";
import { BsCheckCircleFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have </h5>
      <h2>My Experience </h2>

      <div className="container experience__container">
        <div className="first__experience">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>HTML5</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>CSS3</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* Part 2 of Experince ==> "another Experience" */}

        <div className="another__experience">
          <h3>Another Experience</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>BootStrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>JQuery</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
