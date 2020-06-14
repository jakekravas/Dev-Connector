import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { addComment } from "../../actions/post";

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState("");

  const onSubmit = async e => {
    e.preventDefault();
    await addComment(postId, { text });
    setText("");
    // getPosts();
  }

  return (
    <div class="post-form">
      <div class="bg-primary p">
        <h3>Leave a comment</h3>
      </div>
      <form onSubmit={onSubmit} class="form my-1">
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Create a post"
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
        <input type="submit" class="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  )
}

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
}

export default connect(null, { addComment })(CommentForm)
