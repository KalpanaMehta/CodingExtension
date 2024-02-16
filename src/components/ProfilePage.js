import React, { useEffect, useState } from 'react';
import ProfileForm from './ProfileForm';
import ProfileDetails from './ProfileDetails';
import axios from 'axios';

const ProfilePage = () => {
  const username = "bwfdodolo";
const API = `https://leetcode-api-faisalshohag.vercel.app/${username}`;

  
  const fetchApiData = async (url) => {
    const options = {
      method: 'GET',
      url,
    };

    try {
      const response = await axios.request(options);
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    fetchApiData(API);
  }, []);

  return (
    <div>
      <h1>LeetCode Profile</h1>
      {/* Other components and UI elements */}
    </div>
  );
};

export default ProfilePage;
