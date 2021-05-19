import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import editIcon from "../../assets/img/icons/editIcon.png";
import deleteIcon from "../../assets/img/icons/deleteIcon.png";
import TableView from "./TableView";

const TableGround = () => {
  return (
      <Main>
    <Container>
      <Nav>
        <Button
          variant="contained"
          style={{ background: "#673AB7", color: "white", padding: "8px 40px" }}
        >
          + Add Role
        </Button>
        <Icon src={editIcon} alt="Edit" />
        <Icon src={deleteIcon} alt="delete" />
      </Nav>
    </Container>
    <TableContainer>
    <TableView/>
    </TableContainer>
    </Main>
  );
};

export default TableGround;

const Main = styled.div``;
const Container = styled.div``;
const Nav = styled.div`
  margin-top: 38px;
  margin-left: 120px;
  display: flex;
  align-items: center;
`;
const Icon = styled.img`
  margin: 0 15px 0 24px;
  cursor: pointer;
`;
const TableContainer = styled.div`

`
