import React from 'react'
import { Link } from 'react-router-dom';

const community = () => {
  return (
    <div className='community'>
      <div>
        <div className='community_link'><Link>등록</Link></div>
        <input className='title1' type="text" placeholder="제목을 입력해주세요." autoFocus/><br />
        <div>
        <div className='community_icon'><button className='community_icon_1'> 저장 </button>
        <button className='community_icon_1'> 사진 </button>
        <button className='community_icon_1'> 파일 </button>
        <button className='community_icon_1'> 입력 </button>
        <button className='community_icon_1'> 기타</button></div>
        <textarea className='title1_1' name="#" id="" cols="30" rows="10" placeholder="내용을 입력하세요."/>
        </div>
        <div>
        <textarea className='title1_1_1' name="#" id="" cols="10" rows="10" placeholder="태그를 입력하세요."/>
        </div>
        <div className='community_input'>
            <input type="file"/><br/>
        </div>
      </div>
  </div>
  )
}

export default community