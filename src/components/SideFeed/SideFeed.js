import React from "react";
import {useDispatch} from 'react-redux';
import { Row, Col, Avatar } from "antd";

import "./SideFeed.css";
import Messenger from "../../assets/messenger_blue.svg";
import NewsFeed from "../../assets/news-paper.svg";
import Television from "../../assets/television.svg";
import ProfileIcon from "../../assets/man.svg";
import Youth from "../../assets/youth.svg";
import TeamWork from "../../assets/teamwork.svg";
import Group from "../../assets/group.svg";
import Document from "../../assets/document.svg";
import Calendar from "../../assets/calendar.svg";
import Groups from "../../assets/groups.svg";

import * as actions from '../../store/actions';

function SideFeed(props) {

  const dispatch=useDispatch();

  function onHandleMessenger(){
    dispatch(actions.chatMessenger());
  }

  return (
    <React.Fragment>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Row className="actionbuttons" gutter={[16, 16]}>
            <Col xl={24} xs={24} md={4} lg={4} className="boldify">
              Action Buttons
            </Col>
            <Col xl={24} xs={24} md={5} lg={5}>
              <Avatar size={32} src={ProfileIcon} shape="circle" /> User Profile
            </Col>
            <Col xl={24} xs={24} md={5} lg={5} onClick={onHandleMessenger}>
              <Avatar size={32} src={Messenger} shape="circle" /> Messenger
            </Col>
            <Col xl={24} xs={24} md={5} lg={5}>
              <Avatar size={32} src={NewsFeed} shape="circle" /> New Feed
            </Col>
            <Col xl={24} xs={24} md={5} lg={5}>
              <Avatar size={32} src={Television} shape="circle" /> Watch Live
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row className="shortcuts" gutter={[16, 16]}>
            <Col xl={24} xs={24} md={4} lg={4} className="boldify">
              Shortcuts
            </Col>
            <Col xl={24} xs={24} md={5} lg={4}>
              <Avatar size={32} src={Youth} shape="circle" />
              UI/UX designer
            </Col>
            <Col xl={24} xs={24} md={5} lg={4}>
              <Avatar size={32} src={TeamWork} shape="circle" />
              Hella Narwal
            </Col>
            <Col xl={24} xs={24} md={5} lg={4}>
              <Avatar size={32} src={Group} shape="circle" />
              Keytar McShaw
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row className="explore" gutter={[16, 16]}>
            <Col xl={24} xs={24} md={4} lg={4} className="boldify">
              Explore
            </Col>
            <Col xl={24} xs={24} md={5} lg={4}>
              <Avatar size={32} src={Groups} shape="circle" /> Groups
            </Col>
            <Col xl={24} xs={24} md={5} lg={4}>
              <Avatar size={32} src={Calendar} shape="circle" /> Events
            </Col>
            <Col xl={24} xs={24} md={5} lg={4}>
              <Avatar size={32} src={Document} shape="circle" /> Pages
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default SideFeed;
