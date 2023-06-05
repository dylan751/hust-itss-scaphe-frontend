import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { ShopInterface } from '../../../models/shop';
import { calculateAvgStar } from '../../../utils/calculateAvgStar';
import { trafficDatas } from '../../../data/Shop/Traffic';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
interface ShopListItemProps {
  shop: ShopInterface;
}

const ShopListItem = ({ shop }: ShopListItemProps) => {
  const totalStars = 5;

  const avgStar = calculateAvgStar(shop.ratings);
  let fullStars = Math.floor(avgStar);
  const decimalPart = avgStar - fullStars;
  let halfStar = false;

  if (decimalPart > 0 && decimalPart < 1) {
    halfStar = true;
  } else if (decimalPart >= 0.75) {
    halfStar = true;
    fullStars++; // Round up to the next star
  }
  const emptyStars = totalStars - (fullStars + (halfStar ? 1 : 0));

  const shopTraffic = trafficDatas.find(
    (traffic) => traffic.traffic === shop.traffic,
  );

  return (
    <Card
      sx={{ width: '21%', border: '1px solid ', float: 'left', margin: '22px' }}
    >
      <CardMedia
        component="img"
        image={shop.avatar}
        alt="CafeShop"
        sx={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
          objectPosition: '80% 100%',
        }}
      />
      <CardContent>
        <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
          {shop.name}
        </Typography>
        <Typography sx={{ mb: 1.5, fontWeight: 600 }} color="text.secondary">
          英語OK/個室/…
        </Typography>

        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            sx={{ fontSize: '20px', fontWeight: 700, marginRight: '10px' }}
          >
            {avgStar}
          </Typography>
          {[...new Array(fullStars)].map((arr, index) => (
            <StarIcon sx={{ color: '#ffc200' }} key={index} />
          ))}
          {halfStar && <StarHalfIcon />}
          {[...new Array(emptyStars)].map((arr, index) => (
            <StarOutlineIcon key={index} />
          ))}
        </Container>
      </CardContent>
      <CardActions>
        <Button
          sx={{
            border: '2px solid',
            fontWeight: 700,
            padding: '0 15px',
            margin: 'auto',
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
      </CardActions>
    </Card>
  );
};

export default ShopListItem;
