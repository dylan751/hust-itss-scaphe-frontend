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
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { UserInterface } from '../../models/user';
import { RatingInterface } from '../../models/rating';
import { EditProfile } from '../EditProfile';

export interface ProfileProps {
  user: UserInterface;
  userRatings: RatingInterface[];
  handleDeleteRating: (ratingId: string) => void;
}

const Profile = ({ user, userRatings, handleDeleteRating }: ProfileProps) => {
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
            src={user.avatar}
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
              {user.name}
            </Typography>
            <EditProfile user={user} />
          </Grid>
          <Typography sx={{ borderBottom: '2px solid black' }} />
          <Grid sx={{ marginTop: '20px', fontSize: '20px' }}>
            <Typography
              sx={{ marginTop: '10px', fontSize: '20px', fontWeight: '500' }}
            >
              メール: {user.email}
            </Typography>
            <Typography
              sx={{ marginTop: '10px', fontSize: '20px', fontWeight: '500' }}
            >
              国籍: {user.country}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Typography variant="h5" sx={{ fontWeight: '600', marginBottom: '30px' }}>
        レビュー
      </Typography>
      <TableContainer>
        <Table aria-label="simple table" stickyHeader>
          {userRatings.length === 0 ? (
            <Grid
              sx={{
                margin: '20px 0',
                color: '#f44336',
              }}
            >
              レビューがありません
            </Grid>
          ) : (
            <>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: '#0480e2',
                    }}
                    align="center"
                  >
                    ID
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: '#0480e2',
                    }}
                    align="center"
                  >
                    ショップ
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: '#0480e2',
                    }}
                    align="center"
                  >
                    スター
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: '#0480e2',
                    }}
                    align="center"
                  >
                    コンテンツ
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: '#0480e2',
                    }}
                    align="center"
                  ></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userRatings.map((userRating, index) => (
                  <TableRow key={index}>
                    <TableCell align="center" sx={{ width: '10%' }}>
                      {index + 1}
                    </TableCell>
                    <TableCell align="center" sx={{ width: '20%' }}>
                      {userRating.shop[0].name}
                    </TableCell>
                    <TableCell align="center" sx={{ width: '20%' }}>
                      {Math.floor(userRating.star)}
                      {[...new Array(userRating.star)].map((arr, index) => (
                        <StarIcon
                          sx={{ color: '#ff9800', fontSize: '32px' }}
                          key={index}
                        />
                      ))}
                      {[...new Array(5 - userRating.star)].map((arr, index) => (
                        <StarOutlineIcon
                          sx={{ color: '#ff9800', fontSize: '32px' }}
                          key={index}
                        />
                      ))}
                    </TableCell>
                    <TableCell align="center"> {userRating.content}</TableCell>
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
                        onClick={() => handleDeleteRating(userRating._id)}
                      >
                        削除
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </>
          )}
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Profile;
