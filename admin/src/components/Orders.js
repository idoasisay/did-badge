import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, 'BEB', '이유정', 'true', '22/8/13', 3),
  createData(1, 'SEB', '김유정', 'true', '22/8/13', 8),
  createData(2, 'GMB', '박유정', 'true', '22/8/13', 1),
  createData(3, 'PMB', '최유정', 'true', '22/8/13', 6),
  createData(4, 'AIB', '당고유정', 'true', '22/8/13', 2),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>대시보드</Title>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>부트캠프 명</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>수료</TableCell>
            <TableCell>수료 날짜 </TableCell>
            <TableCell align='right'>뱃지</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align='right'>{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color='primary' href='#' onClick={preventDefault} sx={{ mt: 3 }}>
        더 많은 내용
      </Link>
    </React.Fragment>
  );
}
