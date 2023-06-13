import {
  Button,
  Checkbox,
  Container,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { ChangeEvent, useEffect, useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import { ITEM_HEIGHT, ITEM_PADDING_TOP } from '../../constants/Menu';
import cityDistrictApi from '../../services/cityDistrictApi';
import { starDatas } from '../../data/Shop/Star';
import { categoryDatas } from '../../data/Shop/Category';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

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
  categories: string[];
  selectedDateTime: Date | null;
  handleChangeSearchTerm: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangeCity: (event: SelectChangeEvent) => void;
  handleChangeDistrict: (event: SelectChangeEvent) => void;
  handleChangeStar: (event: SelectChangeEvent) => void;
  handleChangeCategories: (event: SelectChangeEvent<string[]>) => void;
  handleSort: () => void;
  handleChangeSelectedDateTime: (value: Date | null) => void;
}

const Filter = ({
  searchTerm,
  cityName,
  districtName,
  star,
  categories,
  selectedDateTime,
  handleChangeSearchTerm,
  handleChangeCity,
  handleChangeDistrict,
  handleChangeStar,
  handleChangeCategories,
  handleSort,
  handleChangeSelectedDateTime,
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
          label="検索"
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
          onClick={handleSort}
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
            <MenuItem value="" sx={{ height: '36px', opacity: '0.3' }}>
              リセット
            </MenuItem>
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
            disabled={!cityName}
            sx={{ '.Mui-disabled': { cursor: 'not-allowed' } }}
          >
            <MenuItem value="" sx={{ height: '36px', opacity: '0.3' }}>
              リセット
            </MenuItem>
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
            <MenuItem value="" sx={{ height: '36px', opacity: '0.3' }}>
              リセット
            </MenuItem>
            {starDatas.map((star: string) => (
              <MenuItem key={star} value={star}>
                {star} <StarIcon sx={{ color: '#ffc200' }} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: '20px 20px 20px 0', width: 200 }}>
          <InputLabel id="categories-input-select-label">カテゴリ</InputLabel>
          <Select
            labelId="categories-input-select-label"
            id="categories-input"
            multiple
            value={categories}
            label="カテゴリ"
            onChange={handleChangeCategories}
            renderValue={(selected: string[]) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {categoryDatas.map((categoryData: string) => (
              <MenuItem key={categoryData} value={categoryData}>
                <Checkbox checked={categories.indexOf(categoryData) > -1} />
                <ListItemText primary={categoryData} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <DateTimePicker
          label="営業時間"
          value={selectedDateTime}
          onChange={(newDateTime) => handleChangeSelectedDateTime(newDateTime)}
          slotProps={{
            actionBar: { actions: ['clear'] }, // Add clear dateTime value button to the calendar
          }}
        />
      </Grid>
    </Container>
  );
};

export default Filter;
