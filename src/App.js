import './App.css';
import {Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Intro from './pages/intro';
import President from './pages/president';
import Map from './pages/map';
import SIHF from './pages/sihf';
import Info from './pages/info';

function App() {
  return (
    <div className='App'>
      <Nav/>
      <Routes>
        <Route path = '/' element = {<Home/>} />
        <Route path = '/intro' element = {<Intro/>} />
        <Route path = '/intro/map' element = {<Map/>} />
        <Route path = '/intro/president' element = {<President/>} />
        <Route path = '/sihf' element = {<SIHF/>} />
        <Route path = '/info' element = {<Info/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
