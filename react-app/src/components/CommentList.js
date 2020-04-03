import React, { Component } from "react";
import { CardFooter } from "reactstrap";

class CommentList extends Component {
  render() {
    return (
      <div>
        {this.props.comments.map(comment => (
          <CardFooter className="text-muted" key={comment.id}>
            {comment.comment}
          </CardFooter>
        ))}
      </div>
    );
  }
}

export default CommentList;
