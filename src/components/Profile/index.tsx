import {
  Avatar,
  Button,
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React from 'react';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const Profile = () => {
  return (
    <Container>
      <Grid
        sx={{
          display: 'flex',
          margin: '50px 100px',
        }}
      >
        <Grid>
          <Avatar
            alt="avatar"
            src="./assets/images/shop.png"
            sx={{ width: 250, height: 250 }}
          />
        </Grid>
        <Grid sx={{ marginLeft: '150px' }}>
          <Grid sx={{ display: 'flex', paddingRight: '100px' }}>
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: '28px',
                marginRight: '30px',
                marginBottom: '20px',
              }}
              variant="h5"
            >
              Mai Dao Tuan Thanh
            </Typography>
            <BorderColorIcon sx={{ fontSize: '32px' }} />
          </Grid>
          <Typography sx={{ borderBottom: '2px solid black' }} />
          <Grid sx={{ marginTop: '20px', fontSize: '20px' }}>
            <Typography
              sx={{ marginTop: '10px', fontSize: '20px', fontWeight: '500' }}
            >
              メール: maithanh0131@gmail.com
            </Typography>
            <Typography
              sx={{ marginTop: '10px', fontSize: '20px', fontWeight: '500' }}
            >
              国名: ベトナム
            </Typography>
            <Typography
              sx={{
                display: 'flex',
                marginTop: '10px',
                fontSize: '20px',
                fontWeight: '500',
              }}
            >
              ステータス:{' '}
              <Grid
                sx={{ marginLeft: '5px', color: '#0480e2', fontWeight: '600' }}
              >
                {' '}
                アクティブ
              </Grid>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Typography variant="h5" sx={{ fontWeight: '600', marginBottom: '30px' }}>
        レビュー
      </Typography>
      <TableContainer>
        <Table aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ fontSize: '20px', fontWeight: '600', color: '#0480e2' }}
                align="center"
              >
                ID
              </TableCell>
              <TableCell
                sx={{ fontSize: '20px', fontWeight: '600', color: '#0480e2' }}
                align="center"
              >
                ショップ
              </TableCell>
              <TableCell
                sx={{ fontSize: '20px', fontWeight: '600', color: '#0480e2' }}
                align="center"
              >
                スター
              </TableCell>
              <TableCell
                sx={{ fontSize: '20px', fontWeight: '600', color: '#0480e2' }}
                align="center"
              >
                コンテンツ
              </TableCell>
              <TableCell
                sx={{ fontSize: '20px', fontWeight: '600', color: '#0480e2' }}
                align="center"
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center" sx={{ width: '10%' }}>
                1
              </TableCell>
              <TableCell align="center" sx={{ width: '20%' }}>
                Viet Cafee
              </TableCell>
              <TableCell align="center" sx={{ width: '20%' }}>
                <StarIcon sx={{ color: '#ff9800', fontSize: '32px' }} />
                <StarIcon sx={{ color: '#ff9800', fontSize: '32px' }} />
                <StarIcon sx={{ color: '#ff9800', fontSize: '32px' }} />
                <StarHalfIcon sx={{ color: '#ff9800', fontSize: '32px' }} />
                <StarOutlineIcon sx={{ color: '#ff9800', fontSize: '32px' }} />
              </TableCell>
              <TableCell align="center">Cafe rat la okela </TableCell>
              <TableCell align="center" sx={{ width: '10%' }}>
                <Button
                  variant="contained"
                  sx={{
                    ':hover': {
                      backgroundColor: '#ed4343',
                    },
                    color: 'black',
                    backgroundColor: '#f45959',
                    fontSize: '12px',
                    fontWeight: '600',
                  }}
                >
                  削除
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Profile;
