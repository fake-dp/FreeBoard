import styled from "@emotion/styled";

export const StyledDiv = styled.div`
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

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
`;

export const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  width: 100%;
  align-items: center;

  margin-bottom: 1rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-bottom: 1rem;
`;

export const StyledInput = styled.input`
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

export const TitleInput = styled.input`
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

export const TextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-bottom: 1rem;
  margin-top: 20px;
`;

export const TextareaStyled = styled.textarea`
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

export const ButtonStyled = styled.button`
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
