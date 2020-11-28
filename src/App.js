import React from "react";
import {useSelector} from 'react-redux';
import { Row, Col } from "antd";
import "./App.css";
import "antd/dist/antd.css";

import HeaderFeed from "./components/Header/Header";
import SideFeed from "./components/SideFeed/SideFeed";
import Content from "./components/Content/Content";
import RightFeed from "./components/RightFeed/RightFeed";

function App() {

  const admin=useSelector(state=>state.admin);

  return (
    <div className="App">
      <HeaderFeed />
      <Row className="layoutcontent">
        <Col xs={24} xl={4} className="layoutcontentcolumns">
          <SideFeed />
        </Col>
        <Col xs={24} xl={12} className="layoutcontentcolumns">
          <Content />
        </Col>
        <Col xs={24} xl={4} className="layoutcontentcolumns">
          {admin.messenger?<RightFeed />:null}
        </Col>
      </Row>
    </div>
  );
}

export default App;
