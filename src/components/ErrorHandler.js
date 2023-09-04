import React from "react";
import { Alert } from "react-bootstrap";
export default function ErrorHandler({ errors }) {
  return (
    <>
      {errors.map((error) => {
        return (
          <Alert key="danger" variant="danger" dismissible>
            {error}
          </Alert>
        );
      })}
    </>
  );
}
