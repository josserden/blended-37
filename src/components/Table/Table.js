import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import EditIcon from '@mui/icons-material/Edit';

export default function BasicTable({ data }) {
  return (
    <TableContainer component={Paper} sx={{ marginTop: 6 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell>Calories</TableCell>
            <TableCell>Fat&nbsp;(g)</TableCell>
            <TableCell>Carbs&nbsp;(g)</TableCell>
            <TableCell>Protein&nbsp;(g)</TableCell>
            <TableCell>
              <ArrowDropDownCircleIcon />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(({ dessert, calories, fat, carbs, protein, id }) => (
            <TableRow
              key={id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {dessert}
              </TableCell>
              <TableCell>{calories}</TableCell>
              <TableCell>{fat}</TableCell>
              <TableCell>{carbs}</TableCell>
              <TableCell>{protein}</TableCell>
              <TableCell>
                <button
                  onClick={() => {
                    console.log('Click');
                  }}>
                  <EditIcon />
                </button>
                <button
                  onClick={() => {
                    console.log('Click');
                  }}>
                  <DeleteOutlineIcon />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
