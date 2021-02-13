import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// part 1    introducing jsx

/*
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  const user = {
    firstName: 'Kylian',
    lastName: 'Mbappé',
    avatar : "https://www.clicavenue.com/wp-content/uploads/2020/04/arbre.jpg",
  };
  //const element = (<h1> HELLO, {formatName(user)} !</h1>);
    const  element= (<div>
      <img src={user.avatar} alt="title"/>
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
    </div>);

ReactDOM.render(
    element
    ,
    document.getElementById('root')
);
 */

//part 2 Rendering Elements
function tick() {
  const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
  );
  ReactDOM.render(element, document.getElementById('roooot'));
}
setInterval(tick, 1000);

