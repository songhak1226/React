import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CommunitySingle = () => {
  const { comm_idx } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8099/soolsool/community/${comm_idx}`);
        const foundItem = response.data;
        setItem(foundItem.community);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [comm_idx]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>작성자 : {item.mb_id}</div>
      <div>작성일: {item.comm_at}</div>
      <div className="comm-idx"><h1> 제목 : {item.comm_idx}</h1><br/></div>
      <div className="comm-title"><p>{item.comm_title}</p></div>
      <div>{item.comm_file}</div>
    </div>
  )
}

export default CommunitySingle;