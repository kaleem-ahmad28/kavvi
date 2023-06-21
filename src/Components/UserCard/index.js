import React from 'react';
import './styles.css';

function UserCard(props) {
  return (
    <div className="user-card">
        <p>{props.name}</p>
        <p>{props.email}</p>
    </div> 
  );
}

export default UserCard;