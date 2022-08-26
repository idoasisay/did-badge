import * as React from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function UserTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>이름</TableCell>
            <TableCell align='right'>부트캠프</TableCell>
            <TableCell align='right'>수료 기수</TableCell>
            <TableCell align='right'>수료증</TableCell>
            <TableCell align='right'>뱃지</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component='th' scope='row'>
              이유정
            </TableCell>
            <TableCell align='right'>BEB</TableCell>
            <TableCell align='right'>20</TableCell>
            <TableCell align='right'>true</TableCell>
            <TableCell align='right'>4</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
