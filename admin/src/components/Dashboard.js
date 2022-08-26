import * as React from 'react';

// MUI
import { Box, Toolbar, Container, Grid, Paper } from '@mui/material';

// Components
import Orders from './Orders';
import Filter from './Filter';

function DashboardContent() {
  return (
    <Box
      component='main'
      sx={{
        backgroundColor: theme =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <Toolbar />
      <Container maxWidth='lg' sx={{ mt: 4, mb: 2 }}>
        <Grid container spacing={3}>
          {/* 필터 */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Filter />
            </Paper>
          </Grid>
          {/* 사용자 */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Orders />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
