import React from "react";

const RepositoryDetails = ({ repository, goBack }) => {
  return (
    <div className="container">
    <div className="back-button">
      <button onClick={goBack}>Back to Repositories</button>
    </div>
    <h2>{repository.name}</h2>
    <p>{repository.description}</p>
    <p>
      <strong>Language:</strong> {repository.language}
    </p>
    <p>
      <strong>Stars:</strong> {repository.stargazers_count}
    </p>
    <p>
      <strong>Forks:</strong> {repository.forks_count}
    </p>
  </div>
  
  );
};

export default RepositoryDetails;
