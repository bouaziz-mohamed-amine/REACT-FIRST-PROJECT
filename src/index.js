import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './component/index'
import Button1 from './component/index';
import './App'


                                                   // part 1    introducing jsx

/*
  const user = {
    firstName: 'Kylian',
    lastName: 'Mbappé',
    avatar : "https://www.clicavenue.com/wp-content/uploads/2020/04/arbre.jpg",
  };

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }


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

/*
function tick() {
  const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}
setInterval(tick, 1000);
 */



                                                                        //part 3    component

/*
function Welcome(props) {
    return <h1>Hello, {props}</h1>;
}
ReactDOM.render(Welcome("Bouaziz"), document.getElementById('root'));
 */

/*
class Welcome extends React.Component {
    render() {
        return <h1>Hello , {this.props.amine}</h1>;
    }
}
const element = <Welcome amine="Sara" />;
ReactDOM.render(
    element,
    document.getElementById('root')
);
 */
/*function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function App() {
    return (
        <div>
            <Welcome name="BO3" />
            <Welcome name="MiMi" />
            <Welcome name="Mariem" />
            <Welcome name="NouNou" />
        </div>
    );
}

ReactDOM.render(
    //<App />,
    <Button/>,
    document.getElementById('root')
);
*/

const element = <Button1/>;
ReactDOM.render(
    <Button1/>,
    document.getElementById('root'));
