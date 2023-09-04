import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import SkeletonSection from "./SkeletonSection";

export default function EmptyTemplate({ isLoading }) {
  return (
    <div className="main-section">
      {isLoading ? (
        <SkeletonSection />
      ) : (
        <Row>
          <Col>
            <Card
              border="primary"
              style={{ width: "18rem", margin: "auto", textAlign: "center" }}>
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
