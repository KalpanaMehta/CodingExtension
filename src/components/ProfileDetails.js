import React from 'react';

const ProfileDetails = ({ profileData }) => {
  return (
    <div>
      <h2>LeetCode Profile</h2>
      <p>Username: {profileData.username}</p>
      {/* Display other profile data as needed */}
    </div>
  );
};

export default ProfileDetails;
