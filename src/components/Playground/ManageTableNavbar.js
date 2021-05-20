import React from 'react';
import styled from 'styled-components';

const ManageTableNavbar = () => {
    return (
        <Main>
            <ActiveNavContainer>
            <Nav>
                <Text>Access Control</Text>
            </Nav>
            </ActiveNavContainer>
            <Partition></Partition>
            <NavContainer>
            <Nav>
                <Text>Assigned Members</Text>
            </Nav>
            </NavContainer>
        </Main>
    );
};


export default ManageTableNavbar;

const Main = styled.div`
margin-left: 20px; 
border-bottom: 1px solid rgba(207, 211, 218, 0.5);

`
const Partition = styled.span`
content: "";
border-left: 2px solid #CFD3DA;
border-radius: 20% ;
margin: 0 15px;
`
const ActiveNavContainer = styled.div`
display: inline-block;
cursor: pointer;
border-bottom: 5px solid white;
border-bottom: 5px solid #673AB7;
border-radius: 10px 10px 0px 0px;
p{
    color: #673AB7;
}
`
const NavContainer = styled.div`
display: inline-block;
cursor: pointer;
border-bottom: 5px solid white;
&:hover, &:active, &:focus { 
    border-bottom: 5px solid #673AB7;
    border-radius: 10px 10px 0px 0px;
    }
`
const Nav = styled.div`
display: flex;
align-items: center;
padding: 4px;

`
const Text = styled.p`
font-size: 16px;
color: black;
&:hover {
    color: #673AB7;
}
`