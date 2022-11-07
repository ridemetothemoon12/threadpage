import React from 'react'

function write() {
  return (
    <>
        <div className='w-full h-screen bg-slate-300 flex justify-start items-center flex-col'>
            <input className='w-4/5 h-20 mt-24 bg-orange-300 rounded-lg text-center text-white text-lg' placeholder="어쩌고 저쩌고..."></input>
            <textarea className='w-4/5 mt-10 bg-orange-300 rounded-lg text-center text-white text-lg' placeholder="어쩌고 저쩌고..."></textarea>
            <div className='w-4/5 flex justify-end'>
                <button className='py-3 px-5 bg-blue-400 rounded-lg mt-3'>등록하기</button>
            </div>
        </div>
    </>
  )
}

export default write