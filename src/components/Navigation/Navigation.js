import React from "react";
import navIcon from "../../assets/img/icons/Subtract.png";
import brandName from "../../assets/img/icons/mYSITE.png";
import Notification from "../../assets/img/icons/notification.png";
import Query from "../../assets/img/icons/help.png";
import styled from "styled-components";

const Navigation = () => {
  return (
    <Nav>
      <ul>
       <Brand>
       <List>
          <Anchor className="nav-brand" href="#home">
            <Image src={navIcon} alt="icon" />
          </Anchor>
        </List>
        <BrandName>
          <Anchor href="#home">
            <Image src={brandName} alt="brand name" />
          </Anchor >
        </BrandName>
       </Brand>
        <NavLink>
        <List>
          <Anchor href="#news">News</Anchor>
        </List>
        <List>
          <Anchor href="#contact">
          <Image src={Notification} alt="brand name" />
          </Anchor>
        </List>
        <List>
          <Anchor class="active" href="#about">
          <Image src={Query} alt="brand name" />
          </Anchor>
        </List>
        </NavLink>
      </ul>
    </Nav>
  );
};

export default Navigation;

const Brand = styled.div`
float: left;
display: flex;
`
const NavLink = styled.div`
float: Right;
display: flex;
`
const Anchor = styled.a`
text-decoration: none;
`

const Nav = styled.div`

`
const BrandName = styled.a`
margin-top: 10px;
`
const List = styled.li`
 margin-right: 15px;
 list-style: none;

`
const Image = styled.img`

`
