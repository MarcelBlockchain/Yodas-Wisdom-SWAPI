import React from 'react';
import logo from './logo.svg';
import './App.scss';
import yodaForce from './assets/yoda_force.jpg'
  // Star generating code from: https://codepen.io/christopherkade/pen/rJVPjz
  // Sets the number of stars we wish to display
  const numStars = 100

  // For every star we want to display
  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div')
    star.className = 'star'
    const xy = getRandomPosition()
    star.style.top = xy[0].toString() + 'px'
    star.style.left = xy[1].toString() + 'px'
    document.body.append(star)
  }

  // Gets random x, y values based on the size of the container
  function getRandomPosition (): number[] {
    const y = window.innerWidth
    const x = window.innerHeight
    const randomX = Math.floor(Math.random() * x)
    const randomY = Math.floor(Math.random() * y)
    return [randomX, randomY]
  }

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
        <img className='yoda-image' src={yodaForce} alt='yoda raising his hand to use the force' />
    </div>
  );
}

export default App;
