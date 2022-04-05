import './App.css';
import { Routes } from 'react-router-dom';
import {Route} from 'react-router-dom';
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard'
import Blog from './components/Blog/Blog';
import Reviews from './Reviews/Reviews';
import Error from './components/Error/Error';




function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
          <Route path='*' element={<Error></Error>}></Route>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/reviews" element={<Reviews></Reviews>}></Route>
          <Route path="/blog" element={<Blog></Blog>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
