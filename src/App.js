import React from 'react';
import './App.css';
import UserCard from './Components/UserCard';

const users = [
  {
      name: "user1",
      email: "user1@gmail.com",
  },
  {
      name: "user2",
      email: "user2@gmail.com",
  },
  {
      name: "user3",
      email: "user3@gmail.com",
  },
  {
    name: "user4",
    email: "user4@gmail.com",
  },
];

function ShowCards() {
  let cards = []; // this would be an array for storing JSX elements we want to return
  
  for(let i=0; i<users.length; i++){
    cards.push(<UserCard name={users[i].name} email={users[i].email} />);
  }
  
  return cards;
}

function RenderUserCard(user) {
  return <UserCard name={user.name} email={user.email} />
}

const RenderUserCardArrow = (user) => {
  return <UserCard name={user.name} email={user.email} />
}


function App(props) {
  return (
    <div>
      {
        // ShowCards()
        // (or)
        // users.map(RenderUserCard)
        // (or)
        // users.map(RenderUserCardArrow)
        // (or)

        users.map(
          (user) => <UserCard name={user.name} email={user.email} />
        )
        // This is a style of defining anonymous functions. We simply call this as arrow function.
        // easy to write functions that return something.
      }
    </div>
  );
}

export default App;
