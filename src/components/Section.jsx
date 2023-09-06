import React from "react";
import SkeletonSection from "./SkeletonSection";
import moment from "moment";
import temp from "../assets/temp.svg";
import { Col, Row, Card } from "react-bootstrap";
export default function Section({ payload }) {
  const { currentWeather, isLoading } = payload;
  console.log(currentWeather);
  const {
    dt,
    weather,
    main: { temp: tempo, feels_like: feelsLike },
    name,
    sys: { country },
  } = currentWeather;
  const { icon, main, description } = weather[0];
  return (
    <div className="main-section">
      {isLoading ? (
        <SkeletonSection />
      ) : (
        <Row className="justify-content-center">
          <Col md={6} xs={10} sm={7} lg={5}>
            <Card border="primary" style={{ width: "100%", margin: "auto" }}>
              <Card.Header>
                {" "}
                {moment(dt * 1000).format("MMMM Do , h:mm a")}
              </Card.Header>

              <Row>
                <Col>
                  <Card.Img
                    variant="top"
                    src={"http://openweathermap.org/img/w/" + icon + ".png"}
                  />
                </Col>
                <Col style={{ display: "flex" }}>
                  <Card.Img
                    style={{ height: "50%" }}
                    variant="top"
                    src={temp}
                  />

                  <Card.Title> {Math.round(tempo - 273.15) + "°C"}</Card.Title>
                </Col>
              </Row>

              <Card.Header> {name + "," + country}</Card.Header>
              <Card.Body>
                <Card.Text>
                  Feels like {Math.round(feelsLike - 273.15)}°C . {main} .{" "}
                  {description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
}
