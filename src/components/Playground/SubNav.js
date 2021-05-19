import React from 'react';
import styled from 'styled-components';
import RssFeed from '../../assets/img/icons/RssFeed.png';
import ViewModule from '../../assets/img/icons/ViewModule.png';
import SyncIcon from '../../assets/img/icons/SyncIcon.png';

const SubNav = () => {
    return (
        <Main>
            <NavContainer>
            <Nav selected={true}>
                <Image src={RssFeed} alt="" />
                <Text>Permissions</Text>
            </Nav>
            </NavContainer>
            <Partition></Partition>
            <NavContainer>
            <Nav>
                <Image src={ViewModule} alt="" />
                <Text>Approval Matrix</Text>
            </Nav>
            </NavContainer>
            <UpdateInfo>
            <Nav>
                <Image src={SyncIcon} alt="" />
                <Text>Last synced 15 mins ago</Text>
            </Nav>
            </UpdateInfo>
        </Main>
    );
};

export default SubNav;

const Main = styled.div`
margin-left: 20px; 
border-bottom: 1px solid rgba(207, 211, 218, 0.5);

`
const Partition = styled.span`
content: "";
background: red;
border-left: 2px solid #CFD3DA;
border-radius: 20% ;
margin: 0 15px;
`
const NavContainer = styled.div`
display: inline-block;
cursor: pointer;
border-bottom: 5px solid white;
&:hover, &:active { 
    border-bottom: 5px solid #673AB7;
    border-radius: 10px 10px 0px 0px;
    }
`

const UpdateInfo = styled.div`
float: right;
margin-right: 87px;
& p{
    color: black;
    font-size: 14px;
}
`
const Nav = styled.div`
display: flex;
align-items: center;
padding: 4px;

`
const Image = styled.img`
margin-right: 11px;
`
const Text = styled.p`
font-size: 16px;
color: #673AB7;
`