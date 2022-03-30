
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Carousle from './component/Carousel/Carousle';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Search from './component/Search/Search';

function App() {
  return (
    <div >
      <Header></Header>
     
      <Routes>
        <Route path='/' element={<Carousle></Carousle>}></Route>
        
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/search' element={<Search></Search>}></Route>
      </Routes>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
