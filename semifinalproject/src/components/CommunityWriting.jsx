// 수정된 코드
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CommunityWriting = () => { // 컴포넌트 이름을 대문자로 시작하는 이름으로 변경
  const memberId = localStorage.getItem("memberId");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiUrl = "http://localhost:8099/soolsool/community/write";

    const formData = new FormData();
    formData.append("comm_title", title);
    formData.append("comm_content", content);
    formData.append("member_id", memberId);
    if (selectedImage) {
      formData.append("comm_file", selectedImage);
    }

    axios
      .post(apiUrl, formData, { withCredentials: true })
      .then((response) => {
        console.log(response);
        window.location.href = "http://localhost:3000/community";
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>글 작성</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="제목"
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          <CKEditor
            editor={ClassicEditor}
            onChange={(event, editor) => setContent(editor.getData())}
          />
        </div>
        <div>
          <input
            type="file"
            onChange={(event) => setSelectedImage(event.target.files[0])}
          />
        </div>
        <div>
          <button type="submit">작성하기</button>
        </div>
      </form>
    </div>
  );
};

export default CommunityWriting; // 내보내는 컴포넌트 이름을 대문자로 시작하는 이름으로 변경