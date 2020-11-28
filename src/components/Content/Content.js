import React from "react";
import { Row, Col } from "antd";
import {useDispatch,useSelector} from 'react-redux';

import CreatePost from "./CreatePost/CreatePost";
import Stories from "./Stories/Stories";
import ShowPost from "./ShowPost/ShowPost";

function Content(props) {

  const admin=useSelector(state=>state.admin);

  return (
    <>
      <Row>
        <Col xl={24} xs={24}>
          <CreatePost />
        </Col>
        <Col xl={24} xs={24}>
          <Stories />
        </Col>
        <Col xl={24} xs={24}>
          {admin.showFullPost?<ShowPost post={admin.showPost}/>:null}
        </Col>
      </Row>
    </>
  );
}

export default Content;
