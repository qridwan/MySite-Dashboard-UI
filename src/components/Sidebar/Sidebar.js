import React from "react";
import styled from "styled-components";
import dashboard from '../../assets/img/icons/dashboard.png';
import businessIcon from '../../assets/img/icons/businessIcon.png';
import securityIcon from '../../assets/img/icons/security.png';

const Sidebar = () => {
  return (
    <Main>
      <Frame>
        <Icon>
          <Image src={dashboard} alt="" />
        </Icon>
        <Text>Projects</Text>
      </Frame>
      <Frame>
        <Icon>
          <Image src={businessIcon} alt="" />
        </Icon>
        <Text>Organization Profile</Text>
      </Frame>
      <Frame>
        <Icon>
          <Image src={securityIcon} alt="" />
        </Icon>
        <Text>Access Control</Text>
      </Frame>
    </Main>
  );
};

export default Sidebar;

const Main = styled.div`
height: 90vh;
width: 310px;
padding-top: 10px;
background: #FCFBFF;
`;
const Frame = styled.div`
display: flex;
align-items: center;
cursor: pointer;
&:hover {
background: #E1D8F1;
border-left: 7px solid #673AB7;
p {
    color: #673AB7;
}
}

`;
const Icon = styled.div`
margin: 0 20px;
`;
const Image = styled.img`
color: grey ;
`;
const Text = styled.p`
font-size: 18px;
line-height: 21.09px;
color: #828282;
`;
