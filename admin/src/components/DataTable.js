import * as React from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CardModal from './CardModal';

export default function DataTable() {
  const [modalOpen, setModalOpen] = React.useState(false);

  const handle = () => {
    setModalOpen(true);
  };

  return (
    <>
      {modalOpen ? <CardModal setModalOpen={setModalOpen} /> : null}
      <TableContainer component={Paper}>
        <Table style={{ width: 1100 }}>
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
                커리어캠프
              </TableCell>
              <TableCell align='right'>2022/8/12</TableCell>
              <TableCell align='right'>브론즈</TableCell>
              <TableCell align='right'>없음</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
