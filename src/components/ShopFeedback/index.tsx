import {
  Checkbox,
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
import React from 'react';

import TextareaValidator from './TextareaValidator';
import Rating from '../Rating';
import Comment from './Comment';
import { ShopInterface } from '../../models/shop';
import { RatingInterface } from '../../models/rating';
import StarIcon from '@mui/icons-material/Star';
import { starDatas } from '../../data/Shop/Star';
import { ITEM_HEIGHT, ITEM_PADDING_TOP } from '../../constants/Menu';
import { categoryDatas } from '../../data/Shop/Category';

interface ShopInfoProps {
  shopInfo: ShopInterface;
  shopRatings: RatingInterface[];
  star: string;
  categories: string[];
  handleChangeStar: (event: SelectChangeEvent) => void;
  handleChangeCategories: (event: SelectChangeEvent<string[]>) => void;
}

const ShopFeedback = ({
  shopInfo,
  shopRatings,
  star,
  categories,
  handleChangeStar,
  handleChangeCategories,
}: ShopInfoProps) => {
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
          sx={{
            ':hover': {
              color: '#1976d2',
            },
            margin: '12px 0',
            fontWeight: 'bold',
            fontSize: '20px',
            cursor: 'pointer',
            color: 'black',
          }}
        >
          口コミ
        </Link>
        <Link
          underline="hover"
          sx={{
            ':hover': {
              color: '#1976d2',
            },
            margin: '12px 0',
            fontWeight: 'bold',
            fontSize: '20px',
            cursor: 'pointer',
            color: 'black',
          }}
        >
          フォト
        </Link>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Grid>
            <FormControl sx={{ m: '20px 20px 20px 0', width: 200 }}>
              <InputLabel id="review-input-select-label">５スター</InputLabel>
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
            {/* <Button
              sx={{
                margin: '20px 10px',
                fontSize: '20px',
                padding: '2px 40px',
                color: 'black',
                border: '2px solid',
                fontWeight: 'bold',
                borderRadius: '8px',
              }}
              variant="text"
            >
              ベトナム
            </Button> */}
            <FormControl sx={{ m: '20px 20px 20px 0', width: 200 }}>
              <InputLabel id="categories-input-select-label">
                カテゴリ
              </InputLabel>
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
          </Grid>
          <TextareaValidator shopInfo={shopInfo} />
          {shopRatings.map((shopRating, index) => (
            <Comment key={index} shopInfo={shopInfo} shopRating={shopRating} />
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
    </>
  );
};

export default ShopFeedback;
