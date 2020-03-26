import React, { Component } from "react";
import { addComment } from "../helpers/booktonica-api-fetcher";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";

class CommentForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const onSubmit = event => {
      event.preventDefault();

      addComment({
        comment: event.target.text.value
      });
    };
    return (
      <div>
        <Col>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="commentText">Add comment here</Label>
              <Input type="textarea" name="text" />
            </FormGroup>
            <Button color="success">Add Comment</Button>
          </Form>
        </Col>
      </div>
    );
  }
}

export default CommentForm;
