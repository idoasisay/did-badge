/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

// mui
import { Box, Button, Typography } from '@mui/material';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

export default function CardModal(props) {
  const { setModalOpen } = props;
  const closeBtnHandler = () => {
    setModalOpen(false);
  };

  const [category, setcategory] = React.useState('carrercamp');
  const [formInput, setFormInput] = React.useState({ category });
  const [value, setValue] = React.useState(dayjs('2021-11-18T21:11:54'));
  const handleChange = newValue => {
    setFormInput({ ...formInput, date: newValue });
    setValue(newValue);
  };

  const handleSumbit = e => {
    const name = e.target.name;
    const newValue = e.target.value;
    setFormInput({ ...formInput, [name]: newValue });
  };
  const handleCategory = e => {
    setFormInput({ ...formInput, category: e.target.value });
    setcategory(e.target.value);
  };

  const submitHandle = e => {
    // e.preventDefault();
    console.log(formInput);
    // 여기서 SERVE 처리
  };
  return (
    <Box>
      <Box
        sx={{
          width: '1000px',
          height: '600px',
          bgcolor: 'white',
          position: 'absolute',
          top: 'calc(50vh - 300px)',
          left: 'calc(50vw - 390px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          borderRadius: '10px',
          border: 0.2,
        }}
      >
        <Button
          type='button'
          variant='contained'
          sx={{ mt: 1, mb: 1, position: 'relative', left: 400, top: -70 }}
          onClick={closeBtnHandler}
        >
          x
        </Button>
        <Box sx={{ minWidth: 120 }}>
          <form onSubmit={submitHandle}>
            <FormControl
              sx={{
                m: 1,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
              size='small'
            >
              <FormLabel id='demo-row-radio-buttons-group-label'>
                뱃지 유형
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby='demo-row-radio-buttons-group-label'
                name='badge'
                onChange={handleSumbit}
              >
                {/* SEB, BEB, GMB, AIB, DOB, PMB */}
                <FormControlLabel
                  value='bronze'
                  control={<Radio size='small' />}
                  label='브론즈'
                />
                <FormControlLabel
                  value='sliver'
                  control={<Radio size='small' />}
                  label='실버'
                />
                <FormControlLabel
                  value='gold'
                  control={<Radio size='small' />}
                  label='골드'
                />
                <FormControlLabel
                  value='dia'
                  control={<Radio size='small' />}
                  label='다이아'
                />
                <FormControlLabel
                  value='platinum'
                  control={<Radio size='small' />}
                  label='플래티넘'
                />
              </RadioGroup>
              <Box sx={{ display: 'flex' }}>
                <Select
                  labelId='demo-select-small'
                  id='demo-select-small'
                  value={category}
                  onChange={handleCategory}
                >
                  <MenuItem value={'carrercamp'}>커리어캠프</MenuItem>
                  <MenuItem value={'mentoring'}>멘토링</MenuItem>
                  <MenuItem value={'g1'}>기타1</MenuItem>
                  <MenuItem value={'g2'}>기타2</MenuItem>
                  <MenuItem value={'g3'}>기타3</MenuItem>
                  <MenuItem value={'g4'}>기타4</MenuItem>
                </Select>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    inputFormat='MM/DD/YYYY'
                    value={value}
                    onChange={handleChange}
                    renderInput={params => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Box>
              <FormLabel id='demo-row-radio-buttons-group-label'>
                비고
              </FormLabel>
              <TextField
                id='outlined-multiline-static'
                multiline
                rows={4}
                defaultValue='없음'
                name='memo'
              />
              <Typography>저장하게 되면 뱃지를 발행합니다!</Typography>
              <Button type='submit'>저장</Button>
            </FormControl>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
