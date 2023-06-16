import React from 'react';
import StarIcon from '@mui/icons-material/Star';

import { Avatar, Button, Grid, Paper } from '@mui/material';
import { Typography } from '@mui/joy';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const imgLink =
  'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260';

const Comment = () => {
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
                  src={imgLink}
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
                  Mai Dao Tuan Thanh
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
                    8/5/2023
                  </Typography>
                  <Typography
                    sx={{
                      margin: '0 15px 0 0',
                      textAlign: 'left',
                      fontSize: '20px',
                      fontWeight: 600,
                    }}
                  >
                    18:00
                  </Typography>
                  <Typography
                    sx={{
                      margin: '0 15px 0 0',
                      textAlign: 'left',
                      fontSize: '20px',
                      fontWeight: 600,
                    }}
                  >
                    混雑状況:中
                  </Typography>
                  <CheckCircleIcon
                    sx={{
                      margin: 'auto',
                      fontSize: '30px',
                      color: 'green',
                    }}
                  />
                </Grid>
              </Grid>
              <Grid sx={{ margin: 'auto' }}>
                <StarIcon sx={{ color: '#ff9800' }} />
                <StarIcon sx={{ color: '#ff9800' }} />
                <StarIcon sx={{ color: '#ff9800' }} />
                <StarIcon sx={{ color: '#ff9800' }} />
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
              The quick brown fox jumps over the lazy dog is an English-language
              pangram—a sentence that contains all of the letters of the
              alphabet. It has been used to test typewriters and computer
              keyboards, as well as for various other purposes. The origin of
              the phrase is u
            </Typography>
            <Grid sx={{ marginLeft: '15px' }}>
              <Button
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
                英語OK
              </Button>
              <Button
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
                  backgroundColor: '#b0b0b0',
                }}
              >
                個室
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Comment;
