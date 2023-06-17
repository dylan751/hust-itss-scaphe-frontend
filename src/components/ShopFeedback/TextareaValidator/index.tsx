import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import Textarea from '@mui/joy/Textarea';
import { Checkbox, Grid, Rating, Typography } from '@mui/material';
import { categoryDatas } from '../../../data/Shop/Category';
import { useState } from 'react';
import { ShopInterface } from '../../../models/shop';
import { trafficDatas } from '../../../data/Shop/Traffic';

interface ShopInfoProps {
  shopInfo: ShopInterface;
}

const TextareaValidator = ({ shopInfo }: ShopInfoProps) => {
  const [value, setValue] = useState<number | null>(5);
  const [isChecked, setIsChecked] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const shopTraffic = trafficDatas.find(
    (traffic) => traffic.traffic === shopInfo.traffic,
  );

  const handleCheckboxChange = (event: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setIsChecked(event.target.checked);
    console.log(isChecked);
  };
  const handleClick = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category),
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <FormControl>
      <Textarea
        placeholder="Type something here…"
        minRows={3}
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
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
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
                checked={isChecked}
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
              {categoryDatas.map((category) => (
                <Button
                  onClick={() => handleClick(category)}
                  key={category}
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
                    backgroundColor: selectedCategories.includes(category)
                      ? '#b0b0b0'
                      : '#f4f4f8',
                  }}
                >
                  {category}
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
              <Button sx={{ ml: 'auto', marginTop: '10px' }}>Send</Button>
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
