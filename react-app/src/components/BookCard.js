import React, { Component } from "react";
import CommentForm from "./CommentForm";
import {
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import CommentList from "./CommentList";

/**
 * Learn more about reactstrap Card component
 * https://reactstrap.github.io/components/card/
 */
class BookCard extends Component {
  afterSubmit() {
    this.props.loadComments();
  }

  render() {
    const {
      id,
      cover_image_url,
      summary,
      title,
      author_name,
      publication_date
    } = this.props.book;

    return (
      <Col xs="3">
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
              <CommentForm
                bookId={id}
                afterSubmit={this.afterSubmit.bind(this)}
              />
              <CommentList comments={this.props.comments} />
            </CardText>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default BookCard;
