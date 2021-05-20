import React from 'react';
import styled from 'styled-components';
import SubNav from './SubNav';
import TableGround from './TableGround';

const PlayGround = () => {
    return (
        <Content>
            <SubNav/>
            <TableGround/>
        </Content>
    );
};

export default PlayGround;

const Content = styled.div`
height: 90vh;
width: calc(100% - 315px);
float: right;
`