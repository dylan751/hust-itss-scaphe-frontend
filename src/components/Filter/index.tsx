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
import React, { ChangeEvent, useEffect, useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import { ITEM_HEIGHT, ITEM_PADDING_TOP } from '../../constants/Menu';
import cityDistrictApi from '../../services/cityDistrictApi';
import { starDatas } from '../../data/Star';

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

interface FilterProps {
  searchTerm: string;
  cityName: string;
  districtName: string;
  star: string;
  handleChangeSearchTerm: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangeCity: (event: SelectChangeEvent) => void;
  handleChangeDistrict: (event: SelectChangeEvent) => void;
  handleChangeStar: (event: SelectChangeEvent) => void;
  handleClearFilter: () => void;
}

const Filter = ({
  searchTerm,
  cityName,
  districtName,
  star,
  handleChangeSearchTerm,
  handleChangeCity,
  handleChangeDistrict,
  handleChangeStar,
  handleClearFilter,
}: FilterProps) => {
  const [cityDistricts, setCityDistricts] = useState<any[]>([]);

  const getAllCityDistricts = async () => {
    const res = await cityDistrictApi.getListCityDistricts();
    const allCityDistricts = res.data;
    setCityDistricts(allCityDistricts);
  };

  useEffect(() => {
    getAllCityDistricts();
  }, []);

  return (
    <Container>
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
          value={searchTerm}
          onChange={handleChangeSearchTerm}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
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
            {cityDistricts.map((cityDistrict: any) => (
              <MenuItem
                key={cityDistrict.codename}
                value={cityDistrict.codename}
              >
                {cityDistrict.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: '20px 20px 20px 0', width: 200 }}>
          <InputLabel id="district-input-select-label">地区</InputLabel>
          <Select
            labelId="district-input-select-label"
            id="district-input"
            value={districtName}
            label="地区"
            onChange={handleChangeDistrict}
            MenuProps={MenuProps}
          >
            {cityDistricts.map(
              (cityDistrict: any) =>
                cityDistrict.codename === cityName &&
                cityDistrict.districts.map((district: any) => (
                  <MenuItem key={district.codename} value={district.codename}>
                    {district.name}
                  </MenuItem>
                )),
            )}
          </Select>
        </FormControl>
        <FormControl sx={{ m: '20px 20px 20px 0', width: 200 }}>
          <InputLabel id="review-input-select-label">日本人の評価</InputLabel>
          <Select
            labelId="review-input-select-label"
            id="review-input-label"
            value={star}
            label="日本人の評価"
            onChange={handleChangeStar}
            MenuProps={MenuProps}
          >
            {starDatas.map((star: string) => (
              <MenuItem key={star} value={star}>
                {star} <StarIcon />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          variant="outlined"
          sx={{ height: '55px', width: '150px' }}
          onClick={handleClearFilter}
        >
          Clear Filter
        </Button>
        <CalendarMonthSharpIcon sx={{ fontSize: '40px', marginLeft: 'auto' }} />
      </Grid>
    </Container>
  );
};

export default Filter;
