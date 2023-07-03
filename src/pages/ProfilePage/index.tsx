import React, { useContext, useEffect, useState } from 'react';
import Profile from '../../components/Profile';
import { UserContext } from '../../contexts/UserContext';
import { RatingInterface } from '../../models/rating';
import ratingApi from '../../services/ratingApi';
import { toast } from 'react-toastify';

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

  const handleDeleteRating = async (ratingId: string) => {
    try {
      await ratingApi.deleteRating(ratingId);
    } catch (error) {
      toast.error('削除が失敗しました！');
      console.log(error);
    }

    setUserRatings(userRatings.filter((rating) => rating._id !== ratingId));
    toast.success('削除できました！');
  };

  useEffect(() => {
    getUserRatings();
  }, [userRatings]);

  return (
    <Profile
      user={user}
      userRatings={userRatings}
      handleDeleteRating={handleDeleteRating}
    />
  );
};

export default ProfilePage;
