import React from 'react';
import './App.css';

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Place</h1>
    </header>
  )
}

function Main(props) {
  return (
    <section>
      <img src='https://www.thephotoargus.com/wp-content/uploads/2019/04/bestplacesphotography02.jpg' alt='white buildings' height={300}/>
      <p>This is what we have</p>
      <ul style={{textAlign: "left"}}>
        {dishes.map((dish) => <li key={dish.id}>{dish}</li>)}
      </ul>
    </section>
  )
}

function Footer(props) {
  return (
    <footer>
      <h3>Copyright {props.year}</h3>
    </footer>
  )
}

const dishes = [
  "Cheese",
  "Salad",
  "Beverage"
]

const dishObjects = dishes.map((dish, i ) => ({id: i, title: dish }))

dishes.map((dish) => console.log(dish))

function App() {
  return (
    <div className="App">
      <Header name="Josh"/>
      <Main dishes={dishObjects}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
