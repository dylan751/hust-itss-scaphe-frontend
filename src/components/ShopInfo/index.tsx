import { Button, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { ShopInterface } from '../../models/shop';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { trafficDatas } from '../../data/Shop/Traffic';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

interface ShopInfoProps {
  shopInfo: ShopInterface;
}

const ShopInfo = ({ shopInfo }: ShopInfoProps) => {
  const shopTraffic = trafficDatas.find(
    (traffic) => traffic.traffic === shopInfo.traffic,
  );

  return (
    <Container sx={{ margin: '28px 28px' }}>
      <Typography variant="h4" sx={{ fontWeight: 700 }}>
        {shopInfo.name}
      </Typography>
      <Grid>
        {shopInfo.categories.map((category) => (
          <Button
            sx={{
              ':hover': {
                backgroundColor: '#c6db39',
              },
              margin: '20px 10px',
              fontSize: '20px',
              padding: '2px 35px',
              backgroundColor: '#aabe21',
              color: 'black',
              border: '1px solid black',
              fontWeight: 'bold',
              borderRadius: '8px',
            }}
            variant="contained"
            key={category.category}
          >
            {category.category}
          </Button>
        ))}
      </Grid>
      <Container sx={{ marginLeft: '-24px', display: 'flex' }}>
        <Grid
          sx={{
            marginRight: '24px',
          }}
        >
          <CardMedia
            component="img"
            image={shopInfo.avatar}
            alt="CafeShop"
            sx={{
              width: '300px',
              height: '300px',
              objectFit: 'cover',
            }}
          />
        </Grid>
        <Grid
          sx={{
            marginRight: '24px',
          }}
        >
          <Typography variant="h6">
            <CallIcon sx={{ color: 'red', margin: '10px 12px' }} />
            {shopInfo.phone}
          </Typography>
          <Typography variant="h6">
            <LocationOnIcon sx={{ color: 'red', margin: '10px 12px' }} />
            {/* Tương Mai, Hoàng Mai, Hà Nội */}
            {`${shopInfo.district}, ${shopInfo.city}`}
          </Typography>
          <Typography variant="h6">
            <CalendarMonthIcon sx={{ color: 'red', margin: '10px 12px' }} />
            10:00 ~ 16:00 Thứ 2, 12/6/2023
          </Typography>
        </Grid>
        <Grid sx={{ marginLeft: '12px' }}>
          ステータス：
          <Typography>
            <Button
              sx={{
                border: '2px solid',
                fontWeight: 700,
                padding: '0 15px',
                margin: '10px 0px',
                fontSize: '20px',
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
            </Button>
          </Typography>
        </Grid>
      </Container>
    </Container>
  );
};

export default ShopInfo;
