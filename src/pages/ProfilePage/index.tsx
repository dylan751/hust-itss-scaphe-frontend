import React, { useContext, useEffect, useState } from 'react';
import Profile from '../../components/Profile';
import { UserContext } from '../../contexts/UserContext';
import { RatingInterface } from '../../models/rating';
import ratingApi from '../../services/ratingApi';

const ProfilePage = () => {
  const { user } = useContext(UserContext);
  const [, setIsLoading] = useState<boolean>(true);
  const [userRatings, setUserRatings] = useState<RatingInterface[]>([]);

  const getUserRatings = async () => {
    setIsLoading(true);
    const res = await ratingApi.getRatingByUserId(user._id);
    const userRatingDatas: RatingInterface[] = res.data.data.ratings;
    setUserRatings(userRatingDatas);
    setIsLoading(false);
  };

  useEffect(() => {
    getUserRatings();
  }, []);

  return <Profile user={user} userRatings={userRatings} />;
};

export default ProfilePage;
