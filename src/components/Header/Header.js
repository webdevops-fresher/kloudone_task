import React from "react";
import { Row, Col, Avatar, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import FBIcon from "../../assets/facebook.svg";
import MessengerIcon from "../../assets/messenger.svg";
import HouseIcon from "../../assets/house.svg";
import PeopleIcon from "../../assets/people_regular.svg";
import NotificationIcon from "../../assets/bell.svg";
import InfoIcon from "../../assets/information.svg";
import SettingsIcon from "../../assets/settings.svg";
import ProfileIcon from "../../assets/man.svg";
import "./Header.css";

function Header(props) {
  return (
    <React.Fragment>
      <Row className="header">
        <Col xs={24} xl={2} lg={2}>
          <Avatar size={64} src={FBIcon} shape="circle" />
        </Col>
        <Col xs={24} xl={8} lg={6}>
          <Input
            placeholder="search"
            className="inputsearch"
            suffix={<SearchOutlined />}
          />
        </Col>
        <Col xs={24} xl={6} lg={8}>
          <Row className="primaryicons">
            <Col xs={0} xl={6} lg={0} />
            <Col xs={8} xl={6} lg={8}>
              <Avatar size={32} src={HouseIcon} />
            </Col>
            <Col xs={8} xl={6} lg={8}>
              <Avatar size={32} src={MessengerIcon} />
            </Col>
            <Col xs={8} xl={6} lg={8}>
              <Avatar size={32} src={PeopleIcon} />
            </Col>
          </Row>
        </Col>
        <Col xs={24} xl={8} lg={8}>
          <Row className="secondaryicons">
            <Col xs={0} xl={8} lg={0} />
            <Col xs={6} xl={4} lg={6}>
              <Avatar size={32} src={NotificationIcon} />
            </Col>
            <Col xs={6} xl={4} lg={6}>
              <Avatar size={32} src={InfoIcon} />
            </Col>
            <Col xs={6} xl={4} lg={6}>
              <Avatar size={32} src={SettingsIcon} />
            </Col>
            <Col xs={6} xl={4} lg={6}>
              <Avatar size={32} src={ProfileIcon} />
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Header;
