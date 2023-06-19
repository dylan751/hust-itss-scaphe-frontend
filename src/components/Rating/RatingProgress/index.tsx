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
    <Grid sx={{ borderBottom: '1px solid #b0adad', marginLeft: '10px' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginTop: '30px',
        }}
      >
        <Grid item sx={{ fontSize: '16px' }} xs={2}>
          5スター
        </Grid>
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
        <Grid item sx={{ fontSize: '16px' }} xs={2}>
          {fiveStarPercentage}%
        </Grid>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginTop: '30px',
        }}
      >
        <Grid item sx={{ fontSize: '16px' }} xs={2}>
          4スター
        </Grid>
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
          />
          {/* value is percent of rating */}
        </Box>
        <Grid item sx={{ fontSize: '16px' }} xs={2}>
          {fourStarPercentage}%
        </Grid>
      </Box>{' '}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginTop: '30px',
        }}
      >
        <Grid item sx={{ fontSize: '16px' }} xs={2}>
          3スター
        </Grid>
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
          />
          {/* value is percent of rating */}
        </Box>
        <Grid item sx={{ fontSize: '16px' }} xs={2}>
          {threeStarPercentage}%
        </Grid>
      </Box>{' '}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginTop: '30px',
        }}
      >
        <Grid item sx={{ fontSize: '16px' }} xs={2}>
          2スター
        </Grid>
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
          />
          {/* value is percent of rating */}
        </Box>
        <Grid item sx={{ fontSize: '16px' }} xs={2}>
          {twoStarPercentage}%
        </Grid>
      </Box>{' '}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginTop: '30px',
          marginBottom: '30px',
        }}
      >
        <Grid item sx={{ fontSize: '16px' }} xs={2}>
          1スター
        </Grid>
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
          />
          {/* value is percent of rating */}
        </Box>
        <Grid item sx={{ fontSize: '16px' }} xs={2}>
          {oneStarPercentage}%
        </Grid>
      </Box>
    </Grid>
  );
};

export default RatingProgress;
