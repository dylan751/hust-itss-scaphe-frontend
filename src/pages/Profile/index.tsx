import React, { useContext, useEffect } from 'react';
import Profile from '../../components/Profile';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

const ProfilePage = () => {
  const { user } = useContext(UserContext);

  return <Profile user={user} />;
};

export default ProfilePage;
