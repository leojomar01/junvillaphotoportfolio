import Main from './components/Main/Main';
import { useState } from 'react';
import Album from './components/Album/Album';
import Carousel from './components/Carousel/Carousel';
import Navbar from './components/Navbar/Navbar';


function App() {
  const [index,setIndex]= useState(1);
  const [navShow,setNavShow]= useState(true);

  const getIndex = (e) =>{
    setIndex(e)
  }
  const viewToggle = () =>{
    setNavShow(!navShow)
  }
  return (
        <div>
        <Main index={index}/>
        <Carousel  navShow={navShow} viewToggle={viewToggle}getIndex={getIndex} index={index}/>
        {/* <Navigation getIndex={getIndex} index={index} navShow={navShow} viewToggle={viewToggle}/> */}
        <Album navShow={navShow} index={index}/>
        <Navbar/>

        </div>
  );
}

export default App;
