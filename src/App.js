import { Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home'
import Meal from './Components/Meal/Meal';
import Arror from './Components/Arror/Arror';
// import Navication from './Navication/Navication';

function App() {
  return (
    <div className="App">
      {/* <Navication></Navication> */}
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/meal' element={<Meal></Meal>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<Arror></Arror>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
