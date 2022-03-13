import React from "react";
import "../Styles/DescriptionStyle.css";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import logo from "../images/practo-logo.png";
import { Button } from "@mui/material";
const Description = () => {
  return (
    <div className="descrip-container">
      <h3>12 Coronavirus Myths and Facts That You Should Be Aware Of</h3>
      <div className="imge-container">
        <img src={logo} alt="img" />
        <h4>Dr. Diana Borgio</h4>
      </div>
      <p style={{ fontSize: "0.9rem" }}>2 March, 2020</p>
      <p>
        As of April 10, 2020, COVID-19 currently affects 210 countries and union
        territories across the globe and 7,600 confirmed cases in India.{" "}
      </p>
      <p>
        As of April 10, 2020, COVID-19 currently affects 210 countries and union
        territories across the globe and 7,600 confirmed cases in India. While
        there are so much news and information all over the internet about the
        spread and prevention of the outbreak, without a doubt, a few myths and
        fictions are also floating around. Believing in any of these myths can
        be more dangerous than the disease itself.
      </p>
      <p>
        Here are some of the most common misbeliefs about Coronavirus along with
        the actual facts that you should be aware of:
      </p>
      <div className="desc-posters-container">
        <img src={img1} alt="img1" />
        <img src={img2} alt="img2" />
        <img src={img3} alt="img3" />
        <img src={img4} alt="img4" />
      </div>

      <p>
        This information is important and must be shared with all. It is
        recommended to stay hydrated, stay away from people who are sick or down
        with a cold/ cough/ fever and maintain hand & face hygiene at all times
        to avoid catching an infection.{" "}
      </p>
      <div className="desc-btn-container">
        <Button
          sx={{
            background: "white",
            color: "black",
            border: "1px solid black",
          }}
          variant="contained"
        >
          Viruses
        </Button>
        <Button
          sx={{
            background: "white",
            color: "black",
            border: "1px solid black",
          }}
          variant="contained"
        >
          Common cold
        </Button>
        <Button
          sx={{
            background: "white",
            color: "black",
            border: "1px solid black",
          }}
          variant="contained"
        >
          Coronavirus
        </Button>
        <Button
          sx={{
            background: "white",
            color: "black",
            border: "1px solid black",
          }}
          variant="contained"
        >
          COVID-19
        </Button>
      </div>
    </div>
  );
};

export default Description;
