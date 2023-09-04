import React from "react";
import Skeleton from "react-loading-skeleton";

import { Col, Row, Card } from "react-bootstrap";

export default function SkeletonSection() {
  return (
    <Row>
      <Col>
        <Card
          border="primary"
          style={{ width: "18rem", margin: "auto", textAlign: "center" }}>
          <Card.Header>
            <Skeleton height={90} width={300} />
          </Card.Header>

          <Card.Body>
            <Card.Text>
              <Skeleton height={40} width={300} />
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
