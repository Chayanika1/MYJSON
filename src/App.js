

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Order from './Components/Order/Order';
import About from './Components/About/About'
import Header from './Header/Header';






function App() {
  
  return (
    <div className='App' >
      <Header></Header>
      <Routes>
        <Route path ="/" element= {<Home></Home>}></Route>
        <Route path ="/Home" element= {<Home></Home>}></Route>
        <Route path = "/Order" element = {<Order></Order>}></Route>
        <Route path ="/About" element ={<About></About>}></Route>
      </Routes>
     
     
      
      
    </div>
  );
}
 
export default App;
