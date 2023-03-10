import React from "react";
import * as S from "./BoardWrite.styled";

const BoardWriteUi = ({
  onClickSubmit,
  onChangeWriter,
  onChangePassword,
  onChangeTitle,
  writerError,
  passwordError,
  titleError,
  contentsError,
  onChangeContent,
}) => {
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

export default BoardWriteUi;
