import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Avatar, Modal, Input, Comment } from "antd";

import "./ShowPost.css";
import * as actions from "../../../store/actions";
import Profile from "../../../assets/man.svg";
import ThumbsUp from "../../../assets/thumb-up.svg";
import LoveIcon from "../../../assets/favourite.svg";
import CommentIcon from "../../../assets/document.svg";
import CloseIcon from "../../../assets/cancel.svg";

function ShowPost(props) {
  const [comment, setComment] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const dispatch = useDispatch();

  function onLike() {
    dispatch(actions.onLike());
  }

  function onLove() {
    dispatch(actions.onLove());
  }

  function onComment() {
    setShowComments(true);
  }

  function addNewComment() {
    setComment(true);
  }

  function onOk() {
    dispatch(actions.newComment(newComment));
    setComment(false);
  }
  function onCancel() {
    setComment(false);
  }

  function onCommentHandler(e) {
    setNewComment(e.target.value);
  }

  console.log('>>>showProps',props.post);

  const comments = props.post.comments.map((cmt) => {
    return (
      <Comment
        content={<p>{cmt}</p>}
        style={{
          textAlign: "left",
          border: "1px solid black",
          borderRadius: "20px",
          marginTop: "10px",
        }}
      />
    );
  });

  return (
    <div className="show-post">
      <Modal
        visible={comment}
        title="Comment your thoughts"
        onOk={onOk}
        onCancel={onCancel}
      >
        <Input
          placeholder="comments"
          onChange={onCommentHandler}
          value={newComment}
        />
      </Modal>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Row>
            <Col span={12} className="post-profile">
              <Avatar size={32} src={Profile} />
              <span>{props.post.first_name}</span>
            </Col>
            <Col
              span={12}
              className="post-close"
              onClick={() => dispatch(actions.showFullPost())}
            >
              <Avatar size={32} src={CloseIcon} />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <p>{props.post.post}</p>
        </Col>
        <Col span={24}>
          <Row>
            <Col span={2} onClick={onLike}>
              <Avatar size={16} src={ThumbsUp} />
              <span>{props.post.likes}</span>
            </Col>
            <Col span={2} onClick={onLove}>
              <Avatar size={16} src={LoveIcon} />
              <span>{props.post.loves}</span>
            </Col>
            <Col span={8} className="boldify" onClick={onComment}>
              {props.post.comments.length} Comments
            </Col>
            <Col span={12} className="boldify" onClick={addNewComment}>
              <Avatar size={32} src={CommentIcon} /> New Comment
            </Col>
          </Row>
        </Col>
        {showComments ? <Col span={24}>{comments}</Col> : null}
      </Row>
    </div>
  );
}

export default ShowPost;
