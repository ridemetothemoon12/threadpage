import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Edit() {
    const navigate = useNavigate();
    const titleAndIdGetter = useSelector(state => state.listItems)
    console.log("Edit.js: " + titleAndIdGetter.id);
    console.log("Edit.js: " + titleAndIdGetter.title);
    
    function updateItems() {
        let title = document.getElementById("title");
        axios.patch(`http://localhost:3001/posts/${titleAndIdGetter.id}` ,{
            title: `${title.innerHTML}`
        })
        alert("수정 완료!")
        navigate('/')
    }
    return (
        <>
            <div className='w-full h-screen bg-slate-300 flex justify-start items-center flex-col'>
                <p id='title' contentEditable="true" suppressContentEditableWarning={true} className='w-4/5 h-20 mt-24 bg-orange-300 rounded-lg text-center text-white text-lg'>{titleAndIdGetter.title}</p>
                <textarea className='w-4/5 mt-10 bg-orange-300 rounded-lg text-center text-white text-lg' placeholder="어쩌고 저쩌고..."></textarea>
                <div className='w-4/5 flex justify-end'>
                    <button onClick={() => updateItems()} className='py-3 px-5 bg-blue-400 rounded-lg mt-3'>등록하기</button>
                </div>
            </div>
        </>
    )
}

export default Edit