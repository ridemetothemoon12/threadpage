import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ChangeListIndex } from '../store';


function Main() {
  const dispatch = useDispatch();

  let navigate = useNavigate();
  function goToPage(e) {
    navigate(e);
  }

  const [threads, setThreads] = useState([]);
  const [nextCount , setNextCount] = useState(4)
  const fetchThreads = async() => {
    await axios.all([ axios.get('photos.json') ])
    .then( axios.spread((data1) => {
        setThreads([...data1.data])
      })
    );
  }
  useEffect(() => {
    fetchThreads();
  }, [])

  return (
    <>
      <div className='w-full h-full bg-slate-100 flex flex-col justify-start'>
        <div className='mx-auto mt-24 w-4/5'>
          <h3 className='text-white text-xl py-3 px-8 bg-amber-400 rounded-xl'>최근 글 목록</h3>
          <div className='w-full h-fit flex justify-around mt-3 items-center flex-wrap'>
            {
              (threads && threads.map((e, index) => {
                  return (
                    (index + 4 >= threads.length && 
                      <div key={e.id} onClick={() => {goToPage(`/listContent/${e.id}`); dispatch(ChangeListIndex(e.id-1));}} 
                      className='basis-80 h-44 hover:scale-105 hover:drop-shadow-lg transition-all duration-100 mt-2 mx-1 cursor-pointer' 
                      style={{backgroundSize: "cover", backgroundPosition: "center", backgroundImage: `url(${e.url})`}}>{e.title}</div>
                    )
                  )
              }))
            }
          </div>
        </div>

        <div className='mx-auto mt-24 w-4/5'>
          <h3 className='text-white text-xl py-3 px-8 bg-amber-400 rounded-xl'>전체 글 목록 {threads.length}</h3>
          <div className='w-full h-fit flex justify-around mt-3 items-center flex-wrap'>
            {
              (threads && threads.map((e, index) => {
                  return (
                    (index + 1 <= nextCount && 
                      <div key={e.id} onClick={() => {goToPage(`/listContent/${e.id}`); dispatch(ChangeListIndex(e.id-1));}} 
                      className='basis-80 h-44 hover:scale-105 hover:drop-shadow-lg transition-all duration-100 mt-2 mx-1 cursor-pointer' 
                      style={{backgroundSize: "cover", backgroundPosition: "center", backgroundImage: `url(${e.url})`}}>{e.title}</div>
                    )
                  )
              }))
            }
          </div>

          <div className='my-2 w-full flex justify-end'>
            <button className='px-16 py-2 bg-blue-500 rounded-lg text-white' onClick={()=>{
              setNextCount(nextCount + 4)
            }}>더보기</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main