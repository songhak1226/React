import React from 'react';
import { Link } from 'react-router-dom';
const Community = () => {
  return (
    <div>
      <br />
      <div className='Community_main'><h1>커뮤니티</h1></div>
      <div className="table_container">
        <div className="table-row_header_row">
          <div>
            <select>
              <option>카테고리</option>
              <option>내 주안상</option>
            </select>
          </div>
          <div>번호</div>
          <div>제목</div>
          <div>작성자</div>
          <div>작성일</div>
        </div>
        <div className="table-row">
          <div>번호</div>
          <div>제목</div>
          <div>작성자</div>
          <div>날짜</div>
          <div className='imgBox'>
          <img
  className="storageImg"
  src="https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/thumbnail/LlIC-1637223491979-%EB%A7%A4%EC%8B%A4%EC%9B%90%EC%A3%BC-2.jpg"
  alt="Thumbnail of Community Post 2"
/>

          </div>
        </div>
        <div className="table-row">
          <div>번호</div>
          <div>제목</div>
          <div>작성자</div>
          <div>날짜</div>
          <div className='imgBox'>
            <img
              className="storageImg"
              src="https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/thumbnail/LlIC-1637223491979-%EB%A7%A4%EC%8B%A4%EC%9B%90%EC%A3%BC-2.jpg"
              alt="Thumbnail of Community Post 3"
            />
          </div>
        </div>
      </div>
      <div>
        <button className="btn"><Link to="/writing">글작성</Link></button>
      </div>
    </div>
  );
};

export default Community;
