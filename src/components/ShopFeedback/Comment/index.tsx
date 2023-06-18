import React from 'react';
import StarIcon from '@mui/icons-material/Star';

import { Avatar, Button, Grid, Paper } from '@mui/material';
import { Typography } from '@mui/joy';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { RatingInterface } from '../../../models/rating';
import { format } from 'date-fns';
import { ShopInterface } from '../../../models/shop';
import { trafficDatas } from '../../../data/Shop/Traffic';
const imgLink =
  'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260';

export interface CommentProps {
  shopRating: RatingInterface;
  shopInfo: ShopInterface;
}

const Comment = ({ shopInfo, shopRating }: CommentProps) => {
  const shopTraffic = trafficDatas.find(
    (traffic) => traffic.traffic === shopInfo.traffic,
  );

  return (
    <>
      <Paper
        style={{
          padding: '10px 15px',
          marginTop: '20px',
          border: '1px solid #c5c5c5',
        }}
      >
        <Grid container wrap="nowrap" spacing={2}>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <Grid
              sx={{
                borderBottom: '1px solid #b6b6b6',
                display: 'flex',
                paddingBottom: '10px',
              }}
            >
              <Grid sx={{ margin: 'auto 0px' }}>
                <Avatar
                  alt="avatar"
                  sx={{
                    marginRight: '15px',
                  }}
                  src={shopRating.user[0].avatar || imgLink}
                />
              </Grid>

              <Grid>
                <Typography
                  sx={{
                    margin: 0,
                    textAlign: 'left',
                    fontSize: '22px',
                    fontWeight: 700,
                  }}
                  gutterBottom
                >
                  {shopRating.user[0].name}
                </Typography>
                <Grid sx={{ display: 'flex' }}>
                  <Typography
                    sx={{
                      margin: '0 15px 0 0',
                      textAlign: 'left',
                      fontSize: '20px',
                      fontWeight: 600,
                    }}
                  >
                    {format(new Date(shopRating.createdAt), 'dd/LL/yyyy')}
                  </Typography>
                  <Typography
                    sx={{
                      margin: '0 15px 0 0',
                      textAlign: 'left',
                      fontSize: '20px',
                      fontWeight: 600,
                    }}
                  >
                    {format(new Date(shopRating.createdAt), 'HH:mm')}
                  </Typography>
                  <Typography
                    sx={{
                      margin: '0 15px 0 0',
                      textAlign: 'left',
                      fontSize: '20px',
                      fontWeight: 600,
                    }}
                  >
                    混雑状況:{shopTraffic?.label}
                  </Typography>
                  {shopRating.isTrafficOk && (
                    <CheckCircleIcon
                      sx={{
                        margin: 'auto',
                        fontSize: '30px',
                        color: 'green',
                      }}
                    />
                  )}
                </Grid>
              </Grid>
              <Grid sx={{ margin: 'auto' }}>
                {Array(shopRating.star)
                  .fill(0)
                  .map((star, index) => (
                    <StarIcon sx={{ color: '#ff9800' }} key={index} />
                  ))}
              </Grid>
            </Grid>

            <Typography
              sx={{
                textAlign: 'left',
                fontWeight: 400,
                fontSize: '20px',
                padding: '20px 20px',
              }}
            >
              {shopRating.content}
            </Typography>
            <Grid sx={{ marginLeft: '15px' }}>
              {shopRating.categories.map((category, index) => (
                <Button
                  key={index}
                  sx={{
                    ':hover': {
                      cursor: 'default',
                      backgroundColor: '#b0b0b0',
                    },
                    margin: '10px 5px',
                    fontSize: '16px',
                    padding: '0px 5px',
                    color: 'black',
                    border: '2px solid black',
                    fontWeight: 'bold',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    backgroundColor: '#b0b0b0',
                  }}
                >
                  {category.category}
                </Button>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Comment;
