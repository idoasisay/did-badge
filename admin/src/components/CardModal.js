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

  const [category, setcategory] = React.useState('name');
  const [formInput, setFormInput] = React.useState({ category: 'name' });
  const [value, setValue] = React.useState(dayjs('2021-11-18T21:11:54'));
  const handleChange = newValue => {
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
    e.preventDefault();
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
          flexDirection: 'column',
          borderRadius: '10px',
          border: 0.2,
        }}
      >
        <Box sx={{ minWidth: 120 }}>
          <form onSubmit={submitHandle}>
            <FormControl
              sx={{ m: 1, minWidth: 120, display: 'flex' }}
              size='small'
            >
              <FormLabel id='demo-row-radio-buttons-group-label'>
                뱃지 유형
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby='demo-row-radio-buttons-group-label'
                name='bootcamp'
                onChange={handleSumbit}
              >
                {/* SEB, BEB, GMB, AIB, DOB, PMB */}
                <FormControlLabel
                  value='AIB'
                  control={<Radio size='small' />}
                  label='브론즈'
                />
                <FormControlLabel
                  value='BEB'
                  control={<Radio size='small' />}
                  label='실버'
                />
                <FormControlLabel
                  value='DOB'
                  control={<Radio size='small' />}
                  label='골드'
                />
                <FormControlLabel
                  value='SEB'
                  control={<Radio size='small' />}
                  label='다이아'
                />
                <FormControlLabel
                  value='PMB'
                  control={<Radio size='small' />}
                  label='플래티넘'
                />
              </RadioGroup>
              <Box>
                <Select
                  labelId='demo-select-small'
                  id='demo-select-small'
                  value={category}
                  onChange={handleCategory}
                >
                  <MenuItem value={'name'}>커리어캠프</MenuItem>
                  <MenuItem value={'email'}>멘토링</MenuItem>
                  <MenuItem value={'githubID'}>기타1</MenuItem>
                  <MenuItem value={'githubI'}>기타2</MenuItem>
                  <MenuItem value={'github'}>기타3</MenuItem>
                  <MenuItem value={'githu'}>기타4</MenuItem>
                </Select>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    inputFormat='MM/DD/YYYY'
                    value={value}
                    onChange={handleChange}
                    renderInput={params => <TextField {...params} />}
                  />
                </LocalizationProvider>
                <TextField
                  id='outlined-multiline-static'
                  label='비고'
                  multiline
                  rows={4}
                  defaultValue='없음'
                />

                <Button type='submit'>저장</Button>
                <Typography>저장하게 되면 뱃지를 발행합니다!</Typography>
              </Box>
            </FormControl>
          </form>
          <Button
            type='button'
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
            onClick={closeBtnHandler}
          >
            닫기
          </Button>
        </Box>
      </Box>
    </Box>
  );
}