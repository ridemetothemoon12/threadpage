import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { ChangeListIndex } from '../store'

function Content() {
  const location = useLocation();
  const pathUrl = location.pathname.slice(13)

  const pageContentId =  useSelector((state) => state.listIndex.data)
  const [getItems, setGetItems] = useState([]);
  const fetchThreads = async() => {
    await axios.all([ axios.get('/photos.json') ])
    .then( axios.spread((data1) => {
      setGetItems([...data1.data])
      })
    );
  }
  useEffect(() => {
    fetchThreads();
    dispatch(ChangeListIndex(Number(pathUrl)))
  }, [])

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function moveToNextPage() {
    dispatch(ChangeListIndex(pageContentId + 1))
    navigate(`/listContent/${pageContentId + 1}`)
  }
  function moveToPrevPage() {
    pageContentId !== 1 ? dispatch(ChangeListIndex(pageContentId - 1)) : alert("첫 글 입니다!");
    pageContentId !== 1 && navigate(`/listContent/${pageContentId - 1}`);
  }
  
  return (
    <>
      <div className='h-screen bg-slate-500 w-full flex justify-start flex-col items-center'>
        <div className='w-4/5 h-10 mt-24 bg-orange-400 rounded-lg text-center text-xl text-white flex justify-center items-center'>
          {
            getItems.map((e, index) => {
              return (e.id === Number(pathUrl) && <h3 key={e.id}>{e.title}</h3>)
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