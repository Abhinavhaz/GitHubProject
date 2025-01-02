import React, { useState } from "react";
import axios from "axios";

const SearchPage = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/users", { username });
      setUserData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button onClick={handleSearch}>Search</button>

      {userData && (
        <div>
          <h3>{userData.name}</h3>
          <img src={userData.avatar_url} alt={userData.name} />
          <p>{userData.bio}</p>
          <p>Location: {userData.location}</p>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
