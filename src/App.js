import './App.css';
import Nav from './Components/Nav';
import Main from './Components/Main';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Nav />
      <Routes>
        <Route path='/' element={<Main />}></Route>
      </Routes>
    </>
  );
}

export default App;
