import React, { useState } from 'react';

const ProfileForm = ({ onFetchProfile }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onFetchProfile function with the provided username
    onFetchProfile(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter LeetCode Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <button type="submit">Fetch Profile</button>
    </form>
  );
};

export default ProfileForm;
