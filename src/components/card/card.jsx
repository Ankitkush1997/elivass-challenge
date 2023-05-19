import React, { useState } from "react";

import {
  EditOutlined,
  DeleteFilled,
  HeartOutlined,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { Card } from "antd";

import "./card.css";

const UserCard = ({ user, onEditClick, onDelete }) => {
  const { name, email, phone, username, website } = user;
  const [heartIcon, setHeartIcon] = useState(false);

  const handleHeartClick = () => setHeartIcon(!heartIcon);

  return (
    <Card
      className="base-card"
      hoverable
      cover={
        <img
          className="card-head-image"
          alt="example"
          src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
        />
      }
      actions={[
        heartIcon ? (
          <HeartFilled
            data-testid="heart-icon"
            key="heart"
            style={{ color: "red", fontSize: "20px" }}
            onClick={handleHeartClick}
          />
        ) : (
          <HeartOutlined
            data-testid="heart-icon"
            key="heart"
            style={{ color: "red", fontSize: "20px" }}
            onClick={handleHeartClick}
          />
        ),
        <EditOutlined
          data-testid="edit-icon"
          key="edit"
          style={{ fontSize: "18px" }}
          onClick={() => onEditClick(user)}
        />,
        <DeleteFilled
          data-testid="delete-icon"
          key="ellipsis"
          style={{ fontSize: "18px" }}
          onClick={() => onDelete(user)}
        />,
      ]}
    >
      <h3>{name}</h3>
      <div className="base-card-meta">
        <MailOutlined />
        <p>{email}</p>
      </div>
      <div className="base-card-meta">
        <PhoneOutlined />
        <p>{phone}</p>
      </div>
      <div className="base-card-meta">
        <GlobalOutlined />
        <p>http://{website}</p>
      </div>
    </Card>
  );
};

export default UserCard;
