import * as React from 'react';
import { Box } from '@mui/system';
import UserTable from '../components/UserTable';
import DataTable from '../components/DataTable';

export default function UserPage() {
  return (
    <Box
      sx={{
        margin: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}
    >
      <UserTable />
      <DataTable />
    </Box>
  );
}
