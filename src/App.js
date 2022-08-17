import React from 'react';
import Header from './Components/Header';
import './App.css'
import WoodOrder from './Components/WoodOrder';
import WeWorkWith from './Components/WeWorkWith';
import OurWork from './Components/OurWork';

function App() {
  return (
    <div>
      <section className='woodbg'>
      <Header />
      <WoodOrder />
      </section>
      <WeWorkWith />
      <OurWork />
    </div>
  );
}

export default App;
