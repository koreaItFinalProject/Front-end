import React, { useCallback, useMemo, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../../firebase/firebase';
import ReactQuill, { Quill } from 'react-quill';
import { v4 as uuid } from "uuid";
import { modifyBoardApi } from '../../../apis/modifyBoardApi';

function ModifyPage(props) {
    const params = useParams();
    const boardId = params.boardId;
    const queryClient = useQueryClient();
    const boardData = queryClient.getQueryData(['boardQuery', boardId]);

    const navigate = useNavigate();

    const quillRef = useRef(null);

    const [isUploading, setUploading] = useState(false);

    const [modifyBoard, setModifyBoard] = useState({
        boardId,
        title: boardData?.data?.title,
        content: boardData?.data?.content,
    });

    const handleModifySubmitOnClick = async () => {
        const selection = window.confirm("게시글을 수정하시겠습니까?");
        if(selection) {
            await modifyBoardApi(modifyBoard, boardId, navigate);
        } else {
            navigate(`/board/modify/${boardId}`);
        }
    }

    const handleTitleInputOnChange = (e) => {
        setModifyBoard(board => ({
            ...board,
            title: e.target.value,
        }));
    }

    const handleQuillValueOnChange = (value) => {
        setModifyBoard(board => ({
            ...board,
            content: quillRef.current.getEditor().getText().trim() === "" ? "" : value,
        }));
    }

    const handleImageLoad = useCallback(() => {
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();

        input.onchange = () => {
            const editor = quillRef.current.getEditor(); // getEditor(): quill 내장 메소드, editor 객체를 가져옴
            const files = Array.from(input.files);
            const imgFile = files[0];

            const editPoint = editor.getSelection(true);

            const storageRef = ref(storage, `board/img/${uuid()}_${imgFile.name}`);
            const task = uploadBytesResumable(storageRef, imgFile);
            setUploading(true);
            task.on(
                "state_changed",
                () => { },
                () => { },
                async () => {
                    const url = await getDownloadURL(storageRef);
                    editor.insertEmbed(editPoint.index, "image", url); // 이미지를 quill editor에 띄운다.
                    editor.setSelection(editPoint.index + 1); // 이미지 위치보다 커서를 +1칸 이동
                    editor.insertText(editPoint.index + 1, "\n"); // 이미지 다음줄로 넘어감
                    setUploading(false);
                    setModifyBoard(board => ({
                        ...board,
                        content: editor.root.innerHTML
                    }));
                }
            );
        }

    }, []);

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
            <Link to={"/board"}><h3>게시판</h3></Link>
            <div css={s.boardHeader}>
                <div>제목</div><input type="text" name='title' onChange={handleTitleInputOnChange} value={modifyBoard.title} placeholder='제목을 입력하세요.' />
            </div>
            <div css={s.editorLayout}>
                <ReactQuill
                    ref={quillRef}
                    theme='snow'
                    value={modifyBoard.content}
                    onChange={handleQuillValueOnChange}
                    style={{
                        boxSizing: "border-box",
                        width: "100%",
                        height: "100%"
                    }}
                    modules={{
                        toolbar: {
                            container: toolbarOptions,
                            handlers: {
                                image: handleImageLoad,
                            }
                        },
                        imageResize: {
                            parchment: Quill.import("parchment")
                        },
                    }}
                />
            </div>
            <div css={s.buttonLayout}>
                <button onClick={handleModifySubmitOnClick}>수정하기</button>
                <button onClick={() => navigate(`/board/detail/${boardId}`)}>취소</button>
            </div>
        </div>
    );
}

export default ModifyPage;