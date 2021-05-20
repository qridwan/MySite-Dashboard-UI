import React from "react";
import styled from "styled-components";
import dashboard from "../../assets/img/icons/dashboard.png";
import businessIcon from "../../assets/img/icons/businessIcon.png";
import securityIcon from "../../assets/img/icons/security.png";
import { NavLink, Router } from "react-router-dom";
import { style } from "../../styles";

const Sidebar = () => {
  const handleClicked = (e) => {
    console.log(e.target);
  };

  return (
    <Main>
      <NavLink to="/Projects">
        {" "}
        <Frame onClick={handleClicked}>
          <Icon>
            <Image src={dashboard} alt="" />
          </Icon>
          <Text>Projects</Text>
        </Frame>
      </NavLink>
      <NavLink to="/Profile">
        {" "}
        <Frame>
          <Icon>
            <Image src={businessIcon} alt="" />
          </Icon>
          <Text>Organization Profile</Text>
        </Frame>
      </NavLink>
      <NavLink  activeStyle={style.activeSidebar} to="/AccessControl">
        {" "}
        <Frame>
          <Icon>
            <Image src={securityIcon} alt="" />
          </Icon>
          <Text>Access Control</Text>
        </Frame>
      </NavLink>
    </Main>
  );
};

export default Sidebar;

const Main = styled.div`
  height: 90vh;
  width: 310px;
  padding-top: 10px;
  background: #fcfbff;
  float: left;
`;

const Frame = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #e1d8f1;
    p {
      color: #673ab7;
    }
  }
`;
const Icon = styled.div`
  margin: 0 20px;
`;
const Image = styled.img`
  color: grey;
`;
const Text = styled.p`
  font-size: 18px;
  line-height: 21.09px;
  color: #828282;
`;
