import './App.css';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Write from './Components/Write';
import Edit from './Components/Edit';
import ListContent from './Components/ListContent';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Nav />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/listContent/:no' element={<ListContent />}></Route>
        <Route path='/edit/:no' element={<Edit />}></Route>
        <Route path='/write' element={<Write />}></Route>
      </Routes>
    </>
  );
}

export default App;
