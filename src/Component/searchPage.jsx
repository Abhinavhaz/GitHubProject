import React, { useState } from "react";
import axios from "axios";
import RepositoryList from "./RepositoryList";
import "../App.css"

const SearchPage = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [repositories, setRepositories] = useState([]);

  const handleSearch = async () => {
    try {
      const userResponse = await axios.get(`https://api.github.com/users/${username}`);
      const repoResponse = await axios.get(`https://api.github.com/users/${username}/repos`);
      setUserData(userResponse.data);
      setRepositories(repoResponse.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div className="container">
  <h1>GitHub User Search</h1>
  <input
    type="text"
    placeholder="Enter GitHub username"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
  />
  <button onClick={handleSearch}>Search</button>
  {userData && (
    <RepositoryList
      userData={userData}
      repositories={repositories}
      onUsernameChange={setUsername}
    />
  )}
</div>

  );
};

export default SearchPage;
