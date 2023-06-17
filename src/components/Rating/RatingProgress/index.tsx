import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import { Grid } from '@mui/material';
import { RatingInterface } from '../../../models/rating';
import { calculateStarPercentage } from '../../../utils/calculateStarPercentage';

interface ShopInfoProps {
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

const RatingProgress = ({ shopRatings }: ShopInfoProps) => {
  const {
    oneStarPercentage,
    twoStarPercentage,
    threeStarPercentage,
    fourStarPercentage,
    fiveStarPercentage,
  } = calculateStarPercentage(shopRatings);

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
          <BorderLinearProgress
            variant="determinate"
            value={fiveStarPercentage}
          />
          {/* value is percent of rating */}
        </Box>
        <Grid sx={{ fontSize: '16px' }}>{fiveStarPercentage}%</Grid>
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
          <BorderLinearProgress
            variant="determinate"
            value={fourStarPercentage}
          />{' '}
          {/* value is percent of rating */}
        </Box>
        <Grid sx={{ fontSize: '16px' }}>{fourStarPercentage}%</Grid>
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
          <BorderLinearProgress
            variant="determinate"
            value={threeStarPercentage}
          />{' '}
          {/* value is percent of rating */}
        </Box>
        <Grid sx={{ fontSize: '16px' }}>{threeStarPercentage}%</Grid>
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
          <BorderLinearProgress
            variant="determinate"
            value={twoStarPercentage}
          />{' '}
          {/* value is percent of rating */}
        </Box>
        <Grid sx={{ fontSize: '16px' }}>{twoStarPercentage}%</Grid>
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
          <BorderLinearProgress
            variant="determinate"
            value={oneStarPercentage}
          />{' '}
          {/* value is percent of rating */}
        </Box>
        <Grid sx={{ fontSize: '16px' }}>{oneStarPercentage}%</Grid>
      </Box>
    </Grid>
  );
};

export default RatingProgress;
