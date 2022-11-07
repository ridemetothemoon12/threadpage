import './App.css';
import Nav from './Components/Nav';
import Main from './Components/Main';
import ListContent from './Components/ListContent';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Nav />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/listContent/:no' element={<ListContent />}></Route>
      </Routes>
    </>
  );
}

export default App;
