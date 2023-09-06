import React from "react";
import Skeleton from "react-loading-skeleton";

import { Col, Row, Card } from "react-bootstrap";

export default function SkeletonSection() {
  return (
    <Row className="justify-content-center">
      <Col md={6} xs={10} sm={7} lg={5}>
        <Card
          border="primary"
          style={{ width: "100%", margin: "auto", textAlign: "center" }}>
          <Card.Header>
            <Skeleton height={90} />
          </Card.Header>

          <Card.Body>
            <Skeleton height={40} />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
