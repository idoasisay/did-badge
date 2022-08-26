import * as React from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function DataTable() {
  const handle = () => {
    console.log(11);
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>활동명</TableCell>
            <TableCell align='right'>날짜</TableCell>
            <TableCell align='right'>뱃지 유형</TableCell>
            <TableCell align='right'>비고</TableCell>
            <TableCell
              align='right'
              onClick={handle}
              sx={{ cursor: 'pointer', color: 'blue' }}
            >
              +
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component='th' scope='row'>
              이유정
            </TableCell>
            <TableCell align='right'>20</TableCell>
            <TableCell align='right'>true</TableCell>
            <TableCell align='right'>4</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
