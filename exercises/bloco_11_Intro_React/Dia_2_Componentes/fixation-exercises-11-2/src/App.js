// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import Order from './Order';

class App extends React.Component {
  render() {
    const orders  = [
      {
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    },

    {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    }
  ]

    return (
      <>
      <h1 className="App"> Orders recently created </h1>
      {orders.map((user) => 
      (<div key = {user.id} className="App">
        <Order order={user.user} product={user.product} price={user.price} />
      </div>))}
      </>
      );
  }
}

/* user={user.user} product={user.product} price={user.price}  */

export default App;

/* import Image from './image';

function App() {
  return (
    <Image source="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg" alternativeText='Cute cat staring' />
  );
}

export default App; */