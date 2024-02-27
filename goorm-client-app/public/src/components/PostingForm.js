/*import React from "react";

export default function PostigForm({ title, setTitle, postBody, setPostBody, writer, setWriter, handleSubmit }) {

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handlePostBodyChange = (e) => {
    setPostBody(e.target.value);
  }

  const handleWriterChange = (e) => {
    setWriter(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="title"
          placeholder="제목을 입력하세요."
          value={title} 
          onChange={handleTitleChange}
        />
        <input 
          type="text" 
          name="writer"
          placeholder="작성자 이름을 입력하세요."
          value={writer} 
          onChange={handleWriterChange}
        />
        <input 
          type="text" 
          name="postBody"
          placeholder="제목을 입력하세요."
          value={postBody} 
          onChange={handlePostBodyChange}
        />
        <input
					type="submit"
					value="입력"
				/>
      </form>
    </div>
  )

}*/