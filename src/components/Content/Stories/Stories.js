import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as actions from "../../../store/actions";
import { Card, Row, Col, Button } from "antd";

import "./Stories.css";

const { Meta } = Card;

function Stories(props) {
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.admin);

  function handlePosts() {
    if (admin.moreOrLess) {
      dispatch(actions.lessPosts());
    } else {
      dispatch(actions.morePosts());
    }
  }

  function display(post){
    dispatch(actions.showFullPost(post));
  }

  useEffect(() => {
    dispatch(actions.getAllPosts());
  }, []);

  const stories = admin.posts ? (
    admin.posts.map((post) => {
      return (
        <Card
          hoverable
          style={{ width: 160, marginLeft: 20, marginTop: 10 }}
          cover={<img alt={post.name} src={post.thumbnailUrl} />}
          onClick={()=>display(post)}
        >
          <Meta title={post.first_name} description={post.postMeta} />
        </Card>
      );
    })
  ) : admin.loading ? (
    <h1>...Loading</h1>
  ) : null;

  return (
    <>
      <div className="stories-content">
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Row>
              <Col span={12} className="stories-title boldify">
                Stories
              </Col>
              <Col span={12} className="expand-stories">
                <Button type="primary" shape="round" onClick={handlePosts}>
                  {admin.moreOrLess ? "Less" : "More"}
                </Button>
              </Col>
            </Row>
          </Col>
          <Col span={24} className="stories">
            {stories}
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Stories;
