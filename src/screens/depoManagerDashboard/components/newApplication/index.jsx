import React from 'react'
import { styles } from './styles'
import {useNavigate} from "react-router-dom"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#1b84e7",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(name, mobile, email, area, gstNo,isReturn) {
    return { name, mobile, email, area, gstNo,isReturn };
  }
  
  const rows = [
    createData( "Mr. Rohit Kumar", "9876543210", "rohitkumar@mail.com", "Kashidih", "20ABCD890J1KZW", "No"),
    createData( "Mr. Rohit Kumar", "9876543210", "rohitkumar@mail.com", "Kashidih", "20ABCD890J1KZW", "yes"),
    createData( "Mr. Rohit Kumar", "9876543210", "rohitkumar@mail.com", "Kashidih", "20ABCD890J1KZW", "yes"),
    createData( "Mr. Rohit Kumar", "9876543210", "rohitkumar@mail.com", "Kashidih", "20ABCD890J1KZW", "No"),
    createData( "Mr. Rohit Kumar", "9876543210", "rohitkumar@mail.com", "Kashidih", "20ABCD890J1KZW", "yes"),
    createData( "Mr. Rohit Kumar", "9876543210", "rohitkumar@mail.com", "Kashidih", "20ABCD890J1KZW", "yes"),
  ];

export default function NewApplication() {

    let navigate = useNavigate();

  return (
    <>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: "700" }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Mobile No.</StyledTableCell>
            <StyledTableCell align="right">E-Mail ID</StyledTableCell>
            <StyledTableCell align="right">Area</StyledTableCell>
            <StyledTableCell align="right">GSTIN</StyledTableCell>
            <StyledTableCell align="right">Return Customer</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.mobile}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.area}</StyledTableCell>
              <StyledTableCell align="right">{row.gstNo}</StyledTableCell>
              <StyledTableCell align="right">{row.isReturn}</StyledTableCell>
              <StyledTableCell align="right"><Button onClick={()=>{navigate("/applicationDetails")}} variant="text">View</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}
