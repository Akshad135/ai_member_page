import { useEffect } from "react";
import "../index.css";

const SplineViewer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.4.3/build/spline-viewer.js";
    script.type = "module";
    document.body.appendChild(script);

    const logoRemoveInterval = setInterval(() => {
      const splineViewer = document.querySelector("spline-viewer");
      if (splineViewer && splineViewer._loaded === true) {
        splineViewer._logo.style.display = "none";
        clearInterval(logoRemoveInterval);
      }
    }, 1000);

    return () => {
      document.body.removeChild(script);
      clearInterval(logoRemoveInterval);
    };
  }, []);

  return (
    <div
      data-scroll
      className="homePage"
      style={{ width: "100%", height: "100vh", position: "relative" }}
    >
      {/* <spline-viewer data-scroll
        url="https://prod.spline.design/9AqmRVCmB4nssJ-2/scene.splinecode"
        style={{ width: "100%", height: "100%", position: 'relative' ,'z-index': '10' }}
      ></spline-viewer> */}
      {/* <spline-viewer url="https://prod.spline.design/sjjSimjiza7CE96k/scene.splinecode"></spline-viewer> */}

      {/* <spline-viewer loading-anim-type="spinner-small-dark" url="https://prod.spline.design/sWEIg9ZamsyW4BCQ/scene.splinecode"></spline-viewer> */}

      <spline-viewer url="https://prod.spline.design/SxFmGVj2B96byMrh/scene.splinecode"></spline-viewer>

      {/* <div
        style={{
          position: "absolute",
          top: "30%",
          left: "17%",
          color: "#000",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h1 style={{ fontSize: "300px", fontFamily: "'Arame'" }}>AI</h1>
      </div> */}

      {/* <div
        style={{
          position: "absolute",
          top: "30%",
          right: "15%",
          color: "#000",
          transform: "translate(50%, -50%)",
        }}
      >
        <p style={{ fontSize: "25px", maxWidth: "350px" }}>
          AI Club is the fastest growing club in VIT Bhopal imparting knowledge
          about AI and pioneering AI based advanced education to students.
        </p>
      </div> */}

      <div
        data-scroll
        data-scroll-speed="0.5"
        style={{
          "font-family": "Arame",
          position: "absolute",
          bottom: "13%",
          left: "10%",
          color: "rgb(87, 87, 87)",
          // transform: "translate(-50%, 50%)",
          "transform-style": "preserve-3d",
          transform: "perspective(60px) rotateY(3deg)",
        }}
      >
        <p data-scroll style={{ fontSize: "25px", maxWidth: "350px" }}>
          AI Club is the fastest growing club in VIT Bhopal imparting knowledge
          about AI and pioneering AI based advanced education to students.
        </p>
      </div>

      {/* <div data-scroll data-scroll-speed="0.5"
        style={{
          position: "absolute",
          bottom: "30%",
          right: "20%",
          color: "#575757",
          "transform-style": "preserve-3d",
          transform: "translate(50%, 50%) perspective(60px) rotateY(-4deg)",
        }}
      >
        <h1 style={{ fontSize: "250px", fontFamily: "'Arame'" }}>AIC</h1>
      </div> */}
    </div>
  );
};

export default SplineViewer;
