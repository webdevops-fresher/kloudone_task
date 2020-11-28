import React from "react";
import {useDispatch} from 'react-redux';
import { Row, Col, Avatar, Input } from "antd";

import "./RightFeed.css";
import * as actions from '../../store/actions';
import ProfileIcon from "../../assets/man.svg";
import Settings from "../../assets/settings.svg";
import Phone from "../../assets/phone.svg";
import Close from "../../assets/cancel.svg";

function RightFeed(props) {

    const dispatch=useDispatch();

  return (
    <div className="RightFeed">
      <Row>
        <Col span={24} className="profileandsettings">
          <Row>
            <Col span={12} className="boldify">
              <Avatar size={16} src={ProfileIcon} />
              User Profile
            </Col>
            <Col span={12} className="options">
              <Row>
                <Col span={8}>
                  <Avatar size={16} src={Settings} />
                </Col>
                <Col span={8}>
                  <Avatar size={16} src={Phone} />
                </Col>
                <Col span={8} onClick={()=>dispatch(actions.chatMessenger())}>
                  <Avatar size={16} src={Close} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col span={24} className="chats"></Col>
        <Col span={24}>
            <Input placeholder="type"  className="ChatInput"/>
        </Col>
      </Row>
    </div>
  );
}

export default RightFeed;
