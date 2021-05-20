import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import { useState } from "react";
import styled from "styled-components";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Checkbox, FormGroup, Radio, RadioGroup, Switch } from "@material-ui/core";
import ManageTableNavbar from "./ManageTableNavbar";

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#52d869",
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff",
    },
  },
  thumb: {
    width: 24,
    height: 23,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[600]}`,
    backgroundColor: theme.palette.grey[100],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});
const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function createData(deptName, access, summery, lastUpdate) {
  return {
    deptName,
    access,
    summery,
    lastUpdate
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);
  const classes = useRowStyles();
  if (row.access === "All Access") {
    classes.access = {
      display: "block",
      minHeight: "30px",
      lineHeight: "1rem",
      padding: "10px 25px",
      margin: " auto 0",
      background: "rgba(39, 174, 96, 0.3)",
      border: "1px solid #27AE60",
      boxSizing: "border-box",
      color: "#27AE60",
      borderRadius: "20px",
    };
  } else if (row.access === "Restricted Access") {
    classes.access = {
      display: "block",
      minHeight: "30px",
      lineHeight: "1rem",
      padding: "10px 25px",
      margin: " auto 0",
      background: "rgba(255, 8, 8, 0.3)",
      border: "1px solid #ff0808",
      boxSizing: "border-box",
      color: "#ff0808",
      borderRadius: "20px",
    };
  } else {
    classes.access = {
      display: "block",
      minHeight: "30px",
      lineHeight: "1rem",
      padding: "10px 25px",
      margin: " auto 0",
      background: "#F2F2F2",
      border: "1px solid #BDBDBD",
      boxSizing: "border-box",
      color: "#BDBDBD",
      borderRadius: "20px",
    };
  }
  const [toggleBtn, setToggleBtn] = useState({
    checked: true,
  });

  const handleChange = (event) => {
    setToggleBtn({ ...toggleBtn, [event.target.name]: event.target.checked });
  };
  const [value, setValue] = useState("access");


  const [stateCheckbox, setStateCheckbox] = useState({
    gilad: true,
    jason: false,
    antoine: false,
  });
  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  const handleCheckBoxChange = (event) => {
    setStateCheckbox({ ...stateCheckbox, [event.target.name]: event.target.checked });
  };

  return (
    <React.Fragment>
      <TableRow  className={classes.root}>
        <TableCell >
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <RemoveCircleOutlineIcon /> : <AddCircleOutlineIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.deptName}
        </TableCell>
        <TableCell align="center">
          <span style={classes.access}>{row.access}</span>
        </TableCell>
        <TableCell align="center">{row.summery}</TableCell>
        <TableCell align="right">
          {row.lastUpdate}{" "}
          <FormControlLabel
            style={{ marginLeft: "35px" }}
            control={
              <IOSSwitch
                checked={toggleBtn.checked}
                onChange={handleChange}
                name="checked"
              />
            }
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="collapsible-area" colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="p" gutterBottom component="div">
                All aspects in the bidding module
              </Typography>
              <OpenCollapse>
                <LeftPart>
                  <Text>Access Control</Text>
                  <RadioGroup
                    aria-label="access"
                    name="access"
                    value={value}
                    onChange={handleRadioChange}
                  >
                    <FormControlLabel
                      value="All"
                      control={<Radio />}
                      label="All Access"
                    />
                    <FormControlLabel
                      value="Restricted "
                      control={<Radio />}
                      label="Restricted Access"
                    />
                  </RadioGroup>
                </LeftPart>
                <RightPart>
                  <Text>Permissions</Text>{" "}
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={stateCheckbox.gilad}
                          onChange={handleCheckBoxChange}
                          name="gilad"
                        />
                      }
                      label="View items in access"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={stateCheckbox.edit}
                          onChange={handleCheckBoxChange}
                          name="edit"
                        />
                      }
                      label="Edit items in access"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={stateCheckbox.jason}
                          onChange={handleCheckBoxChange}
                          name="jason"
                        />
                      }
                      label="Create items in access"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={stateCheckbox.antoine}
                          onChange={handleCheckBoxChange}
                          name="antoine"
                        />
                      }
                      label="Delete items in access"
                    />
                  </FormGroup>
                </RightPart>
              </OpenCollapse>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    access: PropTypes.string.isRequired,
    summery: PropTypes.string.isRequired,
    lastUpdate: PropTypes.string.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    deptName: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createData(
    "Budget",
    "All Access",
    "View | Create | Edit | Delete",
    "1 min ago"
  ),
  createData("Bidding", "No Access", "-", "1 min ago"),
  createData(
    "Vendor Portal",
    "Restricted Access",
    "View | Create",
    "1 min ago"
  ),
  createData(
    "Purchase Order/Work Order",
    "Restricted Access",
    "View | Create",
    "1 min ago"
  ),
  createData(
    "Organizational Profile",
    "All Access",
    "View | Create | Edit | Delete",
    "1 min ago"
  ),
  createData("Permissions & Access Control", "No Access", "-", "1 min ago"),
];

const ManageTable = () => {
  return (
    <MainSection>
      <ManageTableNavbar/>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead style={{ background: "#F2F2F2" }}>
            <TableRow>
              <TableCell />
              <TableCell>Department/Role Name</TableCell>
              <TableCell align="center">Access Level</TableCell>
              <TableCell align="center">Summery</TableCell>
              <TableCell align="center">Last Update</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.deptName} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainSection>
  );
};

export default ManageTable;

const MainSection = styled.div`
  width: 80%;
  margin: 24px auto;
`;

const OpenCollapse = styled.div`
  display: flex;
`;
const LeftPart = styled.div`
  width: 250px;
  border-right: 1px solid #e0e0e0;
  padding-left: 133px;
  `;
const RightPart = styled.div`
padding-left: 70px;
`;
const Text = styled.p`
  font-size: 16px;
`;
