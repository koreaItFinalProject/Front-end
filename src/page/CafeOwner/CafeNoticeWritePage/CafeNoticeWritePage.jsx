/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useCallback, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PuffLoader } from "react-spinners";
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../../firebase/firebase';
import { v4 as uuid } from "uuid";
import ReactQuill, { Quill } from 'react-quill';
import ImageResize from 'quill-image-resize';
import 'react-quill/dist/quill.snow.css';
import { IoCloseOutline } from "react-icons/io5";
import { writeNoticeApi } from "../../../apis/writeNoticeApi";
import { useQueryClient } from "react-query";
Quill.register("modules/imageResize", ImageResize);

function CafeNoticeWritePage(props) {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const [board, setBoard] = useState({
        title: "",
        content: "",
        category: "공지사항"
    });

    const quillRef = useRef(null);

    const [isUploading, setUploading] = useState(false);

    const handleTitleInputOnChange = (e) => {
        setBoard(board => ({
            ...board,
            [e.target.name]: e.target.value,
        }));
    }

    const handleQuillValueOnChange = (value) => {
        setBoard(board => ({
            ...board,
            content: quillRef.current.getEditor().getText().trim() === "" ? "" : value,
        }));
    }

    const handleWriteSubmitOnClick = async () => {
        await writeNoticeApi(board, navigate);
        queryClient.invalidateQueries("noticeListQuery");
        queryClient.invalidateQueries("boardListQuery");
    }

    const handleImageLoad = useCallback(() => {
        const input = document.createElement("input");
        input.setAttribute("type", "file");
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
                    setBoard(board => ({
                        ...board,
                        content: editor.root.innerHTML
                    }));
                }
            );
        }
    }, []);

    const toolbarOptions = useMemo(() => [
        ['image']
    ], []);
    return (
        <div css={s.layout}>
            <div css={s.boardHeader}>
                <div css={s.buttonLayout}>
                    <button onClick={() => navigate("/owner/notice/list")}><IoCloseOutline /></button>
                    <h1>공지사항</h1>
                    <button
                        onClick={handleWriteSubmitOnClick}
                        disabled={board?.title.trim() === '' || board?.content.trim() === ''}
                    >
                        등록하기
                    </button>
                </div>
                <input type="text" name='title' onChange={handleTitleInputOnChange} value={board.title} placeholder='제목을 입력하세요.' />
            </div>
            <div css={s.editorLayout}>
                {
                    isUploading &&
                    <div css={s.loadingLayout}>
                        <PuffLoader />
                    </div>
                }
                <ReactQuill
                    ref={quillRef}
                    theme="snow"
                    onChange={handleQuillValueOnChange}
                    placeholder="내용을 입력하세요"
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
        </div>
    );
}

export default CafeNoticeWritePage;