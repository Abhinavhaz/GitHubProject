import React, { useState, useEffect } from "react";
import axios from "axios";

const FollowersList = ({ username, goBack, onUsernameChange }) => {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}/followers`);
        setFollowers(response.data);
      } catch (error) {
        console.error("Error fetching followers:", error);
      }
    };

    fetchFollowers();
  }, [username]);

  return (
    <div className="container">
  <div className="back-button">
    <button onClick={goBack}>Back to Repositories</button>
  </div>
  <h2>Followers of {username}</h2>
  <ul>
    {followers.map((follower) => (
      <li
        key={follower.id}
        className="follower"
        onClick={() => {
          onUsernameChange(follower.login);
          goBack();
        }}
      >
        <img src={follower.avatar_url} alt={follower.login} />
        {follower.login}
      </li>
    ))}
  </ul>
</div>

  );
};

export default FollowersList;
