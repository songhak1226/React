import { useEffect, useState } from 'react';
import axios from 'axios';

const CommentSection = ({ liq_idx, MB_ID }) => {
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState(MB_ID);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8099/soolsool/Info/reviews/${liq_idx}`);
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchData();
  }, [liq_idx]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const inputUserId = !MB_ID ? `${userId}(외부인)` : userId;
  
    const review = {
      liq_idx: liq_idx,
      mb_id: inputUserId,
      rv_content: content,
    };

    const response = await axios.post(
      `http://localhost:8099/soolsool/Info/reviews/${liq_idx}/write`,
      review,
      { withCredentials: true }
    );

    if (response.status === 200) {
      setComments((prevComments) => [...prevComments, review]);
      setContent('');
    }
  };

  return (
    <div className="comment-section-container">
      <form className="comment-form" onSubmit={handleSubmit}>
        {MB_ID ? (
          <p>{userId}</p>
        ) : (
          <input
            type="text"
            placeholder="아이디 입력"
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        )}
        <br />
        <textarea
          placeholder="댓글 내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <button type="submit">리뷰 달기</button>
      </form>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <h5>{comment.mb_id}</h5>
            <p>{comment.rv_content}</p>
            <p>{comment.rv_date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;