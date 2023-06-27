import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from "react-js-pagination";
import '../css/Info.css';
import { Link } from 'react-router-dom';


const Info = () => {
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [liquids, setLiquids] = useState([]);
  

  useEffect(() => {
    axios
      .get('http://localhost:8099/soolsool/Info')
      .then((response) => {
        setLiquids(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handlePageChange = (page) => {
    setPage(page);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredLiquids = selectedCategory
    ? liquids.filter((liquid) => liquid.liq_type === selectedCategory)
    : liquids;

  const renderInfoBoxes = () => {
    return filteredLiquids
      .slice((page - 1) * 12, page * 12)
      .map((liquid, index) => (
        <Link
          to={`/InfoSingle/${liquid.liq_idx}`}
          key={index}
          className="Info_Box"
        >
          <img src={liquid.liq_img} alt={liquid.liq_name} />
          <h2 className='Info_Box_title'>{liquid.liq_name}</h2>
          <p className="Info_Box_description">{liquid.liq_tag1}</p>
          <div className="Info_Descr">
            <h3>{liquid.liq_tag2}</h3>
          </div>
        </Link>
      ));
  };

  return (
    <>
      <div className='Info'>
        <div className='Info_container'>
          <h1>전통주 정보</h1>
        </div>
        <div className='Info_container_2'>
          <div>
            <div>
              <button type="button" onClick={() => handleCategoryClick('탁주')}>
                <img src="https://www.sooldamhwa.com/images/modules/damhwaMarket/category/icon_takju.png" alt="대체 텍스트" />
                <span><b>탁주</b></span>
              </button>
              <button type="button" onClick={() => handleCategoryClick('약/청주')}>
                <img src="https://www.sooldamhwa.com/images/modules/damhwaMarket/category/icon_cheongju.png" alt="대체 텍스트" />
                <span><b>약/청주</b></span>
              </button>
              <button type="button" onClick={() => handleCategoryClick('과실주')}>
                <img src="https://www.sooldamhwa.com/images/modules/damhwaMarket/category/icon_gwashilju.png" alt="대체 텍스트" />
                <span><b>과실주</b></span>
              </button>
              <button type="button" onClick={() => handleCategoryClick('증류주')}>
                <img src="https://www.sooldamhwa.com/images/modules/damhwaMarket/category/icon_jeungryuju.png" alt="대체 텍스트" />
                <span><b>증류주</b></span>
              </button>
            </div>
          </div>
          <h1 className='info-title'>{selectedCategory || "전체 주종"}</h1>
        </div>

        <div className='Info_Main'>
          {renderInfoBoxes()}
        </div>
      </div>

      {/* 페이지네이션 */}
      <div className="Info_PaginationWrapper">
        <Pagination 
          activePage={page}
          itemsCountPerPage={5}
          totalItemsCount={filteredLiquids.length}
          pageRangeDisplayed={5}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Info;

// import axios from "axios";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Pagination from "react-js-pagination";

// const Community = () => {
//   const [page, setPage] = useState(1);
//   const [communities, setCommunities] = useState([]);
//   const pageSize = 10;

//   useEffect(() => {
//     loadCommunities(page, pageSize);
//   }, []);

//   const loadCommunities = (page, pageSize) => {
//     axios
//       .get(`http://localhost:8099/soolsool/community?page=${page - 1}&size=${pageSize}`)
//       .then((response) => setCommunities(response.data.map((data) => data.community)))
//       .catch((error) => console.error(error));
//   };

//   useEffect(() => {
//     console.log(communities);
//   }, [communities]);

//   const handlePageChange = (page) => {
//     setPage(page);
//     loadCommunities(page, pageSize);
//   };

//   return (
//     <div className="community">
//       <br />
//       <div className="community-header">
//         <h1>커뮤니티</h1>
//       </div>

//       <div className="community-table-container">
//         <div className="table-row-header">
//           <div>
//             <button className="community-write">
//               <Link to="/Writing">글작성</Link>
//             </button>
//           </div>
//         </div>

//         <hr className="community-hr" />

//         {communities.map((community, index) => (
//   <div key={`community-post-${index}`} className="table-row">
//             <div className="contents-idx">
//               <span>{community.comm_idx}</span>
//             </div>
//             <div className="table-row-contents">
//               <div className="contents-title">{community.comm_title}</div>

//             </div>
//             <div className="contents-img">
//               <img
//                 className="storageImg"
//                 src={`http://localhost:8099/soolsool/static/img/${community.comm_file}`}
//                 alt={`Thumbnail of Community Post ${community.comm_idx}`}
//               />
//             </div>
//           </div>
//         ))}

//         <hr className="community-hr" />

//         <div className="Info_PaginationWrapper">
//           <Pagination
//             activePage={page}
//             itemsCountPerPage={10}
//             totalItemsCount={100}
//             pageRangeDisplayed={5}
//             prevPageText={"‹"}
//             nextPageText={"›"}
//             onChange={handlePageChange}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Community;


