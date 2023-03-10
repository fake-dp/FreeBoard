import React, { useState } from "react";
import * as S from "../../../styles/emotion";

import { gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const BoardWrite = () => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");
  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContent = (event) => {
    setContents(event.target.value);
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onClickSubmit = async (e) => {
    e.preventDefault();
    if (!writer) {
      setWriterError("작성자를 입력해주세요.");
    }
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (!title) {
      setTitleError("제목을 입력해주세요.");
    }
    if (!contents) {
      setContentsError("내용을 입력해주세요.");
    }

    try {
      if (writer && password && title && contents) {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: writer,
              password: password,
              title: title,
              contents: contents,
            },
          },
        });
        alert("게시물이 등록되었습니다.");
        router.push(`/boards/${result.data.createBoard._id}`);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <S.StyledDiv>
      <h1>게시물 등록</h1>
      <S.StyledForm onSubmit={onClickSubmit}>
        <S.InputWrapper>
          <div>
            <label>작성자</label>
            <S.StyledInput onChange={onChangeWriter} type="text" />
            {
              <div style={{ color: "red", fontSize: "12px" }}>
                {writerError}
              </div>
            }
          </div>
          <div>
            <label>비밀번호</label>
            <S.StyledInput type="password" onChange={onChangePassword} />
            {
              <div style={{ color: "red", fontSize: "12px" }}>
                {passwordError}
              </div>
            }
          </div>
        </S.InputWrapper>

        <S.TitleWrapper>
          <div>
            <label>제목</label>
            <S.TitleInput type="text" onChange={onChangeTitle} />
            {<div style={{ color: "red", fontSize: "12px" }}>{titleError}</div>}
          </div>
          <S.TextareaWrapper>
            <label>내용</label>
            <S.TextareaStyled onChange={onChangeContent}></S.TextareaStyled>
            {
              <div style={{ color: "red", fontSize: "12px" }}>
                {contentsError}
              </div>
            }
            <S.ButtonStyled type="submit">등록</S.ButtonStyled>
          </S.TextareaWrapper>
        </S.TitleWrapper>
      </S.StyledForm>
    </S.StyledDiv>
  );
};

export default BoardWrite;
