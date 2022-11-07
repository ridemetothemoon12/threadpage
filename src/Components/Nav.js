import React from 'react'
import { useNavigate } from 'react-router-dom'

function Nav() {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-slate-400 w-full h-20 fixed top-0">
        <div className='mx-auto w-4/5 h-full flex justify-between items-center text-xl text-white'>
          <h3 onClick={() => navigate('/')}>내 게시판</h3>
          <ul className='flex justify-between w-1/5'>
            <li className='text-red-400 bg-slate-200 px-8 py-2 rounded-md hover:bg-slate-300 hover:text-black cursor-pointer transition-all duration-200'>랜덤 읽기</li>
            <li className='text-red-400 bg-slate-200 px-8 py-2 rounded-md hover:bg-slate-300 hover:text-black cursor-pointer transition-all duration-200'>쓰기</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Nav