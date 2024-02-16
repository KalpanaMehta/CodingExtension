import React, { useState } from 'react';
import ProfileForm from './ProfileForm';
import ProfileDetails from './ProfileDetails';
import axios from 'axios';

const ProfilePage = () => {
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);

  const fetchProfile = async (username) => {
        const axios = require('axios');

    const options = {
    method: 'GET',
    url: 'https://leetcode-api.p.rapidapi.com/user/bharathkalyans',
    headers: {
        'X-RapidAPI-Key': 'ce8b796ab1msh95f6a19da59c0e6p1675d9jsn3e989aab6202',
        'X-RapidAPI-Host': 'leetcode-api.p.rapidapi.com'
    }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
    // try {
    //   // Make API call to fetch user profile data
    //   const response = await axios.get(`https://your-api-endpoint.com/profile/${username}`);
    //   // Set fetched profile data
    //   setProfileData(response.data);
    //   setError(null); // Reset error state
    // } catch (error) {
    //   console.error('Error fetching data from LeetCode API:', error);
    //   setError('Error fetching data. Please try again.');
    //   setProfileData(null); // Clear profile data on error
    // }
  };

  return (
    <div>
      <h1>LeetCode Profile</h1>
      <ProfileForm onFetchProfile={fetchProfile} />
      {error && <p>{error}</p>}
      {profileData && <ProfileDetails profileData={profileData} />}
    </div>
  );
};

export default ProfilePage;



// import React, { useState } from 'react';
// import ProfileForm from './ProfileForm';
// import ProfileDetails from './ProfileDetails';
// import axios from 'axios';

// const ProfilePage = () => {
//   const [profileData, setProfileData] = useState(null);
//   const [error, setError] = useState(null);

//   const fetchProfile = async (username) => {
//     try {
//       const response = await axios.get(`https://leetcode.com/${username}/`);
//       // Parse response and extract profile data
//       const profileData = response.data;
//       setProfileData(profileData);
//     } catch (error) {
//       console.error('Error fetching data from LeetCode:', error);
//       setError('Error fetching data. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <h1>LeetCode Profile</h1>
//       <ProfileForm onFetchProfile={fetchProfile} />
//       {error && <p>{error}</p>}
//       {profileData && <ProfileDetails profileData={profileData} />}
//     </div>
//   );
// };

// export default ProfilePage;
