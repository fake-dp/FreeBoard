import React from "react";
import * as S from "./BoardDetail.styled";

const BoardDetailUi = ({ data }) => {
  return (
    // 상세페이지 html
    <S.DetailWrapper>
      <S.TitleText>상페 페이지</S.TitleText>

      <S.HeaderWrapper>
        <S.UserIcon></S.UserIcon>
        <S.WriteWrapper>
          <p>{data?.fetchBoard.writer}</p>
          <p>2021-08-08</p>
        </S.WriteWrapper>
      </S.HeaderWrapper>

      <S.ContentsWrapper>
        <h2>{data?.fetchBoard.title}</h2>
        <p>{data?.fetchBoard.contents}</p>
      </S.ContentsWrapper>

      <S.ButtonWrapper>
        <button>목록으로</button>
        <button>수정하기</button>
        <button>삭제하기</button>
      </S.ButtonWrapper>
    </S.DetailWrapper>
  );
};

export default BoardDetailUi;
