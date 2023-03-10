import styled from "@emotion/styled";

export const DetailWrapper = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 30px;
  margin: 0 auto;
  margin-top: 5rem;
  width: 800px;
  height: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  position: relative;
  &:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 0.5rem;
`;

export const TitleText = styled.h2`
  font-size: 30px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 3rem;
`;

export const UserIcon = styled.span`
  background-color: grey;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const WriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  > p {
    font-size: 20px;
    font-weight: 500;
    margin: 0;
    &:last-child {
      color: #bdbdbd;
      font-size: 12px;
    }
  }
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  > h2 {
    font-size: 30px;
    font-weight: 500;
    margin: 0;
    margin-bottom: 1rem;
  }
  > p {
    font-size: 16px;
    font-weight: 400;
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  width: 100%;
  margin-top: 2rem;
  justify-content: center;
  > button {
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 4px;
    background-color: #bdbdbd;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    margin: 10px;
    cursor: pointer;
    &:hover {
      background-color: #000;
    }
  }
`;
