import './App.css';
import {Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Intro from './pages/intro';
import President from './pages/president';
import Map from './pages/map';
import SIHF from './pages/sihf';
import Notice from './pages/notice';
import Admin from './pages/admin';
import NoticeDetail from './pages/noticeDetail';

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
        <Route path = '/notice' element = {<Notice/>} />
        <Route path = '/notice/:id' element = {<NoticeDetail/>} />
        <Route path = '/admin' element = {<Admin/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
