import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import { Grid } from '@mui/material';
import { ShopInterface } from '../../../models/shop';
import { RatingInterface } from '../../../models/rating';

interface ShopInfoProps {
  shopInfo: ShopInterface;
  shopRatings: RatingInterface[];
}
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 25,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#ff9800' : '#bfbfbf',
  },
}));

// Inspired by the former Facebook spinners.

const RatingProgress = ({ shopInfo, shopRatings }: ShopInfoProps) => {
  return (
    <Grid sx={{ borderBottom: '1px solid #b0adad' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginTop: '30px',
        }}
      >
        <Grid sx={{ fontSize: '16px' }}>5スター</Grid>
        <Box
          sx={{
            width: '60%',
            border: '1px solid #a2a0a0',
            borderRadius: '5px',
          }}
        >
          <BorderLinearProgress variant="determinate" value={72} />{' '}
          {/* value is percent of rating */}
        </Box>
        <Grid sx={{ fontSize: '16px' }}>72%</Grid>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginTop: '15px',
        }}
      >
        <Grid sx={{ fontSize: '16px' }}>4スター</Grid>
        <Box
          sx={{
            width: '60%',
            border: '1px solid #a2a0a0',
            borderRadius: '5px',
          }}
        >
          <BorderLinearProgress variant="determinate" value={14} />{' '}
          {/* value is percent of rating */}
        </Box>
        <Grid sx={{ fontSize: '16px' }}>14%</Grid>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginTop: '15px',
        }}
      >
        <Grid sx={{ fontSize: '16px' }}>3スター</Grid>
        <Box
          sx={{
            width: '60%',
            border: '1px solid #a2a0a0',
            borderRadius: '5px',
          }}
        >
          <BorderLinearProgress variant="determinate" value={6} />{' '}
          {/* value is percent of rating */}
        </Box>
        <Grid sx={{ fontSize: '16px' }}>6%</Grid>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginTop: '15px',
        }}
      >
        <Grid sx={{ fontSize: '16px' }}>2スター</Grid>
        <Box
          sx={{
            width: '60%',
            border: '1px solid #a2a0a0',
            borderRadius: '5px',
          }}
        >
          <BorderLinearProgress variant="determinate" value={5} />{' '}
          {/* value is percent of rating */}
        </Box>
        <Grid sx={{ fontSize: '16px' }}>5%</Grid>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginTop: '15px',
          marginBottom: '30px',
        }}
      >
        <Grid sx={{ fontSize: '16px' }}>1スター</Grid>
        <Box
          sx={{
            width: '60%',
            border: '1px solid #a2a0a0',
            borderRadius: '5px',
          }}
        >
          <BorderLinearProgress variant="determinate" value={3} />{' '}
          {/* value is percent of rating */}
        </Box>
        <Grid sx={{ fontSize: '16px' }}>3%</Grid>
      </Box>
    </Grid>
  );
};

export default RatingProgress;
