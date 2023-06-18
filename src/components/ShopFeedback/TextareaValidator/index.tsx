import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import Textarea from '@mui/joy/Textarea';
import { Checkbox, Grid, Rating, Typography } from '@mui/material';
import { useState } from 'react';
import { ShopInterface } from '../../../models/shop';
import { trafficDatas } from '../../../data/Shop/Traffic';
import { CategoryInterface } from '../../../models/category';
import ratingApi from '../../../services/ratingApi';
import { CreateRatingRequestInterface, StarType } from '../../../models/rating';

interface ShopInfoProps {
  shopInfo: ShopInterface;
}

const TextareaValidator = ({ shopInfo }: ShopInfoProps) => {
  const [content, setContent] = useState<string>('');
  const [star, setStar] = useState<StarType>(3);
  const [isTrafficOk, setIsTrafficOk] = useState(false);
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<string[]>([]);

  const shopTraffic = trafficDatas.find(
    (traffic) => traffic.traffic === shopInfo.traffic,
  );

  const handleChangeContent = (event: any) => {
    setContent(event.target.value);
  };

  const handleCheckboxChange = (event: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setIsTrafficOk(event.target.checked);
  };
  const handleClick = (categoryId: string) => {
    if (selectedCategoryIds.includes(categoryId)) {
      setSelectedCategoryIds(
        selectedCategoryIds.filter((item) => item !== categoryId),
      );
    } else {
      setSelectedCategoryIds([...selectedCategoryIds, categoryId]);
    }
  };

  const handleSendComment = async () => {
    const commentData: CreateRatingRequestInterface = {
      shopId: shopInfo._id,
      userId: '647bf2c8a982007b6673d1ca', // TODO: Add user functions (This is just dummy user in DB for now)
      content,
      star,
      categoryIds: selectedCategoryIds,
      isTrafficOk,
    };

    await ratingApi.createRating(commentData);

    // TODO: Toast success message

    // TODO: Reset input fields

    // TODO: Refetch shopInfo after create success
  };

  return (
    <FormControl>
      <Textarea
        placeholder="Type something here…"
        minRows={3}
        value={content}
        onChange={(e) => handleChangeContent(e)}
        startDecorator={
          <Box
            sx={{
              display: 'flex',
              borderBottom: '1px solid',
              borderColor: 'divider',
              flex: 'auto',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                '& > legend': { mt: 2 },
              }}
            >
              <Rating
                name="simple-controlled"
                value={star}
                onChange={(event, newValue) => {
                  setStar(newValue as StarType);
                }}
              />
            </Box>
            <Button
              sx={{
                ':hover': {
                  backgroundColor: '#ffffff',
                },
                border: '2px solid',
                fontWeight: 700,
                padding: '0 15px',
                fontSize: '20px',
                color: '#1976d2',
                bgcolor: 'white',
                marginBottom: '10px',
              }}
            >
              <Typography
                sx={{
                  bgcolor: `${shopTraffic?.color}`,
                  width: '20px',
                  height: '20px',
                  borderRadius: '100%',
                  marginRight: '12px',
                }}
              ></Typography>
              混雑状況：{shopTraffic?.label}
              <Checkbox
                sx={{
                  width: '30px',
                  height: '30px',
                  marginLeft: '10px',
                }}
                checked={isTrafficOk}
                onChange={handleCheckboxChange}
              />
            </Button>
          </Box>
        }
        endDecorator={
          <Box
            sx={{
              display: 'flex',
              borderTop: '1px solid',
              borderColor: 'divider',
              flex: 'auto',
            }}
          >
            <Grid>
              {shopInfo.categories.map((category: CategoryInterface) => (
                <Button
                  onClick={() => handleClick(category._id)}
                  key={category.category}
                  sx={{
                    ':hover': { backgroundColor: '#b0b0b0' },
                    margin: '10px 5px',
                    fontSize: '16px',
                    padding: '2px 5px',
                    color: 'black',
                    border: '2px solid black',
                    fontWeight: 'bold',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    backgroundColor: selectedCategoryIds.includes(category._id)
                      ? '#b0b0b0'
                      : '#f4f4f8',
                  }}
                >
                  {category.category}
                </Button>
              ))}
            </Grid>

            <Box
              sx={{
                display: 'flex',
                flex: 'auto',
                height: '30px',
              }}
            >
              <Button
                sx={{ ml: 'auto', marginTop: '10px' }}
                onClick={handleSendComment}
                disabled={!content}
              >
                Send
              </Button>
            </Box>
          </Box>
        }
        sx={{
          fontWeight: '400',
          width: '100%',
        }}
      />
    </FormControl>
  );
};
export default TextareaValidator;
