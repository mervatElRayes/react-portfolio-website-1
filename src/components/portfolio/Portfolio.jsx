import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/original-1.jpg";
 import IMG2 from "../../assets/original-2.webp";
 import IMG3 from "../../assets/original-3.webp";
 import IMG4 from "../../assets/original-4.webp";
import IMG5 from "../../assets/original-5.webp";
import IMG6 from "../../assets/original-6.webp";

//DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto currency dashboards and financial data visualization",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization/attachments/11711155?mode=media",
  },
  {
    id: 2,
    image: IMG2,
    title: "Orion UI kit – data visualization and charts templates for Figma",
    github: "https://github.com",
    demo: "https://cdn.dribbble.com/userupload/4244115/file/original-6a095bc1fd26c9c986e1f01c886b2fe5.png?compress=1&resize=752x",
  },

  {
    id: 3,
    image: IMG3,
    title: "Eclipse - Figma dashboard UI kit for data design web apps",
    github: "https://github.com",
    demo: "https://cdn.dribbble.com/userupload/4094366/file/original-c368cc46334519b523139799f9fb6a94.jpg?compress=1&resize=752x",
  },

  {
    id: 4,
    image: IMG4,
    title: "Eclipse - Figma dashboard UI kit for data design web apps",
    github: "https://github.com",
    demo: "https://cdn.dribbble.com/userupload/4267260/file/original-bee8a80578bb29e786cbb8c9eb5c4e66.jpg?compress=1&resize=752x",
  },

  {
    id: 5,
    image: IMG5,
    title: "Orion UI kit – data visualization and charts templates for Figma",
    github: "https://github.com",
    demo: "https://cdn.dribbble.com/userupload/4634048/file/original-6f6540213450a158a7c5ce557dafc625.jpg?compress=1&resize=752x",
  },

  {
    id: 6,
    image: IMG6,
    title: "Orion UI kit – data visualization and charts templates for Figma",
    github: "https://github.com",
    demo: "https://cdn.dribbble.com/userupload/4445297/file/original-858f2aa876a26a72d7077328c9f0b238.jpg?compress=1&resize=752x",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>

              <h3>{title}</h3>

              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a
                  href={demo}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
