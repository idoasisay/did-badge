import * as React from 'react';
import { Box } from '@mui/system';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from '@mui/material';

export default function Filter() {
  const [category, setcategory] = React.useState('name');
  const [formInput, setFormInput] = React.useState({ category: 'name' });

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
    <React.Fragment>
      <Box sx={{ minWidth: 120 }}>
        <form onSubmit={submitHandle}>
          <FormControl
            sx={{ m: 1, minWidth: 120, display: 'flex' }}
            size='small'
          >
            <FormLabel id='demo-row-radio-buttons-group-label'>
              부트캠프
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
                label='AIB'
              />
              <FormControlLabel
                value='BEB'
                control={<Radio size='small' />}
                label='BEB'
              />
              <FormControlLabel
                value='DOB'
                control={<Radio size='small' />}
                label='DOB'
              />
              <FormControlLabel
                value='SEB'
                control={<Radio size='small' />}
                label='SEB'
              />
              <FormControlLabel
                value='PMB'
                control={<Radio size='small' />}
                label='PMB'
              />
            </RadioGroup>
            <Box>
              <Select
                labelId='demo-select-small'
                id='demo-select-small'
                value={category}
                onChange={handleCategory}
              >
                <MenuItem value={'name'}>이름</MenuItem>
                <MenuItem value={'email'}>이메일</MenuItem>
                <MenuItem value={'githubID'}>Github ID</MenuItem>
              </Select>
              <TextField
                id='outlined-size-small'
                size='small'
                name='name'
                onChange={handleSumbit}
              />
              <Button type='submit'>검색</Button>
            </Box>
          </FormControl>
        </form>
      </Box>
    </React.Fragment>
  );
}
