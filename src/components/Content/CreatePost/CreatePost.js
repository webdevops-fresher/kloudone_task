import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Row, Col, Avatar, Input, Button } from "antd";

import "./CreatePost.css";
import * as actions from "../../../store/actions";
import Post from "../../../assets/writing.svg";
import { ReactComponent as Gallery } from "../../../assets/gallery.svg";
import { ReactComponent as TagPeople } from "../../../assets/little-red-riding-hood.svg";
import { ReactComponent as Emoji } from "../../../assets/happy.svg";
import VerticalDots from "../../../assets/vertical-dots.svg";
import Icon from "@ant-design/icons";

const { TextArea } = Input;

function CreatePost(props) {
  const [post, setPost] = useState("");
  const dispatch = useDispatch();

  function onPostChange(e) {
    setPost(e.target.value);
  }

  function handleNewPost() {
    dispatch(actions.handleNewPost(post));
  }

  return (
    <div>
      <Row className="createpost">
        <Col span={24} className="createpostcolumns">
          <Avatar size={32} src={Post} shape="circle" />
          <span style={{ marginLeft: "30px" }} className="boldify">
            Create Post
          </span>
        </Col>
        <Col span={24} className="createpostcolumns">
          <TextArea
            row={24}
            placeholder="what's on your mind?"
            className="textarea"
            onChange={onPostChange}
            value={post}
          />
          <Button
            type="primary"
            style={{ marginTop: "10px" }}
            disabled={post.length === 0}
            onClick={handleNewPost}
          >
            Post
          </Button>
        </Col>
        <Col span={24} className="createpostcolumns">
          <Row className="createpostoptions">
            <Col xl={6} xs={24} lg={6} md={6}>
              <Button
                shape="round"
                icon={<Icon component={Gallery} />}
                className="gallery"
              >
                Gallery
              </Button>
            </Col>
            <Col xl={6} xs={24} lg={6} md={6}>
              <Button
                shape="round"
                icon={<Icon component={TagPeople} />}
                className="tagpeople"
              >
                Tag Friends
              </Button>
            </Col>
            <Col xl={6} xs={24} lg={6} md={6}>
              <Button
                shape="round"
                icon={<Icon component={Emoji} />}
                className="emoji"
              >
                Feeling Activity
              </Button>
            </Col>
            <Col xl={6} xs={24} lg={6} md={6} className="settings">
              <Avatar size={16} src={VerticalDots} shape="circle" />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default CreatePost;
