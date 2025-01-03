import React, { useState } from "react";
import RepositoryDetails from "./RepositoryDetails";
import FollowersList from "./FollowersList";
import "../App.css"
const RepositoryList = ({ userData, repositories, onUsernameChange }) => {
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [showFollowers, setShowFollowers] = useState(false);

  if (selectedRepo) {
    return <RepositoryDetails repository={selectedRepo} goBack={() => setSelectedRepo(null)} />;
  }

  if (showFollowers) {
    return (
      <FollowersList
        username={userData.login}
        goBack={() => setShowFollowers(false)}
        onUsernameChange={onUsernameChange}
      />
    );
  }

  return (
    <div className="container">
    <div className="user-info">
      <img src={userData.avatar_url} alt={userData.name} />
      <div>
        <h2>{userData.name || userData.login}</h2>
        <p>{userData.bio}</p>
        <p>Location: {userData.location}</p>
        <button onClick={() => setShowFollowers(true)}>View Followers</button>
      </div>
    </div>
    <h3>Repositories</h3>
    <ul>
      {repositories.map((repo) => (
        <li key={repo.id} onClick={() => setSelectedRepo(repo)}>
          {repo.name}
        </li>
      ))}
    </ul>
  </div>
  
  );
};

export default RepositoryList;
