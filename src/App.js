import './App.css';
import Header from './components/header/component.js'
import MobileMenu from './components/mobileMenu/component.js'

import ItemCard from './components/card/component.js';
import React from 'react';

class App extends React.Component {

  state = {
    items: []
  }

  async componentDidMount() {
    const res = await fetch('https://fakestoreapi.com/products/');
    const data = await res.json();
    this.setState({items: data});
  }

  deleteItem = (id) => {
    console.log(this.state.items, id)
   /*  let nItems = this.state.items.filter(item => item.id === id);
    this.setState({items: nItems}); */
  }

  render() {
    return (
      <div className="App">
        <Header />
        <MobileMenu />

        <div className="itemParent">
          {
            this.state.items.map(item => {
             return <ItemCard data={item} key={item.id} deleteItem={this.deleteItem}/>
            })
          }
        </div>

      </div>
    );}
}

export default App;
