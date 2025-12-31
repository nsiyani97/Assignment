import React from "react";

function UserCard(props) {
  return (
    <div className="card">
      <h2>User Details</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Location: {props.location}</p>
    </div>
  );
}

export default UserCard;
