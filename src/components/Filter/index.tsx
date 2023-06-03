import {
  Button,
  Container,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { cityData } from '../../data/city';
import { ITEM_HEIGHT, ITEM_PADDING_TOP } from '../../constraints/Menu';

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

const Filter = () => {
  const [cityName, setCityName] = React.useState('');

  const handleChangeCity = (event: SelectChangeEvent) => {
    setCityName(event.target.value as string);
  };
  return (
    <Grid
      sx={{
        color: 'black',
        marginLeft: '20px',
        fontWeight: 800,
        fontSize: '25px',
      }}
    >
      <Container sx={{ maxWidth: '70%' }}>
        <Grid
          sx={{
            margin: '0 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <TextField
            id="search"
            type="search"
            label="Search"
            sx={{ width: '70%', mt: '30px', mr: '20px' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="outlined"
            sx={{ mt: '30px', height: '50px', width: '150px' }}
          >
            ソート: 混雑状況
          </Button>
        </Grid>
        <Grid
          sx={{
            margin: '0 20px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <FormControl sx={{ m: '20px 20px 20px 0', width: 200 }}>
            <InputLabel id="city-input-select-label">都市</InputLabel>
            <Select
              labelId="city-input-select-label"
              id="city-input-select"
              value={cityName}
              label="都市"
              onChange={handleChangeCity}
              MenuProps={MenuProps}
            >
              {cityData.map((nameCity: string) => (
                <MenuItem key={nameCity} value={nameCity}>
                  {nameCity}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: '20px 20px 20px 0', width: 200 }}>
            <InputLabel id="district-input-select-label">地区</InputLabel>
            <Select
              labelId="district-input-select-label"
              id="district-input"
              value={cityName}
              label="地区"
              onChange={handleChangeCity}
              MenuProps={MenuProps}
            >
              {cityData.map((nameCity: string) => (
                <MenuItem key={nameCity} value={nameCity}>
                  {nameCity}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: '20px 20px 20px 0', width: 200 }}>
            <InputLabel id="review-input-select-label">日本人の評価</InputLabel>
            <Select
              labelId="review-input-select-label"
              id="review-input-label"
              value={cityName}
              label="日本人の評価"
              onChange={handleChangeCity}
              MenuProps={MenuProps}
            >
              {cityData.map((nameCity: string) => (
                <MenuItem key={nameCity} value={nameCity}>
                  {nameCity}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <CalendarMonthSharpIcon
            sx={{ fontSize: '40px', marginLeft: 'auto' }}
          />
        </Grid>
      </Container>
    </Grid>
  );
};

export default Filter;
