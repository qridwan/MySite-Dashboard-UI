import React from "react";
import navIcon from "../../assets/img/icons/Subtract.png";
import brandName from "../../assets/img/icons/mYSITE.png";
import Notification from "../../assets/img/icons/notification.png";
import Query from "../../assets/img/icons/help.png";
import styled from "styled-components";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Navigation = () => {
  return (
    <Nav>
      <ul>
        <Brand>
          <NavIcon>
            <Anchor href="#home">
              <Image src={navIcon} alt="icon" />
            </Anchor>
          </NavIcon>
          <BrandName>
            <Anchor href="#home">
              <Image src={brandName} alt="brand name" />
            </Anchor>
          </BrandName>
        </Brand>
        <NavLink>
          <User>
            <Icon>
              <AccountCircleIcon />
            </Icon>
            <Text>Ridwan</Text>
          </User>
          <Notifications>
            <Anchor href="#notification">
              <Image src={Notification} alt="brand name" />
            </Anchor>
          </Notifications>
          <Notifications>
            <Anchor href="#help">
              <Image src={Query} alt="brand name" />
            </Anchor>
          </Notifications>
        </NavLink>
      </ul>
    </Nav>
  );
};

export default Navigation;

const Nav = styled.div``;
const Brand = styled.div`
  float: left;
  display: flex;
`;
const NavLink = styled.div`
  float: Right;
  display: flex;
`;
const Anchor = styled.a`
  text-decoration: none;
`;
const BrandName = styled.a`
  margin-top: 10px;
`;
const NavIcon = styled.li`
  margin-right: 15px;
  list-style: none;
`;
const User = styled.li`
  margin-right: 45px;
  list-style: none;
  height: 36px;
  display: flex;
  align-items: center;
`;
const Text = styled.span`
  font-size: 16px;
  color: black;
`;
const Icon = styled.span`
  font-size: 32px;
  margin-right: 5px;
  color: grey;
`;

const Notifications = styled.li`
  margin-right: 25px;
  list-style: none;
  height: 36px;
  width: 36px;
`;
const Image = styled.img``;
