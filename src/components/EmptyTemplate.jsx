import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import SkeletonSection from "./SkeletonSection";

export default function EmptyTemplate({ payload }) {
  let { isLoading } = payload;
  return (
    <div className="main-section">
      {isLoading ? (
        <SkeletonSection />
      ) : (
        <Row className="justify-content-center">
          <Col md={6} xs={10} sm={7} lg={5}>
            <Card
              border="primary"
              style={{ width: "100%", margin: "auto", textAlign: "center" }}>
              <Card.Header> there is no information to show </Card.Header>

              <Card.Body>
                <Card.Text>
                  use the search bar to interact with the web app
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
}
