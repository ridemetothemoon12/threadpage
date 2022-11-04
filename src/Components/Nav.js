import React from 'react'

function Nav() {
  return (
    <>
      <div className="bg-slate-400 w-full h-20 fixed">
        <div className='mx-auto w-4/5 h-full flex justify-between items-center text-xl text-white'>
          <h3>내 게시판</h3>
          <ul className='flex justify-between w-1/5'>
            <li className='text-red-400 bg-slate-200 px-8 py-2 rounded-md hover:bg-slate-300 hover:text-black cursor-pointer transition-all duration-200'>읽기</li>
            <li className='text-red-400 bg-slate-200 px-8 py-2 rounded-md hover:bg-slate-300 hover:text-black cursor-pointer transition-all duration-200'>쓰기</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Nav