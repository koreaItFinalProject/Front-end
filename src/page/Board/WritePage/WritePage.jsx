import React, { useMemo, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize';
import { Link, useNavigate } from 'react-router-dom';
Quill.register("modules/imageResize", ImageResize);

function WritePage(props) {

    const [board, setBoard] = useState({
        title: "",
        content: "",
    });

    const quillRef = useRef(null);

    const handleQuillValueOnChange = (value) => {
        setBoard(board => ({
            ...board,
            content: quillRef.current.getEditor().getText().trim() === "" ? "" : value,
        }));
    }

    const handleTitleInputOnChange = (e) => {
        setBoard(board => ({
            ...board,
            [e.target.name]: e.target.value,
        }));
    }

    const toolbarOptions = useMemo(() => [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'font': [] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'color': [] }, { 'background': [] }, { 'align': [] }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image', 'video', 'formula'],
        ['blockquote', 'code-block'],
    ], []);

    return (
        <div css={s.layout}>
            <Link to={"/board"}><h1>게시판</h1></Link>
            <h2>글쓰기</h2>
            <span>제목<input type="text" name='title' onChange={handleTitleInputOnChange} value={board.title} placeholder='제목을 입력하세요.' /></span>
            <div css={s.editorLayout}>
                <ReactQuill
                    ref={quillRef}
                    onChange={handleQuillValueOnChange}
                    style={{
                        boxSizing: "border-box",
                        width: "100%",
                        height: "100%"
                    }}
                    modules={{
                        toolbar: {
                            container: toolbarOptions,
                        },
                        imageResize: {
                            parchment: Quill.import("parchment")
                        },
                    }}
                />
            </div>
            <div css={s.buttonLayout}>
                <button>등록하기</button>
                <button>취소</button>
            </div>
        </div>
    );
}

export default WritePage;