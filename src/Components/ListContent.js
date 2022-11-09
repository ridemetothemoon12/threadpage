import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Content() {
  const location = useLocation();
  const pathUrl = location.pathname.slice(13)
  
  const [getItems, setGetItems] = useState([]);
  const [getItemsId] = useState([]);

  const fetchThreads = async() => {
    await axios.all([ axios.get('http://localhost:3001/posts') ])
    .then( axios.spread((data1) => {
      setGetItems([...data1.data])
    })
    );
  }
  function getIds() {
    for(let i = 0; i < getItems.length; i++) {
      getItemsId.push(getItems[i].id);
    }
  }
  getIds();
  
  useEffect(() => {
    fetchThreads();
  }, [])
  
  let setIndex = getItemsId.indexOf(Number(pathUrl));
  const navigate = useNavigate();
  
  function moveToNextPage() {
    setIndex !== (getItems.length) - 1 && navigate(`/listContent/${getItemsId[setIndex + 1]}`)
  }
  function moveToPrevPage() {
    setIndex !== 0 && navigate(`/listContent/${getItemsId[setIndex - 1]}`)
  }
  
  return (
    <>
      <div className='h-screen bg-slate-500 w-full flex justify-start flex-col items-center'>
        <div className='w-4/5 h-10 mt-24 bg-orange-400 rounded-lg text-center text-xl text-white flex justify-center items-center'>
          {
            getItems.map((e, index) => {
              return (e.id === Number(pathUrl) && <h3 key={e.id}>{e.title}<p>{e.id}</p></h3>)
            })
          }
        </div>
        <div className='mt-10 w-4/5 h-fit flex justify-end'>
            <button className='ml-3 mt-1 py-1 px-5 bg-amber-400 rounded-xl hover:text-white hover:bg-stone-400 transition-all duration-100'>수정하기</button>
            <button className='ml-3 mt-1 py-1 px-5 bg-amber-400 rounded-xl hover:text-white hover:bg-stone-400 transition-all duration-100'>삭제하기</button>
        </div>
        <div className='mt-3 w-4/5 h-80 bg-slate-200 rounded-lg'>This is content Wrap</div>
        <div className='w-4/5 h-fit flex justify-between'>
            <button onClick={() => moveToPrevPage()} className='mt-2 py-1 px-5 bg-amber-400 rounded-xl hover:text-white hover:bg-stone-400 transition-all duration-100'>이전글</button>
            <button onClick={() => moveToNextPage()} className='mt-2 py-1 px-5 bg-amber-400 rounded-xl hover:text-white hover:bg-stone-400 transition-all duration-100'>다음글</button>
        </div>
      </div>
    </>
  )
}

export default Content