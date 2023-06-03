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
import { ShopInterface } from '../../../models/Shop';

interface ShopListItemProps {
  shop: ShopInterface;
}

const ShopListItem = ({ shop }: ShopListItemProps) => {
  return (
    <Card
      sx={{ width: '21%', border: '1px solid ', float: 'left', margin: '22px' }}
    >
      {' '}
      <CardMedia
        component="img"
        image="./assets/images/shop.png"
        alt="CafeShop"
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
            4.5
          </Typography>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarHalfIcon />
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
              bgcolor: 'green',
              width: '20px',
              height: '20px',
              borderRadius: '100%',
              marginRight: '12px',
            }}
          ></Typography>
          混雑状況：中
        </Button>
      </CardActions>
    </Card>
  );
};

export default ShopListItem;
