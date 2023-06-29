import React, { useContext } from 'react';
import Profile from '../../components/Profile';
import { UserContext } from '../../contexts/UserContext';

const ProfilePage = () => {
  const { user } = useContext(UserContext);

  return <Profile user={user} />;
};

export default ProfilePage;
