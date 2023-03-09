import React from "react";
import styled from "@emotion/styled";

const BoardWrite = () => {
  return (
    // 게시판 html

    <StyledDiv>
      <h1>게시물 등록</h1>
      <StyledForm>
        <InputWrapper>
          <div>
            <label>작성자</label>
            <StyledInput type="text" />
          </div>
          <div>
            <label>비밀번호</label>
            <StyledInput type="password" />
          </div>
        </InputWrapper>

        <TitleWrapper>
          <div>
            <label>제목</label>
            <TitleInput type="text" />
          </div>
          <TextareaWrapper>
            <label>내용</label>
            <TextareaStyled></TextareaStyled>
            <ButtonStyled>등록</ButtonStyled>
          </TextareaWrapper>
        </TitleWrapper>
      </StyledForm>
    </StyledDiv>
  );
};

export default BoardWrite;

const StyledDiv = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  margin: 0 auto;
  margin-top: 5rem;
  width: 800px;
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
`;

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  width: 100%;
  align-items: center;

  margin-bottom: 1rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-bottom: 1rem;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 2rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1.5rem;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border: 1px solid #000;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  }
`;

const TitleInput = styled.input`
  width: 100%;
  height: 2rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1.5rem;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border: 1px solid #000;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  }
`;

const TextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-bottom: 1rem;
  margin-top: 20px;
`;

const TextareaStyled = styled.textarea`
  width: 100%;
  height: 20rem;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
  &:focus {
    outline: none;
    border: 1px solid #000;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  }
`;

const ButtonStyled = styled.button`
  width: 100%;
  height: 2rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1.5rem;
  margin-top: 20px;
  &:focus {
    outline: none;
    border: 1px solid #000;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  }
`;
