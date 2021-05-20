import { Button } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import editIcon from "../../assets/img/icons/editIcon.png";
import goBack from "../../assets/img/icons/goBack.png";
import deleteIcon from "../../assets/img/icons/deleteIcon.png";
import TableView from "./TableView";
import ManageTable from "./ManageTable";

const TableGround = () => {
  const [stateShow, setStateShow] = useState(true);
  return (
    <Main>
      <Container>
        {stateShow ? (
          <Nav>
            <Button
              onClick={() => setStateShow(false)}
              variant="contained"
              style={{
                background: "#673AB7",
                color: "white",
                padding: "8px 40px",
              }}
            >
              + Add Role
            </Button>
            <Icon src={editIcon} alt="Edit" />
            <Icon src={deleteIcon} alt="delete" />
          </Nav>
        ) : (
          <Nav>
            <Icon
              onClick={() => setStateShow(true)}
              src={goBack}
              alt="goBack"
            />
            <Text>Management Team</Text>
            <Icon src={editIcon} alt="Edit" />
          </Nav>
        )}
      </Container>
      <TableContainer>
        {stateShow ? <TableView /> : <ManageTable />}
      </TableContainer>
    </Main>
  );
};

export default TableGround;

const Main = styled.div``;
const Container = styled.div``;
const Nav = styled.div`
  margin-top: 28px;
  margin-left: 120px;
  display: flex;
  align-items: center;
`;
const Icon = styled.img`
  margin: 0 15px 0 24px;
  cursor: pointer;
`;
const TableContainer = styled.div``;
const Text = styled.p`
  font-size: 18px;
  color: #673ab7;
`;
