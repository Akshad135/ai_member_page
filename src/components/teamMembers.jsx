import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./team.css";
gsap.registerPlugin(ScrollTrigger);
const BrandingSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("src/Data/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setData(data.students))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      animateSections();
    }
  }, [data]);

  const animateSections = () => {
    const leftSections = document.querySelectorAll("#brand_col .left li");
    leftSections.forEach((section) => {
      gsap.fromTo(
        section,
        { autoAlpha: 1, y: 50, rotation: 0 },
        {
          duration: 2,
          autoAlpha: 1,
          y: -10,
          x: -10,
          rotation: -10,
          scrollTrigger: {
            trigger: section,
            start: "top 50%",
            end: "bottom 0%",
            scrub: 1,
            normalize: true,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    const centerSections = document.querySelectorAll("#brand_col .center li");
    centerSections.forEach((section) => {
      gsap.fromTo(
        section,
        { autoAlpha: 1, y: 50 },
        {
          duration: 2,
          autoAlpha: 1,
          y: -60,
          scrollTrigger: {
            trigger: section,
            start: "top 60%",
            end: "bottom 0%",
            scrub: 1,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    const rightSections = document.querySelectorAll("#brand_col .right li");
    rightSections.forEach((section) => {
      gsap.fromTo(
        section,
        { autoAlpha: 1, y: 50, rotation: 0 },
        {
          duration: 2,
          autoAlpha: 1,
          y: -10,
          x: 10,
          rotation: 10,
          scrollTrigger: {
            trigger: section,
            start: "top 50%",
            end: "bottom 0%",
            scrub: 1,
            normalize: true,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
  };

  const faculty1 = document.querySelector(".faculty1");
  if (faculty1) {
    gsap.fromTo(
      faculty1,
      { autoAlpha: 1, x: 1 },
      {
        // duration: 2,
        autoAlpha: 1,
        x: -30,
        scrollTrigger: {
          trigger: faculty1,
          start: "top 60%",
          end: "bottom 0%",
          scrub: 1,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }

  const faculty2 = document.querySelector(".faculty2");
  if (faculty2) {
    gsap.fromTo(
      faculty2,
      { autoAlpha: 1, x: 1 },
      {
        // duration: 2,
        autoAlpha: 1,
        x: 30,
        scrollTrigger: {
          trigger: faculty2,
          start: "top 60%",
          end: "bottom 0%",
          scrub: 1,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }

  const renderListItems = (items) => {
    return items.map((item, index) => (
      <li key={index}>
        <picture>
          <source srcSet={item.image.png} type="image/png" />
          <img fetchPriority="low" alt={item.image.alt} src={item.image.webp} />
        </picture>
        <div>
          <h3>{item.name}</h3>
          <span>{item.designation}</span>
        </div>
      </li>
    ));
  };

  return (
    <div id="branding">
      <div className="meetteam">MEET OUR TEAM</div>
      <div className="faculty">
        <div className="faculty1">
          <img src="src/assets/faculty.jpg" alt="Teacher 1" />
          <div className="designation">
            Teacher 1<br />
            Designation
          </div>
        </div>
        <div className="facultytext">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
          error quia quasi, amet voluptate, possimus iste quibusdam quod aut
        </div>
        <div className="faculty2">
          <img src="path/to/teacher2.jpg" alt="Teacher 2" />
          <div className="designation">
            Teacher 2<br />
            Designation
          </div>
        </div>
      </div>

      <br />
      <br />
      <div id="brand_col">
        <ul className="left">{renderListItems(data.slice(0, 6))}</ul>
        <ul className="center">{renderListItems(data.slice(6, 12))}</ul>
        <ul className="right">{renderListItems(data.slice(12))}</ul>
      </div>
    </div>
  );
};

export default BrandingSection;
