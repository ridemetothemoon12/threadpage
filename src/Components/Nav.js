import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { ChangeListIndex } from '../store';
import { useDispatch } from 'react-redux';



function Nav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [randomItems, setRandomItems] = useState([]);

  const fetchThreads = async() => {
    const response = await axios.get('http://localhost:3001/posts');
    setRandomItems(response.data)
  };
  useEffect(() => {
    fetchThreads();
  }, [])
  
  function randomRead() {
    let val = Math.floor(Math.random()* randomItems.length)
    navigate(`/listContent/${val}`);
    dispatch(ChangeListIndex(Number(val)))
  }
  function writeNavigate() {
    navigate(`/write`);

  }
  return (
    <>
      <div className="bg-slate-400 w-full h-20 fixed top-0">
        <div className='mx-auto w-4/5 h-full flex justify-between items-center text-xl text-white'>
          <h3 className='cursor-pointer' onClick={() => navigate('/')}>내 게시판</h3>
          <ul className='flex justify-between w-1/5'>
            <li onClick={randomRead} className='text-red-400 bg-slate-200 px-8 py-2 rounded-md hover:bg-slate-300 hover:text-black cursor-pointer transition-all duration-200'>랜덤 읽기</li>
            <li onClick={writeNavigate} className='text-red-400 bg-slate-200 px-8 py-2 rounded-md hover:bg-slate-300 hover:text-black cursor-pointer transition-all duration-200'>쓰기</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Nav