import React, { Component } from "react";
import {
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  Button,
  FormGroup,
  Label,
  Input,
  CardTitle,
  CardSubtitle
} from "reactstrap";

/**
 * Learn more about reactstrap Card component
 * https://reactstrap.github.io/components/card/
 */
class BookCard extends Component {
  render() {
    const {
      cover_image_url,
      summary,
      title,
      author_name,
      publication_date
    } = this.props.book;
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
        <FormGroup>
          <Label for="commentText">Add comment here</Label>
          <Input type="textarea" name="text" id="commentText" />
        </FormGroup>
        <Button color="success">Add Comment</Button>
      </Col>
    );
  }
}

export default BookCard;
