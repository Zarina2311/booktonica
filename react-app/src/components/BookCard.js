import React, { Component } from "react";
import { addComment } from "../helpers/booktonica-api-fetcher";
import {
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Form,
  FormGroup,
  Label,
  CardFooter,
  Input
} from "reactstrap";

/**
 * Learn more about reactstrap Card component
 * https://reactstrap.github.io/components/card/
 */
class BookCard extends Component {
  render() {
    const {
      id,
      cover_image_url,
      summary,
      title,
      author_name,
      publication_date
    } = this.props.book;

    const onSubmit = event => {
      event.preventDefault();

      addComment({
        book_id: id,
        comment: event.target.text.value
      });
    };

    return (
      <Col xs="4">
        <Card>
          <CardImg
            className="bookCover"
            src={cover_image_url}
            alt="Book cover"
          />
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>{author_name}</CardSubtitle>
            <CardText>
              <i>{publication_date}</i> - {summary}
            </CardText>
          </CardBody>
        </Card>
        <Col>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="commentText">Add comment here</Label>
              <Input type="textarea" name="text" />
            </FormGroup>
            <Button color="info">Add Comment</Button>
            {this.props.comments.map(comment => (
              <CardFooter className="text-muted" key={comment.id}>
                {comment.comment}
              </CardFooter>
            ))}
          </Form>
        </Col>
        <br />
      </Col>
    );
  }
}

export default BookCard;
