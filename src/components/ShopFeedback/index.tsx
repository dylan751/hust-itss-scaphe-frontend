import {
  Checkbox,
  Container,
  FormControl,
  Grid,
  InputLabel,
  Link,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};
import React, { useState } from 'react';

import TextareaValidator from './TextareaValidator';
import Rating from '../Rating';
import Comment from './Comment';
import { ShopInterface } from '../../models/shop';
import { RatingInterface } from '../../models/rating';
import StarIcon from '@mui/icons-material/Star';
import { starDatas } from '../../data/Shop/Star';
import { ITEM_HEIGHT, ITEM_PADDING_TOP } from '../../constants/Menu';
import { countryDatas } from '../../data/Shop/Country';
import { getFilteredShopRatings } from '../../utils/getFilteredShopRatings';
import { PhotoInterface } from '../../models/photo';

export enum ShopTabType {
  REVIEWS = 'reviews',
  PHOTOS = 'photos',
}

interface ShopInfoProps {
  shopInfo: ShopInterface;
  shopRatings: RatingInterface[];
  star: string;
  countries: string[];
  handleChangeStar: (event: SelectChangeEvent) => void;
  handleChangeCountries: (event: SelectChangeEvent<string[]>) => void;
}

const ShopFeedback = ({
  shopInfo,
  shopRatings,
  star,
  countries,
  handleChangeStar,
  handleChangeCountries,
}: ShopInfoProps) => {
  console.log(shopInfo);
  const [currentTab, setCurrentTab] = useState<ShopTabType>(
    ShopTabType.REVIEWS,
  );

  const handleChangeCurrentTab = (value: ShopTabType) => {
    console.log(value);
    setCurrentTab(value);
  };

  // Filter on FE
  const filteredShopRatings = getFilteredShopRatings(
    shopRatings,
    star,
    countries,
  );

  return (
    <>
      <Grid
        sx={{
          marginTop: '36px',
          borderTop: '2px solid #b0adad',
          borderBottom: '2px solid #b0adad',
          display: 'flex',
          justifyContent: 'space-around',
          fontWeight: 'bold',
        }}
      >
        <Link
          underline="hover"
          onClick={() => handleChangeCurrentTab(ShopTabType.REVIEWS)}
          sx={{
            ':hover': {
              color: '#1976d2',
            },
            margin: '12px 0',
            fontWeight: 'bold',
            fontSize: '20px',
            cursor: 'pointer',
            color: `${
              currentTab === ShopTabType.REVIEWS ? '#1976d2' : 'black'
            }`,
          }}
        >
          口コミ
        </Link>
        <Link
          underline="hover"
          onClick={() => handleChangeCurrentTab(ShopTabType.PHOTOS)}
          sx={{
            ':hover': {
              color: '#1976d2',
            },
            margin: '12px 0',
            fontWeight: 'bold',
            fontSize: '20px',
            cursor: 'pointer',
            color: `${currentTab === ShopTabType.PHOTOS ? '#1976d2' : 'black'}`,
          }}
        >
          フォト
        </Link>
      </Grid>
      {currentTab === ShopTabType.REVIEWS && (
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Grid>
              <FormControl sx={{ m: '20px 20px 20px 0', width: 200 }}>
                <InputLabel id="review-input-select-label">スター</InputLabel>
                <Select
                  labelId="review-input-select-label"
                  id="review-input-label"
                  value={star}
                  label="日本人の評価"
                  onChange={handleChangeStar}
                  MenuProps={MenuProps}
                >
                  <MenuItem value="" sx={{ height: '36px', opacity: '0.3' }}>
                    全ての評価
                  </MenuItem>
                  {starDatas.map((star: string) => (
                    <MenuItem key={star} value={star}>
                      {star} <StarIcon sx={{ color: '#ffc200' }} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl sx={{ m: '20px 20px 20px 0', width: 200 }}>
                <InputLabel id="Countries-input-select-label">国</InputLabel>
                <Select
                  labelId="Countries-input-select-label"
                  id="Countries-input"
                  multiple
                  value={countries}
                  label="国"
                  onChange={handleChangeCountries}
                  renderValue={(selected: string[]) => selected.join(', ')}
                  MenuProps={MenuProps}
                >
                  {countryDatas.map((countryData: string) => (
                    <MenuItem key={countryData} value={countryData}>
                      <Checkbox checked={countries.indexOf(countryData) > -1} />
                      <ListItemText primary={countryData} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <TextareaValidator shopInfo={shopInfo} />
            {filteredShopRatings.map((shopRating, index) => (
              <Comment
                key={index}
                shopInfo={shopInfo}
                shopRating={shopRating}
              />
            ))}
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              margin: '36px 0px 10px 70px',
              border: '2px solid #b6b6b6',
              padding: '0 10px 10px 0',
              height: '100%',
            }}
          >
            <Rating shopInfo={shopInfo} shopRatings={shopRatings} />
          </Grid>
        </Grid>
      )}
      {currentTab === ShopTabType.PHOTOS && (
        <>
          {shopInfo.photos.length > 0 ? (
            <Grid container spacing={2} sx={{ margin: '20px auto' }}>
              {shopInfo.photos.map((photo: PhotoInterface, index: number) => (
                <Grid item xs={3} sm={3} md={3} key={index}>
                  <img src={photo.photoUrl} key={index} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Grid
              sx={{
                margin: '20px',
                color: '#f44336',
              }}
            >
              There is no Photo for this Shop
            </Grid>
          )}
        </>
      )}
    </>
  );
};

export default ShopFeedback;
