import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

function Slider(props) {
  var items = [
    {
      description:
        "Very helpful.Far easier than doing some things on computer.Allows quick and easy search with speedy booking.Even maintains history of doctors visited",
      name: "Amith Sharma",
    },
    {
      description:
        "Very easy to book ,maintain history.Hassle free from older versions of booking appointment via telephone..Thanks practo for making it simple",
      name: "Jyothi Bhatia",
    },
    {
      description:
        "Very Good app. Well thought out about booking/reshudileing/canceling an appointment  Doctors's feedback mechanism is good and describe all the basics in a good way",
      name: "Avinash Kumar",
    },
  ];

  return (
    <div
      style={{
        height: "300px",
        top: "-40px",
        position: "relative",
        width: "90%",
        margin: "0 5%",
      }}
    >
      <Carousel style={{}}>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
}

function Item(props) {
  return (
    <Paper>
      <div
        style={{
          height: "250px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {/* <h2>{props.item.title}</h2> */}
        <h2
          style={{
            fontSize: "1.9rem",
            textAlign: "center",
          }}
        >
          What our users have to say
        </h2>

        <p
          style={{
            textAlign: "center",
          }}
        >
          {props.item.description}
        </p>
        <h4
          style={{
            fontWeight: "600",
          }}
        >
          {props.item.name}
        </h4>
        {/* <Button className="CheckButton">Check it out!</Button> */}
      </div>
    </Paper>
  );
}
export default Slider;
