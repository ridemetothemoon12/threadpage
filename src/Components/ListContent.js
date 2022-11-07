import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'


function Content() {
  const pageContentId = useSelector((itemIndex) => itemIndex.listIndex.data)
  

  return (
    <>
      <div className='h-full bg-slate-500 w-full my-20'>this is testing content 1</div>
    </>
  )
}

export default Content