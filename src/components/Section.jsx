import React from "react";
import SkeletonSection from "./SkeletonSection";
import moment from "moment";
import { Col, Row, Card } from "react-bootstrap";
import temp from "../assets/temp.svg";
export default function Section({ currentWeather, isLoading }) {
  return (
    <div className="main-section">
      {isLoading ? (
        <SkeletonSection />
      ) : (
        <Row className="justify-content-center">
          <Col md={6} xs="auto" sm={7} lg={5}>
            <Card border="primary" style={{ width: "100%", margin: "auto" }}>
              <Card.Header>
                {" "}
                {moment(currentWeather.dt * 1000).format("MMMM Do , h:mm a")}
              </Card.Header>

              <Row>
                <Col>
                  <Card.Img
                    variant="top"
                    src={
                      "http://openweathermap.org/img/w/" +
                      currentWeather.weather[0].icon +
                      ".png"
                    }
                  />
                </Col>
                <Col style={{ display: "flex" }}>
                  <Card.Img
                    style={{ height: "50%" }}
                    variant="top"
                    src={temp}
                  />

                  <Card.Title>
                    {" "}
                    {Math.round(currentWeather.main.temp - 273.15) + "°C"}
                  </Card.Title>
                </Col>
              </Row>

              <Card.Header>
                {" "}
                {currentWeather.name + "," + currentWeather.sys.country}
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Feels like {Math.round(currentWeather.main.temp - 273.15)}°C .{" "}
                  {currentWeather.weather[0].main} .{" "}
                  {currentWeather.weather[0].description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
}
